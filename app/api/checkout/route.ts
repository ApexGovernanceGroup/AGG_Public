import { NextResponse } from "next/server";
import { getEngagementPackage } from "../../commerce";

export const dynamic = "force-dynamic";

function originFor(request: Request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) {
    try {
      return new URL(configured).origin;
    } catch {
      // Continue with request-derived origin.
    }
  }

  return new URL(request.url).origin;
}

function redirectTo(request: Request, state: string) {
  const url = new URL("/engage", originFor(request));
  url.searchParams.set("checkout", state);
  return NextResponse.redirect(url, 303);
}

async function packageIdFrom(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => null)) as {
      packageId?: unknown;
    } | null;
    return typeof body?.packageId === "string" ? body.packageId : null;
  }

  const form = await request.formData().catch(() => null);
  const value = form?.get("packageId");
  return typeof value === "string" ? value : null;
}

export async function POST(request: Request) {
  const selectedPackage = getEngagementPackage(await packageIdFrom(request));
  if (!selectedPackage) return redirectTo(request, "error");

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return redirectTo(request, "setup");

  const origin = originFor(request);
  const params = new URLSearchParams({
    mode: "payment",
    success_url:
      process.env.STRIPE_SUCCESS_URL ?? `${origin}/engage?checkout=success`,
    cancel_url:
      process.env.STRIPE_CANCEL_URL ?? `${origin}/engage?checkout=canceled`,
    client_reference_id: selectedPackage.id,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][unit_amount]": String(
      selectedPackage.unitAmount,
    ),
    "line_items[0][price_data][product_data][name]": selectedPackage.name,
    "line_items[0][price_data][product_data][description]":
      selectedPackage.description,
    "metadata[package_id]": selectedPackage.id,
    "metadata[source]": "apex-governance-group-site",
  });

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  if (!response.ok) return redirectTo(request, "error");

  const session = (await response.json()) as { url?: unknown };
  return typeof session.url === "string"
    ? NextResponse.redirect(session.url, 303)
    : redirectTo(request, "error");
}

export function GET(request: Request) {
  return redirectTo(request, "setup");
}

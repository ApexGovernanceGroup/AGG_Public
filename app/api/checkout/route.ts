import { NextResponse } from "next/server";
import { getDownloadProduct, getEngagementPackage } from "../../commerce";

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

function configuredSiteOrigin() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return null;

  try {
    return new URL(configured).origin;
  } catch {
    return null;
  }
}

function sourceOriginFrom(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) return origin;

  const referer = request.headers.get("referer");
  if (!referer) return null;

  try {
    return new URL(referer).origin;
  } catch {
    return null;
  }
}

function sourceIsAllowed(request: Request) {
  const sourceOrigin = sourceOriginFrom(request);
  if (!sourceOrigin) return false;

  const allowed = new Set([new URL(request.url).origin]);
  const configured = configuredSiteOrigin();
  if (configured) allowed.add(configured);

  return allowed.has(sourceOrigin);
}

type CheckoutPayload = {
  packageId: string | null;
  productId: string | null;
  onboardingRecordId: string | null;
};

function cleanOnboardingRecordId(value: unknown) {
  return typeof value === "string" && /^ONBOARD-[A-Z0-9]+-[A-F0-9]{8}$/.test(value)
    ? value
    : null;
}

async function checkoutPayloadFrom(request: Request): Promise<CheckoutPayload> {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => null)) as {
      packageId?: unknown;
      productId?: unknown;
      onboardingRecordId?: unknown;
    } | null;
    return {
      packageId: typeof body?.packageId === "string" ? body.packageId : null,
      productId: typeof body?.productId === "string" ? body.productId : null,
      onboardingRecordId: cleanOnboardingRecordId(body?.onboardingRecordId),
    };
  }

  const form = await request.formData().catch(() => null);
  const packageId = form?.get("packageId");
  const productId = form?.get("productId");
  return {
    packageId: typeof packageId === "string" ? packageId : null,
    productId: typeof productId === "string" ? productId : null,
    onboardingRecordId: cleanOnboardingRecordId(form?.get("onboardingRecordId")),
  };
}

export async function POST(request: Request) {
  if (!sourceIsAllowed(request)) return redirectTo(request, "error");

  const payload = await checkoutPayloadFrom(request);
  if (!payload.onboardingRecordId) {
    return redirectTo(request, "registration_required");
  }

  const selectedPackage = getEngagementPackage(payload.packageId);
  const selectedProduct = selectedPackage ? null : getDownloadProduct(payload.productId);
  const selectedItem = selectedPackage ?? selectedProduct;
  if (!selectedItem) return redirectTo(request, "error");
  const selectedItemType = selectedProduct ? "download_product" : "engagement_package";

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return redirectTo(request, "setup");

  const origin = originFor(request);
  const params = new URLSearchParams({
    mode: "payment",
    success_url:
      process.env.STRIPE_SUCCESS_URL ?? `${origin}/engage?checkout=success`,
    cancel_url:
      process.env.STRIPE_CANCEL_URL ?? `${origin}/engage?checkout=canceled`,
    client_reference_id: selectedItem.id,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][unit_amount]": String(
      selectedItem.unitAmount,
    ),
    "line_items[0][price_data][product_data][name]": selectedItem.name,
    "line_items[0][price_data][product_data][description]":
      selectedItem.description,
    "metadata[package_id]": payload.packageId ?? "",
    "metadata[download_product_id]": payload.productId ?? "",
    "metadata[onboarding_record_id]": payload.onboardingRecordId,
    "metadata[item_type]": selectedItemType,
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

import { NextRequest, NextResponse } from "next/server";
import {
  CLIENT_SERVICES_COOKIE,
  clientServicesCookieOptions,
  clientServicesSessionToken,
  isClientServicesCredential,
  isClientServicesConfigured,
} from "../../../client-services/auth";

function requestOrigin(request: NextRequest) {
  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") ?? "http";
  return host ? `${protocol}://${host}` : new URL(request.url).origin;
}

export async function POST(request: NextRequest) {
  const configured = await isClientServicesConfigured();
  const form = await request.formData();
  const credentialsAreValid =
    configured &&
    (await isClientServicesCredential({
      username: form.get("username"),
      password: form.get("password"),
    }));
  const target = new URL(resolveReturnPath(form.get("returnTo")), requestOrigin(request));

  if (!credentialsAreValid) {
    const deniedTarget = new URL("/client-services", requestOrigin(request));
    deniedTarget.searchParams.set("access", configured ? "denied" : "unavailable");
    const requestedReturn = resolveReturnPath(form.get("returnTo"));
    if (requestedReturn === "/client-services?role=admin") {
      deniedTarget.searchParams.set("role", "admin");
    }
    if (requestedReturn !== "/client-portal") {
      deniedTarget.searchParams.set("returnTo", requestedReturn);
    }
    return NextResponse.redirect(deniedTarget, 303);
  }

  const sessionToken = await clientServicesSessionToken();
  if (!sessionToken) {
    const unavailableTarget = new URL("/client-services", requestOrigin(request));
    unavailableTarget.searchParams.set("access", "unavailable");
    return NextResponse.redirect(unavailableTarget, 303);
  }

  const response = NextResponse.redirect(target, 303);
  response.cookies.set(
    CLIENT_SERVICES_COOKIE,
    sessionToken,
    clientServicesCookieOptions(),
  );
  return response;
}

function resolveReturnPath(value: FormDataEntryValue | null): string {
  if (typeof value !== "string") return "/client-portal";

  if (value === "/client-services" || value === "/client-services?role=admin") {
    return value;
  }

  if (value === "/client-portal") return value;

  return "/client-portal";
}

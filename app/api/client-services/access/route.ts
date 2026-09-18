import { NextRequest, NextResponse } from "next/server";
import {
  CLIENT_SERVICES_COOKIE,
  clientServicesCookieOptions,
  clientServicesSessionToken,
  isClientServicesConfigured,
  isClientServicesPassword,
} from "../../../client-services/auth";

function requestOrigin(request: NextRequest) {
  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") ?? "http";
  return host ? `${protocol}://${host}` : new URL(request.url).origin;
}

export async function POST(request: NextRequest) {
  const configured = await isClientServicesConfigured();
  const form = await request.formData();
  const passwordIsValid =
    configured && (await isClientServicesPassword(form.get("password")));
  const target = new URL("/client-services", requestOrigin(request));

  if (!passwordIsValid) {
    target.searchParams.set("access", configured ? "denied" : "unavailable");
    return NextResponse.redirect(target, 303);
  }

  const sessionToken = await clientServicesSessionToken();
  if (!sessionToken) {
    target.searchParams.set("access", "unavailable");
    return NextResponse.redirect(target, 303);
  }

  const response = NextResponse.redirect(target, 303);
  response.cookies.set(
    CLIENT_SERVICES_COOKIE,
    sessionToken,
    clientServicesCookieOptions(),
  );
  return response;
}

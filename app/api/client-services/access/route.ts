import { NextRequest, NextResponse } from "next/server";
import {
  CLIENT_SERVICES_COOKIE,
  clientServicesCookieOptions,
  clientServicesSessionToken,
  isClientServicesPassword,
} from "../../../client-services/auth";

function requestOrigin(request: NextRequest) {
  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") ?? "http";
  return host ? `${protocol}://${host}` : new URL(request.url).origin;
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const passwordIsValid = await isClientServicesPassword(form.get("password"));
  const target = new URL("/client-services", requestOrigin(request));

  if (!passwordIsValid) {
    target.searchParams.set("access", "denied");
    return NextResponse.redirect(target, 303);
  }

  const response = NextResponse.redirect(target, 303);
  response.cookies.set(
    CLIENT_SERVICES_COOKIE,
    await clientServicesSessionToken(),
    clientServicesCookieOptions(),
  );
  return response;
}

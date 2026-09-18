import { NextRequest, NextResponse } from "next/server";
import { CLIENT_SERVICES_COOKIE } from "../../../client-services/auth";

function requestOrigin(request: NextRequest) {
  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") ?? "http";
  return host ? `${protocol}://${host}` : new URL(request.url).origin;
}

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(
    new URL("/client-services", requestOrigin(request)),
    303,
  );
  response.cookies.set(CLIENT_SERVICES_COOKIE, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/client-services",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}

import { NextRequest, NextResponse } from "next/server";
import {
  CLIENT_SERVICES_COOKIE,
  clientServicesCookieOptions,
  clientServicesSessionToken,
  isClientServicesCredential,
  isClientServicesConfigured,
} from "../../../client-services/auth";

const MAX_LOGIN_BODY_BYTES = 8_000;
const RATE_LIMIT_WINDOW_MS = 5 * 60_000;
const RATE_LIMIT_MAX_REQUESTS = 8;

const loginCounters = new Map<string, { count: number; resetAt: number }>();

function requestOrigin(request: NextRequest) {
  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") ?? "http";
  return host ? `${protocol}://${host}` : new URL(request.url).origin;
}

export async function POST(request: NextRequest) {
  if (!sourceIsAllowed(request)) {
    return deniedRedirect(request, "denied", formReturnPath(null));
  }
  if (declaredBodyExceedsLimit(request)) {
    return deniedRedirect(request, "denied", formReturnPath(null));
  }
  if (!rateLimitAllows(request)) {
    return deniedRedirect(request, "rate-limited", formReturnPath(null));
  }

  const configured = await isClientServicesConfigured();
  const form = await request.formData().catch(() => null);
  if (!form) return deniedRedirect(request, "denied", formReturnPath(null));

  const credentialsAreValid =
    configured &&
    (await isClientServicesCredential({
      username: form.get("username"),
      password: form.get("password"),
    }));
  const requestedReturn = resolveReturnPath(form.get("returnTo"));
  const target = new URL(requestedReturn, requestOrigin(request));

  if (!credentialsAreValid) {
    return deniedRedirect(request, configured ? "denied" : "unavailable", requestedReturn);
  }

  const sessionToken = await clientServicesSessionToken();
  if (!sessionToken) {
    return deniedRedirect(request, "unavailable", requestedReturn);
  }

  const response = NextResponse.redirect(target, 303);
  response.cookies.set(
    CLIENT_SERVICES_COOKIE,
    sessionToken,
    clientServicesCookieOptions(),
  );
  response.headers.set("Cache-Control", "no-store");
  return response;
}

function deniedRedirect(request: NextRequest, state: string, requestedReturn: string) {
  const deniedTarget = new URL("/client-services", requestOrigin(request));
  deniedTarget.searchParams.set("access", state);
  if (requestedReturn === "/client-services?role=admin") {
    deniedTarget.searchParams.set("role", "admin");
  }
  if (requestedReturn !== "/client-portal") {
    deniedTarget.searchParams.set("returnTo", requestedReturn);
  }
  const response = NextResponse.redirect(deniedTarget, 303);
  response.headers.set("Cache-Control", "no-store");
  return response;
}

function formReturnPath(value: FormDataEntryValue | null) {
  return resolveReturnPath(value);
}

function resolveReturnPath(value: FormDataEntryValue | null): string {
  if (typeof value !== "string") return "/client-portal";

  if (value === "/client-services" || value === "/client-services?role=admin") {
    return value;
  }

  if (value === "/client-portal") return value;

  return "/client-portal";
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

function sourceOriginFrom(request: NextRequest) {
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

function sourceIsAllowed(request: NextRequest) {
  const sourceOrigin = sourceOriginFrom(request);
  if (!sourceOrigin) return false;

  const allowed = new Set([requestOrigin(request), new URL(request.url).origin]);
  const configured = configuredSiteOrigin();
  if (configured) allowed.add(configured);

  return allowed.has(sourceOrigin);
}

function declaredBodyExceedsLimit(request: NextRequest) {
  const contentLength = request.headers.get("content-length");
  if (!contentLength) return false;

  const parsedLength = Number(contentLength);
  return Number.isFinite(parsedLength) && parsedLength > MAX_LOGIN_BODY_BYTES;
}

function clientKeyFrom(request: NextRequest) {
  const direct =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip");
  if (direct) return direct;

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";

  return "unknown";
}

function rateLimitAllows(request: NextRequest) {
  const now = Date.now();
  const key = clientKeyFrom(request);
  const current = loginCounters.get(key);

  if (!current || current.resetAt <= now) {
    loginCounters.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  current.count += 1;
  return current.count <= RATE_LIMIT_MAX_REQUESTS;
}

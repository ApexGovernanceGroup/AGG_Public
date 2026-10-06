import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_BODY_BYTES = 4_000;
const MAX_TEXT_LENGTH = 220;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 40;
const VALID_EVENTS = new Set(["page_view", "navigation_click", "cta_click"]);

const requestCounters = new Map<string, { count: number; resetAt: number }>();

type PublicEventBody = {
  eventName?: unknown;
  path?: unknown;
  label?: unknown;
  href?: unknown;
  referrer?: unknown;
  viewport?: unknown;
};

function errorResponse(message: string, status: number) {
  return NextResponse.json(
    { error: message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
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

function declaredBodyExceedsLimit(request: Request) {
  const contentLength = request.headers.get("content-length");
  if (!contentLength) return false;

  const parsedLength = Number(contentLength);
  return Number.isFinite(parsedLength) && parsedLength > MAX_BODY_BYTES;
}

function clientKeyFrom(request: Request) {
  const direct =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip");
  if (direct) return direct;

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";

  return "unknown";
}

function rateLimitAllows(request: Request) {
  const now = Date.now();
  const key = clientKeyFrom(request);
  const current = requestCounters.get(key);

  if (!current || current.resetAt <= now) {
    requestCounters.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  current.count += 1;
  return current.count <= RATE_LIMIT_MAX_REQUESTS;
}

function cleanText(value: unknown, maxLength = MAX_TEXT_LENGTH) {
  if (typeof value !== "string") return null;
  const cleaned = value.trim().replace(/\s+/g, " ");
  if (!cleaned || cleaned.length > maxLength) return null;
  return cleaned;
}

function cleanUrlPath(value: unknown) {
  const text = cleanText(value, MAX_TEXT_LENGTH);
  if (!text) return null;
  if (!text.startsWith("/")) return null;
  if (/[\r\n<>]/.test(text)) return null;
  return text;
}

function cleanHref(value: unknown) {
  const text = cleanText(value, MAX_TEXT_LENGTH);
  if (!text) return null;

  try {
    const url = new URL(text);
    if (url.protocol !== "https:" && url.protocol !== "mailto:") return null;
    return url.toString().slice(0, MAX_TEXT_LENGTH);
  } catch {
    return text.startsWith("/") ? text : null;
  }
}

function sanitizePayload(body: PublicEventBody) {
  const eventName = cleanText(body.eventName, 40);
  if (!eventName || !VALID_EVENTS.has(eventName)) {
    return { error: "invalid_event_name" } as const;
  }

  const path = cleanUrlPath(body.path);
  if (!path) return { error: "invalid_path" } as const;

  const viewport = cleanText(body.viewport, 40);
  if (viewport && !/^\d{2,5}x\d{2,5}$/.test(viewport)) {
    return { error: "invalid_viewport" } as const;
  }

  return {
    eventName,
    path,
    label: cleanText(body.label, 120),
    href: cleanHref(body.href),
    referrer: cleanHref(body.referrer),
    viewport,
  } as const;
}

export async function POST(request: Request) {
  if (!sourceIsAllowed(request)) {
    return errorResponse("invalid_origin", 403);
  }
  if (declaredBodyExceedsLimit(request)) {
    return errorResponse("invalid_body", 413);
  }
  if (!rateLimitAllows(request)) {
    return errorResponse("rate_limited", 429);
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return errorResponse("unsupported_media_type", 415);
  }

  const body = (await request.json().catch(() => null)) as PublicEventBody | null;
  if (!body || typeof body !== "object") {
    return errorResponse("invalid_json", 400);
  }

  const sanitized = sanitizePayload(body);
  if ("error" in sanitized) {
    return errorResponse(sanitized.error ?? "invalid_payload", 400);
  }

  console.log(
    JSON.stringify({
      level: "info",
      message: "public_conversion_event",
      event: sanitized,
      receivedAt: new Date().toISOString(),
      route: "/api/public-events",
    }),
  );

  return new Response(null, {
    status: 204,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

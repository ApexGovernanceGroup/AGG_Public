import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getEngagementPackage } from "../../commerce";
import {
  appendClientOnboardingRecord,
} from "../../client-onboarding/records";
import type {
  StoredClientOnboardingRecord,
} from "../../client-onboarding/records";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_BODY_BYTES = 24_000;
const MAX_SHORT_TEXT_LENGTH = 140;
const MAX_SUMMARY_LENGTH = 1400;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const VALID_INTENTS = new Set([
  "product-purchase",
  "long-term-solution",
  "assessment",
  "academy",
  "custom-solution",
  "admin-directed",
  "taxonomy-starter",
]);
const VALID_RESOURCE_SLUGS = new Set(["taxonomy-starter"]);
const VALID_RETURN_PATHS = new Set(["/taxonomy-starter"]);

const requestCounters = new Map<string, { count: number; resetAt: number }>();

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

function redirectTo(
  request: Request,
  state: string,
  recordId?: string,
  returnPath?: string | null,
) {
  const target = new URL(returnPath ?? "/client-services", originFor(request));
  target.searchParams.set("access", state);
  if (recordId) target.searchParams.set("record", recordId);
  return NextResponse.redirect(target, 303);
}

function errorRedirect(request: Request, state: string, returnPath?: string | null) {
  const target = new URL(returnPath ?? "/client-onboarding", originFor(request));
  target.searchParams.set("registration", state);
  return NextResponse.redirect(target, 303);
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

function cleanText(value: FormDataEntryValue | null, maxLength = MAX_SHORT_TEXT_LENGTH) {
  if (typeof value !== "string") return null;
  const cleaned = value.trim().replace(/\s+/g, " ");
  if (!cleaned || cleaned.length > maxLength) return null;
  return cleaned;
}

function cleanOptionalText(
  value: FormDataEntryValue | null,
  maxLength = MAX_SHORT_TEXT_LENGTH,
) {
  if (value === null || value === "") return null;
  return cleanText(value, maxLength);
}

function cleanEmail(value: FormDataEntryValue | null) {
  const email = cleanText(value, 180);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return email.toLowerCase();
}

function cleanIntent(value: FormDataEntryValue | null) {
  const intent = cleanText(value, 80);
  return intent && VALID_INTENTS.has(intent) ? intent : null;
}

function cleanPackageId(value: FormDataEntryValue | null) {
  const packageId = cleanOptionalText(value, 100);
  if (!packageId) return null;
  return getEngagementPackage(packageId) ? packageId : null;
}

function cleanResourceSlug(value: FormDataEntryValue | null) {
  const resourceSlug = cleanOptionalText(value, 80);
  return resourceSlug && VALID_RESOURCE_SLUGS.has(resourceSlug) ? resourceSlug : null;
}

function cleanReturnPath(value: FormDataEntryValue | null) {
  const returnPath = cleanOptionalText(value, 220);
  if (!returnPath) return null;

  try {
    const parsed = new URL(returnPath, "https://apex.local");
    return VALID_RETURN_PATHS.has(parsed.pathname) ? parsed.pathname : null;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  if (!sourceIsAllowed(request)) return errorRedirect(request, "invalid-origin");
  if (declaredBodyExceedsLimit(request)) {
    return errorRedirect(request, "invalid-body");
  }
  if (!rateLimitAllows(request)) return errorRedirect(request, "rate-limited");

  const form = await request.formData().catch(() => null);
  if (!form) return errorRedirect(request, "invalid-form");
  const returnPath = cleanReturnPath(form.get("returnTo"));
  if (cleanOptionalText(form.get("website"), 120)) {
    return errorRedirect(request, "received", returnPath);
  }

  const organization = cleanText(form.get("organization"));
  const contactName = cleanText(form.get("contactName"));
  const email = cleanEmail(form.get("email"));
  const phone = cleanOptionalText(form.get("phone"));
  const role = cleanOptionalText(form.get("role"));
  const intent = cleanIntent(form.get("intent"));
  const packageId = cleanPackageId(form.get("packageId"));
  const resourceSlug = cleanResourceSlug(form.get("resourceSlug"));
  const timeline = cleanText(form.get("timeline"), 80);
  const accessNeed = cleanText(form.get("accessNeed"), 120);
  const summary = cleanText(form.get("summary"), MAX_SUMMARY_LENGTH);
  const consent = form.get("consent") === "acknowledged";

  if (
    !organization ||
    !contactName ||
    !email ||
    !intent ||
    !timeline ||
    !accessNeed ||
    !summary ||
    !consent
  ) {
    return errorRedirect(request, "missing-required", returnPath);
  }

  const record: StoredClientOnboardingRecord = {
    schemaVersion: 1,
    recordId: `ONBOARD-${Date.now().toString(36).toUpperCase()}-${randomUUID()
      .slice(0, 8)
      .toUpperCase()}`,
    receivedAt: new Date().toISOString(),
    organization,
    contactName,
    email,
    phone,
    role,
    intent,
    packageId,
    resourceSlug,
    timeline,
    accessNeed,
    summary,
    consent,
    source: "public-client-onboarding",
    request: {
      userAgent: request.headers.get("user-agent"),
      referer: request.headers.get("referer"),
    },
  };

  try {
    await appendClientOnboardingRecord(record);
  } catch (error) {
    console.error("AGG client onboarding record write failed", error);
    return errorRedirect(request, "record-unavailable", returnPath);
  }

  return redirectTo(request, "registered", record.recordId, returnPath);
}

export function GET() {
  return NextResponse.json(
    {
      status: "write-only",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

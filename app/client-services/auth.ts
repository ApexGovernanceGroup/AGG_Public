export const CLIENT_SERVICES_COOKIE = "agg_client_services_access";
export const CLIENT_SERVICES_COOKIE_MAX_AGE = 60 * 60 * 8;

const DEVELOPMENT_PASSWORD_SHA256 =
  "8bc0ef5940193b9f8633c982bf1773e270014a27f3de4f7c248391c5f791db85";
const DEVELOPMENT_SESSION_SECRET = "agg-client-services-session-v1";

export type ClientServicesCookieOptions = {
  httpOnly: true;
  maxAge: number;
  path: string;
  sameSite: "lax";
  secure: boolean;
};

export async function isClientServicesPassword(value: FormDataEntryValue | null): Promise<boolean> {
  if (typeof value !== "string") return false;

  const submittedHash = await sha256Hex(value.trim());
  const expectedHash = await configuredPasswordHash();
  if (!expectedHash) return false;

  return constantTimeEqual(submittedHash, expectedHash);
}

export async function hasClientServicesAccess(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false;

  const expectedToken = await clientServicesSessionToken();
  if (!expectedToken) return false;

  return constantTimeEqual(cookieValue, expectedToken);
}

export async function clientServicesSessionToken(): Promise<string | null> {
  const passwordHash = await configuredPasswordHash();
  if (!passwordHash) return null;

  const sessionSecret =
    process.env.CLIENT_SERVICES_SESSION_SECRET?.trim() ||
    (isProduction() ? null : DEVELOPMENT_SESSION_SECRET);
  if (!sessionSecret) return null;

  return sha256Hex(`${passwordHash}.${sessionSecret}`);
}

export async function isClientServicesConfigured(): Promise<boolean> {
  return Boolean(await configuredPasswordHash()) && Boolean(
    process.env.CLIENT_SERVICES_SESSION_SECRET?.trim() || !isProduction(),
  );
}

export function clientServicesCookieOptions(): ClientServicesCookieOptions {
  return {
    httpOnly: true,
    maxAge: CLIENT_SERVICES_COOKIE_MAX_AGE,
    path: "/client-services",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  };
}

async function configuredPasswordHash(): Promise<string | null> {
  const plaintextPassword = process.env.CLIENT_SERVICES_PASSWORD?.trim();
  if (plaintextPassword) return sha256Hex(plaintextPassword);

  const configuredHash = process.env.CLIENT_SERVICES_PASSWORD_SHA256?.trim();
  if (configuredHash && /^[a-f0-9]{64}$/i.test(configuredHash)) {
    return configuredHash.toLowerCase();
  }

  return isProduction() ? null : DEVELOPMENT_PASSWORD_SHA256;
}

function isProduction() {
  return process.env.NODE_ENV === "production";
}

async function sha256Hex(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function constantTimeEqual(left: string, right: string): boolean {
  const maxLength = Math.max(left.length, right.length);
  let difference = left.length === right.length ? 0 : 1;

  for (let index = 0; index < maxLength; index += 1) {
    difference |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  }

  return difference === 0;
}

export const CLIENT_SERVICES_COOKIE = "agg_client_services_access";
export const CLIENT_SERVICES_COOKIE_MAX_AGE = 60 * 60 * 8;

const DEVELOPMENT_USERNAME_SHA256 =
  "948fe603f61dc036b5c596dc09fe3ce3f3d30dc90f024c85f3c82db2ccab679d";
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

export async function isClientServicesCredential({
  username,
  password,
}: {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}): Promise<boolean> {
  if (typeof username !== "string" || typeof password !== "string") {
    return false;
  }

  const [submittedUsernameHash, submittedPasswordHash] = await Promise.all([
    sha256Hex(username.trim().toLowerCase()),
    sha256Hex(password.trim()),
  ]);
  const [expectedUsernameHash, expectedPasswordHash] = await Promise.all([
    configuredUsernameHash(),
    configuredPasswordHash(),
  ]);
  if (!expectedUsernameHash || !expectedPasswordHash) return false;

  return (
    constantTimeEqual(submittedUsernameHash, expectedUsernameHash) &&
    constantTimeEqual(submittedPasswordHash, expectedPasswordHash)
  );
}

export async function hasClientServicesAccess(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false;

  const expectedToken = await clientServicesSessionToken();
  if (!expectedToken) return false;

  return constantTimeEqual(cookieValue, expectedToken);
}

export async function clientServicesSessionToken(): Promise<string | null> {
  const [usernameHash, passwordHash] = await Promise.all([
    configuredUsernameHash(),
    configuredPasswordHash(),
  ]);
  if (!usernameHash || !passwordHash) return null;

  const sessionSecret =
    process.env.CLIENT_SERVICES_SESSION_SECRET?.trim() ||
    (isProduction() ? null : DEVELOPMENT_SESSION_SECRET);
  if (!sessionSecret) return null;

  return sha256Hex(`${usernameHash}.${passwordHash}.${sessionSecret}`);
}

export async function isClientServicesConfigured(): Promise<boolean> {
  const [usernameHash, passwordHash] = await Promise.all([
    configuredUsernameHash(),
    configuredPasswordHash(),
  ]);

  return Boolean(usernameHash) && Boolean(passwordHash) && Boolean(
    process.env.CLIENT_SERVICES_SESSION_SECRET?.trim() || !isProduction(),
  );
}

export function clientServicesCookieOptions(): ClientServicesCookieOptions {
  return {
    httpOnly: true,
    maxAge: CLIENT_SERVICES_COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  };
}

async function configuredUsernameHash(): Promise<string | null> {
  const plaintextUsername = process.env.CLIENT_SERVICES_USERNAME?.trim();
  if (plaintextUsername) return sha256Hex(plaintextUsername.toLowerCase());

  const configuredHash = process.env.CLIENT_SERVICES_USERNAME_SHA256?.trim();
  if (configuredHash && /^[a-f0-9]{64}$/i.test(configuredHash)) {
    return configuredHash.toLowerCase();
  }

  return isProduction() ? null : DEVELOPMENT_USERNAME_SHA256;
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

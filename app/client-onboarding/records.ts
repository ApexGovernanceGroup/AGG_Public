import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

export const CLIENT_ONBOARDING_RECORD_FILE = "client-onboarding-registrations.jsonl";

export type StoredClientOnboardingRecord = {
  schemaVersion: 1;
  recordId: string;
  receivedAt: string;
  organization: string;
  contactName: string;
  email: string;
  phone: string | null;
  role: string | null;
  intent: string;
  packageId: string | null;
  productId?: string | null;
  resourceSlug?: string | null;
  timeline: string;
  accessNeed: string;
  summary: string;
  consent: boolean;
  source: string;
  request: {
    userAgent: string | null;
    referer: string | null;
  };
};

export function clientOnboardingRecordDirectory() {
  const configuredDirectory = process.env.AGG_INTAKE_RECORD_DIR?.trim();
  if (configuredDirectory) {
    return path.resolve(/* turbopackIgnore: true */ configuredDirectory);
  }

  return path.join(process.cwd(), ".tmp", "intake-records");
}

export async function appendClientOnboardingRecord(
  record: StoredClientOnboardingRecord,
) {
  const directory = clientOnboardingRecordDirectory();
  await mkdir(directory, { recursive: true });
  await appendFile(
    path.join(directory, CLIENT_ONBOARDING_RECORD_FILE),
    `${JSON.stringify(record)}\n`,
    "utf8",
  );
}

export async function readRecentClientOnboardingRecords(limit = 8) {
  const recordPath = path.join(
    clientOnboardingRecordDirectory(),
    CLIENT_ONBOARDING_RECORD_FILE,
  );
  const contents = await readFile(recordPath, "utf8").catch(() => "");
  if (!contents.trim()) return [] satisfies StoredClientOnboardingRecord[];

  return contents
    .trim()
    .split(/\r?\n/)
    .map((line) => parseRecordLine(line))
    .filter((record): record is StoredClientOnboardingRecord => Boolean(record))
    .slice(-limit)
    .reverse();
}

function parseRecordLine(line: string) {
  try {
    const record = JSON.parse(line) as Partial<StoredClientOnboardingRecord>;
    if (
      record.schemaVersion !== 1 ||
      typeof record.recordId !== "string" ||
      typeof record.receivedAt !== "string" ||
      typeof record.organization !== "string" ||
      typeof record.contactName !== "string" ||
      typeof record.email !== "string" ||
      typeof record.intent !== "string" ||
      typeof record.timeline !== "string" ||
      typeof record.accessNeed !== "string" ||
      typeof record.summary !== "string"
    ) {
      return null;
    }

    return record as StoredClientOnboardingRecord;
  } catch {
    return null;
  }
}

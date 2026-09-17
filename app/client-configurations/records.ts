import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

export const KAIGES_RECORD_FILE = "kaiges-public-configurations.jsonl";

export type StoredKaigesConfigurationRecord = {
  schemaVersion: 1;
  recordId: string;
  receivedAt: string;
  source: string;
  trigger: string;
  currentWord: string;
  lockedCount: number;
  totalPositions: number;
  positions: {
    id: string;
    position: string;
    stage: string;
    letter: string;
    term: string;
    definition: string;
    locked: boolean;
  }[];
  preferences: {
    id: string;
    label: string;
    value: string;
    selected: string;
    summary: string;
  }[];
  generatedReview: string;
  request: {
    userAgent: string | null;
    referer: string | null;
  };
};

export function kaigesRecordDirectory() {
  const configuredDirectory = process.env.AGG_INTAKE_RECORD_DIR?.trim();
  if (configuredDirectory) {
    return path.resolve(/* turbopackIgnore: true */ configuredDirectory);
  }

  return path.join(process.cwd(), ".tmp", "intake-records");
}

export async function appendKaigesConfigurationRecord(
  record: StoredKaigesConfigurationRecord,
) {
  const directory = kaigesRecordDirectory();
  await mkdir(directory, { recursive: true });
  await appendFile(
    path.join(directory, KAIGES_RECORD_FILE),
    `${JSON.stringify(record)}\n`,
    "utf8",
  );
}

export async function readRecentKaigesConfigurationRecords(limit = 6) {
  const recordPath = path.join(kaigesRecordDirectory(), KAIGES_RECORD_FILE);
  const contents = await readFile(recordPath, "utf8").catch(() => "");
  if (!contents.trim()) return [] satisfies StoredKaigesConfigurationRecord[];

  return contents
    .trim()
    .split(/\r?\n/)
    .map((line) => parseRecordLine(line))
    .filter((record): record is StoredKaigesConfigurationRecord => Boolean(record))
    .slice(-limit)
    .reverse();
}

function parseRecordLine(line: string) {
  try {
    const record = JSON.parse(line) as Partial<StoredKaigesConfigurationRecord>;
    if (
      record.schemaVersion !== 1 ||
      typeof record.recordId !== "string" ||
      typeof record.receivedAt !== "string" ||
      typeof record.currentWord !== "string" ||
      !Array.isArray(record.positions) ||
      !Array.isArray(record.preferences) ||
      typeof record.generatedReview !== "string"
    ) {
      return null;
    }

    return record as StoredKaigesConfigurationRecord;
  } catch {
    return null;
  }
}

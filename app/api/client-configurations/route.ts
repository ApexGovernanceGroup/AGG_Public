import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import {
  appendKaigesConfigurationRecord,
  KAIGES_RECORD_FILE,
} from "../../client-configurations/records";
import type { StoredKaigesConfigurationRecord } from "../../client-configurations/records";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_TEXT_LENGTH = 280;
const MAX_REVIEW_LENGTH = 8000;
const REQUIRED_REVIEW_SECTIONS = [
  "Defining Principles",
  "Attributes",
  "Engagement Style",
  "End-State Products",
  "Client Priorities",
] as const;

type IncomingPosition = {
  id: string;
  position: string;
  stage: string;
  letter: string;
  term: string;
  definition: string;
  locked: boolean;
};

type IncomingPreference = {
  id: string;
  label: string;
  value: string;
  selected: string;
  summary: string;
};

type IncomingPayload = {
  currentWord?: unknown;
  trigger?: unknown;
  lockedCount?: unknown;
  totalPositions?: unknown;
  positions?: unknown;
  preferences?: unknown;
  generatedReview?: unknown;
  source?: unknown;
};

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function cleanText(value: unknown, maxLength = MAX_TEXT_LENGTH) {
  if (typeof value !== "string") return null;
  const cleaned = value.trim();
  if (!cleaned || cleaned.length > maxLength) return null;
  return cleaned;
}

function cleanBoolean(value: unknown) {
  return typeof value === "boolean" ? value : null;
}

function cleanInteger(value: unknown) {
  return Number.isInteger(value) ? Number(value) : null;
}

function sanitizePosition(value: unknown, index: number): IncomingPosition | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const letter = cleanText(record.letter, 1);
  const expectedLetter =
    index === 0
      ? "K"
      : index === 1
        ? "A"
        : index === 2
          ? "I"
          : index === 3
            ? "G"
            : index === 4
              ? "E"
              : null;

  if (expectedLetter && letter !== expectedLetter) return null;
  if (!expectedLetter && letter !== "S" && letter !== "D") return null;

  const id = cleanText(record.id, 60);
  const position = cleanText(record.position, 80);
  const stage = cleanText(record.stage, 80);
  const term = cleanText(record.term, 100);
  const definition = cleanText(record.definition, 500);
  const locked = cleanBoolean(record.locked);

  if (!id || !position || !stage || !letter || !term || !definition) return null;
  if (locked === null) return null;

  return {
    id,
    position,
    stage,
    letter,
    term,
    definition,
    locked,
  };
}

function sanitizePreference(value: unknown): IncomingPreference | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const id = cleanText(record.id, 60);
  const label = cleanText(record.label, 100);
  const selected = cleanText(record.selected, 120);
  const summary = cleanText(record.summary, 500);
  const optionValue = cleanText(record.value, 120);

  if (!id || !label || !selected || !summary || !optionValue) return null;

  return {
    id,
    label,
    value: optionValue,
    selected,
    summary,
  };
}

function sanitizePayload(body: IncomingPayload) {
  const currentWord = cleanText(body.currentWord, 6);
  if (!currentWord || !/^KAIGE[SD]$/.test(currentWord)) {
    return { error: "invalid_current_word" } as const;
  }

  if (!Array.isArray(body.positions) || body.positions.length !== 6) {
    return { error: "invalid_positions" } as const;
  }

  const positions = body.positions.map(sanitizePosition);
  if (positions.some((position) => !position)) {
    return { error: "invalid_positions" } as const;
  }

  const typedPositions = positions as IncomingPosition[];
  if (typedPositions.map((position) => position.letter).join("") !== currentWord) {
    return { error: "word_position_mismatch" } as const;
  }

  if (!Array.isArray(body.preferences) || body.preferences.length !== 3) {
    return { error: "invalid_preferences" } as const;
  }

  const preferences = body.preferences.map(sanitizePreference);
  if (preferences.some((preference) => !preference)) {
    return { error: "invalid_preferences" } as const;
  }

  const generatedReview = cleanText(body.generatedReview, MAX_REVIEW_LENGTH);
  if (
    !generatedReview ||
    !REQUIRED_REVIEW_SECTIONS.every((section) =>
      generatedReview.includes(section),
    )
  ) {
    return { error: "invalid_generated_review" } as const;
  }

  const lockedCount = typedPositions.filter((position) => position.locked).length;
  const submittedLockedCount = cleanInteger(body.lockedCount);
  const submittedTotalPositions = cleanInteger(body.totalPositions);
  if (
    submittedLockedCount !== null &&
    submittedLockedCount !== lockedCount
  ) {
    return { error: "locked_count_mismatch" } as const;
  }
  if (
    submittedTotalPositions !== null &&
    submittedTotalPositions !== typedPositions.length
  ) {
    return { error: "total_position_mismatch" } as const;
  }

  return {
    currentWord,
    lockedCount,
    totalPositions: typedPositions.length,
    positions: typedPositions,
    preferences: preferences as IncomingPreference[],
    generatedReview,
    source: cleanText(body.source, 120) ?? "public-client-led-self-determination",
    trigger: cleanText(body.trigger, 120) ?? "manual-record",
  } as const;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as IncomingPayload | null;
  if (!body) return errorResponse("invalid_json", 400);

  const sanitized = sanitizePayload(body);
  if ("error" in sanitized) {
    return errorResponse(sanitized.error ?? "invalid_payload", 400);
  }

  const record: StoredKaigesConfigurationRecord = {
    schemaVersion: 1,
    recordId: `KAIGES-${Date.now().toString(36).toUpperCase()}-${randomUUID()
      .slice(0, 8)
      .toUpperCase()}`,
    receivedAt: new Date().toISOString(),
    source: sanitized.source,
    trigger: sanitized.trigger,
    currentWord: sanitized.currentWord,
    lockedCount: sanitized.lockedCount,
    totalPositions: sanitized.totalPositions,
    positions: sanitized.positions,
    preferences: sanitized.preferences,
    generatedReview: sanitized.generatedReview,
    request: {
      userAgent: request.headers.get("user-agent"),
      referer: request.headers.get("referer"),
    },
  };

  try {
    await appendKaigesConfigurationRecord(record);
  } catch (error) {
    console.error("AGG intake record write failed", error);
    return errorResponse("record_unavailable", 503);
  }

  return NextResponse.json({
    recordId: record.recordId,
    receivedAt: record.receivedAt,
    status: "recorded",
  });
}

export function GET() {
  return NextResponse.json({
    status: "write-only",
    recordFile: KAIGES_RECORD_FILE,
  });
}

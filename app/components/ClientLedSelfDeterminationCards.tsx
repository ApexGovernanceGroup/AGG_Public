"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  LockKeyhole,
  Pause,
  Play,
  RotateCcw,
  UnlockKeyhole,
} from "lucide-react";
import {
  kaigedCategories,
  kaigedClientConfiguration,
  kaigedPublicPreferences,
} from "../site-data";

const POSITION_ROTATION_OFFSET_MS = 3000;
const STORAGE_KEY = "agg-public-client-led-self-determination-v1";
const WORD_SHAPE_EXAMPLES = "KAIGES or KAIGED";

type PositionId = (typeof kaigedClientConfiguration.positions)[number]["id"];
type PositionSelection = {
  selectedIndex: number;
  locked: boolean;
};
type SelectionState = Record<PositionId, PositionSelection>;
type PreferenceId = (typeof kaigedPublicPreferences)[number]["id"];
type PreferenceState = Record<PreferenceId, string>;
type StoredPublicSelection = {
  selectionState?: Partial<Record<PositionId, PositionSelection>>;
  preferenceState?: Partial<Record<PreferenceId, string>>;
  rotationPaused?: boolean;
};
type RecordTrigger =
  | "manual-record"
  | "position-locked"
  | "position-unlocked"
  | "carry-to-engagement";
type RecordStatus = {
  state: "idle" | "saving" | "saved" | "error";
  message: string;
  recordId?: string;
  receivedAt?: string;
};
type RecordResponse = {
  recordId?: unknown;
  receivedAt?: unknown;
  status?: unknown;
  error?: unknown;
};

function defaultSelectionState(): SelectionState {
  const state = {} as SelectionState;

  for (const position of kaigedClientConfiguration.positions) {
    state[position.id] = { selectedIndex: 0, locked: false };
  }

  return state;
}

function defaultPreferenceState(): PreferenceState {
  const state = {} as PreferenceState;

  for (const preference of kaigedPublicPreferences) {
    state[preference.id] = preference.options[0].value;
  }

  return state;
}

function sanitizeSelectionState(
  stored?: StoredPublicSelection["selectionState"],
): SelectionState {
  const defaults = defaultSelectionState();

  if (!stored) return defaults;

  for (const position of kaigedClientConfiguration.positions) {
    const record = stored[position.id];
    const selectedIndex =
      record && Number.isInteger(record.selectedIndex)
        ? record.selectedIndex
        : 0;

    defaults[position.id] = {
      selectedIndex:
        selectedIndex >= 0 && selectedIndex < position.options.length
          ? selectedIndex
          : 0,
      locked: Boolean(record?.locked),
    };
  }

  return defaults;
}

function sanitizePreferenceState(
  stored?: StoredPublicSelection["preferenceState"],
): PreferenceState {
  const defaults = defaultPreferenceState();

  if (!stored) return defaults;

  for (const preference of kaigedPublicPreferences) {
    const storedValue = stored[preference.id];
    const valid = preference.options.some((option) => option.value === storedValue);
    defaults[preference.id] =
      typeof storedValue === "string" && valid
        ? storedValue
        : preference.options[0].value;
  }

  return defaults;
}

function selectedOptionFor(positionId: PositionId, selectionState: SelectionState) {
  const position = kaigedClientConfiguration.positions.find(
    (item) => item.id === positionId,
  );

  if (!position) return null;

  return position.options[selectionState[positionId].selectedIndex] ?? position.options[0];
}

function advanceSelection(
  current: SelectionState,
  positionId: PositionId,
): SelectionState {
  const position = kaigedClientConfiguration.positions.find(
    (item) => item.id === positionId,
  );

  if (!position || current[positionId].locked) return current;

  return {
    ...current,
    [positionId]: {
      ...current[positionId],
      selectedIndex: (current[positionId].selectedIndex + 1) % position.options.length,
    },
  };
}

function nextSequentialUnlockedPosition(
  current: SelectionState,
  startIndex: number,
) {
  const positions = kaigedClientConfiguration.positions;

  for (let offset = 0; offset < positions.length; offset += 1) {
    const index = (startIndex + offset) % positions.length;
    const position = positions[index];

    if (!current[position.id].locked) {
      return {
        positionId: position.id,
        nextIndex: (index + 1) % positions.length,
      };
    }
  }

  return {
    positionId: null,
    nextIndex: startIndex,
  };
}

function readStoredSelection(): StoredPublicSelection | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as StoredPublicSelection;
  } catch {
    return null;
  }
}

function formatAttributeLine(
  position: ReturnType<typeof selectedOptionFor>,
  fallbackTerm: string,
) {
  return `${position?.term ?? fallbackTerm}: ${
    position?.definition ?? "No definition selected."
  }`;
}

function buildPreferenceSummary(preferenceState: PreferenceState) {
  return kaigedPublicPreferences.map((preference) => {
    const selectedValue = preferenceState[preference.id];
    const selected =
      preference.options.find((option) => option.value === selectedValue) ??
      preference.options[0];

    return {
      id: preference.id,
      label: preference.label,
      selected,
    };
  });
}

function buildSelectedPositionRecords(selectionState: SelectionState) {
  return kaigedClientConfiguration.positions.map((position) => {
    const selected = selectedOptionFor(position.id, selectionState) ??
      position.options[0];

    return {
      id: position.id,
      position: position.position,
      stage: position.stage,
      letter: selected.letter,
      term: selected.term,
      definition: selected.definition,
      locked: selectionState[position.id].locked,
    };
  });
}

function buildGeneratedReview(
  selectionState: SelectionState,
  preferenceState: PreferenceState,
) {
  const positions = buildSelectedPositionRecords(selectionState);
  const preferences = buildPreferenceSummary(preferenceState);
  const currentWord = positions.map((position) => position.letter).join("");
  const selectedAttributeLines = kaigedClientConfiguration.positions
    .map((position) =>
      formatAttributeLine(
        selectedOptionFor(position.id, selectionState),
        position.options[0].term,
      ),
    )
    .join("\n");
  const terminalWord = positions[positions.length - 1]?.term ?? "Scalability";
  const selectedOutput = preferences.find((item) => item.id === "output")
    ?.selected;
  const selectedEngagement = preferences.find((item) => item.id === "engagement")
    ?.selected;
  const selectedPriority = preferences.find((item) => item.id === "priority")
    ?.selected;

  return [
    "Defining Principles",
    "- Preserve the fixed six-position KAIGES|D structure while allowing the client to set the operating emphasis.",
    `- Treat ${currentWord} as the client-authored frame for expectations, evidence, and decision support.`,
    `- Use ${terminalWord} to define whether the engagement is oriented toward sustained operating rhythm or delivered handoff.`,
    "",
    "Attributes",
    selectedAttributeLines,
    "",
    "Engagement Style",
    `${selectedEngagement?.label ?? "Diagnostic first"}: ${
      selectedEngagement?.summary ??
      "Begin with baseline, exposure, operating gap, and decision need."
    }`,
    "",
    "End-State Products",
    `${selectedOutput?.label ?? "Executive brief"}: ${
      selectedOutput?.summary ??
      "A decision-grade brief with measures, risks, and action logic."
    }`,
    "",
    "Client Priorities",
    `${selectedPriority?.label ?? "Decision speed"}: ${
      selectedPriority?.summary ??
      "Reduce time from question to evidence-backed action."
    }`,
  ].join("\n");
}

function buildConfigurationRecord(
  selectionState: SelectionState,
  preferenceState: PreferenceState,
  trigger: RecordTrigger,
) {
  const positions = buildSelectedPositionRecords(selectionState);
  const preferences = buildPreferenceSummary(preferenceState);

  return {
    source: "public-client-led-self-determination",
    trigger,
    currentWord: positions.map((position) => position.letter).join(""),
    lockedCount: positions.filter((position) => position.locked).length,
    totalPositions: positions.length,
    positions,
    preferences: preferences.map((preference) => ({
      id: preference.id,
      label: preference.label,
      value: preference.selected.value,
      selected: preference.selected.label,
      summary: preference.selected.summary,
    })),
    generatedReview: buildGeneratedReview(selectionState, preferenceState),
  };
}

export function ClientLedSelfDeterminationCards() {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const [selectionState, setSelectionState] = useState<SelectionState>(() =>
    defaultSelectionState(),
  );
  const [preferenceState, setPreferenceState] = useState<PreferenceState>(() =>
    defaultPreferenceState(),
  );
  const [rotationPaused, setRotationPaused] = useState(false);
  const [recordStatus, setRecordStatus] = useState<RecordStatus>({
    state: "idle",
    message: "Awaiting server record.",
  });
  const rotationCursorRef = useRef(0);
  const recordRequestRef = useRef(0);
  const selectionStateRef = useRef(selectionState);

  const selectedPositions = useMemo(
    () =>
      kaigedClientConfiguration.positions.map((position, index) => ({
        ...position,
        icon: kaigedCategories[index]?.icon ?? kaigedCategories[0].icon,
        selected: selectedOptionFor(position.id, selectionState),
        selectedIndex: selectionState[position.id].selectedIndex,
        locked: selectionState[position.id].locked,
      })),
    [selectionState],
  );

  const currentWord = selectedPositions
    .map((position) => position.selected?.letter ?? position.defaultLetter)
    .join("");
  const lockedCount = selectedPositions.filter((position) => position.locked).length;
  const allPositionsLocked = lockedCount === selectedPositions.length;
  const preferenceSummary = buildPreferenceSummary(preferenceState);
  const generatedReview = buildGeneratedReview(selectionState, preferenceState);
  const recordIsSaving = recordStatus.state === "saving";

  useEffect(() => {
    const hydration = window.setTimeout(() => {
      const stored = readStoredSelection();
      if (stored) {
        setSelectionState(sanitizeSelectionState(stored.selectionState));
        setPreferenceState(sanitizePreferenceState(stored.preferenceState));
        setRotationPaused(Boolean(stored.rotationPaused));
      }
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(hydration);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        selectionState,
        preferenceState,
        rotationPaused,
      }),
    );
  }, [hydrated, preferenceState, rotationPaused, selectionState]);

  useEffect(() => {
    selectionStateRef.current = selectionState;
  }, [selectionState]);

  useEffect(() => {
    if (!hydrated || rotationPaused || allPositionsLocked) return;

    const interval = window.setInterval(() => {
      const next = nextSequentialUnlockedPosition(
        selectionStateRef.current,
        rotationCursorRef.current,
      );
      rotationCursorRef.current = next.nextIndex;

      setSelectionState((current) => {
        return next.positionId
          ? advanceSelection(current, next.positionId)
          : current;
      });
    }, POSITION_ROTATION_OFFSET_MS);

    return () => window.clearInterval(interval);
  }, [allPositionsLocked, hydrated, rotationPaused]);

  function resetSelection() {
    rotationCursorRef.current = 0;
    setSelectionState(defaultSelectionState());
    setPreferenceState(defaultPreferenceState());
    setRotationPaused(false);
    setRecordStatus({
      state: "idle",
      message: "Awaiting server record.",
    });
    window.localStorage.removeItem(STORAGE_KEY);
  }

  function setPreference(preferenceId: PreferenceId, value: string) {
    setPreferenceState((current) => ({
      ...current,
      [preferenceId]: value,
    }));
    setRecordStatus({
      state: "idle",
      message: "Local selection changed since the last server record.",
    });
  }

  function chooseNext(positionId: PositionId) {
    const nextSelectionState = advanceSelection(selectionState, positionId);
    if (nextSelectionState === selectionState) return;

    setSelectionState(nextSelectionState);
    setRecordStatus({
      state: "idle",
      message: "Local selection changed since the last server record.",
    });
  }

  function toggleLock(positionId: PositionId) {
    const nextSelectionState = {
      ...selectionState,
      [positionId]: {
        ...selectionState[positionId],
        locked: !selectionState[positionId].locked,
      },
    };

    setSelectionState(nextSelectionState);
    void recordConfiguration(
      nextSelectionState[positionId].locked
        ? "position-locked"
        : "position-unlocked",
      nextSelectionState,
    );
  }

  async function recordConfiguration(
    trigger: RecordTrigger,
    nextSelectionState = selectionState,
    nextPreferenceState = preferenceState,
  ) {
    const requestId = recordRequestRef.current + 1;
    recordRequestRef.current = requestId;
    setRecordStatus({
      state: "saving",
      message: "Recording selection to server.",
    });

    try {
      const response = await fetch("/api/client-configurations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          buildConfigurationRecord(
            nextSelectionState,
            nextPreferenceState,
            trigger,
          ),
        ),
      });
      const body = (await response.json().catch(() => null)) as
        | RecordResponse
        | null;

      if (!response.ok || typeof body?.recordId !== "string") {
        throw new Error(
          typeof body?.error === "string" ? body.error : "record_failed",
        );
      }

      if (recordRequestRef.current === requestId) {
        setRecordStatus({
          state: "saved",
          message: `Server record saved: ${body.recordId}`,
          recordId: body.recordId,
          receivedAt:
            typeof body.receivedAt === "string" ? body.receivedAt : undefined,
        });
      }

      return true;
    } catch (error) {
      console.error("AGG configuration record failed", error);
      if (recordRequestRef.current === requestId) {
        setRecordStatus({
          state: "error",
          message:
            "Server record was not saved. The browser copy is still retained locally.",
        });
      }

      return false;
    }
  }

  function recordCurrentSelection() {
    setRotationPaused(true);
    void recordConfiguration("manual-record");
  }

  async function carryToEngagement(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (recordIsSaving) return;

    setRotationPaused(true);
    const saved = await recordConfiguration("carry-to-engagement");
    if (saved) router.push("/engage");
  }

  return (
    <>
      <div className="kaiges-toolbar">
        <div
          className="kaiges-wordmark"
          aria-label={`Current client shape: ${currentWord}. Shape options include ${WORD_SHAPE_EXAMPLES}.`}
          aria-live="polite"
        >
          <span>Current client shape</span>
          <strong>{currentWord}</strong>
        </div>
        <div className="kaiges-toolbar__actions" aria-label="Client word-bank sequence controls">
          <button
            className="button button--quiet"
            type="button"
            onClick={() => setRotationPaused((current) => !current)}
          >
            {rotationPaused ? (
              <Play size={16} aria-hidden="true" />
            ) : (
              <Pause size={16} aria-hidden="true" />
            )}
            {rotationPaused ? "Resume sequence" : "Pause sequence"}
          </button>
          <button className="button button--quiet" type="button" onClick={resetSelection}>
            <RotateCcw size={16} aria-hidden="true" />
            Restore default
          </button>
        </div>
      </div>
      <div className="kaiges-grid" aria-label="Client-Led Self-Determination word bank">
        {selectedPositions.map((position, index) => {
          const selected = position.selected ?? position.options[0];
          const nextOption =
            position.options[(position.selectedIndex + 1) % position.options.length];
          const Icon = position.icon;

          return (
            <article
              className={`kaiges-card${
                index === selectedPositions.length - 1 ? " kaiges-card--terminal" : ""
              }${position.locked ? " is-locked" : ""}`}
              key={position.id}
            >
              <button
                className="kaiges-card__select"
                type="button"
                onClick={() => chooseNext(position.id)}
                disabled={position.locked}
                aria-label={`Select ${position.position} word-bank term`}
              >
                <div
                  className="kaiges-card__flip"
                  key={`${position.id}-${selected.term}`}
                >
                  <span className="kaiges-card__stage">{position.position}</span>
                  <div className="kaiges-card__top">
                    <span className="kaiges-card__letter">{selected.letter}</span>
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3>{selected.term}</h3>
                  <p>{selected.definition}</p>
                  <div className="kaiges-card__option-meta" aria-hidden="true">
                    <span>
                      Term {position.selectedIndex + 1} of {position.options.length}
                    </span>
                    <small>Next: {nextOption.term}</small>
                  </div>
                </div>
              </button>
              <button
                className={`kaiges-lock-chip${position.locked ? " is-locked" : ""}`}
                type="button"
                onClick={() => toggleLock(position.id)}
                aria-pressed={position.locked}
              >
                {position.locked ? (
                  <LockKeyhole size={13} aria-hidden="true" />
                ) : (
                  <UnlockKeyhole size={13} aria-hidden="true" />
                )}
                {position.locked ? "Locked" : "Lock"}
              </button>
            </article>
          );
        })}
      </div>
      <section
        className="kaiges-term-bank"
        aria-label="KAIGES and KAIGED term definitions"
      >
        <div className="kaiges-term-bank__heading">
          <p className="eyebrow">Expanded Term Bank</p>
          <h3>K-A-I-G-E-S|D definitions</h3>
          <p>
            The client selects the operating emphasis for each fixed position:
            customer experience, solution expectation, delivery proof, and
            relationship shape are carried together into the engagement record.
          </p>
        </div>
        <div className="kaiges-term-bank__grid">
          {selectedPositions.map((position) => {
            const selected = position.selected ?? position.options[0];

            return (
              <article className="kaiges-term-column" key={position.id}>
                <div className="kaiges-term-column__top">
                  <span>{position.defaultLetter}</span>
                  <div>
                    <strong>{position.position}</strong>
                    <small>{position.options.length} client terms</small>
                  </div>
                </div>
                <ul>
                  {position.options.map((option) => (
                    <li
                      className={option.term === selected.term ? "is-selected" : undefined}
                      key={`${position.id}-${option.term}`}
                    >
                      <span>{option.letter}</span>
                      <div>
                        <strong>{option.term}</strong>
                        <p>{option.definition}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
      <section className="kaiges-election-panel" aria-label="Client configuration summary">
        <div className="kaiges-selected-summary">
          <p className="eyebrow">Selected Configuration</p>
          <h3>{currentWord}</h3>
          <p>
            {lockedCount} of {selectedPositions.length} positions pinned for the
            client election.
          </p>
          <ol
            className="kaiges-selected-attributes"
            aria-label="Chosen attributes listed by letter"
          >
            {selectedPositions.map((position) => {
              const selected = position.selected ?? position.options[0];

              return (
                <li key={position.id}>
                  <span className="kaiges-selected-attributes__letter">
                    {selected.letter}
                  </span>
                  <div>
                    <strong>{selected.term}</strong>
                    <p>{selected.definition}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="kaiges-preference-grid">
          {kaigedPublicPreferences.map((preference) => (
            <fieldset className="kaiges-preference" key={preference.id}>
              <legend>{preference.label}</legend>
              {preference.options.map((option) => (
                <button
                  aria-pressed={preferenceState[preference.id] === option.value}
                  key={option.value}
                  type="button"
                  onClick={() => setPreference(preference.id, option.value)}
                >
                  <span>{option.label}</span>
                  <small>{option.summary}</small>
                </button>
              ))}
            </fieldset>
          ))}
        </div>
        <div className="kaiges-generated-panel">
          <div>
            <p className="eyebrow">Generated Review</p>
            <h3>Configuration narrative</h3>
            <p>
              A working narrative for scope language, delivery expectations,
              and client review.
            </p>
          </div>
          <textarea
            className="kaiges-generated-review"
            readOnly
            aria-label="Generated review of selected configuration"
            value={generatedReview}
          />
        </div>
        <div className="kaiges-election-panel__commitment">
          {preferenceSummary.map((preference) => (
            <p key={preference.id}>
              <span>{preference.label}</span>
              <strong>{preference.selected.label}</strong>
            </p>
          ))}
          <div className="kaiges-record-actions">
            <button
              className="button button--quiet"
              disabled={recordIsSaving}
              onClick={recordCurrentSelection}
              type="button"
            >
              <ClipboardCheck size={16} aria-hidden="true" />
              {recordIsSaving ? "Recording" : "Record selection"}
            </button>
            <Link
              aria-disabled={recordIsSaving}
              className="button button--primary"
              href="/engage"
              onClick={carryToEngagement}
            >
              <ArrowRight size={16} aria-hidden="true" />
              Carry to engagement
            </Link>
          </div>
          <p
            aria-live="polite"
            className={`kaiges-record-status is-${recordStatus.state}`}
            role="status"
          >
            {recordStatus.message}
          </p>
        </div>
      </section>
    </>
  );
}

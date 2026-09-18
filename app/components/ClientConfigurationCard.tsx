"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  CheckCircle2,
  LockKeyhole,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
  UnlockKeyhole,
} from "lucide-react";
import {
  kaigedClientConfiguration,
  kaigedUnifiedArchitecture,
} from "../site-data";

type PositionId = (typeof kaigedClientConfiguration.positions)[number]["id"];
type EngagementShape =
  (typeof kaigedClientConfiguration.relationshipShapes)[number]["id"];
type PositionSelection = {
  selectedIndex: number;
  locked: boolean;
};
type SelectionState = Record<PositionId, PositionSelection>;
type StoredConfiguration = {
  selectionState?: Partial<Record<PositionId, PositionSelection>>;
  cyclingPaused?: boolean;
  scopeLocked?: boolean;
  lockedAt?: string | null;
  engagementShape?: EngagementShape;
};

const STORAGE_KEY = "agg-client-led-self-determination-v1";
const DEFAULT_ENGAGEMENT_SHAPE: EngagementShape = "S";

function defaultSelectionState(): SelectionState {
  const state = {} as SelectionState;

  for (const position of kaigedClientConfiguration.positions) {
    state[position.id] = { selectedIndex: 0, locked: false };
  }

  return state;
}

function timestamp() {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
}

function sanitizeEngagementShape(
  stored?: StoredConfiguration["engagementShape"],
): EngagementShape {
  return stored === "D" ? "D" : DEFAULT_ENGAGEMENT_SHAPE;
}

function sanitizeSelectionState(
  stored?: StoredConfiguration["selectionState"],
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

function readStoredConfiguration(): StoredConfiguration | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as StoredConfiguration;
  } catch {
    return null;
  }
}

function selectedOptionFor(positionId: PositionId, selectionState: SelectionState) {
  const position = kaigedClientConfiguration.positions.find(
    (item) => item.id === positionId,
  );

  if (!position) return null;

  return position.options[selectionState[positionId].selectedIndex] ?? position.options[0];
}

function buildSelectedTerms(selectionState: SelectionState) {
  return kaigedClientConfiguration.positions
    .map((position) => {
      const selected = selectedOptionFor(position.id, selectionState);
      return selected?.term ?? position.options[0].term;
    })
    .join(" · ");
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

export function ClientConfigurationCard() {
  const [hydrated, setHydrated] = useState(false);
  const [selectionState, setSelectionState] = useState<SelectionState>(() =>
    defaultSelectionState(),
  );
  const [cyclingPaused, setCyclingPaused] = useState(false);
  const [scopeLocked, setScopeLocked] = useState(false);
  const [lockedAt, setLockedAt] = useState<string | null>(null);
  const [engagementShape, setEngagementShape] = useState<EngagementShape>(
    DEFAULT_ENGAGEMENT_SHAPE,
  );

  const lockedCount = useMemo(
    () =>
      kaigedClientConfiguration.positions.filter(
        (position) => selectionState[position.id].locked,
      ).length,
    [selectionState],
  );
  const selectedTerms = useMemo(
    () => buildSelectedTerms(selectionState),
    [selectionState],
  );
  const relationshipSelection = kaigedClientConfiguration.relationshipShapes.find(
    (shape) => shape.id === engagementShape,
  );
  const totalPositions = kaigedClientConfiguration.positions.length;
  const allPositionsLocked = lockedCount === totalPositions;
  const commitStatus = scopeLocked
    ? `${totalPositions} of ${totalPositions} · committed`
    : allPositionsLocked
      ? `${totalPositions} of ${totalPositions} · ready to commit`
      : `${lockedCount} of ${totalPositions} positions locked`;

  useEffect(() => {
    const hydration = window.setTimeout(() => {
      const stored = readStoredConfiguration();
      if (stored) {
        setSelectionState(sanitizeSelectionState(stored.selectionState));
        setCyclingPaused(Boolean(stored.cyclingPaused));
        setScopeLocked(Boolean(stored.scopeLocked));
        setLockedAt(stored.lockedAt ?? null);
        setEngagementShape(sanitizeEngagementShape(stored.engagementShape));
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
        cyclingPaused,
        scopeLocked,
        lockedAt,
        engagementShape,
      }),
    );
  }, [
    cyclingPaused,
    engagementShape,
    hydrated,
    lockedAt,
    scopeLocked,
    selectionState,
  ]);

  useEffect(() => {
    if (!hydrated || !allPositionsLocked || cyclingPaused) return;
    const pauseCycling = window.setTimeout(() => setCyclingPaused(true), 0);
    return () => window.clearTimeout(pauseCycling);
  }, [allPositionsLocked, cyclingPaused, hydrated]);

  useEffect(() => {
    if (!hydrated || cyclingPaused || scopeLocked || allPositionsLocked) return;

    let cursor = 0;
    const interval = window.setInterval(() => {
      setSelectionState((current) => {
        const candidates = kaigedClientConfiguration.positions.filter(
          (position) =>
            !current[position.id].locked && position.options.length > 1,
        );

        if (!candidates.length) return current;

        const position = candidates[cursor % candidates.length];
        cursor += 1;
        return advanceSelection(current, position.id);
      });
    }, 2800);

    return () => window.clearInterval(interval);
  }, [allPositionsLocked, cyclingPaused, hydrated, scopeLocked]);

  function chooseNext(positionId: PositionId) {
    if (scopeLocked) return;
    setSelectionState((current) => advanceSelection(current, positionId));
  }

  function lockPosition(positionId: PositionId) {
    setSelectionState((current) => ({
      ...current,
      [positionId]: {
        ...current[positionId],
        locked: true,
      },
    }));
  }

  function restoreDefault() {
    setSelectionState(defaultSelectionState());
    setEngagementShape(DEFAULT_ENGAGEMENT_SHAPE);
    setCyclingPaused(false);
    setScopeLocked(false);
    setLockedAt(null);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  function unlockToRevise() {
    setSelectionState((current) => {
      const next = { ...current };
      for (const position of kaigedClientConfiguration.positions) {
        next[position.id] = {
          ...current[position.id],
          locked: false,
        };
      }
      return next;
    });
    setCyclingPaused(false);
    setScopeLocked(false);
    setLockedAt(null);
  }

  function lockConfiguration() {
    setSelectionState((current) => {
      const next = { ...current };
      for (const position of kaigedClientConfiguration.positions) {
        next[position.id] = {
          ...current[position.id],
          locked: true,
        };
      }
      return next;
    });
    setCyclingPaused(true);
    setScopeLocked(true);
    setLockedAt(timestamp());
  }

  return (
    <section className="client-configuration" aria-label="Client-Led Self-Determination client configuration">
      <div className="configuration-hero">
        <div className="configuration-hero__top">
          <div>
            <p className="eyebrow">
              {kaigedClientConfiguration.title} · {kaigedClientConfiguration.ruled}
            </p>
            <h2>The client selects; the structure does not move.</h2>
            <p>{kaigedClientConfiguration.intro}</p>
          </div>
          <aside className="configuration-sequence" aria-label="Client-Led Self-Determination sequence">
            <span>{kaigedClientConfiguration.count}</span>
            <strong>{kaigedClientConfiguration.defaultMark}</strong>
            <small>{kaigedClientConfiguration.defaultSequence}</small>
          </aside>
        </div>

        <div className="configuration-console">
          <div>
            <p className="eyebrow">Client-configured</p>
            <h3 aria-live="polite">{kaigedClientConfiguration.mark}</h3>
            <p>{kaigedClientConfiguration.fixedExpansion}</p>
            <small>Configuration selection: {selectedTerms}</small>
            <span>{commitStatus}</span>
          </div>
          <div className="configuration-actions">
            <button
              className="button button--quiet-on-dark"
              disabled={allPositionsLocked}
              onClick={() => setCyclingPaused((current) => !current)}
              type="button"
            >
              {cyclingPaused ? (
                <Play size={17} aria-hidden="true" />
              ) : (
                <Pause size={17} aria-hidden="true" />
              )}
              {cyclingPaused ? "Resume cycling" : "Pause cycling"}
            </button>
            <button
              className="button button--quiet-on-dark"
              onClick={restoreDefault}
              type="button"
            >
              <RotateCcw size={17} aria-hidden="true" />
              Restore default
            </button>
            <button
              className="button button--primary"
              onClick={lockConfiguration}
              type="button"
            >
              <LockKeyhole size={17} aria-hidden="true" />
              Lock in
            </button>
            <button
              className="button button--quiet-on-dark"
              disabled={!scopeLocked && !allPositionsLocked}
              onClick={unlockToRevise}
              type="button"
            >
              <UnlockKeyhole size={17} aria-hidden="true" />
              Unlock to revise
            </button>
          </div>
        </div>
      </div>

      <div className="configuration-position-grid">
        {kaigedClientConfiguration.positions.map((position) => {
          const selected = selectedOptionFor(position.id, selectionState);
          const locked = selectionState[position.id].locked || scopeLocked;

          return (
            <article
              className={`configuration-position-card${locked ? " is-locked" : ""}`}
              key={position.id}
            >
              <button
                aria-label={`Change ${position.position} term from ${selected?.term}`}
                className="configuration-position-card__select"
                disabled={locked}
                onClick={() => chooseNext(position.id)}
                type="button"
              >
                <div className="configuration-position-card__top">
                  <p className="eyebrow">
                    {position.position} · {position.stage}
                  </p>
                  <span className="configuration-letter">{selected?.letter}</span>
                </div>
                <h3>{selected?.term}</h3>
                <p>{selected?.definition}</p>
              </button>
              <div className="configuration-lock-row">
                <button
                  className={`configuration-lock-chip${locked ? " is-locked" : ""}`}
                  disabled={locked}
                  onClick={() => lockPosition(position.id)}
                  type="button"
                >
                  <LockKeyhole size={15} aria-hidden="true" />
                  {locked ? "LOCKED" : "Lock"}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <div className="configuration-lock-grid">
        <article className="configuration-lock-panel">
          <LockKeyhole size={22} aria-hidden="true" />
          <p className="eyebrow">Lock this configuration</p>
          <h3>{commitStatus}</h3>
          <p>{kaigedClientConfiguration.scopeRecord}</p>
          <button className="button button--primary" onClick={lockConfiguration} type="button">
            <BadgeCheck size={17} aria-hidden="true" />
            Lock in
          </button>
          <p className="fine-print">
            {lockedAt ? `Committed ${lockedAt}` : "Partial locks persist in this browser until restored or committed."}
          </p>
        </article>

        <article className="configuration-method-panel">
          <ShieldCheck size={22} aria-hidden="true" />
          <p className="eyebrow">Client Relations Method</p>
          <h3>A lifecycle, not a label.</h3>
          <ul className="configuration-method-list">
            {kaigedClientConfiguration.clientRelationsMethod.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="configuration-relation-grid">
        {kaigedClientConfiguration.relationshipShapes.map((shape) => (
          <button
            aria-pressed={engagementShape === shape.id}
            className="configuration-relation-card"
            disabled={scopeLocked}
            key={shape.title}
            onClick={() => setEngagementShape(shape.id)}
            type="button"
          >
            <p className="eyebrow">{shape.label}</p>
            <h3>{shape.title}</h3>
            <p>{shape.body}</p>
          </button>
        ))}
        <article className="configuration-relation-card configuration-relation-card--active">
          <CheckCircle2 size={20} aria-hidden="true" />
          <p className="eyebrow">Current engagement shape</p>
          <h3>{relationshipSelection?.title ?? "Delivered"}</h3>
          <p>
            {relationshipSelection?.body ??
              "The engagement closes at Gate F on evidence the capability runs without AGG."}
          </p>
        </article>
      </div>

      <section className="configuration-unified" aria-labelledby="unified-architecture-title">
        <div className="configuration-section-heading">
          <p className="eyebrow">Unified Architecture</p>
          <h3 id="unified-architecture-title">{kaigedUnifiedArchitecture.title}</h3>
          <p>{kaigedUnifiedArchitecture.thesis}</p>
        </div>
        <div className="configuration-layer-grid">
          {kaigedUnifiedArchitecture.layers.map((layer) => (
            <article className="configuration-layer-card" key={layer.label}>
              <span>{layer.label}</span>
              <h4>{layer.name}</h4>
              <strong>{layer.products}</strong>
              <p>{layer.function}</p>
            </article>
          ))}
        </div>
        <div className="configuration-product-table" role="table" aria-label="Client-Led Self-Determination product portfolio">
          <div role="row">
            <span role="columnheader">Code</span>
            <span role="columnheader">Product</span>
            <span role="columnheader">Layer</span>
            <span role="columnheader">Buyer</span>
            <span role="columnheader">Revenue</span>
          </div>
          {kaigedUnifiedArchitecture.products.map((product) => (
            <div role="row" key={product.code}>
              <strong role="cell">{product.code}</strong>
              <span role="cell">{product.product}</span>
              <span role="cell">{product.layer}</span>
              <span role="cell">{product.buyer}</span>
              <span role="cell">{product.revenue}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="configuration-default" aria-labelledby="default-config-title">
        <div className="configuration-section-heading">
          <p className="eyebrow">Default Configuration</p>
          <h3 id="default-config-title">Five stages, each with an exit criterion.</h3>
        </div>
        <div className="configuration-stage-grid">
          {kaigedClientConfiguration.defaultStages.map((stage) => (
            <article className="configuration-stage-card" key={stage.label}>
              <div className="configuration-stage-card__top">
                <span>{stage.label}</span>
                <strong>{stage.letter}</strong>
              </div>
              <h4>{stage.term}</h4>
              <p>{stage.body}</p>
              <dl>
                <div className="configuration-stage-detail">
                  <dt>Entry</dt>
                  <dd>{stage.entry}</dd>
                </div>
                <div className="configuration-stage-detail">
                  <dt>Exit</dt>
                  <dd>{stage.exit}</dd>
                </div>
                <div className="configuration-stage-detail">
                  <dt>Failure mode</dt>
                  <dd>{stage.failureMode}</dd>
                </div>
                <div className="configuration-stage-detail">
                  <dt>{stage.metricType}</dt>
                  <dd>{stage.metric}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="configuration-authority" aria-label="Client-Led Self-Determination usage authority">
        <div className="configuration-section-heading">
          <p className="eyebrow">Usage Authority</p>
          <h3>Rules of the mark.</h3>
        </div>
        <div className="configuration-rule-grid">
          {kaigedClientConfiguration.usageAuthority.map((rule) => (
            <article className="configuration-rule-card" key={rule.id}>
              <span>{rule.id}</span>
              <h4>{rule.title}</h4>
              <p>{rule.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="configuration-conditions" aria-label="Client-Led Self-Determination execution conditions">
        <div className="configuration-section-heading">
          <p className="eyebrow">Execution Conditions</p>
          <h3>What this merge releases, and what it does not.</h3>
        </div>
        <div className="configuration-condition-grid">
          {kaigedUnifiedArchitecture.executionConditions.map((condition) => (
            <article className="configuration-condition-card" key={condition.title}>
              <h4>{condition.title}</h4>
              <p>{condition.body}</p>
            </article>
          ))}
        </div>
        <div className="configuration-measure-grid">
          {kaigedUnifiedArchitecture.measures.map((measure) => (
            <article className="configuration-measure-card" key={measure.type}>
              <span>{measure.type}</span>
              <p>{measure.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="configuration-ruling" aria-label="Client-Led Self-Determination ruling record">
        <div className="configuration-section-heading">
          <p className="eyebrow">Ruling Record</p>
          <h3>Two rulings - 03 and 04 Sep 2026.</h3>
        </div>
        <div className="configuration-ruling-grid">
          {kaigedClientConfiguration.rulingRecord.map((ruling) => (
            <article className="configuration-ruling-card" key={ruling.title}>
              <span>{ruling.date}</span>
              <h4>{ruling.title}</h4>
              <p>{ruling.body}</p>
            </article>
          ))}
        </div>
        <article className="configuration-ruling-cost">
          <p className="eyebrow">Ruling Cost</p>
          <p>{kaigedClientConfiguration.rulingCost}</p>
        </article>
      </section>
    </section>
  );
}

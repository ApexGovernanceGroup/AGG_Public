"use client";

import type { FormEvent, MouseEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ClipboardCheck,
  Info,
  Play,
  RotateCcw,
  ShieldCheck,
  X,
} from "lucide-react";

type CellId =
  | "intent"
  | "baseline"
  | "governance"
  | "repository"
  | "automation"
  | "portal";

type CommandCell = {
  id: CellId;
  title: string;
  tool: string;
  reference: string;
  definition: string;
  prompt: string;
  recommendation: string;
  nextStep: string;
};

type CellState = Record<CellId, { input: string; score: number }>;

type RecordEvent = {
  id: string;
  time: string;
  message: string;
};

type ProjectRecord = {
  id: string;
  initiatedAt: string;
  status: string;
  events: RecordEvent[];
};

type AuditResult = {
  grade: string;
  score: number;
  summary: string;
  recommendations: string[];
  nextSteps: string[];
  createdAt: string;
};

type ContextCard = {
  cell: CommandCell;
  x: number;
  y: number;
};

type StoredCommandCenter = {
  cellState?: CellState;
  projectRecord?: ProjectRecord | null;
  auditResult?: AuditResult | null;
};

const STORAGE_KEY = "agg-client-services-command-center-v1";

const commandCells: CommandCell[] = [
  {
    id: "intent",
    title: "Executive Intent",
    tool: "Project Initiation Signal",
    reference: "Methodology 02 - Architect the Advantage Model",
    definition:
      "Defines why the project exists, who is authorizing it, and what decision or operating outcome must improve.",
    prompt:
      "State the initiating decision, sponsor, outcome, and first constraint.",
    recommendation:
      "Name the executive sponsor, decision required, operating outcome, and first measurable success condition.",
    nextStep:
      "Convert intent into a scoped project charter and a first decision brief.",
  },
  {
    id: "baseline",
    title: "Baseline Evidence",
    tool: "Local Input Capture",
    reference: "Methodology 01 - Assess the Operating Baseline",
    definition:
      "Captures the current facts, evidence gaps, friction points, assumptions, and known constraints before design starts.",
    prompt:
      "Capture the evidence already available and the missing evidence required.",
    recommendation:
      "Separate observed facts from assumptions, then identify the evidence needed before resourcing the next step.",
    nextStep:
      "Build the baseline evidence register and mark unresolved assumptions.",
  },
  {
    id: "governance",
    title: "Governance Control",
    tool: "Authority and Stewardship Cell",
    reference: "Methodology 03 - Govern the Decision System",
    definition:
      "Maps decision rights, stewardship, control points, approval gates, and escalation paths for the work.",
    prompt:
      "List the decision owner, approver, steward, control point, and escalation path.",
    recommendation:
      "Assign one accountable owner, one approval path, and one control point before work expands.",
    nextStep:
      "Publish the decision-rights map and review rhythm for the project.",
  },
  {
    id: "repository",
    title: "Repository Spine",
    tool: "GitHub Delivery Record",
    reference: "Methodology 04 - Engineer the Working Layer",
    definition:
      "Defines where artifacts, issues, decisions, releases, and implementation records will live under source control.",
    prompt:
      "Identify the repository, artifact folders, issue pattern, and release record.",
    recommendation:
      "Create a repository structure that separates source, decisions, deliverables, actions, and release notes.",
    nextStep:
      "Open the delivery repository and create the first controlled issue set.",
  },
  {
    id: "automation",
    title: "Automation Fit",
    tool: "Automation Readiness Cell",
    reference: "Client-Led Self-Determination - K-AGENT governed retrieval and engineering support",
    definition:
      "Tests whether automation can improve decision speed without bypassing review, authority, or auditability.",
    prompt:
      "Identify the repeatable work, trigger, human review point, and audit record.",
    recommendation:
      "Automate only repeatable work with clear inputs, stable outputs, and an accountable human review point.",
    nextStep:
      "Rank automation candidates by value, control risk, and evidence quality.",
  },
  {
    id: "portal",
    title: "Portal Communication",
    tool: "Client Portal Coordination Cell",
    reference: "Client Portal - Status, Actions, Programs, Comments",
    definition:
      "Defines how project status, decisions, risks, comments, and next actions stay visible to the client.",
    prompt:
      "Capture the communication rhythm, status fields, comment rules, and action-review cadence.",
    recommendation:
      "Set the update rhythm, decision log, comment channel, action owner, and next review date.",
    nextStep:
      "Connect the project record to the client portal status and comment workflow.",
  },
];

const scoreOptions = [1, 2, 3, 4, 5];

function emptyCellState(): CellState {
  return commandCells.reduce((state, cell) => {
    state[cell.id] = { input: "", score: 3 };
    return state;
  }, {} as CellState);
}

function timestamp() {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
}

function eventId() {
  return `event-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function buildEvent(message: string): RecordEvent {
  return {
    id: eventId(),
    time: timestamp(),
    message,
  };
}

function buildAudit(cellState: CellState): AuditResult {
  const scores = commandCells.map((cell) => cellState[cell.id].score);
  const score =
    Math.round(
      (scores.reduce((total, current) => total + current, 0) / scores.length) *
        10,
    ) / 10;

  const grade =
    score >= 4.5
      ? "A - Installed"
      : score >= 3.7
        ? "B - Controlled"
        : score >= 2.7
          ? "C - Developing"
          : "D - Intervention Required";

  const weakCells = commandCells.filter((cell) => {
    const state = cellState[cell.id];
    return state.score <= 3 || state.input.trim().length < 24;
  });

  const recommendations = weakCells.length
    ? weakCells.slice(0, 4).map((cell) => {
        const state = cellState[cell.id];
        if (state.input.trim().length < 24) {
          return `Capture stronger local input for ${cell.title}: ${cell.prompt}`;
        }
        return `Improve ${cell.title}: ${cell.recommendation}`;
      })
    : [
        "Maintain the current architecture, publish the decision record, and move into execution review.",
      ];

  const nextSteps = weakCells.length
    ? weakCells.slice(0, 3).map((cell) => cell.nextStep)
    : [
        "Move the project into the client portal.",
        "Assign owners to the next improvement backlog.",
        "Schedule the exit proof review.",
      ];

  return {
    grade,
    score,
    summary:
      score >= 3.7
        ? "The project has enough structure to move forward under controlled execution."
        : "The project needs stronger baseline, control, or implementation definition before scaling.",
    recommendations,
    nextSteps,
    createdAt: timestamp(),
  };
}

function readStoredCommandCenter(): StoredCommandCenter | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as StoredCommandCenter;
  } catch {
    return null;
  }
}

export function ClientServicesCommandCenter() {
  const [hydrated, setHydrated] = useState(false);
  const [cellState, setCellState] = useState<CellState>(() => emptyCellState());
  const [projectRecord, setProjectRecord] = useState<ProjectRecord | null>(null);
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [contextCard, setContextCard] = useState<ContextCard | null>(null);

  const completedInputs = useMemo(
    () =>
      commandCells.filter((cell) => cellState[cell.id].input.trim().length >= 24)
        .length,
    [cellState],
  );

  useEffect(() => {
    const hydration = window.setTimeout(() => {
      const stored = readStoredCommandCenter();
      if (stored?.cellState) setCellState(stored.cellState);
      if (stored?.projectRecord) setProjectRecord(stored.projectRecord);
      if (stored?.auditResult) setAuditResult(stored.auditResult);
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(hydration);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ cellState, projectRecord, auditResult }),
    );
  }, [auditResult, cellState, hydrated, projectRecord]);

  function addRecordEvent(message: string) {
    setProjectRecord((current) => {
      if (!current) return current;
      return {
        ...current,
        status: "Recording locally",
        events: [buildEvent(message), ...current.events].slice(0, 8),
      };
    });
  }

  function buildProjectRecord(events: RecordEvent[] = []): ProjectRecord {
    const initiatedAt = timestamp();
    const id = `AGG-${Date.now().toString(36).toUpperCase()}`;
    return {
      id,
      initiatedAt,
      status: "Recording locally",
      events: [
        buildEvent("Command Center signal received: new project initiated by user."),
        ...events,
      ],
    };
  }

  function startProject() {
    setProjectRecord(buildProjectRecord());
  }

  function resetLocalRecord() {
    setCellState(emptyCellState());
    setProjectRecord(null);
    setAuditResult(null);
    setContextCard(null);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  function updateCellInput(id: CellId, input: string) {
    setCellState((current) => ({
      ...current,
      [id]: { ...current[id], input },
    }));
  }

  function updateCellScore(id: CellId, score: number) {
    setCellState((current) => ({
      ...current,
      [id]: { ...current[id], score },
    }));
    addRecordEvent(`Grade updated for ${commandCells.find((cell) => cell.id === id)?.title ?? "cell"}.`);
  }

  function openContextCard(event: MouseEvent<HTMLElement>, cell: CommandCell) {
    event.preventDefault();
    const cardWidth = 340;
    const cardHeight = 290;
    const x = Math.min(event.clientX, window.innerWidth - cardWidth - 16);
    const y = Math.min(event.clientY, window.innerHeight - cardHeight - 16);
    setContextCard({
      cell,
      x: Math.max(16, x),
      y: Math.max(16, y),
    });
  }

  function runAudit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = buildAudit(cellState);
    const auditEvent = buildEvent(
      `Audit completed with grade ${result.grade} and score ${result.score}.`,
    );
    setAuditResult(result);
    setProjectRecord((current) => {
      if (!current) return buildProjectRecord([auditEvent]);
      return {
        ...current,
        status: "Recording locally",
        events: [auditEvent, ...current.events].slice(0, 8),
      };
    });
  }

  return (
    <section className="command-center" aria-label="Client Services Command Center">
      <div className="command-center__header">
        <div>
          <p className="eyebrow">Command Center</p>
          <h2>Initiate, record, audit, and improve the client service lane.</h2>
          <p>
            Start begins a local project record. Audit evaluates the captured
            cell inputs, grades the current operating baseline, and produces
            recommendations with next steps. Each cell carries a contextual
            reference for its definition, tool, and governing method.
          </p>
        </div>
        <div className="command-center__actions">
          <button className="button button--primary" onClick={startProject} type="button">
            <Play size={18} aria-hidden="true" />
            Start Project
          </button>
          <form onSubmit={runAudit}>
            <button className="button button--quiet" type="submit">
              <ClipboardCheck size={18} aria-hidden="true" />
              Run Audit
            </button>
          </form>
        </div>
      </div>

      <div className="command-status-grid">
        <div className="command-record">
          <Activity size={21} aria-hidden="true" />
          <p className="eyebrow">Local Recording</p>
          <h3>{projectRecord ? projectRecord.status : "Ready to initiate"}</h3>
          <p>
            {projectRecord
              ? `${projectRecord.id} opened ${projectRecord.initiatedAt}. Inputs and audit output are stored in this browser.`
              : "Press Start Project to signal a new project initiation and begin local browser recording."}
          </p>
        </div>
        <div className="command-record">
          <ShieldCheck size={21} aria-hidden="true" />
          <p className="eyebrow">Input Completion</p>
          <h3>
            {completedInputs} of {commandCells.length} cells
          </h3>
          <p>
            Local capture is strongest when each cell identifies owner,
            evidence, constraint, current condition, and requested next action.
          </p>
        </div>
        <div className="command-record">
          <ClipboardCheck size={21} aria-hidden="true" />
          <p className="eyebrow">Audit Result</p>
          <h3>{auditResult ? auditResult.grade : "Not run"}</h3>
          <p>
            {auditResult
              ? `${auditResult.score}/5 scored ${auditResult.createdAt}.`
              : "Run Audit after entering local cell inputs and readiness grades."}
          </p>
        </div>
      </div>

      <form className="command-grid" onSubmit={runAudit}>
        {commandCells.map((cell) => (
          <article
            className="command-cell"
            key={cell.id}
            onContextMenu={(event) => openContextCard(event, cell)}
            tabIndex={0}
          >
            <div className="command-cell__top">
              <div>
                <p className="eyebrow">{cell.tool}</p>
                <h3>{cell.title}</h3>
              </div>
              <button
                aria-label={`Show reference for ${cell.title}`}
                className="command-cell__info"
                onClick={(event) => openContextCard(event, cell)}
                type="button"
              >
                <Info size={17} aria-hidden="true" />
              </button>
            </div>
            <label htmlFor={`command-${cell.id}`}>Local input</label>
            <textarea
              id={`command-${cell.id}`}
              onBlur={() => addRecordEvent(`Local input captured for ${cell.title}.`)}
              onChange={(event) => updateCellInput(cell.id, event.target.value)}
              placeholder={cell.prompt}
              rows={4}
              value={cellState[cell.id].input}
            />
            <div className="command-cell__score">
              <label htmlFor={`score-${cell.id}`}>Readiness grade</label>
              <select
                id={`score-${cell.id}`}
                onChange={(event) => updateCellScore(cell.id, Number(event.target.value))}
                value={cellState[cell.id].score}
              >
                {scoreOptions.map((score) => (
                  <option key={score} value={score}>
                    {score} / 5
                  </option>
                ))}
              </select>
            </div>
          </article>
        ))}
      </form>

      <div className="command-output-grid">
        <section className="command-audit-panel" aria-live="polite">
          <p className="eyebrow">Audit Output</p>
          <h3>{auditResult ? auditResult.grade : "Run Audit for recommendations"}</h3>
          <p>
            {auditResult
              ? auditResult.summary
              : "Audit output will grade the current baseline, identify weak cells, recommend improvements, and produce next steps."}
          </p>
          {auditResult && (
            <div className="command-audit-panel__lists">
              <div>
                <strong>Recommendations</strong>
                <ul>
                  {auditResult.recommendations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Next Steps</strong>
                <ul>
                  {auditResult.nextSteps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        <section className="command-event-log">
          <div className="command-event-log__top">
            <div>
              <p className="eyebrow">Recording Log</p>
              <h3>Local project events</h3>
            </div>
            <button className="button button--quiet button--small" onClick={resetLocalRecord} type="button">
              <RotateCcw size={16} aria-hidden="true" />
              Reset
            </button>
          </div>
          {projectRecord?.events.length ? (
            <ol>
              {projectRecord.events.map((event) => (
                <li key={event.id}>
                  <span>{event.time}</span>
                  <p>{event.message}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p>
              No local project events recorded. Start a project to create the
              initiation signal.
            </p>
          )}
        </section>
      </div>

      {contextCard && (
        <div
          className="command-context-card"
          role="dialog"
          style={{ left: contextCard.x, top: contextCard.y }}
        >
          <button
            aria-label="Close reference card"
            className="command-context-card__close"
            onClick={() => setContextCard(null)}
            type="button"
          >
            <X size={16} aria-hidden="true" />
          </button>
          <p className="eyebrow">Cell Reference</p>
          <h3>{contextCard.cell.title}</h3>
          <p>{contextCard.cell.definition}</p>
          <dl>
            <div>
              <dt>Tool</dt>
              <dd>{contextCard.cell.tool}</dd>
            </div>
            <div>
              <dt>Reference</dt>
              <dd>{contextCard.cell.reference}</dd>
            </div>
          </dl>
        </div>
      )}
    </section>
  );
}

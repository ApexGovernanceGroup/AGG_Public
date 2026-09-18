"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  Send,
  ShieldCheck,
  UserRound,
} from "lucide-react";

type WorkStatus = "On Track" | "Watch" | "Blocked" | "Complete";
type WorkType = "Project Effort" | "Program" | "Action";
type Filter = "All" | "Project Efforts" | "Programs" | "Actions";

type WorkItem = {
  title: string;
  type: WorkType;
  owner: string;
  status: WorkStatus;
  progress: number;
  due: string;
  nextStep: string;
};

type ClientPortfolio = {
  id: string;
  client: string;
  name: string;
  sponsor: string;
  phase: string;
  status: WorkStatus;
  progress: number;
  updated: string;
  summary: string;
  workItems: WorkItem[];
};

type CommentEntry = {
  id: string;
  author: string;
  role: string;
  time: string;
  body: string;
};

const filters: Filter[] = ["All", "Project Efforts", "Programs", "Actions"];

const portfolios: ClientPortfolio[] = [
  {
    id: "governance-install",
    client: "Client Command Cell",
    name: "Governance Operating Model Installation",
    sponsor: "Executive Sponsor",
    phase: "Sprint 02 - Operating Rhythm",
    status: "On Track",
    progress: 68,
    updated: "Sep 4, 2026",
    summary:
      "Authority model, decision rhythm, evidence requirements, and delivery scorecard are moving through installation.",
    workItems: [
      {
        title: "Decision forum charter",
        type: "Project Effort",
        owner: "AGG Lead",
        status: "Complete",
        progress: 100,
        due: "Sep 2",
        nextStep: "Sponsor concurrence logged.",
      },
      {
        title: "Portfolio action register",
        type: "Action",
        owner: "Client PMO",
        status: "On Track",
        progress: 72,
        due: "Sep 9",
        nextStep: "Confirm action owners and close stale dependencies.",
      },
      {
        title: "Program health dashboard",
        type: "Program",
        owner: "AGG Analyst",
        status: "Watch",
        progress: 56,
        due: "Sep 13",
        nextStep: "Resolve source metric gaps before executive review.",
      },
      {
        title: "Knowledge repository intake",
        type: "Project Effort",
        owner: "Repository Steward",
        status: "On Track",
        progress: 64,
        due: "Sep 16",
        nextStep: "Map source folders to controlled taxonomy.",
      },
    ],
  },
  {
    id: "academy-cohort",
    client: "Private Academy Cohort",
    name: "AI, Automation, and DG Workforce Pathway",
    sponsor: "Learning Sponsor",
    phase: "Cohort Design",
    status: "Watch",
    progress: 42,
    updated: "Sep 4, 2026",
    summary:
      "Private education scope is aligning audience, track sequence, delivery model, and measurable workforce outcomes.",
    workItems: [
      {
        title: "Cohort learning map",
        type: "Program",
        owner: "Apex Academy",
        status: "On Track",
        progress: 58,
        due: "Sep 10",
        nextStep: "Lock module order for AI, automation, DG, repository, and ecosystem tracks.",
      },
      {
        title: "Participant baseline survey",
        type: "Action",
        owner: "Client Sponsor",
        status: "Watch",
        progress: 30,
        due: "Sep 11",
        nextStep: "Confirm roster and role mix.",
      },
      {
        title: "Repository lab environment",
        type: "Project Effort",
        owner: "AGG Builder",
        status: "Blocked",
        progress: 22,
        due: "Sep 18",
        nextStep: "Client must confirm GitHub organization access policy.",
      },
    ],
  },
];

const initialComments: CommentEntry[] = [
  {
    id: "comment-1",
    author: "AGG Lead",
    role: "Delivery",
    time: "Today 0910",
    body:
      "Decision forum charter is complete. Next focus is closing action-owner gaps before the sponsor review.",
  },
  {
    id: "comment-2",
    author: "Client PMO",
    role: "Client",
    time: "Today 0835",
    body:
      "Please flag any blocked items that require executive-level intervention before the weekly decision window.",
  },
];

function statusClass(status: WorkStatus): string {
  return status.toLowerCase().replaceAll(" ", "-");
}

function StatusIcon({ status }: { status: WorkStatus }) {
  if (status === "Complete") return <CheckCircle2 size={17} aria-hidden="true" />;
  if (status === "Watch") return <Clock3 size={17} aria-hidden="true" />;
  if (status === "Blocked") return <AlertTriangle size={17} aria-hidden="true" />;
  return <ShieldCheck size={17} aria-hidden="true" />;
}

export function ClientPortalDashboard() {
  const [activeId, setActiveId] = useState(portfolios[0].id);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [comments, setComments] = useState<CommentEntry[]>(initialComments);
  const [draft, setDraft] = useState("");

  const activePortfolio = portfolios.find((item) => item.id === activeId) ?? portfolios[0];

  const visibleWork = useMemo(() => {
    if (activeFilter === "All") return activePortfolio.workItems;
    const typeMap: Record<Exclude<Filter, "All">, WorkType> = {
      "Project Efforts": "Project Effort",
      Programs: "Program",
      Actions: "Action",
    };
    return activePortfolio.workItems.filter((item) => item.type === typeMap[activeFilter]);
  }, [activeFilter, activePortfolio]);

  const statusCounts = activePortfolio.workItems.reduce(
    (counts, item) => {
      counts[item.status] += 1;
      return counts;
    },
    { "On Track": 0, Watch: 0, Blocked: 0, Complete: 0 } as Record<WorkStatus, number>,
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = draft.trim();
    if (!body) return;
    setComments((current) => [
      {
        id: `comment-${current.length + 1}`,
        author: "Client User",
        role: "Comment",
        time: "Just now",
        body,
      },
      ...current,
    ]);
    setDraft("");
  }

  return (
    <div className="portal-shell" aria-label="Client portal dashboard">
      <aside className="portal-card portal-switcher">
        <p className="eyebrow">Client-Specific Dashboard</p>
        <h2>Portfolio workspace</h2>
        <div className="portal-switcher__list">
          {portfolios.map((portfolio) => (
            <button
              aria-pressed={portfolio.id === activeId}
              className="portal-switch"
              key={portfolio.id}
              onClick={() => {
                setActiveId(portfolio.id);
                setActiveFilter("All");
              }}
              type="button"
            >
              <span>{portfolio.client}</span>
              <strong>{portfolio.name}</strong>
            </button>
          ))}
        </div>
      </aside>

      <section className="portal-board">
        <div className="portal-card portal-summary">
          <div>
            <p className="eyebrow">{activePortfolio.phase}</p>
            <h2>{activePortfolio.name}</h2>
            <p>{activePortfolio.summary}</p>
          </div>
          <div className="portal-progress">
            <span>Current Progress</span>
            <strong>{activePortfolio.progress}%</strong>
            <div className="portal-progress__track" aria-hidden="true">
              <span style={{ width: `${activePortfolio.progress}%` }} />
            </div>
            <small>Updated {activePortfolio.updated}</small>
          </div>
        </div>

        <div className="portal-stat-grid" aria-label="Current progress and status">
          {Object.entries(statusCounts).map(([status, count]) => (
            <div className={`portal-stat portal-status--${statusClass(status as WorkStatus)}`} key={status}>
              <StatusIcon status={status as WorkStatus} />
              <span>{status}</span>
              <strong>{count}</strong>
            </div>
          ))}
        </div>

        <div className="portal-controls" aria-label="Dashboard filters">
          {filters.map((filter) => (
            <button
              aria-pressed={filter === activeFilter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portal-work-layout">
          <section className="portal-work-panel">
            <div className="portal-panel-heading">
              <p className="eyebrow">Project Efforts, Programs, and Actions</p>
              <h2>Status register</h2>
            </div>
            <div className="portal-work-list">
              {visibleWork.map((item) => (
                <article className="portal-work-card" key={item.title}>
                  <div className="portal-work-card__top">
                    <span>{item.type}</span>
                    <strong className={`portal-pill portal-status--${statusClass(item.status)}`}>
                      <StatusIcon status={item.status} />
                      {item.status}
                    </strong>
                  </div>
                  <h3>{item.title}</h3>
                  <dl>
                    <div>
                      <dt>Owner</dt>
                      <dd>{item.owner}</dd>
                    </div>
                    <div>
                      <dt>Due</dt>
                      <dd>{item.due}</dd>
                    </div>
                  </dl>
                  <div className="portal-progress portal-progress--small">
                    <span>Progress</span>
                    <strong>{item.progress}%</strong>
                    <div className="portal-progress__track" aria-hidden="true">
                      <span style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                  <p>{item.nextStep}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="portal-card portal-comments">
            <div className="portal-panel-heading">
              <p className="eyebrow">Chats and Comments</p>
              <h2>Open communication</h2>
            </div>
            <div className="comment-thread" aria-live="polite">
              {comments.map((comment) => (
                <article className="comment-bubble" key={comment.id}>
                  <div>
                    <UserRound size={16} aria-hidden="true" />
                    <strong>{comment.author}</strong>
                    <span>{comment.role}</span>
                  </div>
                  <p>{comment.body}</p>
                  <time>{comment.time}</time>
                </article>
              ))}
            </div>
            <form className="comment-form" onSubmit={handleSubmit}>
              <label htmlFor="portal-comment">Add a comment</label>
              <textarea
                id="portal-comment"
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Post a status question, decision note, or coordination item."
                rows={4}
                value={draft}
              />
              <button className="button button--primary" type="submit">
                <Send size={17} aria-hidden="true" />
                Send comment
              </button>
            </form>
          </aside>
        </div>
      </section>

      <div className="portal-card portal-access-note">
        <MessageSquareText size={21} aria-hidden="true" />
        <div>
          <h2>Client portal access opens during onboarding.</h2>
          <p>
            Production access should bind to identity, role-based permissions, audit logging,
            persistent project records, and controlled client-specific communication threads.
          </p>
        </div>
      </div>
    </div>
  );
}

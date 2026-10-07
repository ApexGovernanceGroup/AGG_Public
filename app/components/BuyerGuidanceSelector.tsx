"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, RotateCcw, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import type { EngagementPackage } from "../commerce";

type GuidanceOption = {
  id: string;
  label: string;
  detail: string;
  reason: string;
  weights: Partial<Record<string, number>>;
};

type GuidanceQuestion = {
  id: string;
  kicker: string;
  title: string;
  options: GuidanceOption[];
};

type BuyerGuidanceSelectorProps = {
  packages: EngagementPackage[];
  headingId: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
};

const guidanceQuestions = [
  {
    id: "pressure",
    kicker: "Need",
    title: "What pressure should Apex help you reduce first?",
    options: [
      {
        id: "decision",
        label: "Need a first executive decision",
        detail: "Leadership needs the issue framed, bounded, and sequenced.",
        reason: "You need a fast decision artifact before a larger commitment.",
        weights: { diagnostic: 5, sprint: 2, retainer: 1 },
      },
      {
        id: "continuity",
        label: "Knowledge or handoff risk",
        detail: "Critical knowledge, ownership, or continuity is exposed.",
        reason: "The primary risk is continuity, ownership, and knowledge transfer.",
        weights: { "continuity-assessment": 5, diagnostic: 2, retainer: 1 },
      },
      {
        id: "artifact",
        label: "Need a usable product",
        detail: "The requirement is a memo, SOP, policy, checklist, or template.",
        reason: "The request points to a defined governed product or document set.",
        weights: { "product-kit": 5, diagnostic: 1, sprint: 1 },
      },
      {
        id: "operating-model",
        label: "Need the operating model",
        detail: "Decision rights, controls, rhythm, or governance need design.",
        reason: "The client need is broader than one artifact and requires governance design.",
        weights: { sprint: 5, retainer: 2, diagnostic: 1 },
      },
    ],
  },
  {
    id: "tempo",
    kicker: "Tempo",
    title: "What timeline feels real?",
    options: [
      {
        id: "fast",
        label: "1-2 weeks",
        detail: "Fast read, fast brief, fast decision.",
        reason: "The timeline favors a bounded diagnostic or exposure assessment.",
        weights: { diagnostic: 4, "continuity-assessment": 3 },
      },
      {
        id: "build",
        label: "2-4 weeks",
        detail: "Enough time to produce a governed product or design sprint.",
        reason: "The schedule supports production work, refinement, and handoff.",
        weights: { "product-kit": 3, sprint: 4 },
      },
      {
        id: "event",
        label: "One learning event",
        detail: "A half-day, full-day, remote, hybrid, or in-person lab.",
        reason: "The timeline aligns to a private education or workforce lab event.",
        weights: { "academy-lab": 5, "product-kit": 1 },
      },
      {
        id: "ongoing",
        label: "Monthly or continuing",
        detail: "The need requires recurring executive rhythm and decision support.",
        reason: "The requirement is not one deliverable; it needs a standing advisory cadence.",
        weights: { retainer: 5, sprint: 2 },
      },
    ],
  },
  {
    id: "output",
    kicker: "Output",
    title: "What final output would create confidence?",
    options: [
      {
        id: "brief",
        label: "Decision brief",
        detail: "A short, evidence-backed recommendation with next actions.",
        reason: "A decision brief is the fastest path to sponsor confidence.",
        weights: { diagnostic: 5, retainer: 1 },
      },
      {
        id: "risk-map",
        label: "Exposure map",
        detail: "A risk-ranked map of knowledge, owner, and handoff exposure.",
        reason: "The most useful output is a visible exposure and remediation map.",
        weights: { "continuity-assessment": 5, diagnostic: 1 },
      },
      {
        id: "product",
        label: "Product package",
        detail: "A polished file set the team can use, route, or approve.",
        reason: "The desired outcome is a finished product package.",
        weights: { "product-kit": 5, "academy-lab": 1 },
      },
      {
        id: "rhythm",
        label: "Operating rhythm",
        detail: "A model, backlog, cadence, and decision-control structure.",
        reason: "The needed output is an executable rhythm, not only analysis.",
        weights: { sprint: 4, retainer: 3 },
      },
    ],
  },
  {
    id: "audience",
    kicker: "Audience",
    title: "Who has to use or approve the work?",
    options: [
      {
        id: "executives",
        label: "Executive sponsor group",
        detail: "CEO, founder, commander, C-suite, director, or senior staff.",
        reason: "The buyer is executive-level and needs senior decision utility.",
        weights: { diagnostic: 3, retainer: 3, sprint: 2 },
      },
      {
        id: "operators",
        label: "Operating team",
        detail: "A function, section, PMO, staff shop, or owner group.",
        reason: "The work must land with the team that executes the process.",
        weights: { "product-kit": 3, "continuity-assessment": 2, sprint: 2 },
      },
      {
        id: "workforce",
        label: "Workforce or cohort",
        detail: "Participants need training, certification support, or applied practice.",
        reason: "The target audience is a learning cohort or workforce group.",
        weights: { "academy-lab": 5, "product-kit": 1 },
      },
      {
        id: "portfolio",
        label: "Portfolio or enterprise lane",
        detail: "Multiple initiatives, owners, risks, or decisions must be governed.",
        reason: "The problem has portfolio or enterprise implications.",
        weights: { retainer: 4, sprint: 4, diagnostic: 1 },
      },
    ],
  },
  {
    id: "readiness",
    kicker: "Readiness",
    title: "How much source material is already available?",
    options: [
      {
        id: "thin",
        label: "We need discovery first",
        detail: "The problem is known, but evidence and language are scattered.",
        reason: "Discovery is needed before larger design or production work.",
        weights: { diagnostic: 4, "continuity-assessment": 2 },
      },
      {
        id: "evidence",
        label: "Evidence exists",
        detail: "Plans, records, dashboards, drafts, or process material are available.",
        reason: "Existing evidence can accelerate assessment, product, or sprint delivery.",
        weights: { "continuity-assessment": 3, "product-kit": 3, sprint: 2 },
      },
      {
        id: "sensitive",
        label: "Access must be controlled",
        detail: "Protected records, private context, or internal review rules apply.",
        reason: "The work requires controlled onboarding and careful boundary management.",
        weights: { retainer: 3, sprint: 2, diagnostic: 1 },
      },
      {
        id: "people",
        label: "People need practice",
        detail: "The issue is capability, adoption, or applied behavior.",
        reason: "The work needs instruction, practice, and role-specific enablement.",
        weights: { "academy-lab": 5, retainer: 1 },
      },
    ],
  },
] satisfies GuidanceQuestion[];

const defaultAnswers = Object.fromEntries(
  guidanceQuestions.map((question) => [question.id, question.options[0].id]),
) as Record<string, string>;

function scorePackages(packages: EngagementPackage[], answers: Record<string, string>) {
  const scores = new Map(packages.map((packageItem) => [packageItem.id, 0]));
  const reasons: string[] = [];

  for (const question of guidanceQuestions) {
    const selectedOption = question.options.find(
      (option) => option.id === answers[question.id],
    );

    if (!selectedOption) continue;

    reasons.push(selectedOption.reason);

    for (const [packageId, weight] of Object.entries(selectedOption.weights)) {
      if (!scores.has(packageId)) continue;
      scores.set(packageId, (scores.get(packageId) ?? 0) + weight);
    }
  }

  let topPackage = packages[0] ?? null;
  let topScore = -1;

  for (const packageItem of packages) {
    const score = scores.get(packageItem.id) ?? 0;
    if (score > topScore) {
      topPackage = packageItem;
      topScore = score;
    }
  }

  return {
    packageItem: topPackage,
    score: topScore,
    reasons: reasons.slice(0, 4),
  };
}

function getFitSignal(score: number) {
  if (score >= 15) return "Strong fit signal";
  if (score >= 10) return "Good fit signal";
  return "Exploratory fit signal";
}

export function BuyerGuidanceSelector({
  packages,
  headingId,
  eyebrow = "Guided First Move",
  title = "Find Your First Move",
  intro =
    "Answer five public-safe scoping questions. The selector recommends the closest Apex starting point, then routes you into controlled onboarding or the storefront listing.",
}: BuyerGuidanceSelectorProps) {
  const [selectedAnswers, setSelectedAnswers] = useState(defaultAnswers);
  const analysis = useMemo(
    () => scorePackages(packages, selectedAnswers),
    [packages, selectedAnswers],
  );
  const recommendation = analysis.packageItem;

  if (!recommendation) return null;

  const fitSignal = getFitSignal(analysis.score);
  const requiredInputs = recommendation.deepDive.apexRequiredInputs.slice(0, 4);
  const finalOutputs = recommendation.deepDive.apexGeneratedFinalOutputs.slice(0, 4);

  function selectAnswer(questionId: string, optionId: string) {
    setSelectedAnswers((current) => ({
      ...current,
      [questionId]: optionId,
    }));
  }

  return (
    <article className="buyer-guidance" aria-labelledby={headingId}>
      <div className="buyer-guidance__header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={headingId}>{title}</h2>
          <p>{intro}</p>
        </div>
        <div className="buyer-guidance__status" aria-label="Guidance status">
          <Compass size={22} aria-hidden="true" />
          <span>Public-safe selector</span>
          <strong>{fitSignal}</strong>
        </div>
      </div>

      <div className="buyer-guidance__matrix">
        <div className="buyer-guidance__questions" aria-label="Buyer guidance questions">
          {guidanceQuestions.map((question) => (
            <section className="buyer-guidance__question" key={question.id}>
              <div className="buyer-guidance__question-top">
                <span>{question.kicker}</span>
                <h3>{question.title}</h3>
              </div>
              <div className="buyer-guidance__options">
                {question.options.map((option) => (
                  <button
                    aria-pressed={selectedAnswers[question.id] === option.id}
                    className="buyer-guidance__option"
                    key={option.id}
                    onClick={() => selectAnswer(question.id, option.id)}
                    type="button"
                  >
                    <strong>{option.label}</strong>
                    <span>{option.detail}</span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside
          className="buyer-guidance__result"
          aria-label="Recommended first move"
          aria-live="polite"
        >
          <div className="buyer-guidance__result-top">
            <ShieldCheck size={24} aria-hidden="true" />
            <div>
              <p className="eyebrow">Recommended first move</p>
              <h3>{recommendation.name}</h3>
              <span>
                {recommendation.sku} | {recommendation.displayPrice}
              </span>
            </div>
          </div>

          <p className="buyer-guidance__summary">{recommendation.description}</p>

          <div className="buyer-guidance__fit">
            <strong>Why this fits</strong>
            <ul>
              {analysis.reasons.map((reason) => (
                <li key={reason}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="buyer-guidance__detail-grid">
            <section>
              <strong>Apex required inputs to prepare</strong>
              <ul>
                {requiredInputs.map((input) => (
                  <li key={input}>{input}</li>
                ))}
              </ul>
            </section>
            <section>
              <strong>Likely final outputs</strong>
              <ul>
                {finalOutputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="buyer-guidance__next">
            <strong>What happens next</strong>
            <p>
              Open a client record, confirm scope, validate authority and access,
              then convert the recommendation into checkout, production, or a
              controlled delivery package.
            </p>
          </div>

          <div className="buyer-guidance__actions">
            <Link
              className="button button--primary"
              data-agg-event="cta"
              data-agg-label={`guided first move onboarding ${recommendation.id}`}
              href={`/client-onboarding?intent=guided-first-move&packageId=${encodeURIComponent(
                recommendation.id,
              )}`}
            >
              Start guided onboarding
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              className="button button--quiet"
              data-agg-event="cta"
              data-agg-label={`guided first move storefront ${recommendation.id}`}
              href={`/engage#storefront-${recommendation.id}`}
            >
              Review storefront listing
            </Link>
            <button
              className="button button--quiet buyer-guidance__reset"
              onClick={() => setSelectedAnswers(defaultAnswers)}
              type="button"
            >
              <RotateCcw size={16} aria-hidden="true" />
              Reset guidance
            </button>
          </div>
        </aside>
      </div>
    </article>
  );
}

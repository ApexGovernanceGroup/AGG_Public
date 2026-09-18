export type EngagementPackage = {
  id: string;
  name: string;
  category: string;
  displayPrice: string;
  unitAmount: number;
  timeline: string;
  bestFor: string;
  scaleBasis: string;
  description: string;
  deliverables: string[];
};

export const engagementPackages: EngagementPackage[] = [
  {
    id: "diagnostic",
    name: "Executive Diagnostic Brief",
    category: "Diagnostic",
    displayPrice: "Market & Scale Value",
    unitAmount: 250000,
    timeline: "1-2 weeks",
    bestFor: "Leaders who need a fast, evidence-backed first decision.",
    scaleBasis: "One sponsor group, one operating problem, one decision brief.",
    description:
      "A decision-grade read of where coherence is breaking, with the entry baseline every later proof is measured against.",
    deliverables: [
      "Intake review and executive interview structure",
      "Decision friction map",
      "90-day action brief",
    ],
  },
  {
    id: "continuity-assessment",
    name: "Continuity Exposure Assessment",
    category: "Assessment",
    displayPrice: "Market & Scale Value",
    unitAmount: 350000,
    timeline: "2 weeks",
    bestFor: "Teams worried about knowledge loss, turnover, or fragile handoffs.",
    scaleBasis: "One function, team, role family, or continuity exposure area.",
    description:
      "A targeted exposure scan of critical knowledge, ownership, retrieval, continuity, and handoff risk.",
    deliverables: [
      "Continuity exposure map",
      "Critical knowledge and owner inventory",
      "Risk-ranked remediation backlog",
    ],
  },
  {
    id: "product-kit",
    name: "Governed Product Kit",
    category: "Product",
    displayPrice: "Market & Scale Value",
    unitAmount: 450000,
    timeline: "2-3 weeks",
    bestFor: "Organizations that need a usable charter, SOP, policy, or job-aid set.",
    scaleBasis: "One product family or governed artifact set for one owner group.",
    description:
      "A customized, client-ready product package built from the AGG catalog of charters, policies, SOPs, plans, registers, and job aids.",
    deliverables: [
      "One tailored governed product set",
      "Authority, evidence, and review logic",
      "Implementation checklist and handoff notes",
    ],
  },
  {
    id: "academy-lab",
    name: "Apex Academy Private Lab",
    category: "Seminar",
    displayPrice: "Market & Scale Value",
    unitAmount: 650000,
    timeline: "Half-day to 1 day",
    bestFor: "Executives, stewards, analysts, PMOs, and product teams.",
    scaleBasis: "One private cohort, seminar audience, or lab event.",
    description:
      "A private applied seminar for governed AI, automation, repository operations, knowledge systems, or decision-support methods.",
    deliverables: [
      "Private seminar or lab plan",
      "Applied exercises and role-specific job aids",
      "Readiness notes and follow-on adoption options",
    ],
  },
  {
    id: "sprint",
    name: "Governance Design Sprint",
    category: "Sprint",
    displayPrice: "Market & Scale Value",
    unitAmount: 950000,
    timeline: "3-4 weeks",
    bestFor: "Teams ready to design the operating model and implementation path.",
    scaleBasis: "One service line, decision system, workflow, or governance lane.",
    description:
      "Decision rights, control points, and review rhythm designed and documented for your enterprise.",
    deliverables: [
      "Governance operating model",
      "Decision and risk rhythm",
      "Implementation backlog",
    ],
  },
  {
    id: "retainer",
    name: "Executive Advisory Retainer",
    category: "Advisory",
    displayPrice: "Market & Scale Value",
    unitAmount: 1800000,
    timeline: "Monthly",
    bestFor: "Executives who need continuing decision support and delivery control.",
    scaleBasis: "One monthly executive advisory lane; expansion follows cadence and stakeholder footprint.",
    description:
      "Standing advisory at leadership tempo, with the architecture installed progressively against your measures.",
    deliverables: [
      "Standing executive advisory support",
      "Portfolio and performance review rhythm",
      "Priority decision briefs",
    ],
  },
];

export function getEngagementPackage(id: string | null) {
  return engagementPackages.find((item) => item.id === id) ?? null;
}

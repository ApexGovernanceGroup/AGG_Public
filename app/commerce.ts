export type EngagementPackage = {
  id: string;
  sku: string;
  name: string;
  category: string;
  saleStatus: string;
  displayPrice: string;
  planningAnchor: string;
  commercialNote: string;
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
    sku: "AGG-DS-001",
    name: "Executive Diagnostic Brief",
    category: "Diagnostic",
    saleStatus: "For sale - registration-controlled checkout",
    displayPrice: "Starting anchor: $2,500",
    planningAnchor: "Baseline diagnostic anchor; credited toward approved follow-on work when scoped.",
    commercialNote:
      "Designed as the lowest-risk first move before a larger sprint, product kit, or advisory lane.",
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
    sku: "AGG-DS-002",
    name: "Continuity Exposure Assessment",
    category: "Assessment",
    saleStatus: "For sale - registration-controlled checkout",
    displayPrice: "Starting anchor: $3,500",
    planningAnchor: "One function, team, role family, or exposure area; expansion priced after intake.",
    commercialNote:
      "Best purchased before turnover, reorganization, or mission-critical handoff risk becomes visible.",
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
    sku: "AGG-DS-003",
    name: "Governed Product Kit",
    category: "Product",
    saleStatus: "For sale - registration-controlled checkout",
    displayPrice: "Starting anchor: $4,500",
    planningAnchor: "One governed artifact family for one owner group; additional artifacts scale by footprint.",
    commercialNote:
      "A focused purchase for clients who need usable documents, not an enterprise transformation.",
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
    sku: "AGG-DS-004",
    name: "Apex Academy Private Lab",
    category: "Seminar",
    saleStatus: "For sale - registration-controlled checkout",
    displayPrice: "Starting anchor: $6,500",
    planningAnchor: "One private cohort or lab event; scale follows audience, delivery mode, and evidence needs.",
    commercialNote:
      "Converts executive concepts into practiced workforce behavior and retained training evidence.",
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
    sku: "AGG-DS-005",
    name: "Governance Design Sprint",
    category: "Sprint",
    saleStatus: "For sale - registration-controlled checkout",
    displayPrice: "Starting anchor: $9,500",
    planningAnchor: "One service line, workflow, decision system, or governance lane.",
    commercialNote:
      "Best for teams ready to design the operating model and implementation backlog.",
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
    sku: "AGG-DS-006",
    name: "Executive Advisory Retainer",
    category: "Advisory",
    saleStatus: "For sale - registration-controlled checkout",
    displayPrice: "Starting anchor: $18,000 monthly",
    planningAnchor: "One monthly executive advisory lane; expansion follows cadence and stakeholder footprint.",
    commercialNote:
      "Keeps decision rhythm, escalation, and measured improvement active beyond a single product.",
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

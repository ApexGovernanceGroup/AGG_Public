export type EngagementPackageDeepDive = {
  exampleServices: string[];
  apexRequiredInputs: string[];
  apexGeneratedFinalOutputs: string[];
  generalizedTimeline: string[];
  engagementExpectations: string[];
  satisfactionCriteria: string[];
  finalClientDeliveryPackage: string[];
};

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
  deepDive: EngagementPackageDeepDive;
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
    deepDive: {
      exampleServices: [
        "Executive coherence diagnostic",
        "Decision-friction interview set",
        "Current-state evidence and constraint map",
        "90-day recommended course of action brief",
      ],
      apexRequiredInputs: [
        "Named sponsor, decision owner, and operating problem",
        "Available plans, reports, dashboards, SOPs, charters, or prior assessments",
        "Known constraints, non-negotiables, deadlines, and success measures",
        "Access to selected leaders or staff who can validate current-state friction",
      ],
      apexGeneratedFinalOutputs: [
        "Executive diagnostic brief",
        "Decision-friction and root-cause map",
        "Risk-ranked 90-day action list",
        "Follow-on scope options with recommended first move",
      ],
      generalizedTimeline: [
        "Days 1-2: intake, document request, and sponsor alignment",
        "Days 3-7: interviews, evidence review, and friction mapping",
        "Days 8-10: brief development, quality review, and executive readout",
      ],
      engagementExpectations: [
        "Client provides timely access to the sponsor and selected source material",
        "AGG protects the scope boundary and avoids turning the diagnostic into a full build",
        "Both parties validate assumptions before recommendations are finalized",
      ],
      satisfactionCriteria: [
        "Problem statement is validated by the sponsor",
        "Decision friction is visible, prioritized, and tied to evidence",
        "Client can choose a next action, stop point, or follow-on scope with confidence",
      ],
      finalClientDeliveryPackage: [
        "Executive diagnostic PDF or briefing deck",
        "Evidence index and decision-friction map",
        "90-day RCOA and action tracker",
        "Handoff notes for onboarding or follow-on engagement",
      ],
    },
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
    deepDive: {
      exampleServices: [
        "Critical knowledge continuity scan",
        "Turnover, retirement, and single-point-of-failure review",
        "Owner-to-process handoff mapping",
        "Continuity remediation backlog and action plan",
      ],
      apexRequiredInputs: [
        "Target function, team, role family, or exposure area",
        "Role descriptions, process lists, knowledge repositories, and known handoff risks",
        "Known upcoming turnover, reorganization, surge, or transition conditions",
        "Client definition of unacceptable continuity loss",
      ],
      apexGeneratedFinalOutputs: [
        "Continuity exposure assessment",
        "Critical knowledge and owner inventory",
        "Risk-ranked gap register",
        "Remediation backlog sequenced by urgency and feasibility",
      ],
      generalizedTimeline: [
        "Days 1-3: exposure boundary, document pull, and stakeholder map",
        "Days 4-8: interviews, knowledge inventory, and risk scoring",
        "Days 9-14: remediation backlog, final brief, and handoff session",
      ],
      engagementExpectations: [
        "Client identifies roles, processes, and owners that matter most",
        "AGG converts informal knowledge risk into visible continuity evidence",
        "Both parties agree which risks require immediate action versus future sustainment",
      ],
      satisfactionCriteria: [
        "Critical knowledge owners and fragile handoffs are visible",
        "Risk scores are understandable and accepted by client leadership",
        "Client has a prioritized backlog that can be assigned, funded, or sequenced",
      ],
      finalClientDeliveryPackage: [
        "Continuity exposure map",
        "Critical knowledge inventory",
        "Handoff-risk register",
        "Remediation backlog and sponsor readout",
      ],
    },
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
    deepDive: {
      exampleServices: [
        "Policy memo, charter, SOP, or governance document set",
        "Self-design architecture template",
        "Performance assessment template",
        "Project management checklist or implementation job aid",
      ],
      apexRequiredInputs: [
        "Named product owner and intended user group",
        "Existing drafts, policies, templates, checklists, or reference artifacts",
        "Authority boundary, review cycle, and approval path",
        "Desired format, distribution method, and handoff expectations",
      ],
      apexGeneratedFinalOutputs: [
        "Client-ready governed product set",
        "Authority, evidence, and review logic",
        "Implementation checklist",
        "Version-control and handoff notes",
      ],
      generalizedTimeline: [
        "Days 1-3: product purpose, user, authority, and format lock",
        "Days 4-10: drafting, design, review logic, and client refinement",
        "Days 11-15: final QA, handoff package, and implementation checklist",
      ],
      engagementExpectations: [
        "Client identifies the owner, user, and approval authority before drafting expands",
        "AGG turns the requested artifact into usable operating material",
        "Both parties review for plain language, authority fit, and practical use",
      ],
      satisfactionCriteria: [
        "Artifact is usable by the target audience without additional translation",
        "Authority, ownership, review cadence, and update logic are clear",
        "Client accepts the product as ready for controlled use or internal approval",
      ],
      finalClientDeliveryPackage: [
        "Final governed product files",
        "Editable source copy when appropriate",
        "Implementation checklist",
        "Owner handoff and review-cycle note",
      ],
    },
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
    deepDive: {
      exampleServices: [
        "Private executive seminar",
        "Applied workforce lab",
        "Knowledge management, data governance, AI, automation, or interoperability workshop",
        "Role-specific practice event with after-action outputs",
      ],
      apexRequiredInputs: [
        "Audience size, role mix, delivery mode, and desired learning outcome",
        "Known skill gaps, current tools, and operational context",
        "Time available for instruction, exercise, and discussion",
        "Any required certification, credentialing, or evidence expectations",
      ],
      apexGeneratedFinalOutputs: [
        "Private lab agenda and facilitation plan",
        "Applied exercises and role-specific job aids",
        "Participant readiness notes",
        "Follow-on adoption or credentialing recommendations",
      ],
      generalizedTimeline: [
        "Week 1: audience analysis, learning objective lock, and lab design",
        "Delivery day: facilitated seminar, applied exercise, and capture of friction points",
        "Post-event: readiness notes, materials handoff, and follow-on options",
      ],
      engagementExpectations: [
        "Client defines the audience and what practical behavior must improve",
        "AGG designs instruction around application, not passive awareness",
        "Both parties preserve attendance, outputs, and readiness evidence as agreed",
      ],
      satisfactionCriteria: [
        "Participants can explain and apply the target concept in the client context",
        "Client receives usable job aids or exercise outputs",
        "Sponsor can decide whether to stop, repeat, scale, or convert to a broader program",
      ],
      finalClientDeliveryPackage: [
        "Lab agenda and facilitator notes",
        "Participant materials and job aids",
        "Readiness observations",
        "Follow-on training, certification, or adoption path",
      ],
    },
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
    deepDive: {
      exampleServices: [
        "Governance operating model sprint",
        "Decision-rights and control-point design",
        "Implementation backlog build",
        "Risk, review, and performance rhythm design",
      ],
      apexRequiredInputs: [
        "Selected service line, workflow, decision system, or governance lane",
        "Current process maps, decision forums, owners, metrics, and known friction points",
        "Constraints, compliance considerations, and leadership intent",
        "Sponsor availability for design reviews and tradeoff decisions",
      ],
      apexGeneratedFinalOutputs: [
        "Governance operating model",
        "Decision-rights and control-point map",
        "Risk and review rhythm",
        "Implementation backlog with sequenced actions",
      ],
      generalizedTimeline: [
        "Week 1: sprint charter, operating baseline, and decision inventory",
        "Weeks 2-3: model design, control-point mapping, and backlog development",
        "Week 4: validation, executive readout, and handoff package",
      ],
      engagementExpectations: [
        "Client keeps decision owners available for sprint validation",
        "AGG designs a usable governance rhythm, not an abstract model",
        "Both parties make tradeoffs visible before the backlog is finalized",
      ],
      satisfactionCriteria: [
        "Decision rights, control points, and review cadence are understood",
        "Implementation backlog is sequenced by priority, dependency, and feasibility",
        "Client can assign owners and begin controlled execution",
      ],
      finalClientDeliveryPackage: [
        "Governance operating model deck",
        "Decision and risk rhythm map",
        "Implementation backlog",
        "Owner handoff and measurement notes",
      ],
    },
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
    deepDive: {
      exampleServices: [
        "Standing executive advisory lane",
        "Monthly portfolio and performance review",
        "Priority decision brief development",
        "Escalation support for governance, knowledge, data, AI, automation, or transformation issues",
      ],
      apexRequiredInputs: [
        "Executive sponsor, cadence, priority portfolio, and communication protocol",
        "Active initiatives, measures, risks, decisions, and known friction points",
        "Meeting rhythm, response expectations, and escalation boundaries",
        "Access rules for protected records, systems, and client personnel",
      ],
      apexGeneratedFinalOutputs: [
        "Recurring advisory briefs",
        "Decision log and action tracker",
        "Portfolio or performance review rhythm",
        "Monthly risk, opportunity, and measured-improvement notes",
      ],
      generalizedTimeline: [
        "Month 1: advisory charter, baseline, cadence, and first decision rhythm",
        "Months 2-3: recurring briefs, issue resolution, and measured-improvement tracking",
        "Ongoing: sponsor reviews, scope refresh, and renewal or closeout decision",
      ],
      engagementExpectations: [
        "Client maintains a clear decision owner and advisory cadence",
        "AGG provides disciplined executive support inside the agreed authority boundary",
        "Both parties review value, risk, and priorities before retainer renewal or expansion",
      ],
      satisfactionCriteria: [
        "Sponsor has a reliable decision-support rhythm",
        "Priority decisions, risks, and actions are tracked and refreshed",
        "Client sees measurable improvement or can make a clean stop-renew-expand decision",
      ],
      finalClientDeliveryPackage: [
        "Monthly advisory packet",
        "Decision and action tracker",
        "Portfolio review notes",
        "Renewal, closeout, or expansion recommendation",
      ],
    },
  },
];

export function getEngagementPackage(id: string | null) {
  return engagementPackages.find((item) => item.id === id) ?? null;
}

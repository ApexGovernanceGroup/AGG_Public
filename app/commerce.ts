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

export type DownloadProduct = {
  id: string;
  sku: string;
  name: string;
  category: string;
  tier: "Starter" | "Kit" | "Workbook" | "Playbook" | "Signature";
  saleStatus: string;
  displayPrice: string;
  planningAnchor: string;
  commercialNote: string;
  unitAmount: number;
  format: string;
  bestFor: string;
  description: string;
  previewUrl: string;
  includedFiles: string[];
  useCases: string[];
  upgradePath: string;
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

export const downloadProducts: DownloadProduct[] = [
  {
    id: "taxonomy-naming-lifecycle-starter",
    sku: "AGG-DL-001",
    name: "AGG Signature Taxonomy, File Anatomy, and Lifecycle Kit",
    category: "Apex Signature Item",
    tier: "Signature",
    saleStatus: "Staged for sale - registration-controlled download",
    displayPrice: "Launch anchor: $149",
    planningAnchor:
      "Signature starter kit for teams that need an AI-ready organizing system before a custom repository build.",
    commercialNote:
      "Creditable toward a custom taxonomy, repository architecture, metadata model, or AI-ready corpus sprint when scoped within 30 days.",
    unitAmount: 14900,
    format: "HTML starter, Level 1 title system, Level 2 file anatomy, naming rule, lifecycle worksheet",
    bestFor:
      "Teams with shared-drive, SharePoint, repository, or file-naming disorder.",
    description:
      "An AGG signature starter for Level 1 titling, Level 2 file anatomy with README and 1-N subfolders, emerging-technology-friendly file naming, and N.n lifecycle control.",
    previewUrl: "/agg-taxonomy-file-lifecycle-starter.html",
    includedFiles: [
      "Full Level 1 titling system",
      "Level 2 file anatomy with README and 1-N subfolders",
      "COMPO_DIV_FUNCTION_Title_DTG__Author_LC naming rule",
      "N.n lifecycle delineation checklist",
    ],
    useCases: [
      "Organize a messy shared drive or SharePoint library",
      "Prepare an AI-ready corpus with consistent anatomy and lifecycle state",
      "Create consistent file naming and status discipline for automation and search",
    ],
    upgradePath: "Knowledge-to-Decision Repository Sprint",
  },
  {
    id: "executive-decision-brief-template-pack",
    sku: "AGG-DL-002",
    name: "Executive Decision Brief Template Pack",
    category: "Executive Decision Support",
    tier: "Kit",
    saleStatus: "Staged for sale - registration-controlled download",
    displayPrice: "Launch anchor: $249",
    planningAnchor:
      "Template kit for leaders who need a repeatable decision brief before buying a diagnostic.",
    commercialNote:
      "Designed as a self-applied on-ramp to the Executive Diagnostic Brief.",
    unitAmount: 24900,
    format: "Brief template, evidence table, decision log, RCOA worksheet",
    bestFor:
      "Founders, chiefs of staff, PMOs, and sponsors who need decision clarity fast.",
    description:
      "A reusable template pack for problem framing, facts, assumptions, options, recommendation, and 30/60/90-day action logic.",
    previewUrl: "/agg-digital-product-catalog.html#executive-decision-brief-template-pack",
    includedFiles: [
      "Executive decision brief shell",
      "Fact-assumption-unknown register",
      "RCOA comparison worksheet",
      "30/60/90 action tracker",
    ],
    useCases: [
      "Prepare a founder or executive decision meeting",
      "Standardize internal recommendation memos",
      "Convert scattered notes into a decision-ready brief",
    ],
    upgradePath: "Executive Diagnostic Brief",
  },
  {
    id: "governance-charter-decision-rights-kit",
    sku: "AGG-DL-003",
    name: "Governance Charter and Decision Rights Kit",
    category: "Governance Product Kit",
    tier: "Kit",
    saleStatus: "Staged for sale - registration-controlled download",
    displayPrice: "Launch anchor: $349",
    planningAnchor:
      "Document kit for a new forum, office, program, division, working group, or authority lane.",
    commercialNote:
      "Best used before a tailored Governed Product Kit when the client wants to self-structure the first draft.",
    unitAmount: 34900,
    format: "Charter template, RACI, decision-rights matrix, review cadence sheet",
    bestFor:
      "Teams standing up new governance, leadership rhythm, committees, programs, or operating forums.",
    description:
      "A structured document kit for purpose, scope, authority, decision rights, roles, cadence, and exception handling.",
    previewUrl: "/agg-digital-product-catalog.html#governance-charter-decision-rights-kit",
    includedFiles: [
      "Governance charter template",
      "Decision rights matrix",
      "RACI and owner map",
      "Meeting rhythm and exception path worksheet",
    ],
    useCases: [
      "Stand up a new division or program",
      "Clarify decision ownership",
      "Reduce meeting churn and unclear approvals",
    ],
    upgradePath: "Governed Product Kit",
  },
  {
    id: "continuity-exposure-register-workbook",
    sku: "AGG-DL-004",
    name: "Continuity Exposure Register Workbook",
    category: "Institutional Knowledge Preservation",
    tier: "Workbook",
    saleStatus: "Staged for sale - registration-controlled download",
    displayPrice: "Launch anchor: $249",
    planningAnchor:
      "Workbook for mapping fragile handoffs, critical knowledge owners, and knowledge-loss risk.",
    commercialNote:
      "Useful as a self-assessment before purchasing the Continuity Exposure Assessment.",
    unitAmount: 24900,
    format: "Exposure register, scoring rubric, owner inventory, remediation backlog",
    bestFor:
      "Organizations facing turnover, succession, reorganization, retirement, or role fragility.",
    description:
      "A workbook that identifies critical knowledge, owners, handoff failure points, exposure triggers, and mitigation actions.",
    previewUrl: "/agg-digital-product-catalog.html#continuity-exposure-register-workbook",
    includedFiles: [
      "Continuity exposure register",
      "Critical knowledge owner inventory",
      "Risk scoring rubric",
      "Remediation backlog template",
    ],
    useCases: [
      "Prepare for leadership transition",
      "Identify single points of failure",
      "Prioritize knowledge capture and handoff work",
    ],
    upgradePath: "Continuity Exposure Assessment",
  },
  {
    id: "measure-dictionary-scorecard-starter",
    sku: "AGG-DL-005",
    name: "Measure Dictionary and Scorecard Starter",
    category: "Measurement and Analytics",
    tier: "Workbook",
    saleStatus: "Staged for sale - registration-controlled download",
    displayPrice: "Launch anchor: $299",
    planningAnchor:
      "Starter kit for converting objectives into MOPs, MOEs, KPIs, KRIs, thresholds, and action rules.",
    commercialNote:
      "Designed as a first step before a measurement architecture or dashboard sprint.",
    unitAmount: 29900,
    format: "Measure dictionary, scorecard planner, threshold table, action rules",
    bestFor:
      "Teams with dashboards, performance reviews, or metrics that do not reliably trigger action.",
    description:
      "A practical measurement kit that defines what is counted, why it matters, who owns it, and what action follows.",
    previewUrl: "/agg-digital-product-catalog.html#measure-dictionary-scorecard-starter",
    includedFiles: [
      "MOP/MOE/KPI/KRI dictionary",
      "Baseline and threshold worksheet",
      "Action-rule matrix",
      "Executive scorecard sketch",
    ],
    useCases: [
      "Clean up noisy metrics",
      "Prepare a performance review",
      "Connect dashboards to decisions",
    ],
    upgradePath: "Governance Design Sprint",
  },
  {
    id: "ai-governance-use-case-review-pack",
    sku: "AGG-DL-006",
    name: "AI Governance Use-Case Review Pack",
    category: "AI and Automation Governance",
    tier: "Playbook",
    saleStatus: "Staged for sale - registration-controlled download",
    displayPrice: "Launch anchor: $399",
    planningAnchor:
      "Review pack for identifying AI use cases, risks, approval boundaries, and human review requirements.",
    commercialNote:
      "A low-risk entry point before a governed AI lab, automation sprint, or enterprise AI control model.",
    unitAmount: 39900,
    format: "Use-case intake cards, risk review, approval checklist, evidence rules",
    bestFor:
      "Teams adopting AI assistants, automation, analytics workflows, or drafting support.",
    description:
      "A governance pack for separating useful AI support from unsupported automation, hidden risk, and unclear authority.",
    previewUrl: "/agg-digital-product-catalog.html#ai-governance-use-case-review-pack",
    includedFiles: [
      "AI use-case intake card",
      "Human review and approval checklist",
      "Source and evidence quality rules",
      "Automation risk register",
    ],
    useCases: [
      "Review proposed AI workflows",
      "Prepare an AI governance conversation",
      "Define what must remain human-approved",
    ],
    upgradePath: "Apex Academy Private Lab",
  },
  {
    id: "project-governance-checklist-bundle",
    sku: "AGG-DL-007",
    name: "Project Governance Checklist Bundle",
    category: "Project and Program Control",
    tier: "Starter",
    saleStatus: "Staged for sale - registration-controlled download",
    displayPrice: "Launch anchor: $99",
    planningAnchor:
      "Low-cost checklist bundle for teams that need basic project control without an enterprise sprint.",
    commercialNote:
      "A practical on-ramp for small teams, program owners, and founders who need immediate operating discipline.",
    unitAmount: 9900,
    format: "Checklist bundle, intake sheet, review rhythm, closeout checklist",
    bestFor:
      "Small teams that need a practical project management checklist and governance rhythm.",
    description:
      "A plain-speak checklist bundle for project intake, owner assignment, cadence, risks, decisions, closeout, and handoff.",
    previewUrl: "/agg-digital-product-catalog.html#project-governance-checklist-bundle",
    includedFiles: [
      "Project intake checklist",
      "Decision and risk review sheet",
      "Weekly operating rhythm checklist",
      "Closeout and handoff checklist",
    ],
    useCases: [
      "Stand up a small project quickly",
      "Create a repeatable review rhythm",
      "Prevent loose handoff and closeout",
    ],
    upgradePath: "Governed Product Kit",
  },
  {
    id: "change-handoff-sustainment-playbook",
    sku: "AGG-DL-008",
    name: "Change, Handoff, and Sustainment Playbook",
    category: "Change Management and Sustainment",
    tier: "Playbook",
    saleStatus: "Staged for sale - registration-controlled download",
    displayPrice: "Launch anchor: $399",
    planningAnchor:
      "Playbook for making change survivable after launch: ownership, adoption, handoff, review, and sustainment.",
    commercialNote:
      "Designed for teams that need adoption discipline before a longer solution contract or retainer.",
    unitAmount: 39900,
    format: "Playbook, adoption map, handoff plan, sustainment rhythm, proof checklist",
    bestFor:
      "Teams launching a new process, repository, tool, program, governance body, or operating model.",
    description:
      "A structured playbook for identifying role impacts, adoption barriers, training needs, handoff owners, and sustainment checks.",
    previewUrl: "/agg-digital-product-catalog.html#change-handoff-sustainment-playbook",
    includedFiles: [
      "Change impact map",
      "Adoption and sustainment checklist",
      "Handoff owner plan",
      "30/60/90 proof review sheet",
    ],
    useCases: [
      "Move from launch to adopted behavior",
      "Prevent handoff failure",
      "Build sustainment into the change plan",
    ],
    upgradePath: "Executive Advisory Retainer",
  },
];

export function getEngagementPackage(id: string | null) {
  return engagementPackages.find((item) => item.id === id) ?? null;
}

export function getDownloadProduct(id: string | null) {
  return downloadProducts.find((item) => item.id === id) ?? null;
}

import type { LucideIcon } from "lucide-react";
import {
  BookOpenCheck,
  Bot,
  BriefcaseBusiness,
  ClipboardCheck,
  Compass,
  Gauge,
  GitBranch,
  GraduationCap,
  Home,
  Mail,
  LockKeyhole,
  Landmark,
  Network,
  Newspaper,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";
export { engagementPackages } from "./commerce";

export const brandStandard = {
  palette: {
    onyx: "#0C0C0C",
    graphite: "#3E4346",
    platinum: "#C3C2BD",
    navy: "#172C3F",
    bronze: "#88623C",
    oxblood: "#793735",
  },
  tier1: {
    mark: "The Seal",
    pillarLine: "KNOWLEDGE · STRATEGY · GOVERNANCE · VELOCITY",
    practiceLine: "Engineering Organizational Advantage",
  },
  tier2: {
    masthead: "Advantage Is Engineered. Not Inherited.",
    mastheadLines: ["Advantage Is Engineered", "Not Inherited"],
    descriptor:
      "Advantage is intelligent application of institutional Knowledge, Strategy, and Governance to achieve Velocity:",
    lead:
      "We install the decision architecture inside enterprises that already own everything needed to run it: the people, the data, the systems, and the licenses already on the books.",
  },
  tier3: {
    label: "The Proof Quartet",
    proofs: [
      {
        title: "Organic, not acquired.",
        body:
          "The answer to most problems is already inside the organization, unused, unrecognized, or simply unconnected. We build from the people, the data, and the systems you already own. If something genuinely has to be bought, we say so plainly - and we take no margin on it.",
      },
      {
        title: "Calibrated, not templated.",
        body:
          "The architecture is proven. The fit never is. Every installation is built to your baseline, your constraints, and the tempo at which your leadership decides. A framework that ignores tempo is paperwork.",
      },
      {
        title: "Measured, not asserted.",
        body:
          "Every engagement opens with an entry assessment and closes with exit proof, expressed in your metrics on your dashboard. If we cannot show you the delta, we have not earned the engagement.",
      },
      {
        title: "Automated where it earns its keep.",
        body:
          "Most organizations already pay for more AI and analytics capability than they use. We turn what you own toward decision speed and evidence quality, and leave it alone everywhere it would only be ornament.",
      },
    ],
  },
  tier4: {
    thesis:
      "Most enterprises are not short on capability. They are short on coherence.",
    paragraphs: [
      "Four programs, four owners, four roadmaps, and no single account of what any of it is producing. Knowledge sits in one directorate, strategy in another, governance in a third, and the measures that would connect all three belong to no one. Every quarter the enterprise funds all four and still cannot say what changed.",
      "Apex Governance Group installs knowledge, strategy, governance, and velocity as one architecture, built from what the organization already owns and calibrated to its baseline, its constraints, and the tempo at which its leadership actually decides. Every engagement opens with an assessment and closes with proof in the client's own metrics. Automation enters where it earns its keep.",
      "What we leave behind is capability you keep, not a dependency you renew.",
    ],
    boilerplate:
      "Four programs, four owners, four roadmaps, and no single account of what any of it is producing. Knowledge sits in one directorate, strategy in another, governance in a third, and the measures that would connect all three belong to no one. Every quarter the enterprise funds all four and still cannot say what changed. Apex Governance Group installs knowledge, strategy, governance, and velocity as one architecture, built from what the organization already owns and calibrated to its baseline, its constraints, and the tempo at which its leadership actually decides. Every engagement opens with an assessment and closes with proof in the client's own metrics. Automation enters where it earns its keep. What we leave behind is capability you keep, not a dependency you renew.",
    reservedCampaignLine: "Capability you keep, not a dependency you renew.",
  },
  delivery: {
    commitments: [
      {
        title: "No required new tooling.",
        body:
          "AGG builds from the people, data, systems, and licenses the client already owns. Where a purchase is genuinely required, it is stated plainly and never embedded as a dependency.",
      },
      {
        title: "Assessment opens; proof closes.",
        body:
          "Every engagement starts with an entry assessment and ends with exit proof expressed in the client's own metrics.",
      },
    ],
    productBoundary:
      "AGG brings the architecture. The client keeps the toolset. AGG sells method, framework, and installed capability. AGG does not sell, resell, broker, or require tooling, platforms, licenses, or seats - and takes no referral or partner margin on any the client chooses to buy.",
  },
} as const;

export const site = {
  name: "Apex Governance Group",
  market:
    "Executive Engineered Solutions scaled for Corporate | SMB | Government | Defense Industries",
  tagline: "Engineering Organic Solutions to Achieve Organizational Advantage",
  description:
    "Apex Governance Group installs knowledge, strategy, governance, and velocity as one architecture built from the organization's people, data, systems, and licenses.",
  pillars: ["Knowledge", "Strategy", "Governance", "Velocity"],
  brandImage: "/brand/apex-governance-group-symbol.png",
};

export const founderProfile = {
  name: "Benjamin Bragdon",
  title: "Founder & Chief Executive Officer",
  linkedinUrl:
    process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN_URL ??
    "https://www.linkedin.com/in/benjamin-bragdon",
  headline:
    "A governance architect for leaders who need knowledge, strategy, and execution to move as one operating system.",
  summary:
    "Benjamin Bragdon founded Apex Governance Group to turn executive intent into usable decision architecture: named owners, controlled repositories, repeatable review rhythms, evidence trails, and practical products a client workforce can sustain after the engagement closes.",
  focusAreas: [
    "Enterprise knowledge management and governance architecture",
    "AI-enabled operating systems, repository discipline, and data stewardship",
    "Strategic execution, performance management, and executive decision support",
    "Applied workforce education through Apex Academy cohorts and labs",
  ],
  proofPoints: [
    {
      label: "Role",
      value: "Founder & CEO",
    },
    {
      label: "Practice",
      value: "Knowledge, strategy, governance, and velocity",
    },
    {
      label: "Outcome",
      value: "Capability the client can own, operate, and improve",
    },
  ],
} as const;

export const solutionPillarIntro = {
  statement:
    "Apex Governance Group strives to deliver custom-tailored solutions for each client, crafted first from the client's own organic systems. We engineer holistic solutions before introducing a commercial option.",
  headingLines: ["Apex Solutions", "are all comprised of:"],
};

export const solutionDeliveryBridge = {
  lead:
    "Apex Solutions are addressed through eight operating lanes, each tuned to the client's baseline and imbued with Knowledge, Strategy, Governance, and Velocity.",
  lanes: [
    {
      label: "Assessment",
      definition:
        "Establish the operating baseline, decision need, risk exposure, and evidence required before prescribing work.",
    },
    {
      label: "Architecture",
      definition:
        "Shape the solution model: roles, decisions, workflows, measures, interfaces, and sequencing.",
    },
    {
      label: "Infrastructure",
      definition:
        "Prepare the repositories, systems, data pathways, collaboration spaces, and operating rails the solution depends on.",
    },
    {
      label: "Governing Control",
      definition:
        "Set the decision rights, standards, authority, access, review cadence, and accountability that make the solution trustworthy.",
    },
    {
      label: "Sustainment",
      definition:
        "Keep capability current, owned, measured, and resilient after the first implementation or handoff.",
    },
    {
      label: "Change Management",
      definition:
        "Move people through adoption with communications, training, stakeholder alignment, resistance handling, and role readiness.",
    },
    {
      label: "Innovation & Modernization",
      definition:
        "Apply AI, automation, analytics, and modern work practices where they improve speed, traceability, or quality.",
    },
    {
      label: "Futures",
      definition:
        "Scan emerging conditions, decision points, scenarios, and second-order effects so today's solution stays useful tomorrow.",
    },
  ],
} as const;

export const packageInclusions = {
  title: "Package inclusions",
  summary:
    "Engagements are shaped for hybrid, in-person, and remote customer work, with staged secure portal access for communication, status updates, and delivery visibility after onboarding. Package customization is confirmed after intake.",
  items: [
    "Full publication package, including the initial assessment, problem statement development, and root-cause analysis findings.",
    "Solution recommendation white paper.",
    "Minimum of three benchmark check-ins.",
    "Customized formal product, service package, sprint output, seminar packet, or implementation artifact as requested and scoped.",
    "Full tooling package, including job aids, cheat sheets, manuals, SOPs, policy letters, an organizational change management campaign plan, and a closeout plan.",
    "12 months or six direct engagements, matched to the selected package and confirmed during intake.",
  ],
};

export const pillarDefinitions = [
  {
    term: "Knowledge",
    definition:
      "Knowledge is the first pillar: people, data, systems, lessons, and evidence connected until the organization can see what it knows, what it assumes, and what still has to be proven. After-action learning, source records, and expert judgment become decision material.",
  },
  {
    term: "Strategy",
    definition:
      "Strategy turns executive intent into disciplined choice. Vision is converted into priorities, measures, owners, and sequenced work, so every task can answer what it serves, why it matters, and how success will be known.",
  },
  {
    term: "Governance",
    definition:
      "Governance is the trusted spine of the process: authority, stewardship, controls, and accountability placed where decisions actually happen. It keeps data, automation, and execution inside clear lanes so speed does not outrun legitimacy.",
  },
  {
    term: "Velocity",
    definition:
      "Velocity is not haste; it is decision speed earned through clarity, automation, and traceability. Repeated work is systematized, approvals are visible, evidence travels with the task, and leaders move faster because the path is clean.",
  },
];

export type NavItem = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const topNavItems: NavItem[] = [];

export const sideNavItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: BriefcaseBusiness },
  { href: "/methodology", label: "Methodology", icon: Workflow },
  { href: "/solutions", label: "Solutions", icon: Compass },
  { href: "/academy", label: "Apex Academy", icon: GraduationCap },
  { href: "/about", label: "About", icon: Landmark },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/insights", label: "Insights", icon: Newspaper },
];

export const navItems: NavItem[] = [
  ...sideNavItems,
  { href: "/client-portal", label: "Client Portal", icon: Gauge },
  { href: "/client-services", label: "Client Services" },
  ...topNavItems,
];

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@apexgovernancegroup.com";

export const githubRepositoryUrl =
  process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_URL ??
  "https://github.com/ApexGovernanceGroup/AGG_Public";

export const sharePointTenantHost =
  process.env.NEXT_PUBLIC_SHAREPOINT_TENANT_HOST ??
  "apexgov56.sharepoint.com";

export const sharePointTenantUrl =
  process.env.NEXT_PUBLIC_SHAREPOINT_TENANT_URL ??
  `https://${sharePointTenantHost}`;

export const calendarUrl =
  process.env.NEXT_PUBLIC_CALENDAR_URL ??
  `mailto:${contactEmail}?subject=Apex%20Governance%20Group%20briefing`;

export const integrationConnections = [
  {
    system: "GitHub",
    label: "ApexGovernanceGroup/AGG_Public",
    href: githubRepositoryUrl,
    role:
      "Public source spine for the AGG website, release discipline, public-safe issue intake, and implementation artifacts.",
    status:
      "Configured to the verified public repository ApexGovernanceGroup/AGG_Public.",
  },
  {
    system: "Microsoft 365",
    label: sharePointTenantHost,
    href: sharePointTenantUrl,
    role:
      "Tenant boundary for SharePoint and OneDrive workspaces, client-owned records, knowledge assets, and governed collaboration.",
    status:
      "Boundary signal only. Site, library, permission, and records policies are confirmed during engagement intake before client work is accepted.",
  },
] as const;

export type ClientAccessCard = {
  title: string;
  label: string;
  summary: string;
  href: string;
  action: string;
  icon: LucideIcon;
};

export const clientAccessCards: ClientAccessCard[] = [
  {
    title: "Client Engagement",
    label: "Engage",
    summary:
      "Structured intake, scope control, payment record, kickoff rhythm, and decision points for new work.",
    href: "/engage",
    action: "Start engagement",
    icon: ClipboardCheck,
  },
  {
    title: "Client Portal",
    label: "Portal Preview",
    summary:
      "A public preview of project progress, program status, actions, decisions, and working communication patterns.",
    href: "/client-portal",
    action: "Preview portal model",
    icon: Gauge,
  },
  {
    title: "Client Services",
    label: "Protected",
    summary:
      "Password-protected service space for enterprise architecture, diagnostics, delivery lanes, and client-owned implementation code.",
    href: "/client-services",
    action: "Enter services",
    icon: LockKeyhole,
  },
];

export type ClientServiceLane = {
  title: string;
  label: string;
  summary: string;
  outcomes: string[];
  icon: LucideIcon;
};

export const clientServiceLanes: ClientServiceLane[] = [
  {
    title: "Enterprise Architecture V4",
    label: "Architecture",
    summary:
      "A protected first-party architecture section for capability mapping, service design, governance traceability, and executable roadmap control.",
    outcomes: [
      "Capability, process, data, system, and governance views owned in the Apex codebase.",
      "Decision-grade architecture narrative that can move from assessment to execution.",
      "Roadmap logic that connects business outcomes to implementation sequence.",
    ],
    icon: Network,
  },
  {
    title: "Client Service Diagnostics",
    label: "Assess",
    summary:
      "Structured intake and operating diagnosis for leaders who need a clear baseline before committing delivery resources.",
    outcomes: [
      "Baseline findings, constraints, risks, and executive decision points.",
      "Service recommendations tied to measurable operating advantage.",
      "Follow-on scope boundaries before sprint or retainer activation.",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "Implementation Repository",
    label: "Own",
    summary:
      "GitHub-ready source control for service artifacts, playbooks, decision records, dashboards, and controlled client deliverables.",
    outcomes: [
      "Versioned artifacts with traceable change history.",
      "Issues, actions, release notes, and delivery records connected to the work.",
      "Client-owned implementation code instead of platform-only dependency.",
    ],
    icon: GitBranch,
  },
  {
    title: "Governed Delivery Operations",
    label: "Execute",
    summary:
      "Operating rhythm for project efforts, actions, programs, decisions, controls, and open communication across the client service lane.",
    outcomes: [
      "Status, owners, risks, decisions, and next actions visible in one rhythm.",
      "Escalation paths and control points clear enough for executive use.",
      "Delivery visibility connected to the client portal and engagement record.",
    ],
    icon: ShieldCheck,
  },
];

export const clientServiceStack = [
  {
    term: "Architecture",
    definition:
      "Define the operating model, capability map, data/system relationships, governance points, and delivery sequence.",
  },
  {
    term: "Code",
    definition:
      "Move useful artifacts into Apex-owned source so the client service can be maintained, versioned, and improved.",
  },
  {
    term: "Control",
    definition:
      "Protect access, preserve decision records, and keep sensitive client work behind an explicit boundary.",
  },
  {
    term: "Execution",
    definition:
      "Connect plans, owners, risks, actions, comments, and outcomes to the portal and engagement workflow.",
  },
];

export type ServiceLine = {
  title: string;
  summary: string;
  detail: string;
  workProducts: string[];
  icon: LucideIcon;
};

export type KaigedCategory = {
  code: string;
  title: string;
  summary: string;
  outcome: string;
  icon: LucideIcon;
};

export const kaiged = {
  acronym: "Client-Led Self-Determination",
  headline:
    "Six fixed positions. Client-selected terms. One configured engagement shape.",
  description:
    "The KAIGES|D approach empowers each client to define the parameters, expectations, personal priorities, and products that guide our work together. Apex is building toward global leadership in intelligent engineered solutions by making the client an active author of the experience, the operating rhythm, and the outcomes expected.",
  partnershipStatement:
    "A self-determined, client-led partnership experience that puts engagement design, performance expectations, and product-delivery controls on your terms, calibrated to your needs.",
};

export const kaigedPublicPreferences = [
  {
    id: "output",
    label: "Output",
    options: [
      {
        value: "executive-brief",
        label: "Executive brief",
        summary: "A decision-grade brief with measures, risks, and action logic.",
      },
      {
        value: "governed-repository",
        label: "Governed repository",
        summary: "A versioned implementation spine for artifacts, issues, and records.",
      },
      {
        value: "operating-dashboard",
        label: "Operating dashboard",
        summary: "A status surface for progress, actions, decisions, and evidence.",
      },
      {
        value: "workforce-pathway",
        label: "Workforce pathway",
        summary: "An Apex Academy path for adoption, training, and role readiness.",
      },
    ],
  },
  {
    id: "engagement",
    label: "Engagement",
    options: [
      {
        value: "diagnostic-first",
        label: "Diagnostic first",
        summary: "Begin with baseline, exposure, operating gap, and decision need.",
      },
      {
        value: "design-sprint",
        label: "Design sprint",
        summary: "Convert findings into architecture, controls, roadmap, and proof.",
      },
      {
        value: "delivery-build",
        label: "Delivery build",
        summary: "Build the selected capability and close on operating evidence.",
      },
      {
        value: "sustainment-rhythm",
        label: "Sustainment rhythm",
        summary: "Keep the capability current through review, ownership, and measures.",
      },
    ],
  },
  {
    id: "priority",
    label: "Personal priority",
    options: [
      {
        value: "decision-speed",
        label: "Decision speed",
        summary: "Reduce time from question to evidence-backed action.",
      },
      {
        value: "trust-control",
        label: "Trust and control",
        summary: "Raise confidence through authority, provenance, and accountability.",
      },
      {
        value: "knowledge-reuse",
        label: "Knowledge reuse",
        summary: "Make existing people, data, lessons, and licenses work harder.",
      },
      {
        value: "workforce-adoption",
        label: "Workforce adoption",
        summary: "Turn the architecture into daily behavior, not shelfware.",
      },
    ],
  },
] as const;

const scalabilityCategory: KaigedCategory = {
  code: "S",
  title: "Scalability",
  summary: "Grows without being re-founded.",
  outcome:
    "The client elects a sustained relationship shape that keeps the capability current, owned, and measured.",
  icon: Compass,
};

export const kaigedTerminalAlternates: KaigedCategory[] = [
  scalabilityCategory,
  {
    code: "D",
    title: "Delivery",
    summary: "We finish and leave.",
    outcome:
      "The client elects a delivered capability that is codified to run without AGG and closes on evidence.",
    icon: Compass,
  },
];

export const kaigedCategories: KaigedCategory[] = [
  {
    code: "K",
    title: "Kinetic",
    summary: "Capability in contact, not capability in inventory.",
    outcome:
      "The engagement starts from the capability that has to touch real work, not a static catalog of what exists.",
    icon: Gauge,
  },
  {
    code: "A",
    title: "Adaptive",
    summary: "Fit to conditions as they are, not as they were planned.",
    outcome:
      "The architecture is calibrated to the client's baseline, constraints, decision tempo, and operating terrain.",
    icon: Workflow,
  },
  {
    code: "I",
    title: "Intelligence",
    summary: "Decision-relevant understanding, not data.",
    outcome:
      "Evidence becomes usable when it explains what matters, what changed, and what decision it can support.",
    icon: BookOpenCheck,
  },
  {
    code: "G",
    title: "Growth",
    summary: "Scale that does not dilute the standard.",
    outcome:
      "The operating model grows only when ownership, quality, decision rights, and evidence standards can hold.",
    icon: ShieldCheck,
  },
  {
    code: "E",
    title: "Execution",
    summary: "Intent converted into effect.",
    outcome:
      "Strategy, governance, knowledge, and automation are judged by what they make possible in the work.",
    icon: Target,
  },
  scalabilityCategory,
];

export type KaigedConfigurationOption = {
  letter: string;
  term: string;
  definition: string;
};

export type KaigedConfigurationPosition = {
  id: string;
  position: string;
  stage: string;
  defaultLetter: string;
  clientSet: boolean;
  options: KaigedConfigurationOption[];
};

export type KaigedDefaultStage = {
  label: string;
  letter: string;
  term: string;
  body: string;
  entry: string;
  exit: string;
  failureMode: string;
  metricType: string;
  metric: string;
};

export const kaigedClientConfiguration = {
  title: "Client Configuration Card",
  ruled: "Ruled 04 Sep 2026",
  mark: "Client-Led Self-Determination",
  defaultMark: "Client-Led Self-Determination",
  fixedExpansion:
    "Kinetic · Adaptive · Intelligence · Growth · Execution · Scalability",
  defaultSequence:
    "Kinetic · Adaptive · Intelligence · Growth · Execution · Scalability",
  count: "15,625 selectable configurations",
  intro:
    "Six positions, fixed and in order. What each position means is the client's selection. The structure is ours and does not move; the emphasis is theirs and sets the terms of reference for customer service, solution expectations, evidence, and delivery control. The sixth position is the shape of the relationship, and the client elects it first.",
  scopeRecord:
    "Lock positions one at a time on the cards above, or commit the whole configuration here. A locked configuration becomes the scope of record - carried into the entry assessment and re-tested at close.",
  positions: [
    {
      id: "subject",
      position: "Subject",
      stage: "Client-set",
      defaultLetter: "K",
      clientSet: true,
      options: [
        {
          letter: "K",
          term: "Kinetic",
          definition:
            "Put capability into live work so it can be observed, used, and improved under operating conditions.",
        },
        {
          letter: "K",
          term: "Knowledge",
          definition:
            "Convert people, data, systems, lessons, and evidence into reusable support for named decisions.",
        },
        {
          letter: "K",
          term: "Known Gap",
          definition:
            "Name the missing capability, decision requirement, or exposure that anchors scope and proves need.",
        },
        {
          letter: "K",
          term: "Keystone",
          definition:
            "Identify the essential capability, control, evidence source, or service promise the whole solution must support.",
        },
        {
          letter: "K",
          term: "Knowledge Continuity",
          definition:
            "Protect at-risk know-how, owner logic, lessons, and records so service quality survives turnover and change.",
        },
      ],
    },
    {
      id: "stage-1",
      position: "Stage 1",
      stage: "Client-set",
      defaultLetter: "A",
      clientSet: true,
      options: [
        {
          letter: "A",
          term: "Adaptive",
          definition:
            "Calibrate the engagement to current constraints, baseline maturity, terrain, and decision tempo.",
        },
        {
          letter: "A",
          term: "Artificial Intelligence",
          definition:
            "Apply AI only where it improves evidence quality, workflow speed, traceability, or decision confidence.",
        },
        {
          letter: "A",
          term: "Architecture",
          definition:
            "Define the operating structure, owners, data flows, controls, measures, and delivery sequence.",
        },
        {
          letter: "A",
          term: "Alignment",
          definition:
            "Synchronize expectations, authorities, service boundaries, and success criteria before product work begins.",
        },
        {
          letter: "A",
          term: "Accountability",
          definition:
            "Assign named owners, review points, escalation paths, and evidence responsibilities before outputs become commitments.",
        },
      ],
    },
    {
      id: "stage-2",
      position: "Stage 2",
      stage: "Client-set",
      defaultLetter: "I",
      clientSet: true,
      options: [
        {
          letter: "I",
          term: "Intelligence",
          definition:
            "Transform evidence and context into decision-ready understanding leaders can act on.",
        },
        {
          letter: "I",
          term: "Innovation",
          definition:
            "Create new value where the current process cannot produce the needed outcome, speed, or control.",
        },
        {
          letter: "I",
          term: "Integration",
          definition:
            "Bind the solution into existing systems, taxonomies, repositories, and work rhythms.",
        },
        {
          letter: "I",
          term: "Intake",
          definition:
            "Capture client needs, constraints, preferences, risks, and desired experience before solution promises are made.",
        },
        {
          letter: "I",
          term: "Interoperability",
          definition:
            "Make the configured solution operate across the client's tools, teams, evidence stores, and approval paths.",
        },
      ],
    },
    {
      id: "stage-3",
      position: "Stage 3",
      stage: "Client-set",
      defaultLetter: "G",
      clientSet: true,
      options: [
        {
          letter: "G",
          term: "Growth",
          definition:
            "Scale adoption through roles, cadence, measures, and standards that hold as demand increases.",
        },
        {
          letter: "G",
          term: "Guidance",
          definition:
            "Translate executive intent into criteria, priorities, language, and action rules that teams can follow.",
        },
        {
          letter: "G",
          term: "Governance",
          definition:
            "Set authority, stewardship, access, review, and accountability before outputs are trusted.",
        },
        {
          letter: "G",
          term: "Guardrails",
          definition:
            "Define the boundaries, handling rules, quality thresholds, and decision lanes that keep speed legitimate.",
        },
        {
          letter: "G",
          term: "Goals",
          definition:
            "Translate the client's desired service experience into measurable outcomes, acceptance criteria, and proof.",
        },
      ],
    },
    {
      id: "stage-4",
      position: "Stage 4",
      stage: "Client-set",
      defaultLetter: "E",
      clientSet: true,
      options: [
        {
          letter: "E",
          term: "Execution",
          definition:
            "Move the configured design into work, decisions, artifacts, automations, and operating rhythm.",
        },
        {
          letter: "E",
          term: "Engineering",
          definition:
            "Build the workflows, repositories, controls, and product logic needed for repeatable delivery.",
        },
        {
          letter: "E",
          term: "Enablement",
          definition:
            "Transfer skills, playbooks, dashboards, and habits so the client can operate the capability.",
        },
        {
          letter: "E",
          term: "Evidence",
          definition:
            "Define what must be observable, measured, recorded, and accepted before the client calls the solution successful.",
        },
        {
          letter: "E",
          term: "Experience",
          definition:
            "Shape the partnership touchpoints, review rhythm, communications, and delivery feel around the client's needs.",
        },
      ],
    },
    {
      id: "terminal",
      position: "Stage 5",
      stage: "Client-set",
      defaultLetter: "S",
      clientSet: true,
      options: [
        {
          letter: "S",
          term: "Scalability",
          definition:
            "Grow the model without re-founding the architecture or diluting the standard.",
        },
        {
          letter: "S",
          term: "Solutions",
          definition:
            "Deliver configured products that solve the named operating problem and remain usable after close.",
        },
        {
          letter: "S",
          term: "Sustainment",
          definition:
            "Keep the capability current, owned, measured, and improved with the client after initial delivery.",
        },
        {
          letter: "D",
          term: "Delivery",
          definition:
            "Codify the capability to run without AGG and close on evidence that it works.",
        },
        {
          letter: "D",
          term: "Deployment",
          definition:
            "Move the approved solution into the operating environment with adoption support, handoff, and verification.",
        },
      ],
    },
  ] satisfies KaigedConfigurationPosition[],
  relationshipShapes: [
    {
      id: "S",
      label: "Position 6 · elects ...S",
      title: "Sustainment - we stay.",
      body:
        "The capability is kept current, owned, and measured alongside the client past handover. The engagement has a cadence, not an end date.",
    },
    {
      id: "D",
      label: "Position 6 · elects ...D",
      title: "Delivery - we finish and leave.",
      body:
        "The capability is codified to run without us, and the engagement closes on evidence that it does. Capability you keep, not a dependency you renew.",
    },
  ],
  clientRelationsMethod: [
    "Most engagements open with a method the client is briefed on. This one opens with six positions the client fills. The architecture is fixed - six positions, in order, each with an exit criterion that has to be true before the next begins.",
    "A client who sets position two to Artificial Intelligence is naming automation and decision support as the emphasis. One who sets it to Architecture is naming operating structure, ownership, and integration as the gap. Same architecture, different engagement, different proof at close.",
    "The selections are written into the entry assessment before work starts and re-tested in the exit proof - in the client's own metrics, in the client's own words.",
    "The sixth letter is not emphasis. It is the commercial shape of the relationship, and the client elects it first rather than discovering it at the end.",
  ],
  defaultStages: [
    {
      label: "01",
      letter: "A",
      term: "Acquisition",
      body:
        "Capture what the enterprise knows - and surface what it does not - against a decision that needs it.",
      entry:
        "A named decision requirement or capability gap. Collection without a named consumer does not start here; it does not start at all.",
      exit:
        "The asset is registered with an owner, a provenance trail, and a handling classification.",
      failureMode:
        "The archive no decision reads. Volume mistaken for capability.",
      metricType: "MOE",
      metric:
        "Share of named decision requirements with at least one registered supporting asset.",
    },
    {
      label: "02",
      letter: "I",
      term: "Integration",
      body:
        "Bind the asset to the structures the enterprise already runs on - taxonomy, systems, and the workflow where the work actually happens.",
      entry: "A registered asset with a classification of record.",
      exit:
        "The asset is addressable in the enterprise taxonomy and reachable from the workflow that needs it - without the user knowing where it lives.",
      failureMode:
        "The parallel repository. Knowledge that exists, correctly filed, nowhere near the work.",
      metricType: "MOP",
      metric:
        "Mean time from question to authoritative asset, measured from inside the workflow, not from the portal.",
    },
    {
      label: "03",
      letter: "G",
      term: "Governance",
      body:
        "Establish authority, quality, access, and disposition over the asset so trusting it is a decision the enterprise has already made.",
      entry: "An integrated, addressable asset.",
      exit:
        "Named owner, review cadence, access rule, and retention disposition - all of record, none inferred.",
      failureMode:
        "Governance as gate rather than as warrant. Controls that raise friction without raising trust.",
      metricType: "KPI",
      metric:
        "Share of registered assets carrying a named owner and a current review date.",
    },
    {
      label: "04",
      letter: "E",
      term: "Exploitation",
      body:
        "Convert the governed asset into a decision made, an action taken, or a product delivered. This is the stage the other four exist to reach.",
      entry: "A governed asset and a live decision requirement, concurrently.",
      exit:
        "A decision or product that demonstrably used the asset, traceable back to it.",
      failureMode:
        "The unexploited holding - the best-governed knowledge in the enterprise, consulted by no one.",
      metricType: "MOE",
      metric:
        "Share of registered assets cited in a decision or product within the trailing twelve months.",
    },
    {
      label: "05",
      letter: "S",
      term: "Sustainment",
      body:
        "Keep the asset current, owned, and measurable across personnel turnover, reorganization, and system change. Sustainment is what separates an installed capability from a delivered artifact.",
      entry: "An asset with at least one exploitation event of record.",
      exit:
        "No exit. Sustainment is the steady state; the asset survives an owner change and a full review cycle without degradation, or it re-enters at Stage 1.",
      failureMode:
        "The orphan - the asset whose author left, still authoritative on paper, quietly wrong in practice.",
      metricType: "KRI",
      metric:
        "Asset survival rate through owner turnover; count of assets past review date with no named owner.",
    },
  ] satisfies KaigedDefaultStage[],
  usageAuthority: [
    {
      id: "R1",
      title: "Sequence is fixed.",
      body:
        "K-A-I-G-E-S is non-reorderable. A stage may be re-entered at any time; no stage may be skipped or run in parallel with its predecessor. Reordering the letters breaks the model.",
    },
    {
      id: "R2",
      title: "A configuration travels whole.",
      body:
        "All six positions or none. A client elects a term at every position or takes the default at every position. Partial configurations are not issued, and no position is dropped for length.",
    },
    {
      id: "R3",
      title: "Parent mark first, expansion once.",
      body:
        "Client-Led Self-Determination is the client-facing mark; the Kinetic, Adaptive, Intelligence, Growth, Execution, and Scalability expansion is the default model behind it. Other selectable terms tune emphasis without moving the six-position structure.",
    },
    {
      id: "R4",
      title: "Antithesis, per the house device.",
      body:
        "\"A lifecycle, not a label\" is permitted in headers, beat lines, and campaign surfaces. It is prohibited in body prose, where the construction becomes a tic.",
    },
    {
      id: "R5",
      title: "Promotion is downward only.",
      body:
        "The model sits beneath the AGG corporate tier stack. It may descend into product vocabulary; it does not ascend into Tier 2 or Tier 1 without a board decision and a version increment.",
    },
    {
      id: "R6",
      title: "The election is recorded.",
      body:
        "A client's six selections are written into the engagement's entry assessment before work begins and re-tested in the exit proof. An unrecorded selection is not a selection - it is a preference somebody remembered.",
    },
  ],
  rulingRecord: [
    {
      date: "03 Sep 2026",
      title: "\"S stays.\"",
      body:
        "S is retained. In the public selector, its default sense is Scalability; in the relationship shape, S resolves to Sustainment. Solutions remains available as the client-facing product emphasis.",
    },
    {
      date: "04 Sep 2026",
      title: "The terminal letter becomes a client election.",
      body:
        "S is the default ending. D is available when the client elects a delivered-and-closed relationship. The 03 Sep ruling survives intact: S remains what AGG issues absent a client preference.",
    },
  ],
  rulingCost:
    "A relationship-shape election is harder to build recognition around than a single static label. AGG trades some brand consistency for a demonstrated commitment: the client sees their own choice in the thing they bought.",
} as const;

export const kaigedUnifiedArchitecture = {
  title: "Client-Led Self-Determination Unified Architecture",
  expansion:
    "Kinetic · Adaptive · Intelligence · Growth · Execution · Scalability",
  thesis:
    "One client-facing architecture. Six selectable positions set the terms of reference, while the stage gates, evidence requirements, and closeout proof remain fixed.",
  supersedes:
    "Prior terminal-letter drafts and product-count baselines that treated the relationship shape as an internal naming question instead of a client election.",
  doesNotSupersede:
    "K-OPS v1.0 phase and gate structure, which is extended rather than replaced.",
  layers: [
    {
      label: "01",
      name: "Kinetic",
      products: "K-META",
      function: "Names the capability that has to touch real work.",
    },
    {
      label: "02",
      name: "Adaptive",
      products: "K-EXPOSE",
      function: "Fits the engagement to the client's actual operating conditions.",
    },
    {
      label: "03",
      name: "Intelligence",
      products: "K-ENTRY · K-EXIT",
      function: "Converts data and experience into decision-relevant understanding.",
    },
    {
      label: "04",
      name: "Growth",
      products: "K-BUILD · K-VAULT · K-AGENT",
      function: "Scales the model only where ownership and standards can hold.",
    },
    {
      label: "05",
      name: "Execution",
      products: "K-ACADEMY",
      function: "Turns intent into operating effect, evidence, and usable products.",
    },
    {
      label: "06",
      name: "Scalability",
      products: "K-SUSTAIN",
      function: "Sets whether AGG sustains the capability or closes after delivery proof.",
    },
  ],
  products: [
    {
      code: "K-META",
      product: "Institutional Strategic Meta-Knowledge Survey",
      layer: "Demand",
      buyer: "CEO · Board · PE",
      revenue: "Project + annual repeat",
    },
    {
      code: "K-EXPOSE",
      product: "Continuity Exposure Assessment",
      layer: "Diagnostic",
      buyer: "COO · GC · CHRO",
      revenue: "Project + free tool",
    },
    {
      code: "K-ENTRY",
      product: "Onboarding & Time-to-Competence",
      layer: "Lifecycle",
      buyer: "CHRO · Hiring Exec",
      revenue: "Per-event volume",
    },
    {
      code: "K-EXIT",
      product: "Offboarding & Departure Capture",
      layer: "Lifecycle",
      buyer: "CHRO · COO",
      revenue: "Per-event volume",
    },
    {
      code: "K-BUILD",
      product: "Preservation Build",
      layer: "Build",
      buyer: "COO",
      revenue: "Project per cohort",
    },
    {
      code: "K-VAULT",
      product: "Repository Architecture + KM/DG Governance",
      layer: "Build",
      buyer: "CIO · CDO · GC",
      revenue: "Project + annuity",
    },
    {
      code: "K-AGENT",
      product: "Governed Retrieval & Agent Layer",
      layer: "Build",
      buyer: "CIO · CDO",
      revenue: "Project + license",
    },
    {
      code: "K-ACADEMY",
      product: "Practitioner Certification, 101-601",
      layer: "Enablement",
      buyer: "CHRO · L&D · Delivery Pod",
      revenue: "Cohort + license",
    },
    {
      code: "K-SUSTAIN",
      product: "Continuous Continuity Maintenance",
      layer: "Sustainment",
      buyer: "COO · CHRO",
      revenue: "Annuity",
    },
  ],
  engagementShapes: [
    {
      code: "Shape S",
      title: "Sustainment",
      body:
        "We stay. The capability is kept current, owned, and measured alongside the client past handover.",
    },
    {
      code: "Shape D",
      title: "Delivery",
      body:
        "We finish and leave. The capability is codified to run without AGG, and the engagement closes on evidence that it does.",
    },
  ],
  executionConditions: [
    {
      title: "Scrub-gate before specification",
      body:
        "No outside-origin material enters the clean client-led lane until each asset clears the scrub gate and retains its clearance record.",
    },
    {
      title: "Registrability before scale",
      body:
        "Client-Led Self-Determination carries the portfolio. Commission the IC 035/042 opinion and name a fallback mark before external release expands.",
    },
    {
      title: "K-ACADEMY first",
      body:
        "The portfolio does not reach A-grade until certified non-founder practitioners can deliver it.",
    },
    {
      title: "Re-baseline the counts",
      body:
        "The prior module and task counts no longer describe the nine-product architecture and must reconcile to the L1-L5 workbook.",
    },
  ],
  measures: [
    {
      type: "MOP",
      text: "A-origin assets cleared through the scrub gate with clearance record retained.",
    },
    {
      type: "MOE",
      text: "Share of delivery hours executed by certified non-founder practitioners.",
    },
    {
      type: "KRI",
      text: "Days Client-Led Self-Determination remains in commercial use without a registrability opinion.",
    },
  ],
} as const;

export type MethodologyPhase = {
  title: string;
  label: string;
  summary: string;
  proof: string;
  icon: LucideIcon;
};

export const methodologyPhases: MethodologyPhase[] = [
  {
    title: "Assess the Operating Baseline",
    label: "01",
    summary:
      "Establish the current state across people, data, systems, governance, measures, and decision tempo before prescribing work.",
    proof:
      "Baseline findings, constraints, friction points, decision risks, and immediate quick wins.",
    icon: Gauge,
  },
  {
    title: "Architect the Advantage Model",
    label: "02",
    summary:
      "Translate executive intent into a practical operating architecture with capabilities, owners, interfaces, controls, and measures.",
    proof:
      "A target operating model that leaders can inspect, challenge, approve, and execute.",
    icon: Target,
  },
  {
    title: "Govern the Decision System",
    label: "03",
    summary:
      "Install authority, evidence standards, stewardship, escalation logic, and review rhythm so the architecture stays trusted.",
    proof:
      "Decision rights, control points, accountability paths, and status forums tied to real work.",
    icon: ShieldCheck,
  },
  {
    title: "Engineer the Working Layer",
    label: "04",
    summary:
      "Build the repositories, dashboards, automations, knowledge structures, and workflows that turn the architecture into use.",
    proof:
      "Operational artifacts, source-controlled records, and working routines the client can keep.",
    icon: GitBranch,
  },
  {
    title: "Measure, Transfer, and Improve",
    label: "05",
    summary:
      "Close with exit proof, transfer ownership, and define the next improvement cycle against the client's own numbers.",
    proof:
      "Before/after evidence, lessons, backlog, sustainment rhythm, and executive-ready next decisions.",
    icon: ClipboardCheck,
  },
];

export const methodologyRules = [
  {
    title: "Evidence before assertion",
    body:
      "AGG opens with assessment and moves from observed friction, not generic maturity claims.",
  },
  {
    title: "Architecture before tooling",
    body:
      "Technology choices follow the operating model, governance boundary, and client-owned toolset.",
  },
  {
    title: "Controls before speed",
    body:
      "Velocity is earned through clarity, traceability, and automation that does not bypass authority.",
  },
  {
    title: "Transfer before dependency",
    body:
      "The client keeps the installed capability, records, operating rhythm, and improvement path.",
  },
];

export const serviceLines: ServiceLine[] = [
  {
    title: "Governance Architecture",
    summary:
      "Decision rights, control points, tempo, and accountability mapped to named owners.",
    detail:
      "Maps decision rights, control points, tempo, and accountability to named owners so a decision cannot stall without someone visible owning the stall.",
    workProducts: [
      "Decision-rights matrix",
      "Governance operating charter",
      "Authority and escalation register",
      "Battle-rhythm and control-point map",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Knowledge Systems",
    summary:
      "Enterprise memory a leader can actually use: taxonomy, provenance, and retrieval.",
    detail:
      "Builds taxonomy, provenance, and retrieval around the questions leadership asks, not the folders the organization inherited.",
    workProducts: [
      "Knowledge taxonomy and metadata profile",
      "Authoritative-source register",
      "Retrieval test set",
      "Continuity and handoff map",
    ],
    icon: BookOpenCheck,
  },
  {
    title: "Strategic Execution",
    summary:
      "Plans, initiatives, measures, and operating rhythm connected end to end.",
    detail:
      "Connects intent at the top to work at the bottom through objectives, portfolios, milestones, measures, and review cycles.",
    workProducts: [
      "Objective-to-task traceability map",
      "Portfolio execution roadmap",
      "Milestone and dependency register",
      "Executive review rhythm",
    ],
    icon: Target,
  },
  {
    title: "Decision Support",
    summary:
      "Briefs, options, risk logic, and recommendations that carry their evidence.",
    detail:
      "Structures decisions so leaders can see assumptions, options, tradeoffs, second-order effects, evidence, and implementation consequences.",
    workProducts: [
      "COA comparison brief",
      "RCOA (Recommended Course of Action) brief",
      "Assumption and risk register",
      "Decision memorandum",
      "Second-order effects map",
    ],
    icon: Compass,
  },
  {
    title: "Performance Management",
    summary:
      "MOEs, MOPs, KPIs, and review discipline that make the numbers consequential.",
    detail:
      "Connects measures to outcomes and review decisions so performance reporting changes behavior instead of decorating the dashboard.",
    workProducts: [
      "MOP/MOE/KPI/KRI dictionary",
      "Performance scorecard",
      "Benefits-realization review",
      "Action-threshold playbook",
    ],
    icon: Gauge,
  },
  {
    title: "Repository Operations",
    summary:
      "Source control, release flow, and version discipline for work products.",
    detail:
      "Creates controlled patterns for issues, releases, documentation, change logs, and artifacts so the authoritative copy is never in question.",
    workProducts: [
      "Repository operating model",
      "Issue and release workflow",
      "Change log and artifact register",
      "Version-control job aid",
    ],
    icon: GitBranch,
  },
  {
    title: "Apex Academy",
    summary: "Private workforce education for AI, automation, DG, and repositories.",
    detail:
      "Builds workforce capability through private cohorts, executive labs, and applied education in governed AI, automation, data governance, repository discipline, and ecosystem development.",
    workProducts: [
      "Private cohort syllabus",
      "Executive lab packet",
      "Role-based job aids",
      "Capstone implementation exercise",
    ],
    icon: GraduationCap,
  },
];

export type EnterpriseServicePackage = {
  code: string;
  title: string;
  purpose: string;
  method: string;
  outputs: string[];
  proof: string;
  measures: string;
  icon: LucideIcon;
};

export const enterpriseServicePackages: EnterpriseServicePackage[] = [
  {
    code: "E01",
    title: "Discovery and Diagnosis",
    purpose:
      "Establish what is happening, why it matters, what may be causing it, and which interventions deserve design effort.",
    method:
      "Assessment charter, stakeholder interviews, observation, document review, process walk-throughs, evidence sampling, and hypothesis testing.",
    outputs: [
      "Problem definition and scope",
      "Evidence-backed findings register",
      "Decision-ready diagnostic package",
    ],
    proof:
      "Material findings trace to evidence, distinguish perception from fact, and show unresolved uncertainty plainly.",
    measures:
      "Critical-function coverage, finding corroboration, unresolved hypotheses, collection burden, and time from finding to disposition.",
    icon: ClipboardCheck,
  },
  {
    code: "E02",
    title: "Architecture Modernization",
    purpose:
      "Translate validated needs into a coherent target architecture and a controlled transition from current capability.",
    method:
      "Current and target operating views, capability mapping, requirements traceability, interface design, dependency inventory, and migration planning.",
    outputs: [
      "Current and target architecture",
      "Requirements and interface matrix",
      "Migration and hardening roadmap",
    ],
    proof:
      "Critical requirements map to design and verification, interfaces are tested, and the service owner accepts operating responsibility.",
    measures:
      "Requirement coverage, unresolved design decisions, interface defects, recovery results, capacity margin, and migration reconciliation.",
    icon: Network,
  },
  {
    code: "E03",
    title: "Knowledge Systems and Pathways",
    purpose:
      "Provide reliable technical and knowledge infrastructure that connects people, evidence, processes, and decisions.",
    method:
      "Infrastructure cataloging, collaboration-space design, repository architecture, term-store logic, metadata profiles, retrieval tests, and restoration checks.",
    outputs: [
      "Knowledge and infrastructure service catalog",
      "Repository, taxonomy, and retrieval model",
      "Restore, search, and access test evidence",
    ],
    proof:
      "A representative user retrieves the current authoritative record, understands its context, and applies it correctly.",
    measures:
      "Correct retrieval rate, retrieval time, stale or orphaned records, broken interfaces, service availability, and knowledge reuse.",
    icon: BookOpenCheck,
  },
  {
    code: "E04",
    title: "Governance Operations",
    purpose:
      "Convert approved architecture and knowledge into disciplined daily operations with clear authority, trained personnel, and timely decisions.",
    method:
      "Charters, delegations, escalation paths, decision records, task boards, meeting rhythm, training outlines, dashboards, and exception handling.",
    outputs: [
      "Governance operating model",
      "Battle-rhythm and decision record set",
      "Training and execution control package",
    ],
    proof:
      "Critical decisions have valid authority and timely inputs, and intended users demonstrate essential tasks in routine and disrupted conditions.",
    measures:
      "Decision latency, action closure with evidence, handoff defects, demonstrated proficiency, stale critical inputs, and recurrence.",
    icon: ShieldCheck,
  },
  {
    code: "E05",
    title: "Measurement and Analytics",
    purpose:
      "Determine whether execution is producing intended conditions and which changes the evidence supports.",
    method:
      "Measure dictionary, baselines, evaluation plan, reproducible calculations, control charts where justified, forecast validation, and implementation analysis.",
    outputs: [
      "MOP, MOE, KPI, KRI, and KCI dictionary",
      "Baseline and evaluation plan",
      "Decision-ready scorecard and action logic",
    ],
    proof:
      "Critical calculations are reproducible, comparisons are meaningful, limitations are visible, and actions trace to evidence.",
    measures:
      "Data fitness, forecast bias and error, decision-relevant effect size, control performance, benefits realized, and unintended effects.",
    icon: Gauge,
  },
  {
    code: "E06",
    title: "Change and Sustainment",
    purpose:
      "Align organizational change and supporting functions so improvements remain feasible, coordinated, and durable.",
    method:
      "Stakeholder analysis, change-impact planning, communications, resource-loaded scheduling, support model design, partner commitments, and adoption review.",
    outputs: [
      "Change and sustainment plan",
      "Resource and support model",
      "Adoption and benefits persistence dashboard",
    ],
    proof:
      "Affected functions accept obligations, resources are committed, users are prepared, and support or recovery is demonstrated.",
    measures:
      "Correct-use adoption, sustainment backlog, support response, partner reliability, resource variance, and lifecycle burden.",
    icon: Workflow,
  },
  {
    code: "E07",
    title: "Continuous Improvement and Tooling",
    purpose:
      "Create a repeatable mechanism for identifying, prioritizing, delivering, and sustaining improvements that measurably benefit the organization.",
    method:
      "Governed improvement intake, value-stream mapping, requirements alternatives, proof-of-value rubric, backlog control, and tool retirement planning.",
    outputs: [
      "Improvement intake and triage model",
      "Experiment and proof-of-value backlog",
      "Corrective-action and control plan",
    ],
    proof:
      "Accepted improvements demonstrate useful effect, sustainable workload, functioning controls, and justified tool requirements.",
    measures:
      "Recurring defect reduction, lead time to verified correction, value realized, adoption accuracy, tool duplication, and maintenance burden.",
    icon: Target,
  },
];

export type StorefrontCollection = {
  title: string;
  buyer: string;
  summary: string;
  examples: string[];
  value: string;
  icon: LucideIcon;
};

export const storefrontCollections: StorefrontCollection[] = [
  {
    title: "Executive Diagnostics",
    buyer: "CEO, COO, chief of staff, program sponsor",
    summary:
      "Fast assessment packages for leaders who need a bounded problem definition, evidence baseline, decision options, and a 90-day action path.",
    examples: [
      "Executive Diagnostic Brief",
      "Continuity Exposure Assessment",
      "Decision Friction Map",
    ],
    value:
      "Reduces ambiguity before larger spend and gives the sponsor an inspectable first decision.",
    icon: ClipboardCheck,
  },
  {
    title: "Governance Product Kits",
    buyer: "General counsel, PMO, governance lead, executive office",
    summary:
      "Customized charters, policies, operating plans, SOPs, registers, checklists, and job aids built from the AGG product catalog.",
    examples: [
      "Governance charter and delegation kit",
      "Release-control SOP and checklist",
      "Authority and decision register",
    ],
    value:
      "Turns trust, ownership, and decision rights into records people can use immediately.",
    icon: ShieldCheck,
  },
  {
    title: "Knowledge and Repository Builds",
    buyer: "CKO, CIO, CDO, knowledge steward, records owner",
    summary:
      "Repository architecture, taxonomy, metadata, authoritative-source control, retrieval evaluation, and continuity handoff products.",
    examples: [
      "Knowledge-to-decision repository",
      "Metadata and taxonomy profile",
      "Source-of-truth and provenance kit",
    ],
    value:
      "Makes organizational memory findable, current, owned, and useful for decisions.",
    icon: BookOpenCheck,
  },
  {
    title: "Analytics and Measurement Packages",
    buyer: "Performance lead, transformation office, resource owner",
    summary:
      "Measurement architecture, MOP/MOE/KPI/KRI design, baseline logic, forecast review, and scorecard implementation support.",
    examples: [
      "Executive measurement dictionary",
      "Benefits-realization scorecard",
      "Forecast validation and running estimate pack",
    ],
    value:
      "Connects activity to effect and makes the next action obvious when performance changes.",
    icon: Gauge,
  },
  {
    title: "Academy Labs and Seminars",
    buyer: "CHRO, L&D, stewards, analysts, PMOs, product teams",
    summary:
      "Private education for governed AI, automation, data governance, repository discipline, evidence quality, and executive decision support.",
    examples: [
      "Governed AI working lab",
      "Repository operations practicum",
      "Decision-support staff seminar",
    ],
    value:
      "Builds the career field and leaves role-level job aids behind.",
    icon: GraduationCap,
  },
  {
    title: "Sustainment and Advisory",
    buyer: "Executive sponsor, COO, program owner, operating board",
    summary:
      "Recurring advisory, review rhythm, improvement backlog control, adoption monitoring, and trusted-product maintenance.",
    examples: [
      "Executive Advisory Retainer",
      "Continuous continuity maintenance",
      "Quarterly governance review",
    ],
    value:
      "Keeps the capability current after launch and prevents quiet drift back to informal work.",
    icon: BriefcaseBusiness,
  },
];

export type ProductCatalogGroup = {
  domain: string;
  title: string;
  count: number;
  purpose: string;
  examples: string[];
};

export const productCatalogGroups: ProductCatalogGroup[] = [
  {
    domain: "INB",
    title: "Intake and Triage",
    count: 6,
    purpose:
      "Accept, classify, assign, and route submissions while preserving provenance.",
    examples: ["Governance charter", "Policy", "Operating plan"],
  },
  {
    domain: "CGV",
    title: "Command and Governance",
    count: 17,
    purpose:
      "Establish intent, decision authority, delegations, exceptions, and accountable review.",
    examples: ["Delegation register", "Decision memorandum", "Governance SOP"],
  },
  {
    domain: "OPS",
    title: "Operations Synchronization",
    count: 14,
    purpose:
      "Coordinate current work, dependencies, contingencies, changes, and handover.",
    examples: ["Battle-rhythm plan", "Continuity SOP", "Operations job aid"],
  },
  {
    domain: "RFM",
    title: "Readiness and Force Management",
    count: 6,
    purpose:
      "Reconcile authorized, assigned, qualified, and available capacity against demand.",
    examples: ["Readiness policy", "Demand assessment", "Capacity register"],
  },
  {
    domain: "PTM",
    title: "Personnel and Talent Management",
    count: 13,
    purpose:
      "Manage onboarding, proficiency, role requirements, succession, and knowledge transfer.",
    examples: ["Onboarding plan", "Proficiency rubric", "Succession job aid"],
  },
  {
    domain: "LGS",
    title: "Logistics and Sustainment",
    count: 5,
    purpose:
      "Reconcile demand, supply, maintenance, lead times, partner commitments, and replenishment.",
    examples: ["Sustainment policy", "Support plan", "Replenishment SOP"],
  },
  {
    domain: "FRM",
    title: "Financial and Resource Management",
    count: 9,
    purpose:
      "Connect cost assumptions, commitments, actuals, variance decisions, and portfolio allocation.",
    examples: ["Resource plan", "Business case", "Portfolio decision memo"],
  },
  {
    domain: "ITC",
    title: "IT Service, Cyber, and Architecture",
    count: 17,
    purpose:
      "Control system ownership, access, configuration, incidents, recovery, architecture, and service performance.",
    examples: ["Architecture record", "Incident SOP", "AI governance kit"],
  },
  {
    domain: "INF",
    title: "Installation and Infrastructure",
    count: 5,
    purpose:
      "Maintain facility, utility, dependency, maintenance, and continuity readiness.",
    examples: ["Infrastructure plan", "Maintenance checklist", "Continuity job aid"],
  },
  {
    domain: "SRR",
    title: "Safety and Risk Reduction",
    count: 7,
    purpose:
      "Identify hazards, assess consequences, implement controls, and verify corrections.",
    examples: ["Risk register", "Treatment plan", "Corrective-action tracker"],
  },
  {
    domain: "PIA",
    title: "Public, Intergovernmental, and Partnership Affairs",
    count: 9,
    purpose:
      "Coordinate partner engagement, authorized releases, feedback, and disruption messaging.",
    examples: ["Partner agreement register", "Message plan", "Release SOP"],
  },
  {
    domain: "SPP",
    title: "Strategic Plans, Policy, and Performance",
    count: 14,
    purpose:
      "Connect vision, objectives, effects, tasks, resources, horizon reviews, policy, and measures.",
    examples: ["Strategic plan", "Performance scorecard", "Policy traceability kit"],
  },
  {
    domain: "INN",
    title: "Innovation and Modernization",
    count: 9,
    purpose:
      "Test hypotheses, evaluate alternatives, and govern adoption, scale, revision, or retirement.",
    examples: ["Pilot plan", "Proof-of-value rubric", "Modernization roadmap"],
  },
  {
    domain: "KMR",
    title: "Knowledge and Records Stewardship",
    count: 18,
    purpose:
      "Classify, connect, retrieve, review, and preserve authoritative knowledge with access and lineage.",
    examples: ["Metadata profile", "Records SOP", "Knowledge stewardship charter"],
  },
];

export type SeminarSprint = {
  title: string;
  format: string;
  outcome: string;
  artifacts: string[];
};

export const seminarSprints: SeminarSprint[] = [
  {
    title: "Authority, Delegation, and Decision Rights Sprint",
    format: "2-week sprint or executive seminar",
    outcome:
      "Clarifies who may commit resources, accept risk, authorize release, and resolve exceptions.",
    artifacts: ["Authority register", "Delegation map", "Escalation rules"],
  },
  {
    title: "Knowledge-to-Decision Repository Sprint",
    format: "3-week build sprint",
    outcome:
      "Creates the classification, metadata, taxonomy, and retrieval layer for current authoritative records.",
    artifacts: ["Repository architecture", "Metadata profile", "Retrieval test set"],
  },
  {
    title: "Governed AI and Automation Working Lab",
    format: "Private academy lab",
    outcome:
      "Teaches teams how to use AI for analysis, drafting, retrieval, and workflow support with human review and source discipline.",
    artifacts: ["Use-case cards", "Review checklist", "Prompt and evidence rules"],
  },
  {
    title: "MOP/MOE/KPI Scorecard Sprint",
    format: "2-3 week design sprint",
    outcome:
      "Turns objectives into measures, formulas, baselines, thresholds, and action rules.",
    artifacts: ["Measure dictionary", "Scorecard wireframe", "Action thresholds"],
  },
  {
    title: "Running Estimate and Forecast Validation Sprint",
    format: "Analytical sprint",
    outcome:
      "Builds functional estimates that separate facts, assumptions, unknowns, forecasts, and recommendations.",
    artifacts: ["Estimate template", "Forecast ledger", "Backtest notes"],
  },
  {
    title: "Release Control and Assurance Case Sprint",
    format: "Repository operations sprint",
    outcome:
      "Creates a defensible chain from requirement to test, decision, exception, release, and later correction.",
    artifacts: ["Release checklist", "Assurance case", "Evidence index"],
  },
  {
    title: "Change Adoption and Sustainment Sprint",
    format: "Implementation sprint",
    outcome:
      "Maps changed tasks, role impacts, support burden, adoption barriers, and sustainment requirements.",
    artifacts: ["Change impact map", "Adoption plan", "Sustainment backlog"],
  },
  {
    title: "Pilot and Proof-of-Value Sprint",
    format: "4-week bounded pilot",
    outcome:
      "Tests whether a proposed improvement produces a useful effect at acceptable burden before scale.",
    artifacts: ["Pilot charter", "Proof rubric", "Scale or stop decision memo"],
  },
];

export const storefrontStats = [
  {
    value: "7",
    label: "enterprise service packages",
    note: "Discovery, architecture, knowledge systems, governance operations, measurement, sustainment, and improvement.",
  },
  {
    value: "149",
    label: "proposed product patterns",
    note: "Grouped into charters, policies, plans, SOPs, job aids, registers, standards, assessments, and decision products.",
  },
  {
    value: "28",
    label: "mastery subjects",
    note: "Reusable seminar, sprint, and assessment topics for governance, evidence, analytics, AI, repositories, and adoption.",
  },
];

export const customizationLevers = [
  "Scale: one decision, one team, one product family, one cohort, one workflow, one service line, or one advisory lane.",
  "Sector: corporate, SMB, government, defense, public-sector adjacent, or mixed enterprise.",
  "Output: brief, charter, policy, plan, SOP, job aid, register, dashboard, repository, seminar, or sustainment rhythm.",
  "Delivery shape: diagnostic, workshop, sprint, build, cohort, retainer, or delivered-and-closed package.",
  "Operating boundary: people, process, data, systems, authority, records, AI use, or performance management.",
  "Evidence standard: source trace, reviewer reconstruction, acceptance criteria, measures, and closeout proof.",
  "Tool posture: client-owned stack first; no required resale, referral margin, or hidden platform dependency.",
];

export const pricingPrinciple = {
  title: "Pricing is based on scale, not content depth.",
  summary:
    "Every product is built to the same professional standard. Price changes when the delivery footprint changes: number of teams, cohorts, workflows, service lines, artifacts, meetings, stakeholders, locations, or sustainment cycles.",
  scaleDrivers: [
    "Audience or cohort size",
    "Number of workflows, service lines, or operating domains",
    "Number of tailored artifacts or product families",
    "Stakeholder and approval footprint",
    "Delivery cadence, sustainment period, or implementation lane",
  ],
};

export const trustBuildingSignals = [
  {
    title: "Framework-aware, certification-neutral",
    body:
      "AGG can map work to familiar AI, cybersecurity, knowledge-management, and governance frameworks without claiming certification, compliance, or authorization that has not been independently established.",
  },
  {
    title: "Evidence before promise",
    body:
      "Each product is scoped with records, acceptance evidence, measures, and a handoff path so the client can inspect what was done and why.",
  },
  {
    title: "Community and career-field value",
    body:
      "Academy labs and job aids turn specialized governance, AI, data, knowledge, and repository practices into teachable professional capability.",
  },
  {
    title: "Client-owned capability",
    body:
      "The storefront sells method, architecture, artifacts, and installed capability. The client keeps the toolset and the operating record.",
  },
];

export type SolutionPlay = {
  title: string;
  audience: string;
  outcome: string;
  icon: LucideIcon;
};

export const solutionPlays: SolutionPlay[] = [
  {
    title: "Executive Governance Operating Model",
    audience: "Senior leaders, PMOs, and executive offices",
    outcome:
      "A clear decision structure, meeting rhythm, controls, and evidence model for governing enterprise priorities.",
    icon: Landmark,
  },
  {
    title: "Knowledge-to-Decision Network",
    audience: "Defense, public sector, and complex enterprises",
    outcome:
      "A governed knowledge architecture that reduces duplication and supports faster, better decisions.",
    icon: Network,
  },
  {
    title: "Transformation Control Tower",
    audience: "Program leaders and change portfolios",
    outcome:
      "Portfolio visibility, dependency management, risk escalation, and outcome tracking across major initiatives.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Policy-to-Execution Traceability",
    audience: "Compliance-heavy and mission-critical organizations",
    outcome:
      "A documented chain from policy intent to operating procedures, measures, evidence, and review cycles.",
    icon: ClipboardCheck,
  },
  {
    title: "Workforce Capability Academy",
    audience: "Executives, stewards, PMOs, analysts, and private cohorts",
    outcome:
      "A practical education path that turns AI, automation, DG, repository, and ecosystem concepts into repeatable workforce behavior.",
    icon: GraduationCap,
  },
];

export type AcademyTrack = {
  code: string;
  title: string;
  summary: string;
  outcome: string;
  icon: LucideIcon;
};

export const academyTracks: AcademyTrack[] = [
  {
    code: "K",
    title: "Knowledge",
    summary:
      "Enterprise knowledge management systems that make institutional memory usable for decisions, work, and transfer.",
    outcome:
      "Teams learn to classify, preserve, retrieve, and reuse knowledge with provenance, ownership, and operating purpose.",
    icon: BookOpenCheck,
  },
  {
    code: "A",
    title: "Artificial Intelligence",
    summary:
      "AI and automation integration for briefs, analysis, workflow support, knowledge recall, and decision confidence.",
    outcome:
      "Participants use AI with citations, confidence, human review, and clear limits on what generated output can authorize.",
    icon: Bot,
  },
  {
    code: "I",
    title: "Integration",
    summary:
      "Practical integration across people, processes, data, repositories, workflows, and existing enterprise systems.",
    outcome:
      "Cohorts learn to connect the operating parts so evidence, action, approval, and reuse can travel together.",
    icon: Network,
  },
  {
    code: "G",
    title: "Governance",
    summary:
      "Data governance development and application for ownership, quality, lineage, definitions, controls, and decision trust.",
    outcome:
      "Workforce cohorts understand how policy, metadata, stewardship, and measures turn data into governed evidence.",
    icon: ShieldCheck,
  },
  {
    code: "E",
    title: "Engineered Operations",
    summary:
      "Repository operations for controlled products, issues, branches, reviews, artifacts, release records, and working code.",
    outcome:
      "Teams learn to run repository-backed work products with version discipline, change history, and auditable release control.",
    icon: GitBranch,
  },
  {
    code: "D|S",
    title: "Solutions & Deployment",
    summary:
      "Ecosystem capitalization that turns academy learning into fielded capability, adoption rhythm, and reusable advantage.",
    outcome:
      "Leaders and stewards learn to deploy engineered solutions, sustain adoption, and connect the ecosystem around measurable outcomes.",
    icon: Workflow,
  },
];

export const academyFormats = [
  {
    title: "Executive Workshop",
    audience: "Senior leaders and decision teams",
    description:
      "A focused private session that aligns leaders on AI, automation, DG, repository discipline, and governance implications.",
  },
  {
    title: "Workforce Cohort",
    audience: "Teams, analysts, PMOs, stewards, and operators",
    description:
      "A structured education path that builds shared vocabulary, operating habits, and applied delivery skill.",
  },
  {
    title: "Repository Lab",
    audience: "Builders, owners, and product leads",
    description:
      "A hands-on lab for issue discipline, documentation control, release flow, and artifact traceability.",
  },
  {
    title: "Ecosystem Practicum",
    audience: "Transformation and governance teams",
    description:
      "An applied build sequence that connects policy, taxonomy, automation, knowledge flow, and measurement.",
  },
];

export const insightBriefs = [
  {
    title: "Governance fails when authority and evidence live apart.",
    summary:
      "Effective governance ties every decision forum to explicit authority, required evidence, and a follow-through mechanism.",
  },
  {
    title: "Knowledge management becomes valuable when it changes decisions.",
    summary:
      "Repositories, taxonomies, and dashboards matter only when they shorten the path from signal to action.",
  },
  {
    title: "Velocity without traceability creates executive risk.",
    summary:
      "The goal is not slower process. The goal is a faster operating rhythm with visible assumptions, owners, and controls.",
  },
];

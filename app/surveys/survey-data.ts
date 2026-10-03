export type StrategicSurveyQuestion = {
  id: string;
  prompt: string;
  actionUse: string;
};

export type StrategicSurveyDefinition = {
  slug: string;
  title: string;
  eyebrow: string;
  shortTitle: string;
  description: string;
  audience: string;
  operatingIntent: string;
  promise: string;
  buttonLabel: string;
  questions: readonly StrategicSurveyQuestion[];
};

export const strategicSurveys = [
  {
    slug: "inside-perspective-human-cost-executive-management",
    title: "Inside Perspective: The Human Cost of Executive Management",
    eyebrow: "Executive Human-Cost Survey",
    shortTitle: "Inside Perspective",
    description:
      "A direct survey for leaders carrying the real burden of executive management: decision fatigue, hidden coordination cost, conflict pressure, expectation load, and the personal tax of keeping the organization moving.",
    audience:
      "Visionaries, founders, CEOs, CFOs, COOs, and C-suite personnel.",
    operatingIntent:
      "AGG customizes, innovates, and engineers solutions directly from client need, market research, and the ebb and flow of current posture, influence, and effect. This survey identifies what leaders are absorbing personally so AGG can convert that friction into executable support, decision structure, and operating relief.",
    promise:
      "Your responses help AGG turn executive pressure into practical architecture: clearer decision rights, better knowledge flow, tighter measurement, stronger governance, and less unmanaged burden on the people expected to carry the enterprise.",
    buttonLabel: "Inside Perspective: The Human Cost of Executive Management.",
    questions: [
      {
        id: "hidden-cost",
        prompt:
          "What is the most expensive human cost you are carrying as an executive that does not appear on a budget, dashboard, or performance report?",
        actionUse:
          "Identifies invisible load, decision fatigue, founder dependency, morale drag, and leadership-pressure categories AGG can translate into operating controls.",
      },
      {
        id: "burden-source",
        prompt:
          "Which recurring responsibility consumes the most executive energy without producing proportional strategic value?",
        actionUse:
          "Separates high-burden work from high-value work so AGG can target delegation, automation, governance, or process redesign.",
      },
      {
        id: "decision-impact",
        prompt:
          "Where are decisions being delayed, degraded, or over-personalized because the organization depends too heavily on one or two senior leaders?",
        actionUse:
          "Surfaces decision-rights gaps, single points of failure, and authority bottlenecks.",
      },
      {
        id: "relationship-friction",
        prompt:
          "What stakeholder tension, communication burden, or expectation mismatch is creating the greatest leadership drag?",
        actionUse:
          "Defines relationship friction AGG can map into governance cadence, communication architecture, and role clarity.",
      },
      {
        id: "knowledge-gap",
        prompt:
          "What information, institutional knowledge, or performance evidence do you wish you had before making major decisions?",
        actionUse:
          "Identifies knowledge-management, data-governance, and measurement gaps that weaken executive confidence.",
      },
      {
        id: "relief-target",
        prompt:
          "If AGG could take one recurring issue off your plate in the next 90 days, what should it be and why?",
        actionUse:
          "Creates a near-term service target with urgency, owner, outcome, and value logic.",
      },
      {
        id: "operating-change",
        prompt:
          "What would need to change in your operating system for executive management to become more sustainable, focused, and less personally costly?",
        actionUse:
          "Connects human cost to architecture, staffing, process, technology, measurement, and governance changes.",
      },
      {
        id: "success-proof",
        prompt:
          "What evidence would prove that executive burden has been reduced without reducing organizational performance or control?",
        actionUse:
          "Defines measurable success criteria for relief, continuity, quality, velocity, and accountable performance.",
      },
    ],
  },
  {
    slug: "paralysis-from-analysis-needs-vs-systems",
    title: "Paralysis from Analysis: A True Needs vs. Systems Approach",
    eyebrow: "Needs-vs.-Systems Survey",
    shortTitle: "Paralysis from Analysis",
    description:
      "A diagnostic survey for leaders facing stalled decisions, tool-first modernization, over-analysis, and systems that no longer match the true organizational need.",
    audience:
      "Visionaries, founders, CEOs, CFOs, COOs, and C-suite personnel.",
    operatingIntent:
      "AGG customizes, innovates, and engineers solutions directly from client need, market research, and the ebb and flow of current posture, influence, and effect. This survey separates the true need from inherited systems, assumed tools, and analysis loops so AGG can design an actionable path forward.",
    promise:
      "Your responses help AGG identify the real requirement, strip away false constraints, and build practical solutions that serve the mission rather than forcing the mission to serve the system.",
    buttonLabel: "Paralysis from Analysis: A True Needs vs. Systems Approach",
    questions: [
      {
        id: "true-need",
        prompt:
          "What need are you actually trying to satisfy, independent of any current system, tool, vendor, process, or inherited solution?",
        actionUse:
          "Forces separation between mission requirement and preselected solution.",
      },
      {
        id: "assumed-system",
        prompt:
          "Which system, process, tool, or reporting structure is currently being treated as mandatory, and what assumption keeps it in place?",
        actionUse:
          "Identifies false constraints, sunk-cost logic, legacy bias, and governance assumptions.",
      },
      {
        id: "analysis-stall",
        prompt:
          "Where has analysis stopped action, and what decision is waiting for more certainty than the situation realistically allows?",
        actionUse:
          "Surfaces decision paralysis, over-study patterns, and missing decision criteria.",
      },
      {
        id: "pain-point",
        prompt:
          "What operational pain point would remain even if the current system were upgraded, replaced, or automated?",
        actionUse:
          "Locates root-cause needs that technology alone will not solve.",
      },
      {
        id: "evidence-needed",
        prompt:
          "What evidence would help you determine whether the problem is a people, process, policy, data, technology, governance, or measurement issue?",
        actionUse:
          "Builds the diagnostic evidence map AGG can use to classify the problem correctly.",
      },
      {
        id: "minimum-intervention",
        prompt:
          "What is the smallest useful intervention that would create movement, learning, or measurable improvement in the next 30 to 90 days?",
        actionUse:
          "Creates a practical sprint option instead of a large-system dependency.",
      },
      {
        id: "system-accountability",
        prompt:
          "How should the system prove it is serving the mission, the workforce, the client, or the executive decision cycle?",
        actionUse:
          "Defines success measures, accountability logic, and system-performance proof.",
      },
      {
        id: "decision-authority",
        prompt:
          "Who must have the authority to stop, simplify, replace, or redesign the current approach, and what would they need to act?",
        actionUse:
          "Identifies authority, decision gates, sponsor requirements, and conditions for action.",
      },
    ],
  },
] as const satisfies readonly StrategicSurveyDefinition[];

export const insidePerspectiveSurvey = strategicSurveys[0];
export const paralysisFromAnalysisSurvey = strategicSurveys[1];

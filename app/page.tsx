import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  ClipboardCheck,
  CreditCard,
  CalendarClock,
  FileText,
  Gauge,
  GitBranch,
  GraduationCap,
  Landmark,
  Layers3,
  Mail,
  Network,
  SearchCheck,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import {
  academyProgramOutcomes,
  academyTopicDomains,
  brandStandard,
  downloadProducts,
  engagementPackages,
  githubRepositoryUrl,
  kaiged,
  pillarDefinitions,
  serviceLines,
  site,
  solutionDeliveryBridge,
  solutionPillarIntro,
  strategicDoctrine,
} from "./site-data";
import { ClientLedSelfDeterminationCards } from "./components/ClientLedSelfDeterminationCards";
import { EngagementPackageDeepDive } from "./components/EngagementPackageDeepDive";
import { BuyerGuidanceSelector } from "./components/BuyerGuidanceSelector";
import { HeroSolutionLanes } from "./components/HeroSolutionLanes";
import {
  insidePerspectiveSurvey,
  paralysisFromAnalysisSurvey,
} from "./surveys/survey-data";

const operatingSurfaceSignals = [
  {
    label: "Signal",
    title: "Readable at executive speed.",
    body:
      "The public experience now privileges fast comprehension: clear hierarchy, plain decision paths, and fewer competing visual demands.",
    icon: Gauge,
  },
  {
    label: "Structure",
    title: "One logic across every page.",
    body:
      "Services, academy, storefront, client access, doctrine, and investor material share the same operating language and visual grammar.",
    icon: Network,
  },
  {
    label: "Control",
    title: "Depth without noise.",
    body:
      "Raised surfaces, measured shadows, contour texture, and restrained motion create dimensionality while preserving a stoic executive tone.",
    icon: ShieldCheck,
  },
  {
    label: "Action",
    title: "Every path leads to a decision.",
    body:
      "Engagement, onboarding, investor briefing, repository review, and academy scoping remain visible as practical next moves.",
    icon: Target,
  },
] as const;

const trustArchitectureSignals = [
  {
    label: "Evidence",
    title: "QA / readiness scorecard",
    body:
      "Each serious engagement is framed around baseline, owner, evidence, control, release-readiness, and exit-proof questions before scale is recommended.",
    icon: BadgeCheck,
  },
  {
    label: "Telemetry",
    title: "First-party conversion signal",
    body:
      "Public page views and decision-path clicks now emit bounded, non-cookie telemetry to the server log stream so AGG can replace planning assumptions with observed demand.",
    icon: Gauge,
  },
  {
    label: "Governance",
    title: "Client data boundary",
    body:
      "CRM, Dataverse, SharePoint, Hex, and dashboard flows remain integration-ready but are not represented as live client systems until the environment, schema, identity, and retention model are confirmed.",
    icon: ShieldCheck,
  },
  {
    label: "Readiness",
    title: "Proof before dependency",
    body:
      "The site now makes clear that AGG starts with bounded decisions, proof artifacts, and controlled handoff before asking a client to expand scope.",
    icon: Network,
  },
] as const;

const confidenceMetrics = [
  {
    value: "0",
    label: "third-party resale margin required",
  },
  {
    value: "6",
    label: "checkout-backed first-move offers",
  },
  {
    value: "8",
    label: "operating lanes visible before click",
  },
  {
    value: "729",
    label: "KAIGES|D client configuration paths",
  },
] as const;

const conversionAssuranceSignals = [
  {
    label: "Decision Path",
    title: "Selector to registered first move.",
    body:
      "The guidance tool routes a buyer into onboarding with the selected package ID; it does not collect sensitive client data.",
    icon: ClipboardCheck,
  },
  {
    label: "Data Boundary",
    title: "Public-safe before private workspace.",
    body:
      "Identity, payment, protected records, and portal access stay gated until AGG validates scope, role, and access requirements.",
    icon: ShieldCheck,
  },
  {
    label: "Delivery Proof",
    title: "Inputs and outputs visible before intake.",
    body:
      "Package detail shows required inputs, generated outputs, timeline, engagement expectations, satisfaction criteria, and delivery package.",
    icon: Gauge,
  },
  {
    label: "Escalation Route",
    title: "A human briefing path remains open.",
    body:
      "If the fit is uncertain, the buyer can move to direct engagement or contact AGG before purchase expands.",
    icon: Mail,
  },
] as const;

const solutionSurveyActions = [
  {
    href: `/${insidePerspectiveSurvey.slug}`,
    label: insidePerspectiveSurvey.buttonLabel,
    icon: Landmark,
    className: "button button--survey-human",
  },
  {
    href: `/${paralysisFromAnalysisSurvey.slug}`,
    label: paralysisFromAnalysisSurvey.buttonLabel,
    icon: Workflow,
    className: "button button--survey-systems",
  },
] as const;

const buyerSystemLinks = [
  {
    href: "/taxonomy-starter",
    title: "AGG Signature Taxonomy",
    body:
      "Register for a public-safe signature taxonomy with Level 1 titling, Level 2 file anatomy, emerging-technology-friendly naming, and N.n lifecycle control.",
    icon: Layers3,
  },
  {
    href: "/proof-pack",
    title: "Public Proof Pack",
    body:
      "Download public-safe artifact samples for diagnostics, charters, continuity, measurement, academy labs, and handoff.",
    icon: FileText,
  },
  {
    href: "/procurement",
    title: "Procurement Packet",
    body:
      "Forward a capability statement, commercial boundary, contact route, and procurement-ready buying path.",
    icon: ClipboardCheck,
  },
  {
    href: "/trust-security",
    title: "Trust and Data Boundary",
    body:
      "See what stays public, what stays gated, and how AGG handles AI, records, portal, and protected-content boundaries.",
    icon: ShieldCheck,
  },
  {
    href: "/buyer-roles",
    title: "Buyer Role Fit",
    body:
      "Choose the first move by role: CEO, COO, CIO, CHRO, PMO, knowledge owner, investor, or strategic partner.",
    icon: Users,
  },
  {
    href: "/portal-preview",
    title: "Portal Preview",
    body:
      "Review the public-safe dashboard model for commissioned services, client administration, contact, and delivery package status.",
    icon: Gauge,
  },
  {
    href: "/academy-catalog",
    title: "Academy Catalog",
    body:
      "Review private education, certification evidence, and applied skill pathways for governed modern work.",
    icon: GraduationCap,
  },
  {
    href: "/case-studies",
    title: "Representative Vignettes",
    body:
      "See public-safe scenarios for decision friction, continuity exposure, and private workforce labs.",
    icon: SearchCheck,
  },
  {
    href: "/briefing",
    title: "Briefing Paths",
    body:
      "Request the right conversation: fit call, procurement packet, private Academy cohort, or investor briefing.",
    icon: CalendarClock,
  },
] as const;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__content">
          <p className="eyebrow">{site.name}</p>
          <h1
            aria-label={brandStandard.tier2.mastheadLines.join(". ")}
            className="hero__headline"
          >
            {brandStandard.tier2.mastheadLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero__statement">{brandStandard.tier2.descriptor}</p>
          <p className="hero__lede">{brandStandard.tier2.lead}</p>
          <div className="hero__actions" aria-label="Primary actions">
            <Link
              className="button button--primary"
              data-agg-event="cta"
              data-agg-label="hero executive diagnostic"
              href="/engage"
            >
              <CreditCard size={18} aria-hidden="true" />
              <span>Request the executive diagnostic</span>
            </Link>
            <Link
              className="button button--quiet"
              data-agg-event="cta"
              data-agg-label="hero methodology"
              href="/methodology"
            >
              <ArrowRight size={18} aria-hidden="true" />
              <span>See how an engagement runs</span>
            </Link>
          </div>
          <div className="hero__secondary-actions" aria-label="Secondary actions">
            <Link className="button button--quiet" href="/methodology">
              <ArrowRight size={18} aria-hidden="true" />
              <span>Our Formal Process</span>
            </Link>
            <Link className="button button--quiet" href="/academy">
              <GraduationCap size={18} aria-hidden="true" />
              <span>Apex Academy</span>
            </Link>
            <Link className="button button--quiet" href="/engage">
              <CreditCard size={18} aria-hidden="true" />
              <span>Services | Apex Digital Store</span>
            </Link>
          </div>
          <div className="hero__pillar-intro" aria-label="Apex solution composition">
            <p className="hero__pillar-copy">{solutionPillarIntro.statement}</p>
            <div
              className="hero__solution-survey-actions"
              aria-label="Executive surveys above Apex Solutions"
            >
              {solutionSurveyActions.map((action) => (
                <Link className={action.className} href={action.href} key={action.href}>
                  <action.icon size={18} aria-hidden="true" />
                  <span>{action.label}</span>
                </Link>
              ))}
            </div>
            <p className="hero__pillar-heading">
              {solutionPillarIntro.headingLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <div className="hero__solution-bridge" aria-label="Apex solution delivery lanes">
            <p className="hero__solution-bridge-lede">{solutionDeliveryBridge.lead}</p>
            <HeroSolutionLanes lanes={solutionDeliveryBridge.lanes} />
          </div>
          <dl className="hero__metrics" aria-label="Operating focus">
            {pillarDefinitions.map((pillar) => (
              <div key={pillar.term}>
                <dt>{pillar.term}</dt>
                <dd>{pillar.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="operating-surface-heading">
        <div className="container surface-command">
          <div className="surface-command__panel">
            <p className="eyebrow">Executive Operating Surface</p>
            <h2 id="operating-surface-heading">A cleaner front door for serious work.</h2>
            <p>
              The website is designed as an operational briefing surface: simple
              enough to scan, authoritative enough to trust, and structured
              enough to move a sponsor from curiosity to a first decision.
            </p>
            <Link className="text-link" href="/services">
              Review the service architecture
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="surface-signal-grid" aria-label="Modernized site experience signals">
            {operatingSurfaceSignals.map((signal) => (
              <article className="surface-signal-card" key={signal.title}>
                <signal.icon size={22} aria-hidden="true" />
                <span>{signal.label}</span>
                <h3>{signal.title}</h3>
                <p>{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--trust" aria-labelledby="trust-architecture-heading">
        <div className="container trust-architecture">
          <div className="trust-architecture__brief">
            <p className="eyebrow">Trust Architecture</p>
            <h2 id="trust-architecture-heading">Measured, governed, and ready to connect.</h2>
            <p>
              Consumer confidence comes from visible proof, not broad claims.
              AGG now separates what is live, what is instrumented, what is
              integration-ready, and what remains gated until client authority,
              identity, and records controls are established.
            </p>
            <div className="confidence-metric-grid" aria-label="Public confidence metrics">
              {confidenceMetrics.map((metric) => (
                <div className="confidence-metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="action-row">
              <Link
                className="button button--primary"
                data-agg-event="cta"
                data-agg-label="trust proof library"
                href="/proof-library"
              >
                <BookOpenCheck size={18} aria-hidden="true" />
                Open proof library
              </Link>
              <Link
                className="button button--quiet"
                data-agg-event="cta"
                data-agg-label="trust client onboarding"
                href="/client-onboarding"
              >
                <ArrowRight size={18} aria-hidden="true" />
                Start controlled onboarding
              </Link>
            </div>
          </div>
          <div className="trust-signal-grid" aria-label="Trust and readiness signals">
            {trustArchitectureSignals.map((signal) => (
              <article className="trust-signal-card" key={signal.title}>
                <div className="trust-signal-card__top">
                  <signal.icon size={22} aria-hidden="true" />
                  <span>{signal.label}</span>
                </div>
                <h3>{signal.title}</h3>
                <p>{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--guidance" aria-labelledby="buyer-guidance-heading">
        <div className="container">
          <BuyerGuidanceSelector
            packages={engagementPackages}
            headingId="buyer-guidance-heading"
            title="Find Your First Move"
            intro="Answer five public-safe scoping questions before you register. Apex will recommend the most practical starting point and route the next action into controlled onboarding or the storefront listing."
          />
          <div className="conversion-assurance" aria-label="Premium conversion assurance">
            {conversionAssuranceSignals.map((signal) => (
              <article className="conversion-assurance__item" key={signal.title}>
                <signal.icon size={20} aria-hidden="true" />
                <span>{signal.label}</span>
                <h3>{signal.title}</h3>
                <p>{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="buyer-system-heading">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Buyer Confidence System</p>
            <h2 id="buyer-system-heading">
              Proof, procurement, trust, role fit, and scheduling in one public path.
            </h2>
            <p>
              The next step should not require a buyer to guess. AGG now gives
              each serious visitor a public-safe inspection path before intake,
              checkout, portal access, or investor diligence.
            </p>
          </div>
          <div className="artifact-pack-grid" aria-label="Buyer confidence links">
            {buyerSystemLinks.map((link) => (
              <article className="artifact-pack-card" key={link.href}>
                <link.icon size={24} aria-hidden="true" />
                <h2>{link.title}</h2>
                <p>{link.body}</p>
                <Link className="text-link" href={link.href}>
                  Open
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Operating Thesis</p>
            <h2>{brandStandard.tier4.thesis}</h2>
          </div>
          <div className="prose">
            {brandStandard.tier4.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--doctrine">
        <div className="container doctrine-band">
          <div>
            <p className="eyebrow">{strategicDoctrine.status}</p>
            <h2>Corporate doctrine governs how Apex builds advantage.</h2>
            <p className="large-copy">{strategicDoctrine.mission.statement}</p>
            <Link className="text-link" href="/doctrine">
              Read mission, vision, intent, values, and key tasks
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <ol className="doctrine-band__sequence" aria-label="Governing operating sequence">
            {strategicDoctrine.sequence.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{brandStandard.tier3.label}</p>
            <h2>Four proof beats, held in sequence.</h2>
          </div>
          <div className="proof-quartet">
            {brandStandard.tier3.proofs.map((proof, index) => (
              <article className="proof-card" key={proof.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{proof.title}</h3>
                <p>{proof.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container kaiges-panel">
          <div className="section-heading">
            <p className="eyebrow">{kaiged.acronym}</p>
            <h2>{kaiged.headline}</h2>
            <p>{kaiged.description}</p>
            <p>{kaiged.partnershipStatement}</p>
          </div>
          <ClientLedSelfDeterminationCards />
        </div>
      </section>

      <section className="section section--steel">
        <div className="container split">
          <div>
            <p className="eyebrow">Commercial Boundary</p>
            <h2>The client keeps the toolset.</h2>
            <p className="large-copy">{brandStandard.delivery.productBoundary}</p>
          </div>
          <div className="commitment-list" aria-label="Engagement commitments">
            <p className="commitment-list__intro">
              Two commitments follow from that and hold on every engagement:
            </p>
            {brandStandard.delivery.commitments.map((commitment) => (
              <article className="commitment-card" key={commitment.title}>
                <BadgeCheck size={19} aria-hidden="true" />
                <div>
                  <h3>{commitment.title}</h3>
                  <p>{commitment.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="apex-publications-library-heading">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Apex Publications Library</p>
            <h2 id="apex-publications-library-heading">
              Review the publication path before you buy the work.
            </h2>
            <p>
              AGG publications translate complex operating needs into
              downloadable briefs, templates, assessments, checklists, and
              governing document packages. Each publication route connects to a
              storefront listing, registration path, and controlled delivery
              record.
            </p>
          </div>
          <div className="card-grid card-grid--three" aria-label="Apex publication routes">
            {downloadProducts.slice(0, 3).map((item) => (
              <article className="service-card" key={item.id}>
                <BookOpenCheck size={22} aria-hidden="true" />
                <p className="eyebrow">{item.sku} | {item.tier}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <Link className="text-link" href={`/engage#download-product-${item.id}`}>
                  Review download product
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <div className="action-row action-row--center">
            <Link className="button button--primary" href="/engage#apex-publications-library">
              <BookOpenCheck size={18} aria-hidden="true" />
              Open Apex Publications Library
            </Link>
            <Link className="button button--quiet" href="/engage">
              <CreditCard size={18} aria-hidden="true" />
              View full storefront
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Core Capabilities</p>
            <h2>Built around the executive operating problem.</h2>
          </div>
          <div className="card-grid card-grid--three">
            {serviceLines.slice(0, 6).map((service) => (
              <article className="service-card" key={service.title}>
                <service.icon size={22} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container proof-grid">
          <article className="feature-panel">
            <Landmark size={26} aria-hidden="true" />
            <h2>Executive government and defense orientation.</h2>
            <p>
              The offer structure and delivery model are built for decision
              support, organizational performance, policy clarity, and
              knowledge governance in public-sector environments, including the
              constraints those environments actually operate under.
            </p>
            <Link className="text-link" href="/solutions">
              Review mission use cases
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
          <article className="feature-panel">
            <GitBranch size={26} aria-hidden="true" />
            <h2>Repository-based delivery spine.</h2>
            <p>
              Website source, release discipline, issue intake, and delivery
              artifacts are structured for repository control, so every work
              product has a version, an owner, and a history.
            </p>
            <a className="text-link" href={githubRepositoryUrl}>
              Open repository
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>
          <article className="feature-panel">
            <ShieldCheck size={26} aria-hidden="true" />
            <h2>Engagement packages, server-owned.</h2>
            <p>
              Packages are defined server-side and routed through a checkout
              endpoint that activates on credential provisioning.
            </p>
            <Link className="text-link" href="/engage">
              View engagement packages
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
          <article className="feature-panel">
            <GraduationCap size={26} aria-hidden="true" />
            <h2>Apex Academy for workforce and private education.</h2>
            <p>
              Private cohorts build applied capability in AI, automation, data
              governance, repository operations, and ecosystem development.
            </p>
            <div className="academy-signal" aria-label="Apex Academy offerings">
              <strong>
                {academyProgramOutcomes.map((program) => program.title).join(" | ")}
              </strong>
              <span>{academyTopicDomains.join(" | ")}</span>
            </div>
            <Link className="text-link" href="/academy">
              View academy tracks
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">First Move</p>
            <h2>Six ways to start.</h2>
            <p className="large-copy">
              Buy a bounded first move, then customize the artifact, sprint,
              seminar, build, or advisory rhythm. Pricing moves with scale,
              not the depth of the content standard.
            </p>
          </div>
          <div className="stack-list">
            {engagementPackages.map((item) => (
              <div className="stack-list__item" key={item.id}>
                <Workflow size={19} aria-hidden="true" />
                <div>
                  <span>{item.name}</span>
                  <p>{item.description}</p>
                </div>
                <strong>{item.displayPrice}</strong>
                <EngagementPackageDeepDive packageItem={item} variant="compact" />
              </div>
            ))}
            <Link className="button button--primary" href="/engage">
              <ArrowRight size={18} aria-hidden="true" />
              Scale, scope, and pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

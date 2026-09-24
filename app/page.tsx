import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  GitBranch,
  GraduationCap,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import {
  brandStandard,
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
import { HeroSolutionLanes } from "./components/HeroSolutionLanes";

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
            <Link className="button button--primary" href="/engage">
              <CreditCard size={18} aria-hidden="true" />
              <span>Request the executive diagnostic</span>
            </Link>
            <Link className="button button--quiet" href="/methodology">
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
                <BadgeCheck size={19} aria-hidden="true" />
                <div>
                  <span>{item.name}</span>
                  <p>{item.description}</p>
                </div>
                <strong>{item.displayPrice}</strong>
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

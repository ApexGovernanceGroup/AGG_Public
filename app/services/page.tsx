import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  enterpriseServicePackages,
  kaiged,
  kaigedCategories,
  productCatalogGroups,
  seminarSprints,
  serviceLines,
  storefrontCollections,
  storefrontStats,
  trustBuildingSignals,
} from "../site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Governance architecture, knowledge systems, strategy execution, decision support, data analytics, applied analysis, communities of practice, repository governance, product kits, seminars, sprints, and Apex Academy education.",
};

const serviceDecisionPath = [
  {
    step: "01",
    label: "Diagnose",
    title: "Bound the decision before the spend expands.",
    body:
      "AGG starts with a decision, exposure, or operating problem that can be observed and evidenced. The first product is a usable executive view, not a generic maturity score.",
    proof: "Problem statement, evidence baseline, options, and 90-day action path.",
  },
  {
    step: "02",
    label: "Architect",
    title: "Turn findings into an operating design.",
    body:
      "The work moves from evidence into authority, ownership, measures, source records, process design, and implementation sequence.",
    proof: "Target architecture, decision rights, acceptance criteria, and controls.",
  },
  {
    step: "03",
    label: "Install",
    title: "Build the artifacts that change daily work.",
    body:
      "AGG produces the charters, SOPs, repositories, scorecards, job aids, labs, and decision products required to make the design executable.",
    proof: "Controlled product set, user path, handoff record, and adoption evidence.",
  },
  {
    step: "04",
    label: "Sustain",
    title: "Transfer the capability or hold the improvement rhythm.",
    body:
      "The engagement closes when the client can operate the capability, or it converts into advisory sustainment with clear review and improvement rules.",
    proof: "Closeout proof, sustainment backlog, review rhythm, and next decision.",
  },
];

const serviceQualityGates = [
  {
    title: "Scope Gate",
    body:
      "Sponsor, decision owner, operating boundary, and acceptance criteria are named before work expands.",
  },
  {
    title: "Evidence Gate",
    body:
      "Findings separate fact, assumption, uncertainty, and recommendation so a reviewer can reconstruct the logic.",
  },
  {
    title: "Control Gate",
    body:
      "Artifacts identify authority, version, owner, effective use, exception handling, and review cadence.",
  },
  {
    title: "Transfer Gate",
    body:
      "The final package leaves the client with records, job aids, measures, and a sustainment or closeout path.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Services</p>
          <h1 className="services-hero__title">
            Services, products, sprints, and seminars for governed advantage.
          </h1>
          <p>
            AGG converts fragmented planning, knowledge, policy, technology,
            evidence, and performance work into a decision path a sponsor can
            inspect: diagnose, architect, install, and sustain.
          </p>
          <div className="page-hero__actions">
            <Link className="button button--primary" href="/engage">
              Choose an engagement
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="button button--quiet-on-dark" href="/methodology">
              Review the method
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Executive Service Decision Path</p>
            <h2>Buy the first move, then scale only what proves useful.</h2>
            <p>
              Services are organized as a controlled sequence. A client can buy
              a diagnostic, product kit, sprint, lab, or advisory lane without
              accepting a hidden tooling dependency or an unbounded consulting
              motion.
            </p>
          </div>
          <div className="service-decision-grid">
            {serviceDecisionPath.map((item) => (
              <article className="service-decision-card" key={item.step}>
                <div className="service-decision-card__top">
                  <span>{item.step}</span>
                  <strong>{item.label}</strong>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <small>{item.proof}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container split">
          <div>
            <p className="eyebrow">Workbook-Derived Storefront</p>
            <h2>A broad catalog, compressed into decision-ready entry lanes.</h2>
            <p>
              The full catalog remains available for tailoring, but the public
              buying surface is intentionally simpler: pick the operating
              problem, choose an entry lane, and let intake determine the
              product depth.
            </p>
          </div>
          <div className="service-inventory" aria-label="Storefront inventory">
            {storefrontStats.map((stat) => (
              <article className="catalog-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Apex Digital Store</p>
            <h2>Marketable buying categories with clear client value.</h2>
            <p>
              Each collection can enter through a bounded purchase, then become
              a custom build, private seminar, implementation sprint, or
              advisory rhythm after intake confirms scope.
            </p>
          </div>
          <div className="card-grid card-grid--three">
            {storefrontCollections.map((collection) => (
              <article className="service-card" key={collection.title}>
                <collection.icon size={22} aria-hidden="true" />
                <p className="eyebrow">{collection.buyer}</p>
                <h3>{collection.title}</h3>
                <p>{collection.summary}</p>
                <ul className="mini-list">
                  {collection.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
                <strong className="card-outcome">{collection.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">{kaiged.acronym}</p>
            <h2>The installed architecture has six fixed service lanes.</h2>
            <p>
              Client-Led Self-Determination gives the buyer choices inside a
              stable operating structure. The sequence stays fixed so the
              resulting service shape can be recorded, explained, and carried
              into delivery.
            </p>
          </div>
          <div className="kaiges-list">
            {kaigedCategories.map((category) => (
              <article className="kaiges-list__item" key={category.title}>
                <span>{category.code}</span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Core Capabilities</p>
            <h2>What AGG installs when the engagement moves past diagnosis.</h2>
            <p>
              Each capability is tied to concrete products a client can inspect,
              adapt, purchase, teach, or carry into a larger implementation
              package.
            </p>
          </div>
          <div className="service-work-grid">
            {serviceLines.map((service) => (
              <article className="service-work-card" key={service.title}>
                <div className="service-work-card__icon">
                  <service.icon size={24} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
                <strong>Example work products</strong>
                <ul className="mini-list">
                  {service.workProducts.map((product) => (
                    <li key={product}>{product}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">ISO-Strengthened Quality Logic</p>
            <h2>Certification-neutral controls that make quality observable.</h2>
            <p>
              AGG does not claim ISO certification through this public site.
              The service model borrows management-system discipline: scope,
              evidence, controls, transfer, and continual improvement must be
              visible in the work product.
            </p>
          </div>
          <div className="service-quality-grid">
            {serviceQualityGates.map((gate) => (
              <article className="service-quality-card" key={gate.title}>
                <CheckCircle2 size={22} aria-hidden="true" />
                <h3>{gate.title}</h3>
                <p>{gate.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Catalog Detail</p>
            <h2>Inspect the depth after the buying path is clear.</h2>
            <p>
              The detailed catalog stays available, but it no longer has to do
              the first job of the page. Open the layer that matches the
              decision you are making.
            </p>
          </div>
          <div className="service-accordion-list">
            <details className="service-accordion" open>
              <summary>
                <span>Implementation Packages</span>
                <strong>Seven packages from diagnosis to sustained improvement</strong>
              </summary>
              <div className="service-accordion__body">
                <div className="package-grid">
                  {enterpriseServicePackages.map((servicePackage) => (
                    <article className="package-card" key={servicePackage.code}>
                      <div className="package-card__top">
                        <span>{servicePackage.code}</span>
                        <servicePackage.icon size={22} aria-hidden="true" />
                      </div>
                      <h3>{servicePackage.title}</h3>
                      <p>{servicePackage.purpose}</p>
                      <strong>Method</strong>
                      <p>{servicePackage.method}</p>
                      <strong>Client outputs</strong>
                      <ul className="mini-list">
                        {servicePackage.outputs.map((output) => (
                          <li key={output}>{output}</li>
                        ))}
                      </ul>
                      <strong>Acceptance proof</strong>
                      <p>{servicePackage.proof}</p>
                      <small>{servicePackage.measures}</small>
                    </article>
                  ))}
                </div>
              </div>
            </details>

            <details className="service-accordion">
              <summary>
                <span>Product Library</span>
                <strong>149 proposed product patterns, grouped for customization</strong>
              </summary>
              <div className="service-accordion__body">
                <p className="service-accordion__lead">
                  The catalog supports charters, policies, plans, SOPs, job
                  aids, registers, standards, assessments, checklists, reports,
                  decision memoranda, architectures, agreements, and training
                  packages.
                </p>
                <div className="catalog-grid">
                  {productCatalogGroups.map((group) => (
                    <article className="catalog-card" key={group.domain}>
                      <div className="catalog-card__top">
                        <span>{group.domain}</span>
                        <strong>{group.count}</strong>
                      </div>
                      <h3>{group.title}</h3>
                      <p>{group.purpose}</p>
                      <ul className="mini-list">
                        {group.examples.map((example) => (
                          <li key={example}>{example}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </details>

            <details className="service-accordion">
              <summary>
                <span>Seminars and Sprints</span>
                <strong>Private education, fast design, and implementation accelerators</strong>
              </summary>
              <div className="service-accordion__body">
                <div className="sprint-grid">
                  {seminarSprints.map((sprint) => (
                    <article className="sprint-card" key={sprint.title}>
                      <p className="eyebrow">{sprint.format}</p>
                      <h3>{sprint.title}</h3>
                      <p>{sprint.outcome}</p>
                      <ul className="mini-list">
                        {sprint.artifacts.map((artifact) => (
                          <li key={artifact}>{artifact}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Trust Logic</p>
            <h2>Every service ends in an artifact, a record, and a proof standard.</h2>
          </div>
          <div className="stack-list">
            {trustBuildingSignals.map((signal) => (
              <div className="stack-list__item" key={signal.title}>
                <ArrowRight size={18} aria-hidden="true" />
                <div>
                  <span>{signal.title}</span>
                  <p>{signal.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container action-row">
          <Link className="button button--primary" href="/engage">
            <ArrowRight size={18} aria-hidden="true" />
            Choose an engagement
          </Link>
        </div>
      </section>
    </main>
  );
}

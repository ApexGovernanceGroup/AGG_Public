import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    "Governance architecture, knowledge systems, strategy execution, decision support, performance management, repository operations, product kits, seminars, sprints, and Apex Academy education.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Services</p>
          <h1>Services, products, sprints, and seminars for governed advantage.</h1>
          <p>
            AGG converts fragmented planning, knowledge, policy, technology,
            evidence, and performance work into purchasable packages, tailored
            products, private education, and installed operating capability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Workbook-Derived Storefront</p>
            <h2>A broad catalog, organized into decision-ready buying paths.</h2>
          </div>
          <div className="catalog-stat-grid" aria-label="Storefront inventory">
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

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">{kaiged.acronym}</p>
            <h2>Subcategories for the installed operating architecture.</h2>
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
            <p className="eyebrow">Apex Digital Store</p>
            <h2>Marketable buying categories with clear client value.</h2>
            <p>
              Each collection can be purchased as an entry package, scoped as a
              custom build, taught as a private seminar, or sustained through an
              advisory rhythm.
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

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Core Capabilities</p>
            <h2>Pop-out work-product boxes for each service line.</h2>
            <p>
              Each capability is tied to concrete products a client can inspect,
              adapt, purchase, or carry into a larger implementation package.
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
            <p className="eyebrow">Implementation Packages</p>
            <h2>Seven service packages that move from diagnosis to sustained improvement.</h2>
          </div>
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
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Product Library</p>
            <h2>149 proposed product patterns, grouped for customization.</h2>
            <p>
              The catalog supports charters, policies, plans, SOPs, job aids,
              registers, standards, assessments, checklists, reports, decision
              memoranda, architectures, agreements, and training packages.
            </p>
          </div>
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
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Seminars and Sprints</p>
            <h2>Private education, fast design, and implementation accelerators.</h2>
          </div>
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

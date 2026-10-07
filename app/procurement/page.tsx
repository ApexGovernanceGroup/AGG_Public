import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import {
  contactEmail,
  githubRepositoryUrl,
  procurementCapabilityItems,
  site,
} from "../site-data";

export const metadata: Metadata = {
  title: "Procurement and Capability Packet",
  description:
    "Apex Governance Group procurement-ready capability statement, public-safe buying path, delivery evidence, and contact route.",
};

export default function ProcurementPage() {
  return (
    <main>
      <section className="page-hero page-hero--navy">
        <div className="container page-hero__inner">
          <p className="eyebrow">Procurement and Capability</p>
          <h1>A forwardable packet for sponsors, buyers, and contracting staff.</h1>
          <p>
            This page gives internal buyers a plain-language AGG capability
            statement, commercial boundary, proof path, and engagement route
            before a procurement package or custom agreement is requested.
          </p>
          <div className="page-hero__actions">
            <a className="button button--primary" href="/agg-capability-packet.html">
              <Download size={18} aria-hidden="true" />
              Open capability packet
            </a>
            <a className="button button--quiet-on-dark" href={`mailto:${contactEmail}`}>
              Contact AGG
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container capability-statement">
          <div>
            <p className="eyebrow">Capability Statement</p>
            <h2>{site.name}</h2>
            <p className="large-copy">{site.description}</p>
          </div>
          <div className="capability-statement__facts">
            <dl>
              <div>
                <dt>Primary contact</dt>
                <dd>{contactEmail}</dd>
              </div>
              <div>
                <dt>Public repository</dt>
                <dd>{githubRepositoryUrl}</dd>
              </div>
              <div>
                <dt>Commercial posture</dt>
                <dd>Client-owned tools first; no required resale margin.</dd>
              </div>
              <div>
                <dt>First move</dt>
                <dd>Diagnostic, product kit, academy lab, sprint, or retainer.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Buyer Packet</p>
            <h2>What procurement reviewers need to see first.</h2>
          </div>
          <div className="card-grid card-grid--two">
            {procurementCapabilityItems.map((item) => (
              <article className="service-card" key={item.title}>
                <item.icon size={24} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <strong className="card-outcome">{item.proof}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Procurement Use</p>
            <h2>Use this page before internal routing.</h2>
          </div>
          <div className="prose prose--on-dark">
            <p>
              AGG can support bounded commercial products, custom solution
              work, private academy cohorts, retained advisory, and longer
              solution partnerships. Final scope, legal terms, invoicing,
              contracting requirements, data boundary, and portal access are
              confirmed during controlled intake.
            </p>
            <Link className="button button--primary" href="/client-onboarding">
              Start controlled onboarding
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

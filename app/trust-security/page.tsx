import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { trustSecurityControls } from "../site-data";

export const metadata: Metadata = {
  title: "Trust, Security, and Data Boundary",
  description:
    "Apex Governance Group public-site trust, security, AI, portal, records, and data handling boundaries.",
};

export default function TrustSecurityPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Trust and Data Boundary</p>
          <h1>No protected work begins in an uncontrolled public channel.</h1>
          <p>
            AGG uses public pages to route interest, clarify fit, and request
            safe intake context. Protected records, client files, privileged
            material, credentials, CUI, payment data, and proprietary operating
            detail require a validated engagement boundary.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Controls</p>
            <h2>What AGG accepts publicly and what stays gated.</h2>
          </div>
          <div className="trust-boundary-grid">
            {trustSecurityControls.map((control) => (
              <article className="trust-boundary-card" key={control.title}>
                <control.icon size={24} aria-hidden="true" />
                <h2>{control.title}</h2>
                <strong>Boundary</strong>
                <p>{control.boundary}</p>
                <strong>Control</strong>
                <p>{control.control}</p>
                <strong>Client action</strong>
                <p>{control.clientAction}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Operating Rule</p>
            <h2>Register the need. Do not upload the risk.</h2>
          </div>
          <div className="stack-list">
            <div className="stack-list__item">
              <ShieldCheck size={18} aria-hidden="true" />
              <div>
                <span>Public-safe intake</span>
                <p>
                  Submit organization, role, desired outcome, timeline, and
                  access need. Hold sensitive content until AGG confirms the
                  right workspace and authority boundary.
                </p>
              </div>
            </div>
            <Link className="button button--primary" href="/client-onboarding">
              Register safely
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, Building2, GitBranch } from "lucide-react";
import { insightBriefs, integrationConnections } from "../site-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Executive notes on governance, knowledge management, strategy execution, and decision velocity.",
};

export default function InsightsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Insights</p>
          <h1>Short-form thinking for decision quality and execution speed.</h1>
          <p>
            AGG publishes concise operating notes for leaders shaping governance,
            knowledge, and strategic execution systems.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container insight-list">
          {insightBriefs.map((brief) => (
            <article className="insight-card" key={brief.title}>
              <BookOpenCheck size={22} aria-hidden="true" />
              <h2>{brief.title}</h2>
              <p>{brief.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Publishing Spine</p>
            <h2>Insights connect to the public AGG repository and intake-governed records boundary.</h2>
          </div>
          <p className="large-copy">
            The content model is aligned to GitHub-backed drafting, review,
            versioning, and release notes. Microsoft 365 and SharePoint records
            controls are confirmed during intake before client-owned material
            is accepted or represented as operational.
          </p>
        </div>
        <div className="container integration-grid" aria-label="Connected systems">
          {integrationConnections.map((connection) => {
            const Icon = connection.system === "GitHub" ? GitBranch : Building2;

            return (
              <article className="integration-card" key={connection.system}>
                <Icon size={24} aria-hidden="true" />
                <p className="eyebrow">{connection.system}</p>
                <h3>{connection.label}</h3>
                <p>{connection.role}</p>
                <strong>{connection.status}</strong>
                {connection.system === "GitHub" ? (
                  <a className="text-link" href={connection.href}>
                    Open public repository
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <Link className="text-link" href="/contact">
                    Confirm boundary during intake
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
        <div className="container action-row">
          <Link className="button button--quiet-on-dark" href="/contact">
            <ArrowRight size={18} aria-hidden="true" />
            Propose a topic
          </Link>
        </div>
      </section>
    </main>
  );
}

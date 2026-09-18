import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";
import { academyFormats, academyTracks } from "../site-data";

export const metadata: Metadata = {
  title: "Apex Academy",
  description:
    "Private workforce education for governed AI, automation, data governance, repository operations, and ecosystem development.",
};

export default function AcademyPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Apex Academy</p>
          <h1>Private education for the workforce that must govern modern work.</h1>
          <p>
            Apex Academy builds practical capability in AI, automation, data
            governance, repository operations, and ecosystem development for
            executive, government, defense, and enterprise teams.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Workforce Capability</p>
            <h2>Education tied to operating behavior, not generic training.</h2>
          </div>
          <div className="prose">
            <p>
              The academy model translates executive governance concepts into
              workforce habits: how teams classify information, use AI,
              automate approvals, maintain repositories, protect decision
              evidence, and build the surrounding ecosystem.
            </p>
            <p>
              Delivery is private by design. Cohorts can be scoped around an
              organization, a mission set, a transformation office, a steward
              community, or a product team that needs disciplined execution.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">The KAIGED|S Approach</p>
            <h2>Six lanes for governed digital operating capability.</h2>
          </div>
          <div className="card-grid card-grid--three">
            {academyTracks.map((track) => (
              <article className="service-card" key={track.title}>
                <div className="service-card__top">
                  <span className="track-code">{track.code}</span>
                  <track.icon size={22} aria-hidden="true" />
                </div>
                <h3>{track.title}</h3>
                <p>{track.summary}</p>
                <strong className="card-outcome">{track.outcome}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid card-grid--two">
          {academyFormats.map((format) => (
            <article className="solution-card" key={format.title}>
              <BadgeCheck size={26} aria-hidden="true" />
              <p className="eyebrow">{format.audience}</p>
              <h2>{format.title}</h2>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Governed AI Posture</p>
            <h2>Human judgment stays in command.</h2>
          </div>
          <div>
            <p className="large-copy">
              Apex Academy teaches AI and automation as governed assistants:
              grounded, cited, auditable, confidence-aware, and human-reviewed.
              No cohort is taught to treat generated output as self-authorizing.
            </p>
            <ul className="academy-control-list">
              <li>
                <ShieldCheck size={18} aria-hidden="true" />
                Entitlement-aware knowledge use.
              </li>
              <li>
                <ShieldCheck size={18} aria-hidden="true" />
                Human approval for governed changes.
              </li>
              <li>
                <ShieldCheck size={18} aria-hidden="true" />
                Repository-backed evidence and release history.
              </li>
            </ul>
          </div>
        </div>
        <div className="container action-row">
          <Link className="button button--primary" href="/engage">
            <ArrowRight size={18} aria-hidden="true" />
            Scope an academy cohort
          </Link>
          <Link className="button button--quiet" href="/contact">
            Request private education briefing
          </Link>
        </div>
      </section>
    </main>
  );
}

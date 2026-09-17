import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ExternalLink } from "lucide-react";
import { brandStandard, founderProfile, site } from "../site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Apex Governance Group installs knowledge, strategy, governance, and velocity as one operating architecture for executive government, defense, and enterprise contexts.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">About</p>
          <h1>{site.tagline}.</h1>
          <p>
            {brandStandard.tier2.descriptor}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Method</p>
            <h2>One operating logic across knowledge, strategy, governance, and velocity.</h2>
          </div>
          <div className="prose">
            <p>
              AGG starts with the executive decision problem, identifies the
              knowledge and governance gaps that slow action, then builds the
              minimum durable operating layer required to move.
            </p>
            <p>
              The method favors clear ownership, traceable decisions, reusable
              artifacts, practical measures, and delivery discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container founder-spotlight">
          <div className="founder-spotlight__copy">
            <p className="eyebrow">About the Founder</p>
            <h2>{founderProfile.name}</h2>
            <p className="founder-title">{founderProfile.title}</p>
            <p className="large-copy">{founderProfile.headline}</p>
            <p>{founderProfile.summary}</p>
            <a
              className="button button--quiet-on-dark founder-spotlight__link"
              href={founderProfile.linkedinUrl}
              rel="noreferrer"
              target="_blank"
              aria-label={`Connect with ${founderProfile.name} on LinkedIn`}
            >
              <ExternalLink size={18} aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </div>
          <aside className="founder-spotlight__profile" aria-label="Founder focus areas">
            <dl className="founder-proof-list">
              {founderProfile.proofPoints.map((point) => (
                <div key={point.label}>
                  <dt>{point.label}</dt>
                  <dd>{point.value}</dd>
                </div>
              ))}
            </dl>
            <div className="founder-focus">
              <p className="eyebrow">Current Focus</p>
              <ul>
                {founderProfile.focusAreas.map((area) => (
                  <li key={area}>
                    <BadgeCheck size={17} aria-hidden="true" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container principle-grid">
          {[
            "Cross-reference, do not duplicate.",
            "Tie every recommendation to assumptions and risk.",
            "Build artifacts leaders can use immediately.",
            "Preserve evidence, versioning, and decision traceability.",
          ].map((principle) => (
            <div className="principle" key={principle}>
              <BadgeCheck size={19} aria-hidden="true" />
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <h2>Ready for a governed first move.</h2>
          <p>
            Begin with a diagnostic, stand up a design sprint, or move directly
            into executive advisory support.
          </p>
          <Link className="button button--primary" href="/engage">
            <ArrowRight size={18} aria-hidden="true" />
            Engage AGG
          </Link>
        </div>
      </section>
    </main>
  );
}

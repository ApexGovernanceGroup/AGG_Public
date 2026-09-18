import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionPlays } from "../site-data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Mission-oriented governance and knowledge-management solutions for executive government, defense, and enterprise transformation environments.",
};

export default function SolutionsPage() {
  return (
    <main>
      <section className="page-hero page-hero--navy">
        <div className="container page-hero__inner">
          <p className="eyebrow">Solutions</p>
          <h1>Mission-oriented plays for leaders with real operating friction.</h1>
          <p>
            These solution patterns focus AGG capability on the moments where
            strategy, governance, knowledge, and delivery need to connect.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid card-grid--two">
          {solutionPlays.map((play) => (
            <article className="solution-card" key={play.title}>
              <play.icon size={26} aria-hidden="true" />
              <p className="eyebrow">{play.audience}</p>
              <h2>{play.title}</h2>
              <p>{play.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--steel">
        <div className="container split">
          <div>
            <p className="eyebrow">Decision Criteria</p>
            <h2>Designed for environments where trust is operational.</h2>
          </div>
          <ul className="check-list">
            <li>Clear authority and accountable ownership.</li>
            <li>Traceable decisions from intent to evidence to execution.</li>
            <li>Measures that connect activity to outcome.</li>
            <li>Repository discipline for reusable work products.</li>
            <li>Workforce education for AI, automation, DG, and ecosystem adoption.</li>
          </ul>
        </div>
        <div className="container action-row">
          <Link className="button button--primary" href="/contact">
            <ArrowRight size={18} aria-hidden="true" />
            Request a briefing
          </Link>
        </div>
      </section>
    </main>
  );
}

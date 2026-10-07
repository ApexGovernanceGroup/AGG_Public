import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { schedulingPaths } from "../site-data";

export const metadata: Metadata = {
  title: "Briefing and Scheduling Paths",
  description:
    "Apex Governance Group scheduling paths for fit calls, procurement packets, Academy cohorts, investor briefings, and product sample requests.",
};

export default function BriefingPage() {
  return (
    <main>
      <section className="page-hero page-hero--navy">
        <div className="container page-hero__inner">
          <p className="eyebrow">Briefing Paths</p>
          <h1>Choose the conversation that matches the decision.</h1>
          <p>
            AGG uses different briefing paths for product fit, procurement,
            private education, investor diligence, and custom solution work.
            The goal is to make the first conversation practical, bounded, and
            useful.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container briefing-path-grid">
          {schedulingPaths.map((path) => (
            <article className="briefing-path-card" key={path.title}>
              <path.icon size={24} aria-hidden="true" />
              <h2>{path.title}</h2>
              <p>{path.bestFor}</p>
              <strong>Bring this context</strong>
              <ul className="mini-list">
                {path.requestedContext.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="button button--primary" href={path.href}>
                Request briefing
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--steel">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Controlled Intake</p>
            <h2>Registration remains the safest path for client work.</h2>
          </div>
          <Link className="button button--primary" href="/client-onboarding">
            Register before protected exchange
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { CalendarDays, Mail } from "lucide-react";
import { calendarUrl, contactEmail } from "../site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request an Apex Governance Group briefing for governance architecture, knowledge systems, and strategic execution support.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero page-hero--navy">
        <div className="container page-hero__inner">
          <p className="eyebrow">Contact</p>
          <h1>Request an executive briefing.</h1>
          <p>
            Send the operating problem, decision deadline, stakeholder context,
            and current friction points. AGG will shape the first engagement
            around the decision required.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-panel">
            <Mail size={26} aria-hidden="true" />
            <h2>Email</h2>
            <p>
              Use email for briefing requests, engagement scoping, and document
              exchange coordination.
            </p>
            <a className="button button--primary" href={`mailto:${contactEmail}`}>
              <Mail size={18} aria-hidden="true" />
              {contactEmail}
            </a>
          </article>
          <article className="contact-panel">
            <CalendarDays size={26} aria-hidden="true" />
            <h2>Briefing</h2>
            <p>
              Use the briefing channel for a structured discussion of objective,
              constraints, options, risks, and first decisions.
            </p>
            <a className="button button--quiet" href={calendarUrl}>
              <CalendarDays size={18} aria-hidden="true" />
              Schedule briefing
            </a>
          </article>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container split">
          <div>
            <p className="eyebrow">Briefing Inputs</p>
            <h2>What makes the first conversation useful.</h2>
          </div>
          <ul className="check-list">
            <li>Objective and decision required.</li>
            <li>Constraints, authorities, and deadline.</li>
            <li>Known risks, blockers, and unresolved assumptions.</li>
            <li>Existing artifacts, repositories, or governance forums.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

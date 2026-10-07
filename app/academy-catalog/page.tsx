import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { academyCatalogCourses, academyFormats } from "../site-data";

export const metadata: Metadata = {
  title: "Apex Academy Course Catalog",
  description:
    "Plain-language Apex Academy private education catalog for knowledge management ecosystems, data governance, AI control, automation, interoperability, and strategic planning.",
};

export default function AcademyCatalogPage() {
  return (
    <main>
      <section className="page-hero page-hero--navy">
        <div className="container page-hero__inner">
          <p className="eyebrow">Academy Catalog</p>
          <h1>Private education, certification evidence, and applied skill.</h1>
          <p>
            Apex Academy can be delivered in person, remote-distance, or hybrid.
            Each course is designed around practical outcomes, exercises, and
            evidence the client can retain.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Course Cards</p>
            <h2>Four course families for governed modern work.</h2>
          </div>
          <div className="academy-catalog-grid">
            {academyCatalogCourses.map((course) => (
              <article className="academy-catalog-card" key={course.title}>
                <course.icon size={24} aria-hidden="true" />
                <p className="eyebrow">{course.audience}</p>
                <h2>{course.title}</h2>
                <p>
                  <strong>{course.duration}</strong> | {course.deliveryMode}
                </p>
                <ul className="mini-list">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <strong className="card-outcome">{course.finalEvidence}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container card-grid card-grid--two">
          {academyFormats.map((format) => (
            <article className="solution-card" key={format.title}>
              <BadgeCheck size={24} aria-hidden="true" />
              <p className="eyebrow">{format.audience}</p>
              <h2>{format.title}</h2>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
        <div className="container action-row action-row--center">
          <Link className="button button--primary" href="/briefing">
            Request academy briefing
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

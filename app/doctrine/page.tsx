import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BookOpenCheck } from "lucide-react";
import { strategicDoctrine } from "../site-data";

export const metadata: Metadata = {
  title: "Doctrine",
  description:
    "Apex Governance Group corporate strategic doctrine: mission, vision, intent, values, priorities, pillars, key tasks, and sustained decision advantage logic.",
};

export default function DoctrinePage() {
  return (
    <main>
      <section className="page-hero page-hero--seal page-hero--doctrine">
        <div className="container page-hero__inner">
          <p className="eyebrow">Corporate Strategic Doctrine</p>
          <h1>Mission, vision, intent, values, and sustained decision advantage.</h1>
          <p>
            The Apex doctrine defines why AGG exists, how engagements are
            governed, what capabilities we build, and how client-owned advantage
            is measured, transferred, and sustained.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container doctrine-command">
          <article>
            <p className="eyebrow">{strategicDoctrine.status}</p>
            <h2>{strategicDoctrine.mission.heading}</h2>
            <p>{strategicDoctrine.mission.statement}</p>
            <p>{strategicDoctrine.mission.definition}</p>
          </article>
          <article>
            <p className="eyebrow">{strategicDoctrine.expansion}</p>
            <h2>{strategicDoctrine.vision.heading}</h2>
            <p>{strategicDoctrine.vision.statement}</p>
            <p>{strategicDoctrine.vision.definition}</p>
          </article>
          <article>
            <p className="eyebrow">Intent</p>
            <h2>{strategicDoctrine.intent.heading}</h2>
            <p>{strategicDoctrine.intent.statement}</p>
            <p>{strategicDoctrine.intent.endState}</p>
          </article>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Governing Operating Sequence</p>
            <h2>Doctrine moves from understanding to sustained advantage.</h2>
          </div>
          <ol className="doctrine-sequence">
            {strategicDoctrine.sequence.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Core Values</p>
            <h2>Behavioral standards that govern how Apex performs the mission.</h2>
          </div>
          <div className="doctrine-value-grid">
            {strategicDoctrine.values.map((value) => (
              <article className="doctrine-value-card" key={value.title}>
                <BadgeCheck size={19} aria-hidden="true" />
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.definition}</p>
                  <small>{value.test}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container doctrine-split">
          <div>
            <p className="eyebrow">Strategic Priorities</p>
            <h2>Where enduring Apex effort is concentrated.</h2>
            <div className="doctrine-stack">
              {strategicDoctrine.priorities.map((priority) => (
                <article key={priority.code}>
                  <span>{priority.code}</span>
                  <h3>{priority.title}</h3>
                  <p>{priority.effect}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Four Strategic Pillars</p>
            <h2>How enterprise capability is structured and operationalized.</h2>
            <div className="doctrine-stack">
              {strategicDoctrine.pillars.map((pillar) => (
                <article key={pillar.title}>
                  <span>{pillar.effect}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.definition}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container doctrine-key-tasks">
          <div className="section-heading">
            <p className="eyebrow">Key Tasks</p>
            <h2>Repeatable enterprise actions that translate mission into work.</h2>
          </div>
          <ol>
            {strategicDoctrine.keyTasks.map((task, index) => (
              <li key={task}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {task}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Apex Value Proposition</p>
            <h2>{strategicDoctrine.valueProposition}</h2>
          </div>
          <div className="prose">
            <p>
              The decisive test is whether the client institution is better
              able to preserve and employ knowledge, anticipate change,
              understand its operating environment, govern itself, coordinate
              across boundaries, make defensible decisions, withstand
              disruption, learn from evidence, and sustain improvement through
              organic capability.
            </p>
            <div className="action-row">
              <Link className="button button--primary" href="/services">
                <BookOpenCheck size={17} aria-hidden="true" />
                Apply doctrine through services
              </Link>
              <Link className="button button--quiet" href="/engage">
                Start engagement
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import {
  brandStandard,
  methodologyPhases,
  methodologyRules,
} from "../site-data";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "Apex Governance Group methodology for assessment, operating architecture, governance installation, engineered delivery, and measurable transfer.",
};

export default function MethodologyPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal page-hero--methodology">
        <div className="container page-hero__inner">
          <p className="eyebrow">Methodology</p>
          <h1>Assessment, architecture, governance, execution, and proof.</h1>
          <p>
            AGG methodology converts executive intent into an installed operating
            system: observed baseline, designed architecture, governed controls,
            engineered artifacts, and measured transfer.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Method</p>
            <h2>Advantage is installed through sequence, not activity volume.</h2>
          </div>
          <p className="large-copy">
            {brandStandard.tier4.reservedCampaignLine} Our specialty is
            partnering with clients to identify the root cause of an issue,
            vulnerability, or gap, then engineering a custom solution that
            advances the organization. We operationalize executive vision into
            executable tasks that achieve intent. The method protects that
            promise by moving from evidence to architecture, from architecture
            to governed work, and from governed work to proof the client can
            inspect and sustain.
          </p>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Operating Sequence</p>
            <h2>Five phases hold the work in decision order.</h2>
          </div>
          <div className="methodology-grid">
            {methodologyPhases.map((phase) => (
              <article className="methodology-card" key={phase.title}>
                <div className="methodology-card__top">
                  <span>{phase.label}</span>
                  <phase.icon size={22} aria-hidden="true" />
                </div>
                <h3>{phase.title}</h3>
                <p>{phase.summary}</p>
                <strong>{phase.proof}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Operating Rules</p>
            <h2>The method keeps the engagement disciplined.</h2>
          </div>
          <div className="methodology-rule-list">
            {methodologyRules.map((rule) => (
              <article className="methodology-rule" key={rule.title}>
                <BadgeCheck size={19} aria-hidden="true" />
                <div>
                  <h3>{rule.title}</h3>
                  <p>{rule.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2>Use the method to scope the first decision.</h2>
          </div>
          <div className="prose">
            <p>
              Methodology becomes useful when it is attached to a real executive
              decision, operating constraint, or delivery problem. Start with
              engagement intake, then move the work into client-visible delivery
              control.
            </p>
            <div className="action-row">
              <Link className="button button--primary" href="/engage">
                Start engagement
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button button--quiet-on-dark" href="/client-portal">
                Open client portal
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

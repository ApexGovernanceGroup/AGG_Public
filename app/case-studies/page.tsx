import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudyVignettes } from "../site-data";

export const metadata: Metadata = {
  title: "Representative Vignettes",
  description:
    "Public-safe representative Apex Governance Group scenarios showing situation, friction, intervention, delivered product, measured change, and retained client capability.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Representative Vignettes</p>
          <h1>How the AGG method shows up in real operating problems.</h1>
          <p>
            These are representative scenarios, not client testimonials. They
            show the kind of work AGG is built to perform without implying a
            client relationship, endorsement, or guaranteed outcome.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container vignette-grid">
          {caseStudyVignettes.map((vignette) => (
            <article className="vignette-card" key={vignette.title}>
              <vignette.icon size={24} aria-hidden="true" />
              <p className="eyebrow">{vignette.label}</p>
              <h2>{vignette.title}</h2>
              <dl>
                <div>
                  <dt>Situation</dt>
                  <dd>{vignette.situation}</dd>
                </div>
                <div>
                  <dt>Friction</dt>
                  <dd>{vignette.friction}</dd>
                </div>
                <div>
                  <dt>AGG intervention</dt>
                  <dd>{vignette.aggIntervention}</dd>
                </div>
                <div>
                  <dt>Product delivered</dt>
                  <dd>{vignette.productDelivered}</dd>
                </div>
                <div>
                  <dt>Measured change</dt>
                  <dd>{vignette.measuredChange}</dd>
                </div>
                <div>
                  <dt>Client retains</dt>
                  <dd>{vignette.whatClientRetains}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2>Turn a representative scenario into your operating problem.</h2>
          </div>
          <Link className="button button--primary" href="/client-onboarding">
            Register the client need
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

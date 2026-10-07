import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";
import { publicProofArtifacts } from "../site-data";

export const metadata: Metadata = {
  title: "Public Proof Pack",
  description:
    "Downloadable public-safe Apex Governance Group proof artifact examples showing diagnostic, governance, continuity, measurement, academy, and handoff product shapes.",
};

export default function ProofPackPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Public Proof Pack</p>
          <h1>Inspect the artifact standard before the engagement begins.</h1>
          <p>
            This pack shows public-safe sample product shapes. It does not
            expose client records, proprietary data, CUI, credentials, or
            protected material. It gives buyers a practical view of how AGG
            turns intent, evidence, recommendations, and handoff into usable
            delivery products.
          </p>
          <div className="page-hero__actions">
            <a className="button button--primary" href="/agg-public-proof-pack.html">
              <Download size={18} aria-hidden="true" />
              Open downloadable proof pack
            </a>
            <Link className="button button--quiet-on-dark" href="/engage">
              Choose first move
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Artifact Examples</p>
            <h2>Seven public-safe samples a buyer can evaluate.</h2>
            <p>
              Each example shows the purpose, sample contents, client use, and
              commercial first-move connection. These are representative shapes,
              not client work product.
            </p>
          </div>
          <div className="artifact-pack-grid">
            {publicProofArtifacts.map((artifact) => (
              <article className="artifact-pack-card" key={artifact.title}>
                <artifact.icon size={24} aria-hidden="true" />
                <p className="eyebrow">{artifact.plainName}</p>
                <h2>{artifact.title}</h2>
                <p>{artifact.purpose}</p>
                <strong>Public-safe sample contents</strong>
                <ul className="mini-list">
                  {artifact.publicSafeSample.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <strong>Client use</strong>
                <p>{artifact.clientUse}</p>
                <small>{artifact.includedIn}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Boundary</p>
            <h2>Proof without exposing protected work.</h2>
          </div>
          <div className="stack-list">
            <div className="stack-list__item">
              <ShieldCheck size={18} aria-hidden="true" />
              <div>
                <span>Public-safe by design</span>
                <p>
                  The proof pack shows form, logic, and delivery expectation. It
                  intentionally excludes client data, nonpublic operating
                  details, credentials, regulated records, and proprietary files.
                </p>
              </div>
            </div>
            <div className="stack-list__item">
              <ShieldCheck size={18} aria-hidden="true" />
              <div>
                <span>Next action is controlled</span>
                <p>
                  Buyers who need a sample tailored to their environment should
                  register or request a briefing so AGG can validate the data
                  boundary before protected context is exchanged.
                </p>
              </div>
            </div>
            <Link className="button button--primary" href="/client-onboarding">
              Register for controlled intake
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

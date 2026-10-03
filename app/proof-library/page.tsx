import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import {
  buyerFirstMoves,
  proofLibraryItems,
  revenueHardeningSignals,
} from "../site-data";

export const metadata: Metadata = {
  title: "Proof Library",
  description:
    "Public-safe Apex Governance Group proof artifacts, sample product shapes, buyer first moves, and evidence standards before engagement scope expands.",
};

export default function ProofLibraryPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Proof Library</p>
          <h1>See the artifact shape before the engagement grows.</h1>
          <p>
            AGG sells usable decision products, governed artifacts, and installed
            capability. This library shows public-safe sample categories so a
            buyer can understand the proof standard before purchase, briefing,
            or long-term solution work.
          </p>
          <div className="page-hero__actions">
            <Link className="button button--primary" href="/engage">
              Choose an engagement
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="button button--quiet-on-dark" href="/client-onboarding">
              Register client
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Buyer Questions</p>
            <h2>The proof starts with what the sponsor needs to know.</h2>
            <p>
              Every sample below answers a buyer-side question. The point is not
              to impress with volume; it is to show the path from problem,
              evidence, recommendation, and action.
            </p>
          </div>
          <div className="proof-library-grid proof-library-grid--wide">
            {proofLibraryItems.map((item) => (
              <article className="proof-library-card" key={item.title}>
                <item.icon size={24} aria-hidden="true" />
                <p className="eyebrow">{item.plainName}</p>
                <h2>{item.title}</h2>
                <p className="proof-library-card__question">{item.buyerQuestion}</p>
                <strong>What it proves</strong>
                <p>{item.proves}</p>
                <strong>Sample contents</strong>
                <ul className="mini-list">
                  {item.sampleContents.map((sample) => (
                    <li key={sample}>{sample}</li>
                  ))}
                </ul>
                <small>{item.bestFirstMove}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">First Move Map</p>
            <h2>Match the proof to a product lane.</h2>
            <p>
              If the proof category looks like the artifact you need, use the
              matching first move as the safest commercial entry point.
            </p>
          </div>
          <div className="buyer-route-table" role="table" aria-label="Buyer problem to first product">
            {buyerFirstMoves.map((move) => (
              <div className="buyer-route-table__row" role="row" key={move.problem}>
                <div role="cell">
                  <move.icon size={20} aria-hidden="true" />
                  <strong>{move.problem}</strong>
                </div>
                <span role="cell">{move.recommendedMove}</span>
                <span role="cell">{move.timeline}</span>
                <Link role="cell" href={`/engage#storefront-${move.recommendedPackageId}`}>
                  Review product
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Commercial Control</p>
            <h2>Proof reduces risk for the client and for AGG.</h2>
          </div>
          <div className="stack-list">
            {revenueHardeningSignals.map((signal) => (
              <div className="stack-list__item" key={signal.title}>
                <ShieldCheck size={18} aria-hidden="true" />
                <div>
                  <span>{signal.title}</span>
                  <p>{signal.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

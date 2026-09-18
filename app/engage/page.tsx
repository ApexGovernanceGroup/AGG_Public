import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, GraduationCap, Mail, ShieldCheck } from "lucide-react";
import { PackageInclusions } from "../components/PackageInclusions";
import {
  brandStandard,
  clientAccessCards,
  contactEmail,
  customizationLevers,
  engagementPackages,
  packageInclusions,
  pricingPrinciple,
  storefrontCollections,
  trustBuildingSignals,
} from "../site-data";

export const metadata: Metadata = {
  title: "Engage",
  description:
    "Start an Apex Governance Group engagement through diagnostics, assessments, governed product kits, private seminars, design sprints, or advisory retainers.",
};

const checkoutMessages: Record<string, string> = {
  success: "Checkout received. AGG will move the engagement into intake.",
  canceled: "Checkout was canceled. The engagement options remain available.",
  setup:
    "Secure checkout is staged. Use the intake channel while payment credentials are activated.",
  error:
    "Checkout did not complete. Use the contact channel and AGG will reconcile the next step.",
};

type EngagePageProps = {
  searchParams?: Promise<{ checkout?: string }>;
};

export default async function EngagePage({ searchParams }: EngagePageProps) {
  const params = await searchParams;
  const checkoutState = params?.checkout;
  const message = checkoutState ? checkoutMessages[checkoutState] : null;
  const checkoutConfigured = Boolean(process.env.STRIPE_SECRET_KEY);

  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Engage</p>
          <h1>Buy the first move, then customize the operating outcome.</h1>
          <p>
            Packages are structured for immediate purchase and governed intake.
            Scope can then be tailored into a diagnostic, product kit, seminar,
            sprint, implementation build, or advisory rhythm.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Immediate Purchase</p>
            <h2>Apex Digital Storefront</h2>
            <p>
              Each card is scoped for a server-priced checkout path. Product
              pricing is based on scale, not depth of content. Customization is
              captured during intake so the selected package can be shaped to
              the client&apos;s sector, operating boundary, and required product.
            </p>
          </div>
          <article className="pricing-principle" aria-label="Pricing principle">
            <div>
              <p className="eyebrow">Pricing Principle</p>
              <h3>{pricingPrinciple.title}</h3>
              <p>{pricingPrinciple.summary}</p>
            </div>
            <ul className="mini-list">
              {pricingPrinciple.scaleDrivers.map((driver) => (
                <li key={driver}>{driver}</li>
              ))}
            </ul>
          </article>
          {message && (
            <div className="status-banner" role="status">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>{message}</span>
            </div>
          )}
          {!checkoutConfigured && (
            <div className="status-banner" role="status">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>
                Secure checkout is staged for activation. Current public
                engagement starts through intake at {contactEmail}.
              </span>
            </div>
          )}
          <div className="pricing-grid">
            {engagementPackages.map((item) => (
              <article className="pricing-card" key={item.id}>
                <div className="pricing-card__top">
                  <div>
                    <p className="eyebrow">{item.category}</p>
                    <h2>{item.name}</h2>
                  </div>
                  <strong>{item.displayPrice}</strong>
                </div>
                <dl className="pricing-card__meta">
                  <div>
                    <dt>Timeline</dt>
                    <dd>{item.timeline}</dd>
                  </div>
                  <div>
                    <dt>Best for</dt>
                    <dd>{item.bestFor}</dd>
                  </div>
                  <div className="pricing-card__scale">
                    <dt>Scale basis</dt>
                    <dd>{item.scaleBasis}</dd>
                  </div>
                </dl>
                <p>{item.description}</p>
                <ul>
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
                <div className="pricing-card__actions">
                  <PackageInclusions inclusions={packageInclusions} />
                  {checkoutConfigured ? (
                    <form action="/api/checkout" method="post">
                      <input type="hidden" name="packageId" value={item.id} />
                      <button className="button button--primary button--full" type="submit">
                        <CreditCard size={18} aria-hidden="true" />
                        Start secure checkout
                      </button>
                    </form>
                  ) : (
                    <Link
                      className="button button--primary button--full"
                      href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                        `AGG intake request: ${item.name}`,
                      )}`}
                    >
                      <Mail size={18} aria-hidden="true" />
                      Request intake activation
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Customizable Catalog</p>
            <h2>Convert a purchase into the service, product, seminar, or sprint you need.</h2>
          </div>
          <div className="card-grid card-grid--three">
            {storefrontCollections.map((collection) => (
              <article className="solution-card" key={collection.title}>
                <collection.icon size={26} aria-hidden="true" />
                <p className="eyebrow">{collection.buyer}</p>
                <h2>{collection.title}</h2>
                <p>{collection.summary}</p>
                <ul className="mini-list">
                  {collection.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Engagement Controls</p>
            <h2>Every purchase opens a governed intake record.</h2>
          </div>
          <p className="large-copy">
            Each engagement path carries a defined scope boundary, payment
            record, intake sequence, customization decision, and follow-on
            decision point before work expands. Every engagement opens with
            assessment and closes with proof measured against the client&apos;s
            own numbers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Customization Levers</p>
            <h2>What can be tailored after purchase.</h2>
          </div>
          <ul className="check-list">
            {customizationLevers.map((lever) => (
              <li key={lever}>{lever}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Trust Building</p>
            <h2>Built for clients who need confidence before scale.</h2>
          </div>
          <div className="card-grid card-grid--two">
            {trustBuildingSignals.map((signal) => (
              <article className="solution-card" key={signal.title}>
                <ShieldCheck size={26} aria-hidden="true" />
                <h2>{signal.title}</h2>
                <p>{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Client Access</p>
            <h2>Move from engagement selection to visible delivery control.</h2>
          </div>
          <div className="client-access-grid">
            {clientAccessCards.map((card) => (
              <article className="client-access-card" key={card.title}>
                <card.icon size={24} aria-hidden="true" />
                <p className="eyebrow">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.summary}</p>
                <Link className="text-link" href={card.href}>
                  {card.action}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container split">
          <div>
            <p className="eyebrow">Product Boundary</p>
            <h2>AGG brings the architecture. The client keeps the toolset.</h2>
          </div>
          <p className="large-copy">{brandStandard.delivery.productBoundary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <GraduationCap size={26} aria-hidden="true" />
          <p className="eyebrow">Apex Academy</p>
          <h2>Need workforce or private education instead of advisory support?</h2>
          <p>
            Academy cohorts are scoped through intake so audience, mission,
            delivery format, and payment path can be matched before tuition or
            private cohort pricing is activated.
          </p>
          <Link className="text-link" href="/academy">
            Review academy model
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

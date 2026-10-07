import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  ClipboardCheck,
  Download,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { PackageInclusions } from "../components/PackageInclusions";
import { EngagementPackageDeepDive } from "../components/EngagementPackageDeepDive";
import { BuyerGuidanceSelector } from "../components/BuyerGuidanceSelector";
import {
  brandStandard,
  buyerFirstMoves,
  clientAccessCards,
  contactEmail,
  customizationLevers,
  downloadProducts,
  educationDeliveryOptions,
  firstFourteenDays,
  engagementPackages,
  longTermEngagementOptions,
  packageInclusions,
  pricingPrinciple,
  proofLibraryItems,
  purchaseLibraryItems,
  storefrontCollections,
  trustBuildingSignals,
} from "../site-data";

export const metadata: Metadata = {
  title: "Engage",
  description:
    "Start an Apex Governance Group engagement through diagnostics, assessments, governed product kits, private seminars, design sprints, advisory retainers, education delivery, credentialing support, and 6-12 month solution contracts.",
};

const checkoutMessages: Record<string, string> = {
  success: "Checkout received. AGG will move the engagement into intake.",
  canceled: "Checkout was canceled. The engagement options remain available.",
  registered:
    "Client registration is recorded. AGG will validate onboarding before checkout, login, or long-term solution activation.",
  setup:
    "Secure checkout is staged. Use the intake channel while payment credentials are activated.",
  registration_required:
    "Client onboarding is required before checkout or long-term solution activation.",
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
  const packagesById = new Map(engagementPackages.map((item) => [item.id, item]));

  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Engage</p>
          <h1>Buy the first move, then customize the operating outcome.</h1>
          <p>
            Packages are structured for registration-first purchase and
            governed intake. Scope can then be tailored into a diagnostic,
            product kit, seminar, sprint, implementation build, or advisory
            rhythm after the client onboarding record is opened.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Products For Sale</p>
            <h2>Apex Digital Storefront</h2>
            <p>
              The current digital storefront contains six checkout-backed AGG
              engagement products and a staged shelf of downloadable product
              SKUs. Each path begins with registration-controlled intake so AGG
              can validate buyer identity, payment path, download rights, and
              any required customization before delivery. Launch anchors are
              public; final scope still scales by delivery footprint, operating
              boundary, and required output.
            </p>
          </div>
          <div className="buyer-route-strip" aria-label="Buyer problem to product map">
            {buyerFirstMoves.map((move) => (
              <a href={`#storefront-${move.recommendedPackageId}`} key={move.problem}>
                <move.icon size={18} aria-hidden="true" />
                <span>{move.problem}</span>
              </a>
            ))}
          </div>
          <div
            aria-label="Digital storefront products for sale"
            className="storefront-product-index"
          >
            {engagementPackages.map((item) => (
              <article className="storefront-product-index__item" key={item.id}>
                <span>{item.sku}</span>
                <strong>{item.name}</strong>
                <small>{item.category}</small>
              </article>
            ))}
          </div>
          <div
            aria-label="Digital download products for purchase"
            className="download-product-shelf"
            id="digital-download-products"
          >
            <div className="section-heading section-heading--compact">
              <p className="eyebrow">Downloadable Products</p>
              <h2>Low-friction products staged for purchase and controlled download.</h2>
              <p>
                These products are built for buyers who need a practical template,
                workbook, checklist, or playbook before a larger sprint or
                advisory engagement. Preview sheets are public-safe; full
                downloads are delivered after registration, purchase validation,
                and client access activation.
              </p>
            </div>
            <div className="download-product-grid">
              {downloadProducts.map((product) => (
                <article
                  className="download-product-card"
                  id={`download-product-${product.id}`}
                  key={product.id}
                >
                  <div className="download-product-card__top">
                    <Download size={22} aria-hidden="true" />
                    <div>
                      <p className="eyebrow">
                        {product.sku} | {product.category}
                      </p>
                      <h3>{product.name}</h3>
                    </div>
                    <strong>{product.displayPrice}</strong>
                  </div>
                  <p>{product.description}</p>
                  <dl className="download-product-card__meta">
                    <div>
                      <dt>Tier</dt>
                      <dd>{product.tier}</dd>
                    </div>
                    <div>
                      <dt>Format</dt>
                      <dd>{product.format}</dd>
                    </div>
                    <div>
                      <dt>Best for</dt>
                      <dd>{product.bestFor}</dd>
                    </div>
                  </dl>
                  <strong className="card-outcome">Included files</strong>
                  <ul className="mini-list">
                    {product.includedFiles.map((file) => (
                      <li key={file}>{file}</li>
                    ))}
                  </ul>
                  <strong className="card-outcome">Common uses</strong>
                  <ul className="mini-list">
                    {product.useCases.map((useCase) => (
                      <li key={useCase}>{useCase}</li>
                    ))}
                  </ul>
                  <p className="download-product-card__note">
                    Upgrade path: {product.upgradePath}
                  </p>
                  <div className="download-product-card__actions">
                    <a className="text-link" href={product.previewUrl}>
                      Preview product sheet
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                    <Link
                      className="button button--primary"
                      href={`/client-onboarding?intent=digital-download&productId=${encodeURIComponent(
                        product.id,
                      )}`}
                    >
                      <ClipboardCheck size={18} aria-hidden="true" />
                      Register to purchase
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="action-row action-row--center">
              <a className="button button--quiet" href="/agg-digital-product-catalog.html">
                <Download size={17} aria-hidden="true" />
                Open digital product catalog
              </a>
            </div>
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
                engagement starts through client onboarding and AGG review at {contactEmail}.
              </span>
            </div>
          )}
          {checkoutConfigured && (
            <div className="status-banner" role="status">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>
                Checkout is available after client registration, identity
                review, scope confirmation, and access-path selection.
              </span>
            </div>
          )}
          <BuyerGuidanceSelector
            packages={engagementPackages}
            headingId="engage-buyer-guidance-heading"
            eyebrow="Storefront Fit Check"
            title="Match the product to the problem before you register."
            intro="Use the selector to compare timeline, output, audience, and readiness against the six checkout-backed Apex products. The result stays public-safe and becomes the cleanest onboarding path."
          />
          <div className="pricing-grid">
            {engagementPackages.map((item) => (
              <article className="pricing-card" id={`storefront-${item.id}`} key={item.id}>
                <div className="pricing-card__top">
                  <div>
                    <p className="eyebrow">
                      {item.sku} | {item.category}
                    </p>
                    <h2>{item.name}</h2>
                  </div>
                  <strong>{item.displayPrice}</strong>
                </div>
                <div className="pricing-card__sale-status">
                  <span className="sale-badge">For Sale</span>
                  <span>{item.saleStatus}</span>
                </div>
                <div className="pricing-card__anchor">
                  <strong>Planning anchor</strong>
                  <p>{item.planningAnchor}</p>
                  <small>{item.commercialNote}</small>
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
                  <EngagementPackageDeepDive packageItem={item} />
                  <Link
                    className="button button--primary button--full"
                    href={`/client-onboarding?intent=product-purchase&packageId=${encodeURIComponent(
                      item.id,
                    )}`}
                  >
                    <ClipboardCheck size={18} aria-hidden="true" />
                    Register before checkout
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div
            aria-labelledby="purchase-library-heading"
            className="purchase-library-shell"
            id="apex-publications-library"
          >
            <div className="section-heading section-heading--compact">
              <p className="eyebrow">Apex Publications Library</p>
              <h2 id="purchase-library-heading">Review the offer in plain language. Download the product after purchase.</h2>
              <p>
                The Apex Publications Library uses plain-speak product names
                first, then ties each item back to its formal storefront SKU for
                purchase, records, and delivery control. Downloads are made
                available through the client portal after purchase, intake
                validation, and credential activation.
              </p>
            </div>
            <div className="purchase-library-grid">
              {purchaseLibraryItems.map((libraryItem) => {
                const packageItem = packagesById.get(libraryItem.packageId);
                if (!packageItem) return null;

                return (
                  <article className="purchase-library-card" key={libraryItem.packageId}>
                    <div className="purchase-library-card__top">
                      <BookOpenCheck size={22} aria-hidden="true" />
                      <div>
                        <p className="eyebrow">
                          {packageItem.sku} | {packageItem.name}
                        </p>
                        <h3>{libraryItem.plainName}</h3>
                      </div>
                    </div>
                    <p className="purchase-library-card__question">
                      {libraryItem.clientQuestion}
                    </p>
                    <dl className="purchase-library-card__details">
                      <div>
                        <dt>Review</dt>
                        <dd>{libraryItem.reviewSummary}</dd>
                      </div>
                      <div>
                        <dt>Download after purchase</dt>
                        <dd>{libraryItem.downloadSummary}</dd>
                      </div>
                    </dl>
                    <ul className="mini-list">
                      {libraryItem.downloadableItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="purchase-library-card__note">{libraryItem.accessNote}</p>
                    <div className="purchase-library-card__actions">
                      <Link className="text-link" href={`#storefront-${packageItem.id}`}>
                        Review listing
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                      <Link
                        className="button button--quiet"
                        href={`/client-onboarding?intent=product-purchase&packageId=${encodeURIComponent(
                          packageItem.id,
                        )}`}
                      >
                        <Download size={17} aria-hidden="true" />
                        Request download access
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="proof-purchase-panel">
            <div className="section-heading section-heading--compact">
              <p className="eyebrow">Proof Before Purchase Expansion</p>
              <h2>Know what kind of artifact you are buying before the scope grows.</h2>
              <p>
                The proof library is public-safe and sample-oriented. It helps
                buyers understand the shape of the product without exposing
                client data, private records, or proprietary client context.
              </p>
            </div>
            <div className="proof-purchase-grid">
              {proofLibraryItems.slice(0, 4).map((item) => (
                <article className="proof-purchase-card" key={item.title}>
                  <item.icon size={22} aria-hidden="true" />
                  <h3>{item.plainName}</h3>
                  <p>{item.proves}</p>
                  <span>{item.bestFirstMove}</span>
                </article>
              ))}
            </div>
            <div className="action-row action-row--center">
              <Link className="button button--quiet" href="/proof-library">
                Review proof library
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Scoping Families</p>
            <h2>Convert a storefront product into the service, product, seminar, or sprint you need.</h2>
            <p>
              These collections describe what a purchased storefront product
              can become during intake. They are scoping families, not separate
              checkout-backed products until AGG converts the request into one
              of the six products for sale above.
            </p>
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Education, Credentialing, and Long-Term Support</p>
            <h2>Choose the delivery model before the product is shaped.</h2>
            <p>
              AGG can provide in-person, remote-distance learning, and hybrid
              professional education, certification support, credentialing
              evidence, advisory retainers, and 6-12 month solution contracts.
              Scope, access, pricing, and download rights are confirmed during
              intake.
            </p>
          </div>
          <div className="delivery-library-grid">
            {educationDeliveryOptions.map((option) => (
              <article className="delivery-option-card" key={option.title}>
                <option.icon size={24} aria-hidden="true" />
                <p className="eyebrow">{option.plainName}</p>
                <h3>{option.title}</h3>
                <p>{option.summary}</p>
                <strong>Best for</strong>
                <p>{option.bestFor}</p>
                <ul className="mini-list">
                  {option.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="contract-option-panel">
            <div className="section-heading section-heading--compact">
              <p className="eyebrow">Retainers and 6-12 Month Contracts</p>
              <h2>When the need is not a single purchase, convert it into a governed engagement rhythm.</h2>
            </div>
            <div className="contract-option-grid">
              {longTermEngagementOptions.map((option) => (
                <article className="contract-option-card" key={option.title}>
                  <div className="contract-option-card__top">
                    <option.icon size={23} aria-hidden="true" />
                    <span>{option.term}</span>
                  </div>
                  <h3>{option.title}</h3>
                  <p className="contract-option-card__plain">{option.plainName}</p>
                  <p>{option.summary}</p>
                  <ul className="mini-list">
                    {option.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    className="text-link"
                    href="/client-onboarding?intent=long-term-solution"
                  >
                    Start long-term solution intake
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
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
            <p className="eyebrow">First 14 Days</p>
            <h2>What the buyer can expect after registration.</h2>
            <p>
              The first two weeks are designed to protect both sides: validate
              fit, bound the work, identify the right product, and produce a
              first inspectable decision or artifact path.
            </p>
          </div>
          <ol className="first-move-timeline" aria-label="First fourteen days after purchase registration">
            {firstFourteenDays.map((item) => (
              <li key={item.day}>
                <span>{item.day}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
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

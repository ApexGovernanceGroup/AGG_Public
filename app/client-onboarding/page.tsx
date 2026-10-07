import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { engagementPackages, contactEmail } from "../site-data";

export const metadata: Metadata = {
  title: "Client Onboarding",
  description:
    "Register with Apex Governance Group before product purchase, long-term solution engagement, client login activation, and governed delivery access.",
};

const registrationMessages: Record<string, string> = {
  "missing-required":
    "Registration needs the required organization, contact, intent, access, summary, and acknowledgement fields.",
  "invalid-origin":
    "Registration could not be accepted from this origin. Use the public Apex site form.",
  "invalid-body": "Registration could not be accepted because the submission was too large.",
  "invalid-form": "Registration could not be read. Please resubmit from the onboarding form.",
  "record-unavailable":
    "Registration could not be written. Contact AGG and we will reconcile the intake manually.",
  "rate-limited":
    "Registration is temporarily rate limited. Wait a moment before submitting again.",
  received: "Registration received.",
};

const allowedDefaultIntents = new Set([
  "product-purchase",
  "long-term-solution",
  "assessment",
  "academy",
  "custom-solution",
  "admin-directed",
  "taxonomy-starter",
]);

type ClientOnboardingPageProps = {
  searchParams?: Promise<{
    intent?: string;
    packageId?: string;
    registration?: string;
  }>;
};

export default async function ClientOnboardingPage({
  searchParams,
}: ClientOnboardingPageProps) {
  const params = await searchParams;
  const selectedPackage = engagementPackages.find(
    (item) => item.id === params?.packageId,
  );
  const defaultIntent =
    params?.intent && allowedDefaultIntents.has(params.intent)
      ? params.intent
      : "product-purchase";
  const message = params?.registration
    ? registrationMessages[params.registration] ?? null
    : null;

  return (
    <main>
      <section className="page-hero page-hero--seal page-hero--onboarding">
        <div className="container page-hero__inner">
          <p className="eyebrow">Client Onboarding</p>
          <h1>Register first. Then enter the client login gate.</h1>
          <p>
            Product purchase, long-term solution work, portal activation, and
            protected delivery access all begin with a governed onboarding
            record so AGG can validate client identity, scope, payment path,
            and access requirements before opening the workspace.
          </p>
          <div className="action-row">
            <a className="button button--primary" href="#registration">
              <ClipboardCheck size={18} aria-hidden="true" />
              Register client
            </a>
            <Link className="button button--quiet-on-dark" href="/client-services">
              <LockKeyhole size={18} aria-hidden="true" />
              Client login
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container onboarding-path">
          <div>
            <p className="eyebrow">Access Sequence</p>
            <h2>Registration controls entry into purchase, solution work, and login activation.</h2>
          </div>
          <ol className="onboarding-steps">
            <li>
              <span>01</span>
              <strong>Register</strong>
              <p>Capture organization, responsible contact, desired product or solution path, timeline, and access need.</p>
            </li>
            <li>
              <span>02</span>
              <strong>Validate</strong>
              <p>AGG reviews identity, fit, scope boundary, payment path, and client workspace requirements.</p>
            </li>
            <li>
              <span>03</span>
              <strong>Activate</strong>
              <p>Approved clients receive the right login path, credential instructions, and delivery control lane.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--steel" id="registration">
        <div className="container onboarding-registration">
          <div className="section-heading">
            <p className="eyebrow">Registration Record</p>
            <h2>Client onboarding request</h2>
            <p>
              Use this form before purchase or long-term engagement. Do not
              submit passwords, protected client data, controlled information,
              payment card numbers, or proprietary files through this public form.
            </p>
          </div>

          {message && (
            <div className="status-banner" role="status">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>{message}</span>
            </div>
          )}

          {selectedPackage && (
            <article className="onboarding-selected-package">
              <CreditCard size={22} aria-hidden="true" />
              <div>
                <p className="eyebrow">Selected Package</p>
                <h3>{selectedPackage.name}</h3>
                <p>{selectedPackage.description}</p>
              </div>
              <strong>{selectedPackage.displayPrice}</strong>
            </article>
          )}

          <form className="onboarding-form" action="/api/client-onboarding" method="post" noValidate>
            <input
              autoComplete="off"
              className="onboarding-form__trap"
              name="website"
              tabIndex={-1}
              type="text"
            />
            <input name="packageId" type="hidden" value={selectedPackage?.id ?? ""} />

            <div className="onboarding-form__grid">
              <label>
                Organization
                <input
                  autoComplete="organization"
                  maxLength={140}
                  name="organization"
                  required
                  type="text"
                />
              </label>
              <label>
                Primary contact
                <input
                  autoComplete="name"
                  maxLength={140}
                  name="contactName"
                  required
                  type="text"
                />
              </label>
              <label>
                Work email
                <input
                  autoComplete="email"
                  maxLength={180}
                  name="email"
                  required
                  type="email"
                />
              </label>
              <label>
                Phone
                <input
                  autoComplete="tel"
                  maxLength={140}
                  name="phone"
                  type="tel"
                />
              </label>
              <label>
                Role / responsibility
                <input
                  autoComplete="organization-title"
                  maxLength={140}
                  name="role"
                  type="text"
                />
              </label>
              <label>
                Engagement intent
                <select name="intent" required defaultValue={defaultIntent}>
                  <option value="product-purchase">Product purchase</option>
                  <option value="long-term-solution">Long-term solution</option>
                  <option value="assessment">Assessment or diagnostic</option>
                  <option value="academy">Academy or workforce education</option>
                  <option value="custom-solution">Custom solution</option>
                  <option value="admin-directed">AGG-directed admin onboarding</option>
                  <option value="taxonomy-starter">Taxonomy starter exchange</option>
                </select>
              </label>
              <label>
                Timeline
                <select name="timeline" required defaultValue="30-days">
                  <option value="immediate">Immediate</option>
                  <option value="30-days">Within 30 days</option>
                  <option value="quarter">This quarter</option>
                  <option value="planning">Planning window</option>
                </select>
              </label>
              <label>
                Access need
                <select name="accessNeed" required defaultValue="client-login">
                  <option value="client-login">Client login activation</option>
                  <option value="purchase-and-intake">Purchase and intake</option>
                  <option value="portal-and-services">Portal and services</option>
                  <option value="admin-assisted">AGG admin-assisted onboarding</option>
                </select>
              </label>
            </div>

            <label>
              Requested outcome
              <textarea
                className="resize-none"
                maxLength={1400}
                name="summary"
                placeholder="Describe what you want to buy, solve, stand up, assess, improve, or govern."
                required
              />
            </label>

            <label className="onboarding-form__acknowledgement">
              <input name="consent" required type="checkbox" value="acknowledged" />
              <span>
                I understand AGG will review this registration before activating
                client login, checkout, portal access, or long-term solution work.
              </span>
            </label>

            <div className="onboarding-form__actions">
              <button className="button button--primary" type="submit">
                <ClipboardCheck size={18} aria-hidden="true" />
                Submit registration
              </button>
              <Link className="button button--quiet" href={`mailto:${contactEmail}`}>
                Contact AGG
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Download,
  FileText,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import {
  fileNamingConventionExample,
  fileNamingConventionParts,
  lifecycleDelineationSteps,
  taxonomyStarterLanes,
} from "../site-data";

export const metadata: Metadata = {
  title: "Taxonomy Starter Exchange",
  description:
    "Register with Apex Governance Group to receive a public-safe Level 1-2 organizational taxonomy starter, file naming convention, and lifecycle delineation.",
};

const registrationMessages: Record<string, string> = {
  "missing-required":
    "Registration needs organization, contact, email, timeline, organizing problem, and acknowledgement.",
  "invalid-origin":
    "Registration could not be accepted from this origin. Use the public Apex site form.",
  "invalid-body": "Registration could not be accepted because the submission was too large.",
  "invalid-form": "Registration could not be read. Please resubmit the starter form.",
  "record-unavailable":
    "Registration could not be written. Contact AGG and we will reconcile the starter request manually.",
  "rate-limited":
    "Registration is temporarily rate limited. Wait a moment before submitting again.",
  received: "Registration received.",
};

type TaxonomyStarterPageProps = {
  searchParams?: Promise<{
    access?: string;
    record?: string;
    registration?: string;
  }>;
};

export default async function TaxonomyStarterPage({
  searchParams,
}: TaxonomyStarterPageProps) {
  const params = await searchParams;
  const isRegistered = params?.access === "registered";
  const message = params?.registration
    ? registrationMessages[params.registration] ?? null
    : null;

  return (
    <main>
      <section className="page-hero page-hero--navy">
        <div className="container page-hero__inner">
          <p className="eyebrow">Taxonomy Starter Exchange</p>
          <h1>Trade a registration for a governed structure starter.</h1>
          <p>
            Register with public-safe contact context and receive a Level 1-2
            organizational taxonomy starter, a practical file naming convention,
            and a lifecycle delineation your team can use to begin organizing
            knowledge, records, files, and decision products.
          </p>
          <div className="page-hero__actions">
            <a className="button button--primary" href="#registration">
              <ClipboardCheck size={18} aria-hidden="true" />
              Register for the starter
            </a>
            <Link className="button button--quiet-on-dark" href="/trust-security">
              <ShieldCheck size={17} aria-hidden="true" />
              Data boundary
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container taxonomy-exchange-grid">
          <article className="taxonomy-exchange-card taxonomy-exchange-card--featured">
            <Layers3 size={25} aria-hidden="true" />
            <p className="eyebrow">What You Receive</p>
            <h2>Level 1-2 taxonomy starter</h2>
            <p>
              A plain-language starting structure for leadership, operations,
              knowledge, data, people, governance, and lifecycle control. It is
              not a finished client taxonomy; it is the first scaffold for a
              cleaner repository, SharePoint, drive, knowledge base, or program
              library.
            </p>
          </article>
          <article className="taxonomy-exchange-card">
            <FileText size={24} aria-hidden="true" />
            <p className="eyebrow">Naming Convention</p>
            <h2>{fileNamingConventionExample}</h2>
            <p>
              A repeatable naming pattern built for retrieval, status clarity,
              version control, ownership, and lifecycle disposition.
            </p>
          </article>
          <article className="taxonomy-exchange-card">
            <ClipboardCheck size={24} aria-hidden="true" />
            <p className="eyebrow">Lifecycle</p>
            <h2>Intake to archive or disposal.</h2>
            <p>
              A controlled lifecycle map that distinguishes draft, review,
              approved, active, superseded, archived, and disposed material.
            </p>
          </article>
        </div>
      </section>

      {isRegistered && (
        <section className="section section--surface">
          <div className="container taxonomy-unlock">
            <div>
              <p className="eyebrow">Starter Unlocked</p>
              <h2>Your public-safe starter is ready.</h2>
              <p>
                Registration record {params?.record ?? "received"} is captured.
                Use the starter as a first organizing scaffold. AGG can convert
                it into a client-specific taxonomy, metadata model, repository
                map, retention lane, or implementation plan after controlled
                intake.
              </p>
            </div>
            <a
              className="button button--primary"
              href="/agg-taxonomy-file-lifecycle-starter.html"
            >
              <Download size={18} aria-hidden="true" />
              Open starter
            </a>
          </div>
        </section>
      )}

      <section className="section section--steel" id="starter-preview">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Starter Preview</p>
            <h2>The framework begins with six Level 1 lanes.</h2>
            <p>
              Each lane includes Level 2 examples and an operating use case.
              The final client version should be calibrated to authority,
              systems, records rules, sensitivity, retrieval behavior, and
              the work your teams actually perform.
            </p>
          </div>
          <div className="taxonomy-lane-grid">
            {taxonomyStarterLanes.map((lane) => (
              <article className="taxonomy-lane-card" key={lane.levelOne}>
                <p className="eyebrow">Level 1</p>
                <h2>{lane.levelOne}</h2>
                <ul className="taxonomy-chip-list" aria-label={`${lane.levelOne} Level 2 examples`}>
                  {lane.levelTwo.map((levelTwo) => (
                    <li key={levelTwo}>{levelTwo}</li>
                  ))}
                </ul>
                <p>{lane.clientUse}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">File Naming</p>
            <h2>Make the filename carry authority, status, and retrieval.</h2>
            <p className="large-copy">
              {fileNamingConventionExample}
            </p>
          </div>
          <div className="taxonomy-token-stack">
            {fileNamingConventionParts.map((part) => (
              <article className="taxonomy-token" key={part.token}>
                <strong>{part.token}</strong>
                <p>{part.purpose}</p>
                <span>{part.example}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Lifecycle Delineation</p>
            <h2>Every artifact needs a visible state and owner action.</h2>
          </div>
          <ol className="taxonomy-lifecycle">
            {lifecycleDelineationSteps.map((step, index) => (
              <li key={step.step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.step}</h3>
                  <p>{step.definition}</p>
                  <strong>{step.controlQuestion}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--dark" id="registration">
        <div className="container onboarding-registration">
          <div className="section-heading">
            <p className="eyebrow">Registration Exchange</p>
            <h2>Register once. Receive the starter immediately.</h2>
            <p>
              Do not upload protected files, controlled information, credentials,
              payment data, or proprietary records. Use this form only to tell
              AGG what kind of organizing problem you are trying to solve.
            </p>
          </div>

          {message && (
            <div className="status-banner" role="status">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>{message}</span>
            </div>
          )}

          <form className="onboarding-form" action="/api/client-onboarding" method="post" noValidate>
            <input
              autoComplete="off"
              className="onboarding-form__trap"
              name="website"
              tabIndex={-1}
              type="text"
            />
            <input name="intent" type="hidden" value="taxonomy-starter" />
            <input name="accessNeed" type="hidden" value="taxonomy-starter-download" />
            <input name="packageId" type="hidden" value="" />
            <input name="resourceSlug" type="hidden" value="taxonomy-starter" />
            <input name="returnTo" type="hidden" value="/taxonomy-starter" />

            <div className="onboarding-form__grid">
              <label>
                Organization / visitor context
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
                Role / responsibility
                <input
                  autoComplete="organization-title"
                  maxLength={140}
                  name="role"
                  type="text"
                />
              </label>
              <label>
                Preferred action window
                <select name="timeline" required defaultValue="planning">
                  <option value="immediate">Immediate</option>
                  <option value="30-days">Within 30 days</option>
                  <option value="quarter">This quarter</option>
                  <option value="planning">Planning window</option>
                </select>
              </label>
              <label>
                Optional phone
                <input
                  autoComplete="tel"
                  maxLength={140}
                  name="phone"
                  type="tel"
                />
              </label>
            </div>

            <label>
              What are you trying to organize?
              <textarea
                className="resize-none"
                maxLength={1400}
                name="summary"
                placeholder="Example: shared drives, SharePoint libraries, governance files, program records, AI working products, SOPs, lessons learned, or leadership decision products."
                required
              />
            </label>

            <label className="onboarding-form__acknowledgement">
              <input name="consent" required type="checkbox" value="acknowledged" />
              <span>
                I understand this public form opens a registration record for a
                public-safe starter. Protected files and sensitive content
                should wait for a controlled AGG workspace.
              </span>
            </label>

            <div className="onboarding-form__actions">
              <button className="button button--primary" type="submit">
                <ClipboardCheck size={18} aria-hidden="true" />
                Register and unlock starter
              </button>
              <Link className="button button--quiet-on-dark" href="/proof-pack">
                View proof pack
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

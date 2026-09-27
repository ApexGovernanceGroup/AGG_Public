import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { ClientConfigurationCard } from "../components/ClientConfigurationCard";
import { ClientServicesCommandCenter } from "../components/ClientServicesCommandCenter";
import {
  readRecentKaigesConfigurationRecords,
} from "../client-configurations/records";
import type {
  StoredKaigesConfigurationRecord,
} from "../client-configurations/records";
import {
  readRecentClientOnboardingRecords,
} from "../client-onboarding/records";
import type {
  StoredClientOnboardingRecord,
} from "../client-onboarding/records";
import {
  clientServiceLanes,
  clientServiceStack,
  contactEmail,
} from "../site-data";
import {
  CLIENT_SERVICES_COOKIE,
  hasClientServicesAccess,
  isClientServicesConfigured,
} from "./auth";
import { ClientServicesGate } from "./ClientServicesGate";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Client Services",
  description:
    "Password-protected Apex Governance Group client services section for owned enterprise architecture, diagnostics, repository control, and governed delivery.",
  robots: {
    index: false,
    follow: false,
  },
};

type ClientServicesPageProps = {
  searchParams?: Promise<{
    access?: string;
    record?: string;
    role?: string;
    returnTo?: string;
  }>;
};

export default async function ClientServicesPage({
  searchParams,
}: ClientServicesPageProps) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const authConfigured = await isClientServicesConfigured();
  const hasAccess = await hasClientServicesAccess(
    cookieStore.get(CLIENT_SERVICES_COOKIE)?.value,
  );
  const adminEntry =
    params?.role === "admin" || params?.returnTo === "/client-services?role=admin";

  return (
    <main>
      <section className="page-hero page-hero--seal page-hero--client-services">
        <div className="container page-hero__inner">
          <p className="eyebrow">Client Services</p>
          <h1>Protected service architecture, owned in the Apex codebase.</h1>
          <p>
            Enterprise architecture, diagnostics, implementation records, and
            delivery controls belong inside the AGG operating environment, not
            only in external artifact hosting.
          </p>
        </div>
      </section>

      {hasAccess ? (
        <ClientServicesWorkspace />
      ) : (
        <ClientServicesGate
          accessState={params?.access}
          adminEntry={adminEntry}
          authConfigured={authConfigured}
          onboardingRecordId={params?.record}
          returnTo={adminEntry ? "/client-services?role=admin" : "/client-portal"}
        />
      )}
    </main>
  );
}

async function ClientServicesWorkspace() {
  const [configurationRecords, onboardingRecords] = await Promise.all([
    readRecentKaigesConfigurationRecords(),
    readRecentClientOnboardingRecords(),
  ]);

  return (
    <>
      <section className="section client-services-section">
        <div className="container">
          <div className="client-services-heading">
            <div>
              <p className="eyebrow">Enterprise Architecture V4</p>
              <h2>Client service code now lives in the Apex site.</h2>
            </div>
            <form action="/api/client-services/logout" method="post">
              <button className="button button--quiet" type="submit">
                <LogOut size={17} aria-hidden="true" />
                Lock section
              </button>
            </form>
          </div>

          <ClientConfigurationCard />

          <ClientOnboardingRecords records={onboardingRecords} />

          <ClientConfigurationRecords records={configurationRecords} />

          <ClientServicesCommandCenter />

          <div className="client-services-grid">
            {clientServiceLanes.map((lane) => (
              <article className="client-service-card" key={lane.title}>
                <lane.icon size={24} aria-hidden="true" />
                <p className="eyebrow">{lane.label}</p>
                <h3>{lane.title}</h3>
                <p>{lane.summary}</p>
                <ul>
                  {lane.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Client Service Stack</p>
            <h2>Architecture moves through code, control, and execution.</h2>
          </div>
          <div className="client-service-stack">
            {clientServiceStack.map((item) => (
              <div className="client-service-stack__item" key={item.term}>
                <strong>{item.term}</strong>
                <p>{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout callout--boundary">
          <ShieldCheck size={26} aria-hidden="true" />
          <p className="eyebrow">Service Continuity</p>
          <h2>Client services connect to engagement intake and portal visibility.</h2>
          <p>
            This protected section becomes the owned service workspace. The
            engagement page starts the relationship, the portal tracks delivery,
            and Client Services holds the architecture and implementation lane.
          </p>
          <div className="action-row">
            <Link className="button button--primary" href="/engage">
              Start engagement
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="button button--quiet" href="/client-onboarding">
              Register client
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="button button--quiet" href="/client-portal">
              Open portal
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <p className="fine-print">
            For access changes, contact {contactEmail}.
          </p>
        </div>
      </section>
    </>
  );
}

function ClientOnboardingRecords({
  records,
}: {
  records: StoredClientOnboardingRecord[];
}) {
  return (
    <section
      aria-label="Client onboarding registration records"
      className="client-onboarding-records"
    >
      <div className="client-configuration-records__heading">
        <div>
          <p className="eyebrow">Onboarding Queue</p>
          <h2>Client registrations awaiting AGG review.</h2>
          <p>
            Public onboarding requests are listed here for client identity
            validation, product-purchase review, long-term solution scoping, and
            login activation decisions.
          </p>
        </div>
        <ShieldCheck size={26} aria-hidden="true" />
      </div>

      {records.length ? (
        <div className="onboarding-record-grid">
          {records.map((record) => (
            <article className="onboarding-record-card" key={record.recordId}>
              <div className="configuration-record-card__top">
                <div>
                  <p className="eyebrow">{record.intent}</p>
                  <h3>{record.organization}</h3>
                </div>
                <span>{record.timeline}</span>
              </div>
              <p className="configuration-record-card__id">{record.recordId}</p>
              <p>{formatRecordDate(record.receivedAt)}</p>
              <dl>
                <div>
                  <dt>Contact</dt>
                  <dd>{record.contactName}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{record.email}</dd>
                </div>
                <div>
                  <dt>Access</dt>
                  <dd>{record.accessNeed}</dd>
                </div>
                {record.packageId && (
                  <div>
                    <dt>Package</dt>
                    <dd>{record.packageId}</dd>
                  </div>
                )}
              </dl>
              <details>
                <summary>Requested outcome</summary>
                <p>{record.summary}</p>
              </details>
            </article>
          ))}
        </div>
      ) : (
        <p className="configuration-records-empty">
          No public client onboarding registrations have been captured yet.
        </p>
      )}
    </section>
  );
}

function ClientConfigurationRecords({
  records,
}: {
  records: StoredKaigesConfigurationRecord[];
}) {
  return (
    <section
      aria-label="Server-readable KAIGES and KAIGED configuration records"
      className="client-configuration-records"
    >
      <div className="client-configuration-records__heading">
        <div>
          <p className="eyebrow">Configuration Records</p>
          <h2>Server-readable KAIGES|D intake records.</h2>
          <p>
            Public Client-Led Self-Determination selections recorded from the
            website are listed here for scope review, entry assessment, and
            client follow-through.
          </p>
        </div>
        <FileText size={26} aria-hidden="true" />
      </div>

      {records.length ? (
        <div className="configuration-record-grid">
          {records.map((record) => (
            <article className="configuration-record-card" key={record.recordId}>
              <div className="configuration-record-card__top">
                <div>
                  <p className="eyebrow">{record.trigger}</p>
                  <h3>{record.currentWord}</h3>
                </div>
                <span>
                  {record.lockedCount} / {record.totalPositions}
                </span>
              </div>
              <p className="configuration-record-card__id">{record.recordId}</p>
              <p>{formatRecordDate(record.receivedAt)}</p>
              <ol>
                {record.positions.map((position) => (
                  <li key={`${record.recordId}-${position.id}`}>
                    <strong>{position.letter}</strong>
                    <span>
                      {position.term}
                      {position.locked ? " - locked" : ""}
                    </span>
                  </li>
                ))}
              </ol>
              <details>
                <summary>Generated review</summary>
                <pre>{record.generatedReview}</pre>
              </details>
            </article>
          ))}
        </div>
      ) : (
        <p className="configuration-records-empty">
          No server-readable public configuration records have been captured yet.
        </p>
      )}
    </section>
  );
}

function formatRecordDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

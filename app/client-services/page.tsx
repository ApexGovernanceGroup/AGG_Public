import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  LockKeyhole,
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
  clientServiceLanes,
  clientServiceStack,
  contactEmail,
} from "../site-data";
import {
  CLIENT_SERVICES_COOKIE,
  hasClientServicesAccess,
} from "./auth";

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
  searchParams?: Promise<{ access?: string }>;
};

export default async function ClientServicesPage({
  searchParams,
}: ClientServicesPageProps) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const hasAccess = await hasClientServicesAccess(
    cookieStore.get(CLIENT_SERVICES_COOKIE)?.value,
  );

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
        <ClientServicesGate accessDenied={params?.access === "denied"} />
      )}
    </main>
  );
}

function ClientServicesGate({ accessDenied }: { accessDenied: boolean }) {
  return (
    <section className="section client-services-section">
      <div className="container protected-access-shell">
        <div className="protected-access-panel">
          <LockKeyhole size={28} aria-hidden="true" />
          <p className="eyebrow">Password Protected</p>
          <h2>Client Services access</h2>
          <p>
            This route is reserved for client-facing service work, architecture
            sections, and implementation records that should not render on the
            public site.
          </p>
          {accessDenied && (
            <div className="status-banner status-banner--compact" role="alert">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>Access password was not accepted.</span>
            </div>
          )}
          <form className="access-form" action="/api/client-services/access" method="post">
            <label htmlFor="client-services-password">Access password</label>
            <input
              autoComplete="current-password"
              id="client-services-password"
              name="password"
              placeholder="Enter access password"
              required
              type="password"
            />
            <button className="button button--primary" type="submit">
              <LockKeyhole size={18} aria-hidden="true" />
              Unlock Client Services
            </button>
          </form>
        </div>

        <aside className="protected-access-note">
          <FileText size={24} aria-hidden="true" />
          <p className="eyebrow">Owned Code Boundary</p>
          <h2>External artifacts become maintainable Apex routes here.</h2>
          <p>
            Client service sections should be versioned, reviewed, and extended
            in GitHub so delivery logic stays traceable and reusable.
          </p>
        </aside>
      </div>
    </section>
  );
}

async function ClientServicesWorkspace() {
  const configurationRecords = await readRecentKaigesConfigurationRecords();

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

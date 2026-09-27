import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ClientPortalDashboard } from "../components/ClientPortalDashboard";
import { ClientServicesGate } from "../client-services/ClientServicesGate";
import {
  CLIENT_SERVICES_COOKIE,
  hasClientServicesAccess,
  isClientServicesConfigured,
} from "../client-services/auth";
import { getClientPortalProfile } from "./profile";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Credential-protected Apex Governance Group client dashboard for commissioned service status, client administration data, assigned Apex contact details, actions, and communication patterns.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

type ClientPortalPageProps = {
  searchParams?: Promise<{ access?: string }>;
};

export default async function ClientPortalPage({
  searchParams,
}: ClientPortalPageProps) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const authConfigured = await isClientServicesConfigured();
  const hasAccess = await hasClientServicesAccess(
    cookieStore.get(CLIENT_SERVICES_COOKIE)?.value,
  );
  const profile = getClientPortalProfile();

  return (
    <main>
      <section className="page-hero page-hero--seal page-hero--portal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Client Portal</p>
          <h1>Dashboard visibility for commissioned AGG client services.</h1>
          <p>
            Authenticated clients can review current service status, client
            administration details, assigned Apex employee contact information,
            project efforts, actions, risks, and open communication in one
            governed delivery dashboard.
          </p>
          {!hasAccess && (
            <div className="action-row">
              <Link className="button button--primary" href="/client-onboarding">
                <ShieldCheck size={18} aria-hidden="true" />
                Register for access
              </Link>
              <Link className="button button--quiet-on-dark" href="/contact">
                <ArrowRight size={18} aria-hidden="true" />
                Request portal support
              </Link>
            </div>
          )}
        </div>
      </section>

      {hasAccess ? (
        <section className="section portal-section">
          <div className="container">
            <div className="status-banner" role="status">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>
                Credentialed portal session active. Dashboard data is scoped for
                the current client account and should be treated as a controlled
                client service record.
              </span>
            </div>
            <ClientPortalDashboard profile={profile} />
          </div>
        </section>
      ) : (
        <ClientServicesGate
          accessState={params?.access}
          authConfigured={authConfigured}
          returnTo="/client-portal"
        />
      )}
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ClientPortalDashboard } from "../components/ClientPortalDashboard";

export const metadata: Metadata = {
  title: "Client Portal Preview",
  description:
    "Public, non-operational preview of Apex Governance Group engagement progress, program status, actions, and communication patterns.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientPortalPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal page-hero--portal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Client Portal Preview</p>
          <h1>Demonstration visibility for the work AGG governs with clients.</h1>
          <p>
            Preview how current progress, project efforts, actions, programs,
            risks, and open communication can appear in one governed delivery
            dashboard. Live client access opens only after onboarding.
          </p>
          <div className="action-row">
            <Link className="button button--primary" href="/engage">
              <ShieldCheck size={18} aria-hidden="true" />
              Start client engagement
            </Link>
            <Link className="button button--quiet-on-dark" href="/contact">
              <ArrowRight size={18} aria-hidden="true" />
              Request portal access
            </Link>
          </div>
        </div>
      </section>

      <section className="section portal-section">
        <div className="container">
          <div className="status-banner" role="status">
            <ShieldCheck size={19} aria-hidden="true" />
            <span>
              Preview data only. Production portal access requires identity,
              role authorization, audit logging, persistent records, and a
              governed client communication store.
            </span>
          </div>
          <ClientPortalDashboard />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ClientPortalDashboard } from "../components/ClientPortalDashboard";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Client-specific dashboard preview for Apex Governance Group engagement progress, program status, actions, and communication.",
};

export default function ClientPortalPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal page-hero--portal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Client Portal</p>
          <h1>Client-specific visibility for work that is already underway.</h1>
          <p>
            Track current progress, project efforts, actions, programs, risks,
            and open communication from one governed delivery dashboard.
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
          <ClientPortalDashboard />
        </div>
      </section>
    </main>
  );
}

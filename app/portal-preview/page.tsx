import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { portalPreviewModules } from "../site-data";

export const metadata: Metadata = {
  title: "Client Visibility Model",
  description:
    "Public-safe explanation of the Apex Governance Group client dashboard structure, service status, assigned contact, and delivery package model.",
};

export default function PortalPreviewPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Portal Preview</p>
          <h1>See what client visibility is designed to provide.</h1>
          <p>
            The live portal remains credential-protected. This public preview
            explains the dashboard modules a validated client can expect after
            registration, scope confirmation, and credential activation.
          </p>
          <div className="page-hero__actions">
            <Link className="button button--primary" href="/client-onboarding">
              Register for access
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="button button--quiet-on-dark" href="/client-services">
              <LockKeyhole size={17} aria-hidden="true" />
              Client login
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Dashboard Model</p>
            <h2>What clients see after controlled onboarding.</h2>
          </div>
          <div className="portal-preview-grid">
            {portalPreviewModules.map((module) => (
              <article className="portal-preview-card" key={module.title}>
                <module.icon size={24} aria-hidden="true" />
                <h2>{module.title}</h2>
                <p>{module.purpose}</p>
                <ul className="mini-list">
                  {module.fields.map((field) => (
                    <li key={field}>{field}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

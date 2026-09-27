import Link from "next/link";
import { FileText, LockKeyhole, ShieldCheck } from "lucide-react";

type ClientServicesGateProps = {
  accessState?: string;
  adminEntry?: boolean;
  authConfigured: boolean;
  onboardingRecordId?: string;
  returnTo?: "/client-portal" | "/client-services" | "/client-services?role=admin";
};

export function ClientServicesGate({
  accessState,
  adminEntry = false,
  authConfigured,
  onboardingRecordId,
  returnTo = "/client-portal",
}: ClientServicesGateProps) {
  const accessDenied = accessState === "denied";
  const registrationReceived = accessState === "registered";

  return (
    <section className="section client-services-section">
      <div className="container protected-access-shell">
        <div className="protected-access-panel">
          <LockKeyhole size={28} aria-hidden="true" />
          <p className="eyebrow">Credential Protected</p>
          <h2>{adminEntry ? "Apex Admin access" : "Client login"}</h2>
          <p>
            Enter the client login and password issued after AGG validates
            onboarding, purchase intent, role authorization, and the engagement
            workspace that should open for the client.
          </p>
          {registrationReceived && (
            <div className="status-banner status-banner--compact" role="status">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>
                Onboarding registration received
                {onboardingRecordId ? `: ${onboardingRecordId}` : ""}. AGG will
                validate the record before activating checkout, client login,
                portal access, or long-term solution work.
              </span>
            </div>
          )}
          {accessDenied && (
            <div className="status-banner status-banner--compact" role="alert">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>Client login or password was not accepted.</span>
            </div>
          )}
          {!authConfigured && (
            <div className="status-banner status-banner--compact" role="status">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>
                Client portal access is staged until hosted username, password,
                and session secrets are configured.
              </span>
            </div>
          )}
          <form className="access-form" action="/api/client-services/access" method="post">
            <input name="returnTo" type="hidden" value={returnTo} />
            <label htmlFor="client-services-username">Client login</label>
            <input
              autoComplete="username"
              id="client-services-username"
              name="username"
              placeholder="Enter client login"
              required
              type="text"
            />
            <label htmlFor="client-services-password">Password</label>
            <input
              autoComplete="current-password"
              id="client-services-password"
              name="password"
              placeholder="Enter password"
              required
              type="password"
            />
            <button className="button button--primary" type="submit">
              <LockKeyhole size={18} aria-hidden="true" />
              Open dashboard portal
            </button>
          </form>
          {!authConfigured && (
            <Link className="text-link" href="/contact">
              Request credential activation
            </Link>
          )}
        </div>

        <aside className="protected-access-note">
          <FileText size={24} aria-hidden="true" />
          <p className="eyebrow">Portal Access Boundary</p>
          <h2>Validated clients open a dashboard, not public preview data.</h2>
          <p>
            The portal is designed to show commissioned services, current
            status, client administration details, and the assigned AGG contact
            after onboarding and credential activation.
          </p>
        </aside>
      </div>
    </section>
  );
}

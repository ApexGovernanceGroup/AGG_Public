import Link from "next/link";
import { CreditCard, GitBranch, LockKeyhole } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { githubRepositoryUrl, topNavItems } from "../site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandMark />
        {topNavItems.length > 0 && (
          <nav className="site-nav" aria-label="Masthead navigation">
            {topNavItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
        <div className="site-header__actions">
          <a className="icon-link" href={githubRepositoryUrl} aria-label="Open Agentic Systems repository">
            <GitBranch size={18} aria-hidden="true" />
          </a>
          <Link className="button button--small button--quiet" href="/client-services">
            <LockKeyhole size={16} aria-hidden="true" />
            Client login
          </Link>
          <Link className="button button--small" href="/engage">
            <CreditCard size={16} aria-hidden="true" />
            Engage
          </Link>
        </div>
      </div>
    </header>
  );
}

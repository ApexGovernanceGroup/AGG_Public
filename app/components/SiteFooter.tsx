import Link from "next/link";
import { Building2, ExternalLink, GitBranch, Mail } from "lucide-react";
import { BrandMark } from "./BrandMark";
import {
  brandStandard,
  contactEmail,
  founderProfile,
  githubRepositoryUrl,
  navItems,
  site,
} from "../site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <BrandMark />
          <p>{site.description}</p>
        </div>
        <div>
          <h2>Navigate</h2>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2>Action Links</h2>
          <div className="footer-links">
            <a href={`mailto:${contactEmail}`}>
              <Mail size={16} aria-hidden="true" />
              {contactEmail}
            </a>
            <a href={githubRepositoryUrl}>
              <GitBranch size={16} aria-hidden="true" />
              AGG public repository
            </a>
            <a href={founderProfile.linkedinUrl}>
              <ExternalLink size={16} aria-hidden="true" />
              {founderProfile.name} on LinkedIn
            </a>
            <span className="footer-note">
              <Building2 size={16} aria-hidden="true" />
              M365 boundary confirmed during intake
            </span>
          </div>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Apex Governance Group.</span>
        <span>{brandStandard.tier1.pillarLine}</span>
      </div>
    </footer>
  );
}

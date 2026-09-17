import Link from "next/link";
import { site } from "../site-data";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link className="brand-lockup" href="/" aria-label="Apex Governance Group home">
      <span
        className={compact ? "brand-seal brand-seal--compact" : "brand-seal"}
        aria-hidden="true"
      />
      {!compact && (
        <span className="brand-text">
          <strong>{site.name}</strong>
          <span>{site.tagline}</span>
        </span>
      )}
    </Link>
  );
}

"use client";

import { useId, useState } from "react";
import { ChevronDown, ListChecks, X } from "lucide-react";

export type PackageInclusionsContent = {
  title: string;
  summary: string;
  items: string[];
};

type PackageInclusionsProps = {
  inclusions: PackageInclusionsContent;
};

export function PackageInclusions({ inclusions }: PackageInclusionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`package-inclusions${isOpen ? " is-open" : ""}`}>
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="button button--quiet button--full package-inclusions__trigger"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <ListChecks size={18} aria-hidden="true" />
        {inclusions.title}
        <ChevronDown className="package-inclusions__chevron" size={17} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          aria-label={inclusions.title}
          className="package-inclusions__card"
          id={panelId}
          role="region"
        >
          <div className="package-inclusions__top">
            <strong>Included engagement frame</strong>
            <button
              aria-label="Close package inclusions"
              className="package-inclusions__close"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
          <p>{inclusions.summary}</p>
          <ul>
            {inclusions.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

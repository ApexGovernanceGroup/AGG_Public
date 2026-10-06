"use client";

import { useId, useState } from "react";
import { ChevronDown, ClipboardList, X } from "lucide-react";
import type {
  EngagementPackage,
  EngagementPackageDeepDive,
} from "../commerce";

type EngagementPackageDeepDiveProps = {
  packageItem: EngagementPackage;
  variant?: "card" | "compact";
};

const deepDiveSections = [
  {
    key: "exampleServices",
    title: "Example services offered within this category",
  },
  {
    key: "apexRequiredInputs",
    title: "Apex Required Inputs",
  },
  {
    key: "apexGeneratedFinalOutputs",
    title: "Apex Generated Final Outputs",
  },
  {
    key: "generalizedTimeline",
    title: "Generalized Timeline",
  },
  {
    key: "engagementExpectations",
    title: "Apex-Client Engagement Expectations",
  },
  {
    key: "satisfactionCriteria",
    title: "Finalization | Satisfaction Criteria",
  },
  {
    key: "finalClientDeliveryPackage",
    title: "Final Client Delivery Package",
  },
] satisfies Array<{
  key: keyof EngagementPackageDeepDive;
  title: string;
}>;

export function EngagementPackageDeepDive({
  packageItem,
  variant = "card",
}: EngagementPackageDeepDiveProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const titleId = useId();

  return (
    <div
      className={`package-deep-dive package-deep-dive--${variant}${
        isOpen ? " is-open" : ""
      }`}
    >
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className={`button button--quiet package-deep-dive__trigger${
          variant === "card" ? " button--full" : ""
        }`}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <ClipboardList size={18} aria-hidden="true" />
        Scope deep dive
        <ChevronDown className="package-deep-dive__chevron" size={17} aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          aria-labelledby={titleId}
          className="package-deep-dive__card"
          id={panelId}
          role="region"
        >
          <div className="package-deep-dive__top">
            <div>
              <p className="eyebrow">
                {packageItem.sku} | {packageItem.category}
              </p>
              <h3 id={titleId}>{packageItem.name}</h3>
              <span>{packageItem.displayPrice}</span>
            </div>
            <button
              aria-label={`Close ${packageItem.name} deep dive`}
              className="package-deep-dive__close"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
          <p className="package-deep-dive__summary">
            Anchor pricing is a starting decision signal. The final engagement
            is shaped by the required inputs, delivery footprint, evidence
            standard, timeline, and satisfaction criteria confirmed during
            onboarding.
          </p>
          <div className="package-deep-dive__grid">
            {deepDiveSections.map((section) => (
              <section className="package-deep-dive__section" key={section.key}>
                <h4>{section.title}</h4>
                <ul>
                  {packageItem.deepDive[section.key].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className="package-deep-dive__footer">
            <strong>Decision control</strong>
            <p>
              Review the scope, register the client record, then AGG and the
              client confirm final delivery terms before checkout, production,
              or long-term conversion.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

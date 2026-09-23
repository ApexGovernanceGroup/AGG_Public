"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";

type SolutionLane = {
  label: string;
  definition: string;
  detail: string;
};

type HeroSolutionLanesProps = {
  lanes: readonly SolutionLane[];
};

export function HeroSolutionLanes({ lanes }: HeroSolutionLanesProps) {
  const panelId = useId();
  const popoutRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeLane = activeIndex === null ? null : lanes[activeIndex];
  const activeLaneNumber = activeIndex === null ? null : String(activeIndex + 1).padStart(2, "0");

  useEffect(() => {
    if (activeIndex === null) return;

    requestAnimationFrame(() => {
      popoutRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  }, [activeIndex]);

  return (
    <div className="hero__solution-selector">
      <div className="hero__solution-lanes" role="list" aria-label="Apex solution operating lanes">
        {lanes.map((lane, index) => {
          const laneNumber = String(index + 1).padStart(2, "0");
          const isActive = activeIndex === index;

          return (
            <button
              aria-controls={panelId}
              aria-expanded={isActive}
              aria-label={`${laneNumber}. ${lane.label}`}
              className={`hero__solution-lane${isActive ? " is-active" : ""}`}
              key={lane.label}
              onClick={() => setActiveIndex(isActive ? null : index)}
              type="button"
            >
              <span className="hero__solution-lane-number" aria-hidden="true">
                {laneNumber}
              </span>
            </button>
          );
        })}
      </div>

      {activeLane ? (
        <aside
          className="hero__solution-popout"
          id={panelId}
          ref={popoutRef}
          role="region"
          aria-label={`${activeLane.label} lane detail`}
        >
          <div className="hero__solution-popout-top">
            <span className="hero__solution-popout-index">
              Lane {activeLaneNumber}
            </span>
            <button
              className="hero__solution-popout-close"
              type="button"
              aria-label="Close lane detail"
              onClick={() => setActiveIndex(null)}
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
          <h3>{activeLane.label}</h3>
          <p>{activeLane.definition}</p>
          <p>{activeLane.detail}</p>
        </aside>
      ) : null}
    </div>
  );
}

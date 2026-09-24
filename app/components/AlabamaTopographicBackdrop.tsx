"use client";

import { useEffect } from "react";

export function AlabamaTopographicBackdrop() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const applyScrollPosition = () => {
      frame = 0;

      if (reduceMotion.matches) {
        root.style.setProperty("--alabama-contour-x", "0px");
        root.style.setProperty("--alabama-contour-y", "0px");
        return;
      }

      const scrollY = window.scrollY;
      root.style.setProperty(
        "--alabama-contour-x",
        `${Math.round(Math.sin(scrollY / 520) * 18)}px`,
      );
      root.style.setProperty("--alabama-contour-y", `${Math.round(scrollY * -0.12)}px`);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(applyScrollPosition);
    };

    applyScrollPosition();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduceMotion.addEventListener("change", applyScrollPosition);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener("change", applyScrollPosition);
    };
  }, []);

  return <div className="site-topography-backdrop" aria-hidden="true" />;
}

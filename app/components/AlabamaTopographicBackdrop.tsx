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
      const maxScroll = Math.max(root.scrollHeight - window.innerHeight, 1);
      const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      const horizontalTravel = Math.min(window.innerWidth * 0.18, 220);
      const verticalTravel = Math.min(window.innerHeight * 0.46, 420);

      root.style.setProperty(
        "--alabama-contour-x",
        `${Math.round((scrollProgress - 0.5) * horizontalTravel)}px`,
      );
      root.style.setProperty(
        "--alabama-contour-y",
        `${Math.round((0.5 - scrollProgress) * verticalTravel)}px`,
      );
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

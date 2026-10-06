"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ENDPOINT = "/api/public-events";
const MAX_LABEL_LENGTH = 120;
const MAX_HREF_LENGTH = 220;

type TelemetryPayload = {
  eventName: "page_view" | "navigation_click" | "cta_click";
  path: string;
  label?: string;
  href?: string;
  referrer?: string;
  viewport?: string;
};

function clean(value: string | null | undefined, maxLength: number) {
  if (!value) return undefined;
  const normalized = value.trim().replace(/\s+/g, " ");
  if (!normalized) return undefined;
  return normalized.slice(0, maxLength);
}

function currentPath(pathname: string, search: string) {
  return search ? `${pathname}?${search}` : pathname;
}

function canTrack() {
  if (typeof navigator === "undefined") return false;
  return navigator.doNotTrack !== "1";
}

function send(payload: TelemetryPayload) {
  if (!canTrack()) return;

  const body = JSON.stringify({
    ...payload,
    path: clean(payload.path, MAX_HREF_LENGTH),
    label: clean(payload.label, MAX_LABEL_LENGTH),
    href: clean(payload.href, MAX_HREF_LENGTH),
    referrer: clean(payload.referrer, MAX_HREF_LENGTH),
    viewport:
      typeof window === "undefined"
        ? undefined
        : `${window.innerWidth}x${window.innerHeight}`,
  });

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    if (navigator.sendBeacon(ENDPOINT, blob)) return;
  }

  void fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
    keepalive: true,
  }).catch(() => {
    // Telemetry must never affect public site interaction.
  });
}

function classifyAnchor(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href") ?? "";
  const markedEvent = anchor.dataset.aggEvent;

  if (markedEvent === "cta") return "cta_click";
  if (
    anchor.classList.contains("button") ||
    anchor.classList.contains("text-link") ||
    href.startsWith("mailto:")
  ) {
    return "cta_click";
  }

  return "navigation_click";
}

export function PublicTelemetry() {
  const pathname = usePathname();

  useEffect(() => {
    send({
      eventName: "page_view",
      path: currentPath(pathname, window.location.search.slice(1)),
      referrer: document.referrer,
    });
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      send({
        eventName: classifyAnchor(anchor),
        path: currentPath(window.location.pathname, window.location.search.slice(1)),
        label: anchor.dataset.aggLabel ?? anchor.textContent ?? anchor.href,
        href: anchor.href,
      });
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}

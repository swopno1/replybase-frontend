"use client";

import { useEffect } from "react";
import { setClarityTags, trackEvent } from "@/lib/client-analytics";

/**
 * Invisible client component dropped into the server-rendered marketing page.
 *
 * Responsibilities:
 * 1. Fire `pricing_viewed` (origin=marketing) when the #pricing section
 *    scrolls into view — fires at most once per session.
 * 2. Fire `get_started_click` (origin=marketing) when any CTA anchor that
 *    points to app.replybase.co.uk/auth/register or /auth/claim is clicked —
 *    before the browser navigates, so the event reaches Plausible/Clarity.
 */
export function MarketingFunnelTracker() {
  // ── Pricing section visibility ─────────────────────────────────────────
  useEffect(() => {
    setClarityTags({ page_type: "marketing", site: "replybase.co.uk" });

    const pricingSection = document.getElementById("pricing");
    if (!pricingSection) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) {
          return;
        }

        trackEvent("pricing_viewed", {
          onceKey: "marketing:pricing_viewed",
          onceScope: "session",
          properties: { section: "pricing", origin: "marketing" },
        });

        // No need to keep observing after first intersection
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(pricingSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  // ── CTA click delegation ───────────────────────────────────────────────
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) {
        return;
      }

      const href = target.getAttribute("href") || "";
      const isSignupCta =
        href.includes("app.replybase.co.uk/auth/register") ||
        href.includes("app.replybase.co.uk/auth/claim");
      if (!isSignupCta) {
        return;
      }

      let sourceValue = "unknown";
      try {
        const url = new URL(href);
        sourceValue = url.searchParams.get("source") || "unknown";
      } catch {
        // href is not a full URL — ignore
      }

      trackEvent("get_started_click", {
        properties: {
          source: sourceValue,
          origin: "marketing",
        },
      });
    }

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}

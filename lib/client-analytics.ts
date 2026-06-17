"use client";

export type TrackingEventName =
  | "get_started_click"
  | "pricing_viewed"
  | "page_viewed"
  | "newsletter_signup"
  | "contact_form_submission"
  | "promo_modal_viewed"
  | "promo_cta_click";

type OnceScope = "memory" | "session" | "local";

type TrackEventOptions = {
  properties?: Record<string, string | number | boolean | null | undefined>;
  onceKey?: string;
  onceScope?: OnceScope;
};

type ClarityAPI = {
  (command: "event", eventName: string): void;
  (command: "set", key: string, value: string): void;
};

type FbqAPI = {
  (command: "track", eventName: string, params?: Record<string, unknown>): void;
  (command: "trackCustom", eventName: string, params?: Record<string, unknown>): void;
};

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, unknown> },
    ) => void;
    clarity?: ClarityAPI;
    posthog?: {
      capture: (eventName: string, properties?: Record<string, unknown>) => void;
    };
    fbq?: FbqAPI;
    dataLayer?: Record<string, unknown>[];
  }
}

const inMemoryEventKeys = new Set<string>();

const plausibleGoalMap: Partial<Record<TrackingEventName, string>> = {
  get_started_click: "Get Started Click",
  pricing_viewed: "Pricing Viewed",
  newsletter_signup: "Newsletter Signup",
  contact_form_submission: "Contact Form Submission",
};

// Maps app events to standard Facebook Pixel events.
// Standard events give Meta's algorithm better signal quality than custom events.
const fbPixelEventMap: Partial<Record<TrackingEventName, string>> = {
  get_started_click: "Lead",
  promo_modal_viewed: "ViewContent",
  promo_cta_click: "InitiateCheckout",
  contact_form_submission: "Contact",
  newsletter_signup: "Subscribe",
};

export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function isMainDomain() {
  if (typeof window === "undefined") {
    return false;
  }
  return (
    window.location.hostname === "replybase.co.uk" ||
    window.location.hostname === "www.replybase.co.uk"
  );
}

function hasWindow() {
  return typeof window !== "undefined";
}

function hasBeenTracked(eventKey: string, scope: OnceScope): boolean {
  if (!hasWindow()) {
    return true;
  }

  if (scope === "memory") {
    if (inMemoryEventKeys.has(eventKey)) {
      return true;
    }
    inMemoryEventKeys.add(eventKey);
    return false;
  }

  const storage = scope === "local" ? window.localStorage : window.sessionStorage;
  if (storage.getItem(eventKey)) {
    return true;
  }

  storage.setItem(eventKey, "1");
  return false;
}

function cleanProperties(
  properties: Record<string, string | number | boolean | null | undefined> = {},
): Record<string, string | number | boolean> {
  const cleaned: Record<string, string | number | boolean> = {};

  for (const [key, value] of Object.entries(properties)) {
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      cleaned[key] = value;
    }
  }

  return cleaned;
}

export function setClarityTags(tags: Record<string, string | undefined>) {
  if (!hasWindow() || typeof window.clarity !== "function") {
    return;
  }

  for (const [key, value] of Object.entries(tags)) {
    if (!value) {
      continue;
    }
    window.clarity("set", key, value);
  }
}

export function trackEvent(
  eventName: TrackingEventName,
  options: TrackEventOptions = {},
) {
  if (!hasWindow() || !isProduction() || !isMainDomain()) {
    return false;
  }

  try {
    const onceKey = options.onceKey;
    const onceScope = options.onceScope || "memory";
    if (onceKey && hasBeenTracked(`tracking:${onceKey}`, onceScope)) {
      return false;
    }

    const properties = cleanProperties({
      ...options.properties,
      origin: "marketing",
      path: window.location.pathname,
    });

    const plausibleGoalName = plausibleGoalMap[eventName];
    if (plausibleGoalName && typeof window.plausible === "function") {
      window.plausible(plausibleGoalName, { props: properties });
    }

    if (typeof window.clarity === "function") {
      window.clarity("event", eventName);
    }

    if (window.posthog?.capture) {
      window.posthog.capture(eventName, properties);
    }

    // Push to GTM dataLayer so any GTM-managed tags (GA4, FB Pixel) can react
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: eventName, ...properties });

    // Fire Facebook Pixel standard events directly for high-value conversions
    const fbEventName = fbPixelEventMap[eventName];
    if (fbEventName && typeof window.fbq === "function") {
      window.fbq("track", fbEventName, properties);
    }

    return true;
  } catch (error) {
    console.error("Failed to track event:", eventName, error);
    return false;
  }
}

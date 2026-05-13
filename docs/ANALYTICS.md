# Analytics & Monitoring Integration

This document outlines the analytics and session recording stack for the ReplyBase marketing site.

## Stack Overview

We use a multi-layered approach to analytics to balance privacy, performance, and insight:

- **Plausible Analytics**: Lightweight, privacy-friendly page view and goal tracking.
- **Microsoft Clarity**: Session recording and heatmaps to understand user behavior.
- **PostHog**: Product analytics and feature flag support.

## Configuration

The analytics scripts are managed in `components/analytics/analytics-scripts.tsx`. They are configured to:
- Only load in production (`process.env.NODE_ENV === 'production'`).
- Only load on the primary domain (`replybase.co.uk`).
- Use `async` and `defer` to prevent blocking the main thread.

### Environment Variables
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: (default: `replybase.co.uk`)
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`: Clarity project identifier.
- `NEXT_PUBLIC_POSTHOG_KEY`: PostHog API key.
- `NEXT_PUBLIC_POSTHOG_HOST`: PostHog instance URL (e.g., `https://app.posthog.com`).

## Tracking Utility

A type-safe utility is provided in `lib/client-analytics.ts` for tracking custom events across all active providers.

```typescript
import { trackEvent } from "@/lib/client-analytics";

trackEvent("get_started_click", {
  properties: {
    location: "hero_section"
  }
});
```

## Tracked Events

| Event Name | Trigger | Implementation | Payload / Props |
|------------|---------|----------------|-----------------|
| `get_started_click` | When a user clicks a "Get Started" or "Register" link. | Delegated via `MarketingFunnelTracker` | `source`, `origin`, `path` |
| `pricing_viewed` | When the pricing section scrolls into view. | Intersection Observer in `MarketingFunnelTracker` | `section`, `origin`, `path` |
| `newsletter_signup` | Upon successful newsletter subscription. | Tracked in `NewsletterSubscribe.tsx` | `location`, `origin`, `path` |
| `contact_form_submission` | Upon successful contact form submission. | Tracked in `ContactForm.tsx` | `origin`, `path` |
| `page_viewed` | Tracked automatically by providers. | Standard properties |

## Privacy & Compliance

- **GDPR Compliant**: Plausible and Clarity (configured for masking) ensure we respect user privacy.
- **Production Only**: Analytics are only enabled when `NODE_ENV` is `production` AND the hostname is `replybase.co.uk`. This prevents development and preview environments from polluting production data.

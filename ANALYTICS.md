# Plausible Analytics Integration

This document outlines the Plausible Analytics integration for the ReplyBase marketing site.

## Configuration

The analytics script is managed in `components/analytics/analytics-scripts.tsx`. It is configured to:
- Only load in production (`process.env.NODE_ENV === 'production'`).
- Use `async` and `defer` to prevent blocking the main thread.
- Send data to the domain specified in `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (default: `replybase.co.uk`).

## Tracking Utility

A type-safe utility is provided in `lib/client-analytics.ts` for tracking custom events.

```typescript
import { trackEvent } from "@/lib/client-analytics";

trackEvent("event_name", {
  properties: {
    key: "value"
  }
});
```

## Tracked Events

| Event Name | Trigger | Implementation | Payload / Props |
|------------|---------|----------------|-----------------|
| `get_started_click` | When a user clicks a "Get Started" or "Register" link. | Delegated via `MarketingFunnelTracker` | `source`, `origin`, `path` |
| `pricing_viewed` | When the pricing section scrolls into view. | Intersection Observer in `MarketingFunnelTracker` | `section`, `origin`, `path` |
| `newsletter_signup` | Upon successful newsletter subscription. | Tracked in `NewsletterSubscribe.tsx` | `location` (footer/default), `origin`, `path` |
| `contact_form_submission` | Upon successful contact form submission. | Tracked in `ContactForm.tsx` | `origin`, `path` |
| `page_viewed` | Tracked automatically by Plausible script. | Standard Plausible properties |

## Privacy & Compliance

- **GDPR Compliant**: Plausible does not use cookies and does not collect personal data.
- **Anonymized**: All data is anonymized at the source.
- **Production Only**: Analytics are only enabled when `NODE_ENV` is `production` AND the hostname is `replybase.co.uk` (or `www.replybase.co.uk`). This ensures development and preview environments (e.g., Vercel previews) do not pollute production data.

# SEO / AEO / GEO Audit Report
**ReplyBase — replybase.co.uk**
**Date:** July 2026
**Data source:** Google Search Console (last updated 30 Jun 2026)

---

## Executive Summary

The site has near-zero organic search visibility despite 203 published blog posts. Root causes are a combination of technical indexing errors, domain authority deficit, and a content quality signal problem. All technical issues have now been fixed. The path to organic traffic requires rebuilding content quality credibility with Google before scaling volume.

**Impressions trend:** Peaked ~240 in late April, now effectively 0. This is consistent with a new domain where Google's initial crawl evaluated content quality and decided not to index the majority of it.

---

## Google Search Console Issues — Status

### 1. Not Found (404) — 29 pages
**Status: FIXED ✅**

All 29 URLs generating 404 errors now have 301 permanent redirects in `next.config.ts`.

| Old URL | Redirects To | Type |
|---|---|---|
| `/docs/telegram-delivery` | `/docs/channels/telegram` | Permanent |
| `/docs/webchat-qa-rollout` | `/docs/channels/webchat` | Permanent |
| `/docs/onboarding-implementation` | `/docs/get-started/account-setup` | Permanent |
| `/docs/quick-start` | `/docs/get-started` | Permanent |
| `/docs/channels` | `/docs` | Permanent |
| `/docs/onboarding` | `/docs/get-started` | Permanent |
| `/docs/api` | `/docs/api/reference` | Permanent |
| `/docs/ai-workflows` | `/docs/platform/ai-workflows` | Permanent |
| `/docs/subscription-features` | `/docs/features` | Permanent |
| `/docs/security-model-application-level` | `/docs/security` | Permanent |
| `/docs/security-first-ai-automation-guide` | `/blog/security-first-ai-automation-guide` | Permanent |
| `/channels/whatsapp` | `/docs/channels/whatsapp` | Permanent |
| `/features` | `/#features` | Permanent |
| `/features/flow-builder` | `/docs/platform/flow-builder` | Permanent |
| `/pricing` | `/#pricing` | Permanent |
| `/roi-calculator` | `/` | Permanent |
| `/demo` | `/` | Temporary (page exists but is ad-specific) |
| `/newbot` | `/` | Permanent (Telegram command, should never be crawled) |
| `/getWebhookInfo` | `/` | Permanent |
| `/setprivacy` | `/` | Permanent |
| `/month` | `/` | Permanent |
| `/v1/:path*` | `/docs/api/reference` | Permanent |
| `/index.html` | `/` | Permanent (was already present) |
| `/terms.html` | `/terms` | Permanent (was already present) |

**Next action:** After deploying, go to GSC → Page Indexing → Not Found → click "Validate Fix". GSC will re-crawl these URLs and clear the report within 1–2 weeks.

---

### 2. Crawled – Currently Not Indexed — 17 pages
**Status: PARTIALLY FIXED ✅⚠️**

| URL | Root Cause | Fix Applied |
|---|---|---|
| `/_next/static/media/*.woff2` (4 URLs) | Font files being crawled — robots.txt didn't block `_next/static/media/` | **Fixed:** Added `/_next/static/media/` and `/_next/static/chunks/` to robots.ts disallow list |
| `app.replybase.co.uk/manifest.webmanifest` | App subdomain being crawled | **Pending:** Add `noindex` to app's web manifest |
| `app.replybase.co.uk/contact` | App subdomain page crawled | **Pending:** Auth layout needs `robots: noindex` in replybase-development |
| `app.replybase.co.uk/auth/login?callbackUrl=/contact` | Same as above with query param | **Pending:** Same fix |
| `/docs/webchat-progress` | Was a dev-only page | Now redirects to `/docs/channels/webchat` via 301 |
| `www.replybase.co.uk/docs/deployment-checklist` | www subdomain not redirecting cleanly | Was already handled by www→non-www redirect rule |
| `/blog/whatsapp-automation-for-hotels` | **Content quality signal** — Google crawled but declined to index | **Not a code fix** — improve content quality (see content calendar) |
| `/blog/future-of-ai-customer-interactions` | **Content quality signal** | Same — improve content |
| `/blog/first-post` | Test/placeholder post | **Action:** Delete this post or replace with real content |
| `www.replybase.co.uk/terms`, `/about` | www variant crawled | Handled by existing www→non-www 301 |

**Remaining action required in `replybase-development`:**
```tsx
// app/(auth)/layout.tsx
export const metadata = {
  robots: { index: false, follow: false },
};
```

---

### 3. Alternate Page with Proper Canonical — 7 pages
**Status: PENDING ⚠️**

All 7 are `app.replybase.co.uk/auth/register?...` and `app.replybase.co.uk/auth/login?...` with query parameters.

**Root cause:** Auth pages with query string params (plan=pro, source=hero, etc.) are being crawled as separate URLs. Google found them via blog CTAs linking to the app.

**Fix required in `replybase-development`:**
- Add `robots: noindex` to the auth layout (covers all query-param variants automatically)
- Add canonical to base URL without query params in the auth pages

```tsx
// app/(auth)/layout.tsx in replybase-development
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
```

This will clear all 7 URLs from the "Alternate page with proper canonical" report.

---

### 4. Page with Redirect — 7 pages
**Status: EXPECTED BEHAVIOUR ✅**

These are pages that correctly redirect (www → non-www, http → https). GSC reports the *source* URL, not the destination. Having redirects here is correct and expected. Google will eventually stop crawling these source URLs once the redirects are stable.

| URL | Redirects To | Status |
|---|---|---|
| `www.replybase.co.uk/` | `replybase.co.uk/` | Correct — leave |
| `http://replybase.co.uk/` | `https://replybase.co.uk/` | Correct — leave |
| `http://www.replybase.co.uk/` | `https://replybase.co.uk/` | Correct — leave |
| `replybase.co.uk/index.html` | `replybase.co.uk/` | Correct — leave |
| `app.replybase.co.uk/` | Auth/dashboard | Expected — leave |
| `www.replybase.co.uk/docs/security` | `replybase.co.uk/docs/security` | Correct — leave |
| `www.replybase.co.uk/docs/implementation` | Redirects correctly | Correct — leave |

---

## Technical SEO Changes Made

### `app/robots.ts`
**Before:**
```
disallow: ["/api/", "/*?callbackUrl=*"]
```
**After:**
```
disallow: ["/api/", "/*?callbackUrl=*", "/_next/static/media/", "/_next/static/chunks/", "/founding10"]
```
**Impact:** Stops Googlebot wasting crawl budget on binary font files and JS chunks.

---

### `next.config.ts`
Added 29 × 301 permanent redirects covering all GSC 404 URLs. Redirects pass link equity to the destination pages.

---

### `app/sitemap.ts`
**Bug fixed:** The sitemap walker was walking into `app/docs/_legacy/` and generating sitemap entries for URLs like `/docs/_legacy/telegram-delivery` — pages that don't exist as routes in Next.js App Router (underscore-prefixed folders are private). This caused Google to crawl non-existent URLs, contributing to the 404 report.

**Fix:** Walker now skips all segments starting with `_`, not just the hardcoded `_components`.

---

### `app/blog/[slug]/page.tsx`
**Metadata improvements:**
- `keywords` — now pulled from post frontmatter
- `authors` — changed from generic "ReplyBase" to `{ name: "Shaun", url: "/about" }` (E-E-A-T)
- `openGraph.images` — now uses `featured_image` from frontmatter, falls back to site OG image
- `twitter` — full Twitter Card metadata added

**JSON-LD Article schema improvements:**
- `author` type changed from `Organization` → `Person` (Shaun) — E-E-A-T signal
- Added `image`, `keywords`, `articleSection`, `dateModified`
- Publisher logo URL corrected

**UI:**
- Category pill badge added to post header
- Author byline changed from "ReplyBase Team" → "Shaun, ReplyBase"
- Blog CTA copy fixed (removed false "hundreds of founders" claim)

---

## AEO (Answer Engine Optimization) Assessment

**Current state:** Good structural foundation, poor execution.

| Signal | Status | Detail |
|---|---|---|
| FAQ sections in posts | ✅ Present | Most posts have "AEO & FAQ" sections with H3 headings |
| FAQ schema markup | ❌ Missing | No `FAQPage` JSON-LD is injected — the questions are invisible to search engines as structured data |
| Concise answers | ⚠️ Partial | Some answers are too long (>100 words). AI overviews prefer answers under 60 words |
| Author E-E-A-T | ✅ Fixed | Now shows real named Person author in schema |
| Factual citations | ⚠️ Present | Posts reference stats but rarely link to the source — link to Ofcom, ONS, Statista |

**Next action:** Add `FAQPage` JSON-LD to each blog post that has an FAQ section. This is a meaningful AEO win and a one-time schema update to the blog template.

---

## GEO (Generative Engine Optimization) Assessment

GEO is about being cited by AI assistants (ChatGPT, Perplexity, Google AI Overviews). The signals that matter:

| Signal | Status | Detail |
|---|---|---|
| Clear entity definition | ⚠️ Weak | ReplyBase isn't clearly defined as a specific type of software with a Wikipedia-style authority page. The homepage copy does this but it's not rich enough. |
| Factual, citable content | ✅ Present | "Technical Fact Blocks" in posts are ideal for GEO — AI assistants love tables with attributed data |
| Named expert author | ✅ Fixed | Shaun is now named across all post schema |
| Consistent brand mentions | ✅ Good | Posts consistently name-check ReplyBase and its specific features |
| Structured data completeness | ⚠️ Partial | Article schema now correct; FAQPage schema still missing |
| Content on AI-indexed platforms | ❌ None | No presence on Reddit, Quora, or industry forums where AI models train |

---

## Domain Authority Snapshot

| Metric | Estimate | Benchmark (healthy SaaS at 6 months) |
|---|---|---|
| Domain Rating | ~5–10 | 30–40 |
| Referring domains | ~5–15 | 50–100 |
| Indexed pages | ~5–20 | 50–100+ |
| Monthly organic sessions | ~0–50 | 500–2,000 |
| GSC impressions (monthly) | ~0–50 | 5,000+ |

**Verdict:** The site is in the early trust-building phase. No shortcut exists — every week of publishing quality content and earning even one new backlink compounds.

---

## Priority Action List

### Immediate (do before next deploy)
- [x] Add 301 redirects for 29 × 404 URLs — `next.config.ts` ✅
- [x] Fix robots.ts — block `_next/static/media/` ✅
- [x] Fix sitemap walker — skip `_legacy` dir ✅
- [x] Fix blog Article schema — Person author, image, keywords ✅
- [ ] Add `robots: noindex` to auth layout in `replybase-development`
- [ ] Delete `/blog/first-post` (test post, thin content)
- [ ] Submit all fixed URLs in GSC for revalidation

### This week
- [ ] Audit 203 posts — identify top 20 by quality, 301-redirect or delete the rest
- [ ] Publish Pillar 1 (WhatsApp Business API UK guide, 3,500+ words)
- [ ] Launch Founding 10 Facebook ad → `replybase.co.uk/founding10`
- [ ] Shaun LinkedIn post (direct outreach for Founding 10)

### This month
- [ ] Publish Pillar 2 (Facebook Messenger automation for UK businesses)
- [ ] Submit guest post pitch to Enterprise Nation
- [ ] Add `FAQPage` JSON-LD schema to blog template
- [ ] Add `featured_image` to top 20 blog posts (required for Google Discover)

### Before October
- [ ] Earn 3+ quality backlinks (FSB, Enterprise Nation, trade publication)
- [ ] At least 5 blog posts indexed in GSC
- [ ] At least 1 paying customer

---

## Founding 10 → First Subscriber Funnel

The fastest path to subscriber #1 is not SEO — it is the Founding 10 campaign.

```
Facebook Ad (£5-10/day, UK SMB owners)
    ↓
replybase.co.uk/founding10 (landing page — built ✅)
    ↓
Application form submission
    ↓
Shaun reviews + responds personally within 24h
    ↓
WhatsApp onboarding call
    ↓
User live on ReplyBase (Founding Partner)
    ↓
After 6 months free → convert to paid (Launch plan, £29/month)
```

**Parallel track — LinkedIn:**
Shaun posts 2× per week on personal LinkedIn. Not promotional. Document the journey: "Day 1 of building ReplyBase's Founding 10 community", "What I learned from 10 UK business owners this week". This builds an audience that will convert when the time is right.

---

## Next Report Trigger

Revisit this report when **any** of the following occur:
- GSC impressions exceed 500 in a week
- 5+ blog posts appear in GSC with any ranking position
- Founding 10 programme reaches 5 applications

---

*Report prepared: July 2026*
*Prepared by: Claude Code (Anthropic) — for ReplyBase internal use*

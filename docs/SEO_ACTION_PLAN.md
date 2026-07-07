# SEO Action Plan

## Immediate Tasks
1. [x] Audit all H1-H6 tags for semantic accuracy.
2. [x] Generate descriptive ALT text for all images.
3. [x] Implement Schema.org JSON-LD for the homepage.
4. [x] Optimize older blog posts for AEO/GEO/SEO. (Completed June 2026)

## Content Tasks
1. [x] Create 5 new blog posts focusing on "AI Automation in the UK." (Added: ReplyBase vs Intercom, AI for Real Estate Agents, ReplyBase vs Zendesk, Security-First AI)
2. [/] Optimize the "About Us" page for "AI Startup" keywords. (Page exists, needs more targeted keywords)
3. [x] Refine Blog UI for better UX and Brand Identity. (Completed June 2026 - T025, T027, T029, T034, T036)
4. [x] Launch "AI & Opportunity" 10-part educational series. (Completed June 2026)
5. [x] Launch "AI Lead Generation Mastery" 10-part educational series. (Completed June 2026)
6. [x] Deploy "AI Core Systems" authority cluster (Booking, Omnichannel, CRM Sync). (Completed June 2026)
7. [x] Launch "Lead Generation Impact" 10-part educational series. (Completed June 2026)
8. [x] Deploy "Omnichannel Sales & Social Automation" 10-part educational series. (Completed June 2026)
9. [x] Deploy "Professional Services & Strategic Growth" 10-part educational series. (Completed June 2026)
10. [x] Deploy "The AI-Driven RevOps Revolution" 10-part educational series. (Completed June 2026)
11. [x] Deploy "AI for Hospitality & Service Excellence" 10-part educational series. (Completed June 2026)
12. [x] Deploy "AI for Trade Services & Property Maintenance" 10-part educational series. (Completed June 21, 2026)
13. [x] Deploy "AI for Healthcare & Private Clinics" 10-part educational series. (Completed June 22, 2026)
14. [x] Deploy "AI for Automotive & Dealership Growth" 10-part educational series. (Completed June 23, 2026)
15. [x] Deploy "AI for E-commerce & Digital Retail Mastery" 10-part educational series. (Completed June 24, 2026)
16. [x] Deploy "AI for Recruitment & Talent Acquisition Mastery" 10-part educational series. (Completed June 25, 2026)
17. [x] Deploy "AI for Gyms, Fitness & Wellness Mastery" 10-part educational series. (Completed June 26, 2026)
18. [x] Deploy "AI for Real Estate & Property Agency Mastery" 10-part educational series. (Completed June 27, 2026)
19. [x] Deploy "AI for UK Law Firms & Legal Practice Mastery" 10-part educational series. (Completed July 02, 2026)
20. [x] Deploy "AI for Education & Training Mastery" 10-part educational series. (Completed July 03, 2026)

## Technical Tasks
1. [x] Check sitemap.xml validity in Google Search Console. (July 2026 — sitemap walker bug fixed, now skips `_legacy` private dir)
2. [ ] Optimize script loading order for faster TBT (Total Blocking Time).
3. [x] Perform Documentation Metadata Audit. (July 2026 — completed, see seo-audit-report-2026-07.md)

---

## ⚠️ Strategic Pivot — July 2026

**Effective immediately, the bulk-publishing strategy is paused.**

GSC data (Jun 30 2026) confirms that 203 published blog posts have generated near-zero impressions and approximately 0 indexed pages. Google's "Crawled – currently not indexed" verdict on the blog is a quality signal that more volume will not fix.

**The 10-part series approach produced thin content at high speed. Stop publishing new series until existing content earns indexing.**

See `docs/content-calendar-2026.md` for the revised strategy.

### Technical fixes applied (July 2026)
- [x] 29 × 301 redirects added in `next.config.ts` (clears entire GSC 404 report)
- [x] `robots.ts` updated — `/_next/static/media/` and `/_next/static/chunks/` disallowed (stops font files being crawled)
- [x] `app/sitemap.ts` bug fixed — walker now skips all `_`-prefixed private dirs (was generating sitemap entries for non-existent URLs)
- [x] Blog `[slug]/page.tsx` — `Article` JSON-LD: author changed to `Person` (Shaun), added `image`, `keywords`, `articleSection`, `dateModified`
- [x] Blog `generateMetadata` — added `keywords`, `authors`, OG `images`, full Twitter Card
- [x] Blog post header — category pill added, "ReplyBase Team" → "Shaun, ReplyBase" (E-E-A-T)
- [x] Blog CTA copy — removed false "hundreds of founders" claim

### Actions still required
- [ ] Add `robots: { index: false }` to auth layout in `replybase-development` (clears 7 "Alternate canonical" GSC entries)
- [ ] Delete `/blog/first-post` (test post — thin content signal)
- [ ] Submit all fixed 404 URLs in GSC for revalidation
- [ ] Audit 203 posts — identify top 20 keepers, 301-redirect or delete the rest
- [ ] Add `FAQPage` JSON-LD schema to blog template (AEO signal)
- [ ] Add `featured_image` to top 20 blog posts (enables Google Discover)
- [ ] Publish Pillar 1: WhatsApp Business API UK guide (3,500+ words)
- [ ] Launch Founding 10 Facebook campaign → `replybase.co.uk/founding10`

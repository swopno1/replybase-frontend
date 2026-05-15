# Brand Consistency Report

## Visual Assets
- **Logo:** Consistent across navbar and footer. Uses Next.js `Image` with `priority={true}` for LCP optimization.
- **Iconography:** Consistently uses Lucide-react throughout the site.
- **Imagery:** Minimal use of images. Feature icons are consistent in style (SVG).

## Voice & Tone
- **Tone:** Professional, reliable, forward-looking.
- **Consistency:** High. The messaging across About, Privacy, and Landing pages remains consistent.

## Brand Gaps
- **Identity:** Still lacks a "signature" visual element (e.g., a specific pattern or unique glow effect) that makes ReplyBase instantly recognizable.
- **Color Palette:** High reliance on "default" Tailwind `indigo` and `slate`. Consider defining a unique `brand-primary` in `tailwind.config.ts`.

## Inspection Update (May 2026)
- **Visual Identity (T029):** Re-confirmed the gap in "Signature Glow" implementation. The Hero CTA and Pro pricing card still lack the proprietary gradient system proposed in `docs/proposals_signature-glow/`.
- **Typography (T027):** Standardize heading weights. Use `font-extrabold` for H1 and `font-semibold` for H3. Current implementation is inconsistent across `app/page.tsx` and `app/about/page.tsx`.
- **Theming (T025):** Ensure all pages use `bg-background` instead of hardcoded `bg-slate-900` to maintain design system integrity.

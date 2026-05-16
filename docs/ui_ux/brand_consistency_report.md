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

## Inspection Update - May 24, 2026
- **Visual Identity (T029):** Confirmed "Signature Glow" remains the primary differentiator for premium positioning. Immediate action: Apply glow effects to Hero CTA and the Pro pricing card.
- **Typographic Hierarchy (T027):** Standardize heading weights. H1 must be `font-extrabold` (currently `font-bold` in some areas) and H3 must be `font-semibold`.
- **Thematic Consistency (T025):** Replace all instances of `bg-slate-900` with `bg-background` in `app/about/page.tsx` and `app/blog/page.tsx` to support future theme flexibility.
- **Iconography:** Audit Lucide-react usage for size consistency (standardize on `size={20}` for feature lists).

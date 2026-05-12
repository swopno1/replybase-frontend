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

## Inspection Update (Feb 2024)
- **Visual Identity:** Identified the need for a "Signature Glow" effect (linear gradients + blur) to be applied to primary CTAs and the "Pro" pricing card to distinguish ReplyBase from standard Tailwind-based sites.
- **Typography:** Validated Geist Sans as the primary font, but recommended increasing H1 weight to `font-extrabold` and adjusting H3 to `font-semibold` for better visual hierarchy.

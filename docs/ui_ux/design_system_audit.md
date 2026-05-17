# Design System Audit

## Typography (Audit June 04, 2026)
- **Current Font:** Geist Sans (variable).
- **Assessment:** Excellent modern aesthetic, high readability.
- **Finding (T027):** Inconsistent heading weights. Some H1s use `font-bold` while others use `font-extrabold`. H3s vary between `font-bold` and `font-semibold`.
- **Standard:** Unify on `font-extrabold` for H1 and `font-semibold` for H3.

## Color System (Audit June 04, 2026)
- **Primary:** `slate` (neutrals) and `indigo` (brand).
- **Issue (T025):** Confirmed hardcoded `bg-slate-900` in `app/about/page.tsx` and `app/blog/page.tsx`. This bypasses the CSS variable system.
- **Recommendation:** Standardize on `bg-background` across all page-level containers.

## Spacing & Grid
- **Current:** Standard Tailwind spacing.
- **Issue:** Inconsistent section padding. Some sections use `py-20`, others `py-12`.
- **Recommendation:** Standardize on `py-24` for major landing sections and `py-12` for secondary sections.

## Components (Audit June 04, 2026)
- **Buttons:** Functional. "Signature Glow" (T029) needed for primary Hero CTA to elevate brand perception.
- **Cards:** Consistent `bg-slate-800/50` usage. Needs standard `hover:border-indigo-500/50` across all cards (T016).
- **Iconography (T031):** Lucide icons vary in size from 14px to 24px. Standardize to 20px for all feature list items.

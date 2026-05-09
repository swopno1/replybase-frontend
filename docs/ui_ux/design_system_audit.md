# Design System Audit

## Typography
- **Current:** Geist Sans.
- **Assessment:** Excellent choice.
- **Improvement:** Heading weights are mostly `font-bold`. Consider using `font-extrabold` for H1 and `font-semibold` for H3 to create better contrast.

## Color System
- **Current:** Primarily `slate` and `indigo`.
- **Issue:** Still uses hardcoded classes (e.g., `bg-slate-900`, `border-slate-800`) in components.
- **Recommendation:** Transition to semantic tokens in `globals.css` (e.g., `--card-background`, `--border-subtle`) to allow for easier theme adjustments.

## Spacing & Grid
- **Current:** Standard Tailwind spacing.
- **Issue:** Inconsistent section padding. Some sections use `py-20`, others `py-12`.
- **Recommendation:** Standardize on `py-24` for major landing sections and `py-12` for secondary sections.

## Components
- **Buttons:** Functional but lack "premium" feel. Recommendation: Add subtle inner shadows or a 1px border with a slightly lighter shade than the background.
- **Cards:** Usage of `bg-slate-800/50` and `border-slate-700` is consistent across the features and pricing sections.

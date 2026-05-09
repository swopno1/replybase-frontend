# Design System Audit

## Typography
- **Current:** Geist Sans (inherited from layout).
- **Assessment:** Excellent choice for a modern SaaS.
- **Improvement:** Better defined font-weight scales for headings.

## Color System
- **Current:** Primarily `slate` and `indigo`.
- **Issue:** High reliance on hardcoded `slate-*` classes.
- **Recommendation:** Map these to semantic tokens like `--brand-surface`, `--brand-text-muted`.

## Spacing & Grid
- **Current:** Standard Tailwind spacing.
- **Assessment:** Generally consistent but lacks a "rhythm" in section padding (e.g., some py-12 vs py-20).
- **Recommendation:** Define standard section spacing tokens (e.g., `section-padding-y`).

## Components
- **Buttons:** Need more "premium" feel (e.g., subtle borders, internal glows).
- **Cards:** Border colors (`border-slate-800`) are slightly too harsh in some areas.

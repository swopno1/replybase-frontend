# Accessibility Audit

## Color Contrast
- **Assessment:** Generally good due to dark theme. Slate-500 on Slate-900 combinations were checked and found to be borderline (approx 4.0:1); recommended to move to Slate-400 for better AA compliance.
- **Task:** Update muted text from `text-slate-500` to `text-slate-400` in content-heavy areas.

## Semantic Structure
- **Assessment:** Good use of `header`, `main`, `footer`, and `section` tags.
- **Status:** Heading hierarchy (H1 -> H2 -> H3) is strictly followed on the homepage. Individual blog posts use `<article>` tags as required.

## Interactive Elements
- **Focus States:** Basic browser defaults are active. Recommendation: Implement custom `ring-indigo-500` focus states for all buttons and inputs.
- **ARIA Labels:**
  - **Issue:** The mobile menu toggle in `LandingNavbar.tsx` lacks an `aria-label` and `aria-expanded` state.
  - **Issue:** Newsletter subscription inputs in `NewsletterSubscribe.tsx` lack associated labels or `aria-label`.
- **Navigation:** Skip-to-content link is currently missing and should be added for keyboard users.

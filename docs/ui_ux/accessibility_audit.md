# Accessibility Audit

## Color Contrast
- **Assessment:** Generally good due to dark theme. Slate-500 on Slate-900 combinations (used in captions and descriptions) are borderline (approx 4.0:1); recommended to move to Slate-400 for better AA compliance.
- **Task:** Update muted text from `text-slate-500` to `text-slate-400` in content-heavy areas.

## Semantic Structure
- **Assessment:** Good use of `header`, `main`, `footer`, and `section` tags.
- **Status:** Heading hierarchy (H1 -> H2 -> H3) is strictly followed on the homepage. Individual blog posts use `<article>` tags as required.

## Interactive Elements
- **Focus States:** Basic browser defaults are active. Recommendation: Implement custom `ring-indigo-500` focus states for all buttons and inputs.
- **ARIA Labels:**
  - **Issue:** The mobile menu toggle in `LandingNavbar.tsx` lacks `aria-label`, `aria-expanded`, and `aria-controls` attributes.
    - *Required:* `aria-label="Toggle menu"`, `aria-expanded={isOpen}`, `aria-controls="mobile-menu"`.
  - **Issue:** Newsletter subscription inputs in `NewsletterSubscribe.tsx` lack associated `<label>` tags or `aria-label`.
    - *Required:* `aria-label="Email address for newsletter"` on the input.
    - *Required:* The "Subscribe" button needs a more descriptive label when in "loading" state (e.g., "Subscribing...").
- **Navigation:** Skip-to-content link is currently missing and should be added for keyboard users to bypass the navbar.

## Feb 2024 Additions
- **ARIA Verification:** Confirmed that `LandingNavbar.tsx` needs `aria-expanded` and `aria-label` for the mobile toggle.
- **Form Feedback:** The `NewsletterSubscribe` component needs `aria-live="polite"` on the status message to inform screen reader users of success/error states.

## Forms & Inputs
- **Contact Form:** Needs better error state accessibility (e.g., `aria-invalid`, `aria-describedby` for error messages).
- **Newsletter:** Ensure the success/error message is announced by screen readers using `role="alert"` or `aria-live="polite"`.

# ReplyBase Frontend & Growth Tasks

This document tracks all frontend, UI/UX, brand, and growth-related tasks for the ReplyBase marketing website.

| Task # | Priority | Status | Category | Issue | UX/Business Impact | Objective |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| T001 | HIGH | COMPLETED | UI/UX | Hardcoded color tokens | Design inconsistency | Transition to Tailwind 4 theme variables |
| T002 | MEDIUM | PENDING | BRAND | Generic SaaS perception | Weak positioning | Enhance visual storytelling with AI-native imagery |
| T003 | HIGH | PENDING | CONVERSION | Low CTA contrast | Reduced conversion | Improve button visibility and hover interactions |
| T004 | MEDIUM | COMPLETED | TECH | Existing linting errors | Code quality/Build stability | Fix unescaped entities and unused vars in docs and about pages |
| T005 | HIGH | PENDING | ACCESSIBILITY | Missing ARIA attributes | WCAG Non-compliance | Add aria-label, aria-expanded, and aria-live to Navbar/Newsletter |
| T006 | HIGH | PENDING | CONVERSION | Lack of Social Proof | Low trust | Add grayscale "Trusted By" logo bar below Hero section |
| T007 | HIGH | PENDING | UI/UX | Abstract product mockups | Weak product value | Replace CSS-box mockups with high-fidelity Dashboard Preview |
| T008 | HIGH | PENDING | MOBILE | Unusable mobile pricing | CRITICAL Conversion leak | Redesign pricing as vertical card stack for mobile |
| T009 | MEDIUM | PENDING | MOTION | Abrupt mobile menu | Low perceived quality | Implement staggered Framer Motion transitions for mobile menu |
| T010 | HIGH | PENDING | BRAND | Missing "Signature Glow" | Generic brand feel | Implement saturation-boosted indigo and mesh gradients |
| T011 | MEDIUM | PENDING | MOBILE | Small touch targets | Ergonomic friction | Increase footer/menu link hit areas to min 44x44px |
| T012 | HIGH | PENDING | ACCESSIBILITY | Borderline text contrast | AA Compliance | Shift slate-500 text to slate-400 globally |
| T013 | MEDIUM | PENDING | ACCESSIBILITY | No keyboard shortcuts | Poor accessibility | Implement "Skip to Content" link for keyboard users |
| T014 | MEDIUM | PENDING | BRAND | Static node builder | Generic UI | Implement draw-path animations for flow builder node connections |
| T015 | LOW | PENDING | UI/UX | Inconsistent scroll rhythm | Content fatigue | Audit and standardize vertical spacing (py-12 vs py-20) |
| T016 | HIGH | IN_PROGRESS | UI/UX | Inconsistent radii | Design fragmentation | Spacing & Radius Audit; unify on Shadcn/UI standards |
| T017 | MEDIUM | PENDING | SEO | Basic Schema.org | AI Search Discovery | Expand JSON-LD with GBP currency, Offers, and FAQ schema |
| T018 | HIGH | PENDING | GROWTH | Missing AEO Content | AI Discovery gap | Implement high-intent FAQ section optimized for LLM extraction |
| T019 | MEDIUM | PENDING | BRAND | Flat surfaces | Lack of depth | Create Tailwind glassmorphism utilities (backdrop-blur + opacity) |
| T020 | HIGH | PENDING | SEO/AEO | Missing Tech Fact Blocks | AI Discoverability | Implement JSON-like specification tables for AI crawlers |
| T021 | HIGH | PENDING | CONVERSION | Repeating trial text | Cognitive load | Consolidate risk-reversal messaging in pricing section |
| T022 | MEDIUM | PENDING | BRAND | Non-vibrant Indigo | Brand soul | Transition to custom high-saturation "ReplyBase Indigo" |
| T023 | MEDIUM | PENDING | UI/UX | Radius mismatch in Newsletter | Design inconsistency | Standardize Newsletter input/button radii to match Shadcn defaults |

---

### T024: WhatsApp Status Conflict
- **Task Number:** T024
- **Priority:** HIGH
- **Status:** PENDING
- **Category:** CONVERSION
- **Issue:** Messaging inconsistency between the "How It Works" section (WhatsApp listed as "Coming Soon") and the "Channels" section (WhatsApp listed as "Beta").
- **UX/Business Impact:** Erodes user trust and creates confusion about current product capabilities.
- **Objective:** Align the status of WhatsApp across all landing page sections.
- **Detailed Instructions:** Update `app/page.tsx`. In the "How It Works" step 1, change the mention from "WhatsApp and Telegram coming soon" to reflect the current live/beta status shown in the "Channels" grid.
- **Expected Deliverables:** Consistent messaging for WhatsApp across the entire landing page.
- **Conversion Impact:** HIGH (Trust building)
- **Brand Impact:** MEDIUM (Professionalism)
- **Notes:** Identified during March 2024 deep inspection.

---

### T025: Hardcoded bg-slate-900 Theming
- **Task Number:** T025
- **Priority:** MEDIUM
- **Status:** PENDING
- **Category:** UI/UX
- **Issue:** Inconsistent usage of theme variables. `app/about/page.tsx` and `app/blog/page.tsx` use hardcoded `bg-slate-900` instead of the semantic `bg-background` token.
- **UX/Business Impact:** Increases maintenance overhead and creates subtle visual inconsistencies if the background variable is updated in `globals.css`.
- **Objective:** Standardize on `bg-background` for all page-level containers.
- **Detailed Instructions:** Audit `app/about/page.tsx` and `app/blog/page.tsx`. Replace `className="bg-slate-900"` with `className="bg-background"`.
- **Expected Deliverables:** Page containers correctly using Tailwind theme variables.
- **Conversion Impact:** LOW
- **Brand Impact:** MEDIUM (Consistency)
- **Notes:** Essential for long-term design system health.

---

### T026: 150+ Technical Linting Errors
- **Task Number:** T026
- **Priority:** MEDIUM
- **Status:** PENDING
- **Category:** TECH
- **Issue:** The project currently has 91 errors and 59 warnings during `npm run lint`, primarily related to unescaped entities and unused imports in the `app/docs` route.
- **UX/Business Impact:** Reduced code quality, potential build instability, and hidden regressions in documentation pages.
- **Objective:** Achieve a zero-lint-error state for the marketing site.
- **Detailed Instructions:** Systematically fix unescaped entities (replace `'` with `&apos;`, etc.) and remove unused imports/variables in the `app/docs` directory.
- **Expected Deliverables:** Clean `npm run lint` output.
- **Conversion Impact:** LOW
- **Brand Impact:** LOW
- **Notes:** Identified as part of the technical health check during frontend inspection.

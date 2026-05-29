# UI/UX Specific Tasks

This is a refined view of UI/UX and Brand tasks from the master TASKS.md file.

| Task # | Status | Priority | Issue | Objective | Expected Deliverable |
| :--- | :--- | :--- | :--- | :--- | :--- |
| UX-001 | IN_PROGRESS | HIGH | Inconsistent radii | Unified border-radius | Radius & Spacing Audit (T016) |
| UX-002 | PENDING | HIGH | Missing ARIA labels | WCAG Compliance | ARIA updates for Navbar/Newsletter (T005) |
| UX-003 | PENDING | HIGH | Lack of social proof | Increase Trust | Logo bar component (T006) |
| UX-004 | PENDING | HIGH | Abstract mockups | Increase Product Maturity | High-fidelity Dashboard Preview (T007) |
| UX-005 | PENDING | HIGH | Mobile pricing leak | Improve Conversion | Vertical Pricing Card stack (T008) |
| UX-006 | PENDING | HIGH | "Signature Glow" | Premium Positioning | Custom Indigo + Gradient system (T010) |
| UX-011 | PENDING | MEDIUM | Abrupt mobile menu | Premium feel | Staggered menu animations (T009) |
| UX-012 | PENDING | HIGH | Muted text contrast | AA Compliance | Slate-500 to Slate-400 shift (T012) |
| UX-013 | PENDING | MEDIUM | Small touch targets | Ergonomics | 44x44px link padding update (T011) |
| UX-014 | PENDING | MEDIUM | Static flow builder | Motion Identity | Draw-path node connections (T014) |
| UX-015 | PENDING | LOW | Keyboard accessibility | WCAG Compliance | Skip-to-content link (T013) |
| UX-016 | PENDING | MEDIUM | Flat surfaces | Visual Depth | Glassmorphism utility classes (T019) |
| UX-017 | PENDING | LOW | Scroll rhythm | Content Pacing | Vertical spacing standardization (T015) |
| UX-021 | PENDING | HIGH | Repeating trial text | Reduced load | Refined Pricing Risk-Reversal (T021) |
| UX-022 | PENDING | MEDIUM | Newsletter radius mismatch | Design Consistency | Standardized radii for newsletter elements (T023) |
| UX-025 | PENDING | MEDIUM | No "Skip to Content" | Keyboard Accessibility | Skip link implementation (T028) |
| UX-026 | PENDING | HIGH | Generic Hero CTA | Brand Identity | Signature Glow for Hero CTA (T029) |
| UX-027 | PENDING | MEDIUM | Inconsistent H1/H3 weights | Typographic Hierarchy | Standardized heading weights (T027) |
| UX-028 | PENDING | HIGH | Repetitive trial text | Cognitive Load | Consolidate Pricing Risk-Reversal (T030) |
| UX-029 | PENDING | MEDIUM | Icon size inconsistency | Visual Polish | Unified icon sizing (T031) |
| UX-030 | IN_PROGRESS | HIGH | Missing Hero Authority | Trust Building | Hero trust badge (T032) |
| UX-031 | PENDING | HIGH | No Pro Plan highlight | Decision Flow | Pro tier visual emphasis (T033) |
| UX-032 | PENDING | MEDIUM | Mobile thumb friction | Ergonomics | Ergonomic menu trigger (T034) |
| UX-033 | PENDING | LOW | Abrupt content load | Motion Perception | High-fidelity skeletons (T035) |
| UX-034 | PENDING | MEDIUM | Action weight variance | Brand Consistency | Semibold CTA standardization (T036) |
| UX-035 | PENDING | MEDIUM | Silent form feedback | Inclusivity | Aria-describedby for forms (T037) |
| UX-036 | IN_PROGRESS | MEDIUM | Final CTA Trust Leak | Funnel Stability | Conversion Trust Anchor (T046) |
| UX-037 | PENDING | LOW | Content length fatigue | Premium UX | Reading Progress Indicator (T047) |

---

### UX-023: WhatsApp Status Mismatch
- **Task Number:** UX-023 (T024)
- **Priority:** HIGH
- **Status:** IN_PROGRESS
- **Issue:** Contradictory information regarding WhatsApp availability across landing page sections (T024).
- **Objective:** Align WhatsApp status to "Beta" globally to maintain trust.
- **Expected Deliverables:** Unified messaging in `app/page.tsx`.
- **Notes:** Confirmed as CRITICAL trust leak June 2026. Confirmed June 12, 2026. Confirmed June 14, 2026. Confirmed June 16, 2026.

---

### UX-024: Hardcoded Page Backgrounds
- **Task Number:** UX-024 (T025)
- **Priority:** MEDIUM
- **Status:** PENDING
- **Issue:** `app/about/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, and `app/privacy/page.tsx` use hardcoded `bg-slate-900` instead of `bg-background` (T025).
- **Objective:** Ensure all pages respect the global design tokens for consistency.
- **Expected Deliverables:** Pages updated to use the semantic `bg-background` class.
- **Notes:** Confirmed June 2026 audit. Confirmed June 12, 2026. Confirmed June 14, 2026. Confirmed June 16, 2026 audit of `about` and `privacy` pages.

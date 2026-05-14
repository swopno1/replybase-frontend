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

---

### UX-023: WhatsApp Status Mismatch
- **Task Number:** UX-023
- **Priority:** HIGH
- **Status:** PENDING
- **Issue:** Contradictory information regarding WhatsApp availability across landing page sections (T024).
- **Objective:** Align WhatsApp status to "Beta" or "Live" globally to maintain trust.
- **Expected Deliverables:** Unified messaging in `app/page.tsx`.

---

### UX-024: Hardcoded Page Backgrounds
- **Task Number:** UX-024
- **Priority:** MEDIUM
- **Status:** PENDING
- **Issue:** `app/about/page.tsx` and `app/blog/page.tsx` use hardcoded `bg-slate-900` instead of `bg-background` (T025).
- **Objective:** Ensure all pages respect the global design tokens for consistency.
- **Expected Deliverables:** Pages updated to use the semantic `bg-background` class.

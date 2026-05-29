# Proposal: Unified Overlay & Surface Architecture

## Executive Summary
**Objective:** Eliminate visual fragmentation and "layer noise" by standardizing backdrop overlays and card surface opacities across the ReplyBase marketing site.
**Scope:** All modals, mobile menus, and feature/blog/docs cards.
**Impact:** Enhanced brand polish, improved system integrity, and reduced cognitive discord.

## Problem Analysis
Currently, ReplyBase utilizes multiple, slightly varying opacity levels for similar UI components:
1.  **Backdrop Drift (T051):** `FoundingPromoModal.tsx` uses `bg-slate-950/60`, while proposed mobile menu backdrops vary between `bg-slate-900/80` and other variations. This lack of a unified "Overlay Layer" makes the platform feel less cohesive.
2.  **Surface Fragmentation (T052):** Feature cards on the Landing Page use `bg-slate-800/40`, while cards in the Blog and Documentation use `bg-slate-800/50`. This creates a subtle visual inconsistency as users move through the site.

## Proposed Solution

### Phase 1: Standardized Backdrop Overlay (T051)
-   **Action:** Define a single semantic token for all interruptive overlays.
-   **Standard:** `bg-slate-950/75` with `backdrop-blur-sm`.
-   **Goal:** Provide a consistent, high-contrast visual barrier that directs attention to the active foreground element.

### Phase 2: Unified Card Surface (T052)
-   **Action:** Audit all card-based components and unify their background opacities.
-   **Standard:** `bg-slate-800/45`. This value is the mathematical midpoint between the current 40% and 50% implementations, providing a balanced visual weight.
-   **Goal:** Create a consistent "Surface Language" across all routes.

## Implementation Phases
1.  **CSS Variable Update:** Add `--backdrop-overlay: color-mix(in srgb, var(--color-slate-950), transparent 25%)` (or equivalent Tailwind 4 config).
2.  **Modal Update:** Refactor `FoundingPromoModal.tsx` to use the standardized backdrop.
3.  **Navbar Update:** Ensure the `LandingNavbar.tsx` mobile menu implementation uses the standardized backdrop.
4.  **Global Card Audit:** Update `app/page.tsx`, `app/blog/page.tsx`, and `app/docs/page.tsx` to use `bg-slate-800/45`.

## AI-Readable Execution Prompt
"Standardize the visual surface architecture of the site. 1. In `globals.css`, define a utility class `.backdrop-standard { @apply bg-slate-950/75 backdrop-blur-sm; }`. 2. Apply this class to the backdrop in `FoundingPromoModal.tsx` and the mobile menu container in `LandingNavbar.tsx`. 3. Perform a global search and replace for `bg-slate-800/40`, `bg-slate-800/50`, and `bg-slate-800/60` within card containers, unifying them to `bg-slate-800/45` to ensure surface consistency."

## Inspection Update - June 16, 2026 (Current Daily Inspection)
- **Surface Fragmentation (HIGH):** Audit of `ContactForm.tsx` (50%) and `app/page.tsx` (40%) confirms inconsistent card background opacities (T052).
- **Overlay Inconsistency (HIGH):** `FoundingPromoModal.tsx` confirmed to use `bg-slate-950/60`, deviating from the proposed 75% standard for interruptive overlays (T051).
- **Recommendation:** Implement a unified CSS variable for surfaces and overlays to eliminate future drift.

# Motion System Report

## Current State
- **Implementation:** Basic fade-in animations (`motion-safe:animate-fade-in`) applied to hero and section headings.
- **Assessment:** Functional but feels "templated."

## Premium Motion Vocabulary
1. **Scroll-Triggered Reveals:** Implement staggered fades for feature cards to guide the eye.
   - *Target:* Core Features Section. Cards should slide up slightly while fading in.
2. **Hover Interactions:** Add `hover:scale-[1.02]` and `transition-transform` to feature and pricing cards for tactile feedback.
   - *Target:* Pricing cards and Feature cards.
3. **Micro-animations:** The mobile menu transition is abrupt.
   - *Required:* Staggered entry for menu links (e.g., 50ms delay per item).
4. **Attention Guiding:** Use a subtle "pulse" or "shimmer" on the primary CTA in the hero section every 10 seconds to gently draw the eye.

## Guidelines
- **Performance:** All current animations are GPU-friendly (opacity, transform).
- **Accessibility:** Continued use of `motion-safe` prefix is mandatory to respect user preferences. Avoid any motion that exceeds 200ms for navigation elements.

## Feb 2024 Inspection Notes
- **Identified Opportunity:** The "Visual Builder" mockups on the homepage currently use `animate-pulse`. This should be replaced with more "intelligent" motion (e.g., node connections appearing via drawing path animations) to feel more "AI-native."
- **Hover States:** Unified card hover interactions (`hover:shadow-indigo-500/10`) are needed across the board.

## Inspection Update - June 08, 2026
- **Interaction Feedback (MEDIUM):** Pricing table row hover (T039) confirmed as a significant gap in desktop interactivity. Standardizing table interactions is a key design system goal.
- **Mobile Interaction (MEDIUM):** Mobile menu touch feedback (T011) is currently absent, leading to a "muted" tactile experience. Implementing `active:bg-slate-800` for mobile links is recommended.

## Inspection Update - June 12, 2026
- **Platform Intelligence (MEDIUM):** Verified that feature grids and channel highlights lack entry rhythm (T042). Static loading reduces the perceived "AI-native" intelligence of the platform.
- **Tactile Feedback (MEDIUM):** Pricing table interactions remain static on desktop (T039). Introducing row hover states is a priority for aiding user feature comparison.

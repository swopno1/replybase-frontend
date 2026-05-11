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

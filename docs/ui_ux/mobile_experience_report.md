# Mobile Experience Report

## Overall Impression
The site uses a responsive layout that scales well. The mobile menu is functional but lacks motion refinement.

## Areas for Improvement
- **Touch Targets:** Links in the footer (`LandingFooter.tsx`) and the "Credits" section are small (below 44x44px). The close (X) icon in the mobile menu should have a larger hit area for ergonomic accessibility.
- **Mobile Menu:** Simple list implementation in `LandingNavbar.tsx`.
  - **Issue:** Lacks `aria-label` for accessibility.
  - **UX:** The menu covers content abruptly. A staggered fade-in for links using Framer Motion or CSS transitions would feel more premium.
- **Pricing on Mobile:**
  - **Issue:** The large table in `app/page.tsx` (line 514) is horizontally scrollable but difficult to compare plans because the first column (features) disappears on scroll.
  - **UX Friction:** Users lose track of which feature they are looking at while scrolling right to see the Business plan.
  - **Recommendation:** Switch to a vertical card stack for screens < 768px. Implement a "Compare All" toggle that reveals the full table if needed, but default to cards.
- **Hero Section:** On small devices, the "No credit card required" subtext is quite small. Consider increasing contrast (switching from `text-slate-500` to `text-slate-400`).

## Optimization Plan
1. **Sticky Header:** The header is sticky, which is good for navigation. Ensure the blur effect doesn't cause lag on lower-end mobile devices.
2. **CTA Visibility:** The "Get Started" button is prominent in the mobile menu. Consider a "sticky footer" CTA for mobile users once they scroll past the Hero.
3. **Ergonomics:** Ensure all buttons have at least 12px of spacing between them to prevent accidental taps, especially in the footer.
4. **Motion Refinement:** The mobile menu should implement a staggered entry for its links to improve perceived performance and quality.
5. **Vertical Pricing:** Priority task to replace the horizontal table with a vertical card stack on mobile to reduce decision fatigue and improve legibility.

# Proposal: Scroll-Driven Narrative & Intelligence Motion

## Executive Summary
**Objective:** Transform the marketing site from a static document into an interactive narrative.
**Key Mechanism:** Scroll-linked animations using Framer Motion and CSS `scroll-timeline`.
**Strategic Impact:** Increase session duration, improve "Perceived Platform Intelligence," and guide the user's focus through the value proposition.

---

## 1. Problem Analysis
The current ReplyBase marketing site uses "Fade-In" animations that trigger once on page load. While professional, this approach is "one-and-done." As the user scrolls through long sections (like the Features or How It Works grids), the interface feels increasingly static.
- **Cognitive Load:** Without motion to guide the eye, users may skim past critical value propositions.
- **Brand Perception:** Modern "AI-Native" brands (e.g., Linear, OpenAI, Perplexity) use motion that responds to user scroll, creating a sense of "active intelligence" and premium craftsmanship.

---

## 2. Proposed Solution: The "ReplyBase Narrative Motion"
Implement a tiered scroll-driven interaction system that rewards the act of scrolling.

### Tier 1: Staggered Section Reveals
Instead of a single fade-in, section children (cards, list items) should reveal with a staggered delay based on their viewport entry.
- **Implementation:** Framer Motion `variants` with `viewport={{ once: true, amount: 0.3 }}`.

### Tier 2: Scroll-Linked Property Transitions
Specific high-value assets (like the Visual Builder Mockup) should transition properties (opacity, scale, path length) in direct relation to the scroll progress.
- **Example:** The connection lines in the Flow Builder should "draw" themselves as the user scrolls into the section.

### Tier 3: Sticky Narrative Highlights
In the "How It Works" section, use a sticky-scroll pattern where the image/mockup remains fixed on the right while the steps scroll on the left, with the mockup updating to reflect each step.

---

## 3. UX & Business Impact
- **Engagement:** Projected 25% increase in "Scroll Depth" as users are curious to see the next interaction.
- **Clarity:** Motion guides the eye to the most important content at the right time.
- **Trust:** A high-fidelity, motion-rich site signals a high-fidelity, mature product.

---

## 4. Implementation Phases

### Phase 1: Global Staggered Fades
Update the `Features` and `Channels` grids to use staggered entry animations. This is a low-risk, high-reward first step.

### Phase 2: Interactive Flow Builder
Enhance the "Visual Conversation Builder" section. As the user scrolls, the mockup should animate from a blank canvas to a completed flow, simulating the ease of building.

### Phase 3: Mobile Motion Optimization
Refine these animations for mobile to ensure they don't impact performance. Use simpler transitions (opacity only) if high-frequency scroll events cause lag.

---

## 5. AI-Readable Execution Prompts
> "Wrap the feature cards in `app/page.tsx` with a Framer Motion `motion.div`. Use `whileInView` with a staggered `staggerChildren` transition to reveal each card as it enters the viewport."
>
> "Implement a `useScroll` and `useTransform` hook from Framer Motion to map the scroll position of the 'How It Works' section to the `pathLength` of the node connection SVGs."
>
> "Use `layout` and `layoutId` props for the 'Pro' plan pricing card to create a smooth expansion effect when the user scrolls it into the center of the viewport on mobile."

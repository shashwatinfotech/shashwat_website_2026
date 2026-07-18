import type { Variants } from "framer-motion";
import { easing } from "@/constants/design-tokens";

/**
 * Blur Reveal — the page-transition / scroll-reveal treatment specified
 * in DESIGN.md: opacity 0 + blur 10px -> opacity 1 + blur 0.
 */
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easing.mechanical },
  },
};

/**
 * Staggered container for groups of blur-reveal children (e.g. Bento grid
 * cells entering in sequence rather than all at once).
 */
export function staggerContainer(staggerChildren = 0.08): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren },
    },
  };
}

/** Standard upward fade used for smaller UI elements (badges, list rows). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easing.mechanical },
  },
};

/**
 * Magnetic hover — subtle scale(1.02) lift for clickable cards, per
 * DESIGN.md Elevation & Depth > Interactions.
 */
export const magneticHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.2, ease: easing.mechanical },
};

/** Shared viewport config so scroll-reveals fire once, slightly early. */
export const revealViewport = { once: true, margin: "-80px" };

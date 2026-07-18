"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the user has requested reduced motion at the OS level.
 * Components should use this to skip non-essential animation, on top of
 * the global CSS `prefers-reduced-motion` rules in globals.css.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(query.matches);

    const handler = (event: MediaQueryListEvent) =>
      setPrefersReduced(event.matches);

    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}

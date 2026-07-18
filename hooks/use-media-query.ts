"use client";

import { useEffect, useState } from "react";

/**
 * Subscribes to a CSS media query string, e.g. useMediaQuery("(max-width: 767px)").
 * Mirrors the breakpoints in DESIGN.md: mobile <767px, tablet 768–1199px,
 * desktop 1200px+.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export const breakpoints = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1199px)",
  desktop: "(min-width: 1200px)",
} as const;

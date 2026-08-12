"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
 const glowRef = useRef<HTMLDivElement>(null);

const mouseX = useMotionValue(-500);
const mouseY = useMotionValue(-500);

const x = useSpring(mouseX, {
  stiffness: 120,
  damping: 20,
  mass: 0.5,
});

const y = useSpring(mouseY, {
  stiffness: 120,
  damping: 20,
  mass: 0.5,
});

useEffect(() => {
  let frame = 0;

  const move = (e: MouseEvent) => {
    cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      mouseX.set(e.clientX - 220);
      mouseY.set(e.clientY - 220);
    });
  };

  window.addEventListener("mousemove", move, { passive: true });

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("mousemove", move);
  };
}, [mouseX, mouseY]);

  return (
  <motion.div
    ref={glowRef}
    aria-hidden="true"
    style={{
      x,
      y,
      background:
        "radial-gradient(circle, rgba(26,122,116,0.45) 0%, rgba(26,122,116,0.12) 35%, transparent 75%)",
    }}
    className="
      pointer-events-none
      fixed
      left-0
      top-0
      z-0
      h-[440px]
      w-[440px]
      rounded-full
      blur-[120px]
      opacity-40
      will-change-transform
    "
  />
)};
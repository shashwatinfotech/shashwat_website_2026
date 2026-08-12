"use client";

import { motion } from "framer-motion";

interface MaskRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "left" | "right" | "top";
}

export function MaskReveal({ children, delay = 0, className = "", direction = "left" }: MaskRevealProps) {
  const clipFrom =
    direction === "left"
      ? "inset(0 100% 0 0)"
      : direction === "right"
      ? "inset(0 0 0 100%)"
      : "inset(100% 0 0 0)";

  return (
    <motion.div
      initial={{ clipPath: clipFrom, opacity: 0.4, filter: "blur(6px)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

export function AnimatedGridBg() {
  return (
    <>
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,118,110,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(15,118,110,0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-container/15 blur-[120px]" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
    </>
  );
}
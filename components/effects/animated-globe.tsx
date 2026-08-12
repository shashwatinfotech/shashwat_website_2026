"use client";
import { motion } from "framer-motion";

const dots = [
  { top: "15%", left: "50%", delay: 0 },
  { top: "35%", left: "80%", delay: 0.3 },
  { top: "70%", left: "75%", delay: 0.6 },
  { top: "80%", left: "30%", delay: 0.9 },
  { top: "50%", left: "10%", delay: 1.2 },
  { top: "25%", left: "25%", delay: 1.5 },
];

export function AnimatedGlobe() {
  return (
    <div className="relative flex h-[380px] w-full items-center justify-center overflow-hidden">
      {/* glow base */}
      <div
        aria-hidden
        className="absolute h-64 w-64 rounded-full bg-primary-container opacity-10 blur-3xl"
      />

      {/* rotating rings */}
      <motion.div
        className="absolute h-72 w-72 rounded-full border border-primary-container/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-56 w-56 rounded-full border border-dashed border-accent/40"
        style={{ rotateX: 60 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-40 w-40 rounded-full border border-primary-container/50"
        style={{ rotateX: 70 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* core sphere */}
      <div className="absolute h-28 w-28 rounded-full bg-gradient-to-br from-primary-container to-primary shadow-magnetic-hover" />

      {/* floating connection dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute h-2.5 w-2.5 rounded-full bg-accent"
          style={{ top: dot.top, left: dot.left }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
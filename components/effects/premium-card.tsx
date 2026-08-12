"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
}

export function PremiumCard({ children, className = "" }: PremiumCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRX = useSpring(rotateX, { stiffness: 150, damping: 18 });
  const smoothRY = useSpring(rotateY, { stiffness: 150, damping: 18 });

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 10);
    rotateX.set(-(py - 0.5) * 10);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const glowBackground = useTransform([glowX, glowY], ([x, y]) =>
    `radial-gradient(180px circle at ${x}% ${y}%, rgba(34,211,238,0.18), transparent 70%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: smoothRX, rotateY: smoothRY, transformPerspective: 800 }}
      className={`group relative rounded-bento border border-border bg-white/60 backdrop-blur-xl p-6 transition-shadow duration-300 hover:shadow-magnetic-hover ${className}`}
    >
      {/* Animated border trace — conic gradient ring that rotates on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-bento opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, #22D3EE 8%, transparent 20%, transparent 100%)",
          maskImage: "linear-gradient(#fff 0 0)",
          WebkitMaskImage:
            "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-bento"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, #22D3EE 6%, transparent 16%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-[1px] rounded-bento bg-white/60 backdrop-blur-xl" />
      </div>

      {/* Cursor-follow glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-bento opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />

      {/* Light sweep — sweeps across on hover */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-bento">
        <motion.div
          className="absolute top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100"
          animate={{ left: ["-40%", "140%"] }}
          transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
        />
      </div>

      <div className="relative" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
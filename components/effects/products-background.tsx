"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo } from "react";

const floatingWords = [
  "Predictive Engine", "Zero-Trust", "Data Lake", "Real-Time Sync",
  "SOC2 Compliant", "Multi-Cloud", "AES-256", "Vector Database",
  "99.4% Accuracy", "200+ Integrations", "Auto-Scale", "RAG Ready",
];

export function ProductsBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const spotlightX = useTransform(smoothX, (v) => `${v}px`);
  const spotlightY = useTransform(smoothY, (v) => `${v}px`);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const words = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        text: floatingWords[i % floatingWords.length],
        left: `${(i * 41) % 100}%`,
        duration: 18 + (i % 6) * 3,
        delay: (i % 8) * 1.5,
        size: i % 3 === 0 ? "text-sm" : "text-xs",
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ left: spotlightX, top: spotlightY }}
        className="absolute -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary-container/8 blur-[120px]"
      />

      <motion.div
        animate={{ x: ["-15%", "15%", "-15%"], y: ["-10%", "15%", "-10%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[15%] h-[550px] w-[550px] rounded-full bg-accent/10 blur-[150px]"
      />
      <motion.div
        animate={{ x: ["15%", "-10%", "15%"], y: ["10%", "-15%", "10%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] right-[10%] h-[600px] w-[600px] rounded-full bg-primary-container/10 blur-[160px]"
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,118,110,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(15,118,110,0.14) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {words.map((w) => (
        <motion.div
          key={w.id}
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: [0, 0.45, 0], y: ["100vh", "-15vh"] }}
          transition={{ duration: w.duration, repeat: Infinity, delay: w.delay, ease: "linear" }}
          className={`absolute font-mono ${w.size} text-primary-container/25 whitespace-nowrap`}
          style={{ left: w.left }}
        >
          {w.text}
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
    </div>
  );
}
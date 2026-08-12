"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useRef, useEffect, useState } from "react";

const codeLines = [
  "const build = async () => {",
  "  await deploy(product);",
  "  return scale(∞);",
  "};",
];

function TypingLine({ text, delay }: { text: string; delay: number }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 35);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);

  return (
    <div className="text-[#2563EB]">
      {shown}
      <span className="animate-pulse">▌</span>
    </div>
  );
}

function StatBadge({
  label,
  value,
  className,
  delay,
}: {
  label: string;
  value: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay, duration: 0.6 },
        scale: { delay, duration: 0.6 },
        y: { delay: delay + 0.6, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] backdrop-blur-xl px-5 py-3 shadow-[0_0_30px_rgba(30,58,138,0.15)] ${className}`}
    >
      <p className="text-2xl font-semibold text-[#0F172A]">{value}</p>
      <p className="text-[11px] uppercase tracking-widest text-[#64748B]">{label}</p>
    </motion.div>
  );
}

const titleWords = ["We", "build", "digital", "systems", "that", "shape", "tomorrow."];

function MagneticButton({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  function move(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  }

  function leave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      style={{ x: springX, y: springY }}
      onMouseMove={move}
      onMouseLeave={leave}
      className="relative rounded-full px-8 py-4 bg-[#1E3A8A] text-white font-medium overflow-hidden"
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-[#2563EB] rounded-full"
      />
    </motion.button>
  );
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={container}
      className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-[0.4em] uppercase text-[#2563EB] mb-8 font-mono"
          >
            ABOUT / ENGINEERING
          </motion.p>

          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[0.9] text-[#0F172A]">
            {titleWords.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-4 text-[#0F172A]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 max-w-xl text-lg text-[#334155] leading-relaxed"
          >
            We engineer scalable products,
            intelligent platforms and
            next-generation technology
            for companies building the future.
          </motion.p>

          <div className="mt-12 flex gap-5">
            <Link href="/services">
              <MagneticButton>Start Building</MagneticButton>
            </Link>

            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-[#E2E8F0] px-8 py-4 text-[#0F172A]"
              >
                Explore Work
              </motion.button>
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#1E3A8A]/15 blur-[100px] rounded-full" />

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] backdrop-blur-xl overflow-hidden shadow-[0_0_80px_rgba(30,58,138,0.15)]"
          >
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-4 text-xs text-neutral-500 font-mono">build.ts</span>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <TypingLine key={line} text={line} delay={800 + i * 500} />
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>status: <span className="text-[#2563EB]">online</span></span>
              <span>v2.0.26</span>
            </div>
          </motion.div>

          <StatBadge label="Projects Shipped" value="150+" className="-left-10 top-10" delay={1.4} />
          <StatBadge label="Engineers" value="50+" className="-right-8 top-1/3" delay={1.7} />
          <StatBadge label="Uptime" value="99.9%" className="-left-6 bottom-8" delay={2} />
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  {
    text: "They didn't just write code — they understood how our business actually works before building anything.",
  },
  {
    text: "Fast, clear communication and a team that actually ships what they promise, on time.",
    
  },
  {
    text: "Exactly what we needed — custom-built software instead of a generic template stretched to fit.",
    
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = quotes[index];

  return (
    <div className="border-y border-border bg-white py-14">
      <div className="mx-auto max-w-container px-margin-mobile md:px-gutter lg:px-margin-desktop">
        <p className="mb-8 text-center text-label-sm uppercase tracking-widest text-text-secondary">
          What Clients Say
        </p>

        <div className="relative mx-auto min-h-[90px] max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <p className="text-body-lg font-medium leading-relaxed text-text-primary">
                "{current.text}"
              </p>
              <div className="mt-5">
                <p className="text-body-md font-semibold text-text-primary">{current.name}</p>
                <p className="text-label-sm text-text-secondary">{current.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show quote ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-[#2563EB]" : "w-1.5 bg-surface-container-high"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
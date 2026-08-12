        "use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  "VELOCITY", "ACME.CO", "LUMEN", "QUANTUM",
  "VECTOR", "APEX", "NEXUS", "STRATOS",
  "ORBITAL", "CIPHER", "ZENITH", "FORGE",
];

export function ClientMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="border-y border-border bg-white py-8">
      <div className="mx-auto max-w-container px-margin-mobile md:px-gutter lg:px-margin-desktop">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-label-sm uppercase tracking-widest text-text-secondary">
            Trusted by innovative companies worldwide
          </p>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label="Previous"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label="Next"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex w-max gap-16 animate-marquee"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-label-sm font-semibold uppercase tracking-widest text-text-secondary transition-colors hover:text-[#2563EB]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === 0 ? "w-4 bg-[#2563EB]" : "w-1.5 bg-surface-container-high"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
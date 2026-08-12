"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export default function AboutTimeline({
  timeline,
}: {
  timeline: TimelineItem[];
}) {
  return (
    <section className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l border-[#E2E8F0] ml-6">

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative mb-16 pl-10"
            >
              <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-[#1E3A8A] shadow-lg" />

              <p className="text-[#1E3A8A] font-mono text-sm">
                {item.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
                {item.title}
              </h3>

              <p className="mt-3 text-[#334155] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
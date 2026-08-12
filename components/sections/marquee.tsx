"use client";

import { motion } from "framer-motion";

const clients = [
  "Acme Corp",
  "Nexus Labs",
  "Bright Studio",
  "Orbit Tech",
  "Vertex Group",
  "Northstar",
];

const marquee = [...clients, ...clients];

export function Marquee() {
  return (
    <section className="relative overflow-hidden py-20">

      <div className="absolute inset-0 bg-gradient-to-r from-white via-[#F8FCFB] to-white" />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-12 text-center"
        >

          <span className="rounded-full border border-teal-100 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700 shadow-sm">
            Trusted by Industry Leaders
          </span>

        </motion.div>

        <div className="relative overflow-hidden"><div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent" />

<div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent" />

<motion.div
  animate={{
    x: ["0%", "-50%"],
  }}
  transition={{
    repeat: Infinity,
    ease: "linear",
    duration: 18,
  }}
  className="flex w-max gap-8"
>

  {marquee.map((client, index) => (

    <motion.div
      key={index}
      whileHover={{
        y: -5,
        scale: 1.05,
      }}
      className="group flex h-20 min-w-[220px] items-center justify-center rounded-full border border-slate-200 bg-white px-10 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-xl"
    >

      <span className="text-lg font-bold tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-teal-700">
        {client}
      </span>

    </motion.div>

  ))}

</motion.div>        </div>
      </div>
    </section>
  );
}
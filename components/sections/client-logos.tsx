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

export function ClientLogos() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FCFB] via-white to-[#F8FCFB]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16 text-center"
        >

          <span className="rounded-full border border-teal-100 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700 shadow-sm">
            Trusted Worldwide
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Powering Modern Enterprises
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Trusted by ambitious organizations building secure,
            scalable and future-ready digital platforms.
          </p>

        </motion.div>

        <div className="relative overflow-hidden"><div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />

<div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

<motion.div
  animate={{
    x: ["0%", "-50%"],
  }}
  transition={{
    repeat: Infinity,
    ease: "linear",
    duration: 22,
  }}
  className="flex w-max gap-6"
>

  {marquee.map((client, index) => (
    <motion.div
      key={index}
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      className="group flex h-24 min-w-[220px] items-center justify-center rounded-3xl border border-slate-200 bg-white px-10 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-xl"
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
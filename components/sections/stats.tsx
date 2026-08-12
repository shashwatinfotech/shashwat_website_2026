"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Smile,
  Users,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "150+",
    label: "Projects Delivered",
    icon: Briefcase,
    color: "from-teal-500 to-emerald-500",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Smile,
    color: "from-cyan-500 to-teal-500",
  },
  {
    value: "40+",
    label: "Team Experts",
    icon: Users,
    color: "from-emerald-500 to-lime-500",
  },
  {
    value: "12",
    label: "Years Experience",
    icon: Award,
    color: "from-teal-600 to-cyan-600",
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FCFB] to-white" />

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-14 text-center"
        >

          <span className="rounded-full border border-teal-100 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700 shadow-sm">
            Numbers That Matter
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Trusted by Businesses
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Every metric reflects our commitment to engineering,
            innovation and long-term partnerships.
          </p>

        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">{stats.map((stat, index) => {
  const Icon = stat.icon;

  return (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.12,
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-[0_18px_60px_rgba(15,23,42,.06)] backdrop-blur-xl transition-all"
    >
      {/* Glow */}

      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.color}`}
      />

      {/* Icon */}

      <div
        className={`inline-flex rounded-2xl bg-gradient-to-br ${stat.color} p-4 text-white shadow-lg`}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Value */}

      <h3 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
        {stat.value}
      </h3>

      {/* Label */}

      <p className="mt-3 text-base leading-relaxed text-slate-600">
        {stat.label}
      </p>

      {/* Hover Gradient */}

      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-transparent to-lime-300/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Decorative Orb */}

      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-teal-100 opacity-30 blur-3xl transition-all duration-500 group-hover:scale-125" />
    </motion.div>
  );
})}</div>        
      </div>
    </section>
  );
}
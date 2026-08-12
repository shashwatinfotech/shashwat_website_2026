"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure with end-to-end encryption.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description:
      "Reliable systems built for mission-critical operations.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "A real team behind every account, available around the clock.",
    color: "from-emerald-500 to-lime-500",
  },
  {
    icon: Award,
    title: "Industry Proven",
    description:
      "Trusted by enterprises across finance, healthcare and retail.",
    color: "from-teal-700 to-cyan-600",
  },
];

export function Trust() {
  return (
    <section className="relative overflow-hidden py-28">

      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FCFB] to-white" />

      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-teal-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-teal-100 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700 shadow-sm">
            Enterprise Trust
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Built For Teams That
            Never Stop Shipping
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every layer of our platform is engineered around
            reliability, scalability, security and long-term success.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">{trustPoints.map((point, index) => {

  const Icon = point.icon;

  return (

    <motion.div
      key={point.title}
      initial={{opacity:0,y:40}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      transition={{
        delay:index*.12,
        duration:.6
      }}
      whileHover={{
        y:-10,
        scale:1.02
      }}
      className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] backdrop-blur-xl"
    >

      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${point.color}`}
      />

      <div
        className={`inline-flex rounded-2xl bg-gradient-to-br ${point.color} p-4 text-white shadow-lg`}
      >
        <Icon className="h-7 w-7"/>
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {point.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {point.description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-semibold text-teal-700 opacity-0 transition-all duration-300 group-hover:opacity-100">

        Learn More

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>

      </div>

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-100 opacity-20 blur-3xl transition-all duration-500 group-hover:scale-125"/>

    </motion.div>

  );

})}        </div>
      </div>
    </section>
  );
}
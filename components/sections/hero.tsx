"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Cloud,
  Sparkles,
} from "lucide-react";

import { siteConfig, authRoutes } from "@/constants/site";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FCFB] to-[#F4FAF8]">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="absolute right-0 top-32 h-[320px] w-[320px] rounded-full bg-lime-300/20 blur-[100px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-300/10 blur-[100px]" />

      </div>

      <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-20 px-6 pt-32 pb-20 lg:grid-cols-2 lg:px-10">{/* ================= LEFT CONTENT ================= */}

<div className="relative z-10 flex flex-col items-start text-left">

  <motion.div
    custom={0}
    initial="hidden"
    animate="show"
    variants={fadeUp}
    className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl"
  >
    <Sparkles className="h-4 w-4 text-teal-600" />

    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700">
      {siteConfig.tagline}
    </span>
  </motion.div>

  <motion.h1
    custom={0.15}
    initial="hidden"
    animate="show"
    variants={fadeUp}
    className="mt-8 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-7xl"
  >
    Build

    <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
      {" "}Enterprise{" "}
    </span>

    Software That Scales.
  </motion.h1>

  <motion.p
    custom={0.3}
    initial="hidden"
    animate="show"
    variants={fadeUp}
    className="mt-8 max-w-xl text-lg leading-8 text-slate-600"
  >
    {siteConfig.description}
  </motion.p>

  <motion.div
    custom={0.45}
    initial="hidden"
    animate="show"
    variants={fadeUp}
    className="mt-10 flex flex-wrap gap-4"
  >
    <Link href={authRoutes.login}>
      <Button
        variant="primary"
        size="lg"
        className="group rounded-full px-7 shadow-xl shadow-teal-600/20"
      >
        Get Started

        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </Link>

    <Link href="/services">
      <Button
        variant="secondary"
        size="lg"
        className="rounded-full border border-slate-200 bg-white px-7 hover:bg-slate-50"
      >
        Explore Services
      </Button>
    </Link>
  </motion.div>

  <motion.div
    custom={0.6}
    initial="hidden"
    animate="show"
    variants={fadeUp}
    className="mt-14 flex flex-wrap gap-6"
  >
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <ShieldCheck className="h-5 w-5 text-teal-600" />

      <div>
        <p className="text-sm font-semibold text-slate-900">
          Enterprise Security
        </p>

        <p className="text-xs text-slate-500">
          Secure & Reliable
        </p>
      </div>
    </div>

    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <Cloud className="h-5 w-5 text-teal-600" />

      <div>
        <p className="text-sm font-semibold text-slate-900">
          Cloud Ready
        </p>

        <p className="text-xs text-slate-500">
          Scalable Infrastructure
        </p>
      </div>
    </div>
  </motion.div>

</div>{/* ================= RIGHT SIDE ================= */}

<div className="relative hidden min-h-[700px] lg:flex items-center justify-center">

  {/* Main Dashboard */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: .8 }}
    className="relative w-[560px] rounded-[34px] border border-white/60 bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,.12)] backdrop-blur-2xl"
  >

    {/* Top Bar */}
    <div className="flex items-center justify-between">

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Enterprise Dashboard
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Business Overview
        </h3>
      </div>

      <div className="rounded-xl bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
        Live
      </div>

    </div>

    {/* Metrics */}

    <div className="mt-8 grid grid-cols-2 gap-5">

      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Projects
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900">
          120+
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Clients
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900">
          60+
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Uptime
        </p>

        <h2 className="mt-2 text-3xl font-black text-emerald-600">
          99.9%
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
        <p className="text-sm text-slate-500">
          Security
        </p>

        <h2 className="mt-2 text-3xl font-black text-teal-700">
          A+
        </h2>
      </div>

    </div>

    {/* Chart */}

    <div className="mt-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6">

      <div className="flex items-end gap-3 h-36">

        {[30,60,42,80,70,95,88].map((h,i)=>(
          <motion.div
            key={i}
            initial={{height:0}}
            animate={{height:h}}
            transition={{
              delay:.15*i,
              duration:.6
            }}
            style={{height:`${h}%`}}
            className="flex-1 rounded-full bg-gradient-to-t from-teal-700 via-teal-500 to-lime-400"
          />
        ))}

      </div>

    </div>

  </motion.div>

  {/* Floating AI Card */}

  <motion.div
    animate={{ y:[0,-12,0] }}
    transition={{ repeat:Infinity,duration:5 }}
    className="absolute -left-8 top-24 rounded-3xl border border-white/60 bg-white p-5 shadow-xl"
  >
    <p className="text-xs uppercase tracking-widest text-slate-500">
      AI
    </p>

    <h4 className="mt-2 font-bold text-slate-900">
      Smart Automation
    </h4>
  </motion.div>

  {/* Floating Cloud */}

  <motion.div
    animate={{ y:[0,12,0] }}
    transition={{ repeat:Infinity,duration:6 }}
    className="absolute -right-6 bottom-24 rounded-3xl border border-white/60 bg-white p-5 shadow-xl"
  >
    <p className="text-xs uppercase tracking-widest text-slate-500">
      CLOUD
    </p>

    <h4 className="mt-2 font-bold text-slate-900">
      Multi Cloud
    </h4>
  </motion.div>

  {/* Security */}

  <motion.div
    animate={{ x:[0,8,0] }}
    transition={{ repeat:Infinity,duration:4 }}
    className="absolute right-12 top-10 rounded-2xl bg-teal-700 px-5 py-3 text-white shadow-xl"
  >
    Protected
  </motion.div>

</div></div>      {/* ================= DECORATIVE ORBS ================= */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-40 h-4 w-4 rounded-full bg-teal-400 blur-sm"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-20 bottom-20 h-5 w-5 rounded-full bg-lime-400 blur-sm"
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-24 h-3 w-3 rounded-full bg-cyan-400"
      />

      {/* ================= TRUST STRIP ================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex items-center gap-10 rounded-full border border-slate-200 bg-white/80 px-10 py-4 shadow-lg backdrop-blur-xl">

          {[
            "AI",
            "Cloud",
            "Enterprise",
            "Security",
            "Analytics",
          ].map((item) => (
            <span
              key={item}
              className="text-sm font-semibold tracking-wide text-slate-500"
            >
              {item}
            </span>
          ))}

        </div>
      </motion.div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, TrendingUp, Sparkles, Zap } from "lucide-react";

const operatingPrinciples = [
  {
    number: "01",
    title: "Own the Outcome",
    headline:
      "We take complete responsibility—from the first conversation to the final result.",
    description:
      "We don’t just complete tasks; we own the success of what we deliver.",
    icon: Target,
  },
  {
    number: "02",
    title: "Create Business Impact",
    headline:
      "Technology should create measurable business value.",
    description:
      "Every product, feature, automation, and decision should help our clients grow, save time, improve efficiency, or create better experiences.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Go Beyond",
    headline:
      "We don’t stop at “what was asked.”",
    description:
      "We challenge assumptions, identify better possibilities, and go the extra mile when it can create greater value for our clients.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Move Fast. Deliver Right.",
    headline:
      "Speed matters, but quality matters more.",
    description:
      "We make decisions quickly, execute with focus, communicate proactively, and deliver reliable solutions without unnecessary delays.",
    icon: Zap,
  },
];

export default function HowWeOperate() {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#1E3A8A]">
            04 / HOW WE OPERATE
          </p>

          <div className="mt-8 max-w-4xl">
            <h2 className="text-5xl font-semibold tracking-tight text-[#0F172A] md:text-7xl">
              We own what we build.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#475569]">
              Great work is not just about writing better software.
              It&apos;s about taking responsibility, creating measurable
              impact, and moving with purpose.
            </p>
          </div>
        </motion.div>




        {/* CARDS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {operatingPrinciples.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 transition-all duration-300 hover:border-[#CBD5E1] hover:bg-white hover:shadow-xl md:p-10"
              >
                {/* Background number */}
                <span className="pointer-events-none absolute right-6 top-2 text-8xl font-bold tracking-tighter text-[#0F172A]/[0.035]">
                  {item.number}
                </span>

                <div className="relative">

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm tracking-[0.2em] text-[#1E3A8A]">
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DBEAFE] bg-white">
                      <Icon className="h-5 w-5 text-[#1E3A8A]" />
                    </div>
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold text-[#0F172A] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-lg font-medium leading-relaxed text-[#1E3A8A]">
                    {item.headline}
                  </p>

                  <p className="mt-4 max-w-xl leading-relaxed text-[#475569]">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export function HowWeOperateTeaser() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-[#F8FAFC] p-8 transition-all duration-300 hover:border-[#CBD5E1] hover:bg-white hover:shadow-xl md:p-12"
      >
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#2563EB]/5 blur-3xl transition-all duration-500 group-hover:bg-[#2563EB]/10" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#1E3A8A]">
              04 / HOW WE OPERATE
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
              We don&apos;t just build software.
              <br />
              <span className="text-[#2563EB]">
                We own the outcome.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475569]">
              We take responsibility, create measurable business impact,
              challenge assumptions, and move fast without compromising quality.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Own the Outcome",
                "Create Impact",
                "Go Beyond",
                "Move Fast",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#475569]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex shrink-0 items-center gap-2 font-medium text-[#1E3A8A] transition-all duration-300 group-hover:gap-3"
          >
            See how we operate
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </motion.div>
    </section>
  );
}
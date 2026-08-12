"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { authRoutes } from "@/constants/site";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl lg:p-20"
        >

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">

              <Sparkles className="h-4 w-4" />

              Start Building Today

            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
              Ready To Build
              <br />
              What's Next?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-300">
              Partner with a team that designs, engineers and scales
              enterprise software built for the future.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"><Link href={authRoutes.register}>
  <Button
    variant="primary"
    size="lg"
    className="group h-14 rounded-full px-8 text-base"
  >
    Get Started

    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
  </Button>
</Link>

<Link href="/contact">
  <Button
    variant="secondary"
    size="lg"
    className="h-14 rounded-full border-white/20 bg-white/10 px-8 text-base text-white hover:bg-white/20"
  >
    Talk To Sales
  </Button>
</Link><div className="mt-12 flex flex-wrap items-center justify-center gap-10 text-slate-400">

  <div>
    <span className="text-3xl font-black text-white">150+</span>
    <p className="mt-2 text-sm uppercase tracking-wider">
      Projects
    </p>
  </div>

  <div>
    <span className="text-3xl font-black text-white">98%</span>
    <p className="mt-2 text-sm uppercase tracking-wider">
      Satisfaction
    </p>
  </div>

  <div>
    <span className="text-3xl font-black text-white">24/7</span>
    <p className="mt-2 text-sm uppercase tracking-wider">
      Support
    </p>
  </div>

</div>            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
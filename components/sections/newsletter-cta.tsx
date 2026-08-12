"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FCFB] via-white to-[#F8FCFB]" />

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="overflow-hidden rounded-[36px] border border-slate-200 bg-white/90 p-12 text-center shadow-[0_20px_70px_rgba(15,23,42,.08)] backdrop-blur-xl lg:p-20"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">

            <Sparkles className="h-4 w-4"/>

            Monthly Insights

          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900">
            Stay Ahead Of
            The Curve
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Product launches, engineering insights, enterprise trends
            and practical strategies delivered once a month.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 sm:flex-row"
          ><Input
  type="email"
  placeholder="Enter your work email"
  aria-label="Email address"
  className="h-14 flex-1 rounded-full border-slate-200 bg-slate-50 px-6 text-base focus:border-teal-400"
/>

<Button
  type="submit"
  variant="primary"
  size="lg"
  className="group h-14 rounded-full px-8"
>

  <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>

  Subscribe

</Button><div className="mt-8 text-sm text-slate-500">

  No spam.

  <span className="mx-2">•</span>

  One email per month.

  <span className="mx-2">•</span>

  Unsubscribe anytime.

</div>          </form>

        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can we get started?",
    answer:
      "Most teams are fully onboarded within 48 hours of signing up, including data migration and initial setup.",
  },
  {
    question: "Do you offer custom integrations?",
    answer:
      "Yes — our platform supports custom API integrations and can connect with your existing enterprise tools.",
  },
  {
    question: "What kind of support is included?",
    answer:
      "Every plan includes dedicated support with guaranteed response times, plus a named account manager for enterprise plans.",
  },
  {
    question: "Is our data secure?",
    answer:
      "All data is encrypted in transit and at rest. We are SOC 2 compliant and undergo regular third-party security audits.",
  },
];

export function FAQ() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FCFB] to-white" />

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >

          <span className="rounded-full border border-teal-100 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700 shadow-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
            Everything You
            Need To Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our
            platform, onboarding process, security and support.
          </p>

        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="space-y-5"
        >{faqs.map((faq, index) => (

  <motion.div
    key={faq.question}
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.08,
      duration: .5,
    }}
  >

    <AccordionItem
      value={`item-${index}`}
      className="overflow-hidden rounded-[24px] border border-slate-200 bg-white/90 px-8 shadow-[0_18px_50px_rgba(15,23,42,.06)] backdrop-blur-xl"
    >

      <AccordionTrigger className="py-7 text-left text-lg font-semibold text-slate-900 hover:no-underline">
        {faq.question}
      </AccordionTrigger>

      <AccordionContent className="pb-7 text-base leading-8 text-slate-600">
        {faq.answer}
      </AccordionContent>

    </AccordionItem>

  </motion.div>

))}        </Accordion>

      </div>
    </section>
  );
}
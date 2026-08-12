"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative z-10 px-6 py-40">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#1E3A8A] font-mono tracking-[0.4em] uppercase text-sm">
            07 / BUILD WITH US
          </p>

          <h2 className="mt-10 text-6xl md:text-8xl font-semibold leading-none text-[#0F172A]">
            Ready to build
            the impossible?
          </h2>

          <p className="mt-8 text-xl text-[#334155] max-w-2xl mx-auto">
            Let's create technology that moves
            businesses, people and the future forward.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 rounded-full bg-[#1E3A8A] text-white px-10 py-5 font-medium text-lg"
            >
              Start A Project
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] bg-[#1E3A8A]/15 blur-[150px] rounded-full" />
    </section>
  );
}
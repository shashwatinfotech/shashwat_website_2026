"use client";

import { motion } from "framer-motion";
import { Database, Cpu, TrendingUp, Sparkles } from "lucide-react";

const nodes = [
  { icon: Database, label: "Ingest", color: "#2563EB" },
  { icon: Cpu, label: "Process", color: "#0F766E" },
  { icon: TrendingUp, label: "Predict", color: "#22D3EE" },
  { icon: Sparkles, label: "Optimize", color: "#059669" },
];

export function IntegrationFlow() {
  return (
    <div className="relative flex h-full min-h-[220px] items-center justify-between px-4 sm:px-10">
      <div className="absolute left-10 right-10 top-1/2 h-px -translate-y-1/2 bg-white/10" />

      <motion.div
        className="absolute left-10 top-1/2 h-px -translate-y-1/2"
        style={{
          width: "40%",
          background: "linear-gradient(90deg, transparent, #22D3EE, #2563EB, transparent)",
        }}
        animate={{ left: ["10%", "60%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], boxShadow: [
                `0 0 0px ${node.color}00`,
                `0 0 18px ${node.color}55`,
                `0 0 0px ${node.color}00`,
              ] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
              className="flex h-12 w-12 items-center justify-center rounded-full border"
              style={{ borderColor: `${node.color}55`, background: `${node.color}1A` }}
            >
              <Icon className="h-5 w-5" style={{ color: node.color }} />
            </motion.div>
            <span className="text-label-sm text-white/70">{node.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
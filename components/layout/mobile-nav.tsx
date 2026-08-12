"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

import { primaryNav, authRoutes, siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-md"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col border-l border-white/40 bg-white/90 backdrop-blur-2xl shadow-[0_20px_80px_rgba(15,23,42,.18)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {siteConfig.name}
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500">
                  Enterprise Technology
                </p>
              </div>

              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                aria-label="Close Menu"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-2 px-6 py-8">
              {primaryNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.08 * index,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:border-teal-100 hover:bg-teal-50 hover:text-teal-700"
                  >
                    {item.label}

                    <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-200 p-6">
              <Link
                href={authRoutes.login}
                onClick={onClose}
              >
                <Button
                  variant="ghost"
                  className="mb-3 w-full rounded-xl"
                >
                  Login
                </Button>
              </Link>

              <Link
                href={authRoutes.login}
                onClick={onClose}
              >
                <Button
                  variant="primary"
                  className="group w-full rounded-xl"
                >
                  Get Started

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
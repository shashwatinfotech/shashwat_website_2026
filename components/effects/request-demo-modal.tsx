"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RequestDemoModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portal needs the DOM to exist first (avoids SSR mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 300);
  };

  const modalContent = (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-white p-6 shadow-2xl"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 text-text-secondary transition-colors hover:text-text-primary"
            >
              <X className="h-4 w-4" />
            </button>

            {!submitted ? (
              <>
                <h3 className="text-body-lg font-bold text-text-primary">Request a Demo</h3>
                <p className="mt-2 text-body-md text-text-secondary">
                  Experience the future of enterprise intelligence. Our team
                  will reach out within 2 hours.
                </p>
                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work Email"
                    className="rounded-lg border border-border px-4 py-2.5 text-body-md text-text-primary outline-none transition-colors focus:border-[#059669]"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-[#059669] text-white hover:bg-[#047857]"
                    size="lg"
                  >
                    Schedule Now
                  </Button>
                </form>
              </>
            ) : (
              <div className="py-4 text-center">
                <h3 className="text-body-lg font-bold text-text-primary">Request received 🎉</h3>
                <p className="mt-2 text-body-md text-text-secondary">
                  Thanks — our team will reach out to {email} within 2 hours.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="lg"
        className="bg-[#059669] text-white hover:bg-[#047857]"
      >
        Request Demo
        <span className="ml-1">→</span>
      </Button>

      {/* Rendered via portal directly into <body> so no animated/transformed
          ancestor (e.g. a Reveal wrapper) can break this modal's fixed positioning */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
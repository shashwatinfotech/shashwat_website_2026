"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Phone, MapPin, Send, Calendar, ChevronDown, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/effects/reveal";
// ⚠️ CONFIRM PATH — same background component used on About/Home/Services
import AboutBackground from "@/app/about/AboutBackground";

const locations = [
  {
    name: "HQ — Surat",
    address: "11th Floor, Citadel, Opp. Star Bazaar, Adajan Road, Surat 395009",
  },
  {
    name: "Innovation Hub — Ahmedabad",
    address: "SG Highway, Ahmedabad, Gujarat",
  },
];

const faqs = [
  { q: "What is the typical response time?", a: "Our team typically responds to all enterprise inquiries within 4-6 business hours." },
  { q: "Do you offer on-site consultation?", a: "Yes, for enterprise partners we provide on-site architecture reviews." },
  { q: "Are there direct support lines?", a: "Active clients receive a dedicated technical support line in their dashboard." },
  { q: "How do I request a demo?", a: "Use the 'Request Demo' button in the navbar and our team will schedule a session." },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 15 });
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 15 });

  function move(e: React.MouseEvent<HTMLDivElement>) {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    rotateY.set((x - box.width / 2) / 20);
    rotateX.set(-(y - box.height / 2) / 20);
  }

  function leave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      style={{ rotateX: smoothX, rotateY: smoothY, transformPerspective: 1000 }}
      onMouseMove={move}
      onMouseLeave={leave}
      className="rounded-bento border border-border bg-white p-6 shadow-level-2 transition-shadow hover:shadow-magnetic-hover"
    >
      {children}
    </motion.div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal direction="up" delay={index * 80}>
      <div className="rounded-bento border border-border bg-white p-6">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between text-left"
        >
          <h3 className="text-body-md font-semibold text-text-primary">{q}</h3>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-text-secondary"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="mt-3 text-body-sm text-text-secondary">{a}</p>
        </motion.div>
      </div>
    </Reveal>
  );
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden px-margin-mobile py-24 md:px-gutter lg:px-margin-desktop">

      <AboutBackground />

      <div className="relative z-10 mx-auto max-w-container">

        {/* HERO */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal direction="blur">
            <p className="text-label-sm uppercase tracking-widest text-[#1E3A8A]">Get In Touch</p>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="mt-4 text-display-lg-mobile font-bold text-text-primary md:text-display-lg">
              Let's build together.
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="mt-4 text-body-lg text-text-secondary">
              Have a question or need a custom solution? Our team is here to help,
              usually within a few hours.
            </p>
          </Reveal>
        </div>

        {/* FORM + INFO + QUICK MEET */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">

          {/* Contact form — glass card */}
          <Reveal direction="left" className="lg:col-span-3">
            <form
              className="flex flex-col gap-5 rounded-bento border border-border bg-white/80 backdrop-blur-xl p-6 shadow-level-2 lg:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-body-lg font-bold text-text-primary">Send a Message</h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your name" required
                    className="transition-shadow focus:shadow-[0_0_0_3px_rgba(30,58,138,0.15)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" required
                    className="transition-shadow focus:shadow-[0_0_0_3px_rgba(30,58,138,0.15)]" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="How can we help?" required
                  className="transition-shadow focus:shadow-[0_0_0_3px_rgba(30,58,138,0.15)]" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project goals..."
                  rows={5}
                  required
                  className="transition-shadow focus:shadow-[0_0_0_3px_rgba(30,58,138,0.15)]"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="mt-2 w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Submit Inquiry
              </Button>
            </form>
          </Reveal>

          {/* Right column: Contact Info + Quick Meet */}
          <div className="flex flex-col gap-8 lg:col-span-2">

            <Reveal direction="right">
              <div className="flex flex-col gap-6 rounded-bento border border-border bg-white p-6 shadow-level-2">
                <h2 className="text-body-lg font-bold text-text-primary">Contact Info</h2>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <Building2 className="h-5 w-5 text-secondary-container-foreground" />
                  </div>
                  <div>
                    <h3 className="text-body-md font-semibold text-text-primary">HQ — Surat</h3>
                    <p className="mt-1 text-body-sm text-text-secondary">
                      11th Floor, Citadel, Opp. Star Bazaar, Adajan Road, Surat 395009
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <Mail className="h-5 w-5 text-secondary-container-foreground" />
                  </div>
                  <div>
                    <h3 className="text-body-md font-semibold text-text-primary">Email</h3>
                    <p className="mt-1 text-body-sm text-text-secondary">
                      info.shashwatinfotech@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container">
                    <Phone className="h-5 w-5 text-secondary-container-foreground" />
                  </div>
                  <div>
                    <h3 className="text-body-md font-semibold text-text-primary">Support</h3>
                    <p className="mt-1 text-body-sm text-text-secondary">
                      +91 94275 48252
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div className="flex flex-col gap-4 rounded-bento border border-border bg-white p-6 shadow-level-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-body-lg font-bold text-text-primary">Quick Meet</h2>
                  <Calendar className="h-5 w-5 text-[#1E3A8A]" />
                </div>
                <p className="text-body-sm text-text-secondary">
                  Prefer a direct call? Pick a 15-min slot that works for you.
                </p>

                <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2">
                  <span className="text-label-sm text-text-secondary">Availability: Mon–Fri</span>
                  <span className="flex items-center gap-1.5 rounded-full bg-[#22C55E]/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-[#16a34a]">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="h-1.5 w-1.5 rounded-full bg-[#22C55E]"
                    />
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {["10:00 AM", "11:30 AM", "02:00 PM"].map((slot) => (
                    <button
                      key={slot}
                      className="rounded-lg border border-border py-2 text-label-sm text-text-secondary transition-colors hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Open Calendar
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* LOCATIONS */}
        <div className="mt-24">
          <Reveal direction="up">
            <div className="mb-8 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#1E3A8A]" />
              <h2 className="text-headline-md text-text-primary">Our Locations</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {locations.map((loc, i) => (
              <Reveal key={loc.name} direction="up" delay={i * 100}>
                <TiltCard>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container">
                    <MapPin className="h-5 w-5 text-secondary-container-foreground" />
                  </div>
                  <h3 className="mt-4 text-body-md font-semibold text-text-primary">{loc.name}</h3>
                  <p className="mt-2 text-body-sm text-text-secondary">{loc.address}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <Reveal direction="up">
            <h2 className="mb-8 text-center text-headline-md text-text-primary">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {faqs.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
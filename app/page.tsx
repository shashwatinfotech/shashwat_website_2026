"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu, Cloud, Smartphone, Star, BarChart3, Bot, Award, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/effects/reveal";
import { ClientMarquee } from "@/components/effects/client-marquee";
import AboutBackground from "@/app/about/AboutBackground";

const topRow = [
  { icon: Cpu, title: "Custom Software", desc: "Bespoke architectures built for high-scale enterprise demands." },
  { icon: Globe, title: "Web Ecosystems", desc: "Next-gen progressive web experiences that perform." },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Scalable AWS, Azure & GCP solutions." },
];

const stacked = [
  { icon: Smartphone, title: "Mobile Engineering", desc: "iOS & Android native performance." },
  { icon: Smartphone, title: "Product Design", desc: "Human-centric interfaces that convert.", swatches: true },
];

const reasons = [
  { title: "Precision Engineering", desc: "We architect solutions optimized for scale, security, and long-term maintainability." },
  { title: "Dedicated Expertise", desc: "A curated team of specialized engineers and strategists who integrate with your team." },
  { title: "Rapid Deployment", desc: "Our refined agile methodology ensures consistent delivery without compromising quality." },
];

const techStack = ["React.js", "Node.js", "PostgreSQL", "AWS", "Python", "Tailwind CSS", "Next.js", "Docker"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AboutBackground />

      <div className="relative z-10">

        {/* HERO */}
        <section className="relative mx-auto max-w-container px-margin-mobile py-24 md:px-gutter lg:px-margin-desktop overflow-hidden">
          <div aria-hidden className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-[#2563EB] opacity-[0.05] blur-[100px] pointer-events-none" />
          <div aria-hidden className="absolute top-40 left-0 h-[400px] w-[400px] rounded-full bg-[#22D3EE] opacity-[0.05] blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <Reveal direction="blur">
                <Badge className="border border-[#84CC16]/30 bg-[#84CC16]/10 text-[#0F766E]">
                  Enterprise Solutions Provider
                </Badge>
              </Reveal>
              <Reveal direction="up" delay={100}>
                <h1 className="text-display-lg-mobile font-bold text-text-primary md:text-display-lg">
                  Accelerating{" "}
                  <span className="text-[#2563EB]">Digitalization</span>
                </h1>
              </Reveal>
              <Reveal direction="up" delay={200}>
                <p className="text-body-lg text-text-secondary max-w-lg">
                  Engineering world-class digital experiences for high-performance
                  enterprise environments with precision and professional sophistication.
                </p>
              </Reveal>
              <Reveal direction="up" delay={300}>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white" size="lg">
                      Start Building <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="secondary" size="lg">View Case Studies</Button>
                </div>
              </Reveal>

              <Reveal direction="up" delay={400}>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {["#2563EB", "#0F766E", "#22D3EE", "#0F172A"].map((color, i) => (
                      <div
                        key={i}
                        className="h-9 w-9 rounded-full border-2 border-white"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-body-md text-text-secondary">
                      Trusted by 250+ global clients
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-body-md font-semibold text-text-primary">4.9/5</span>
                      <div className="flex text-[#22D3EE]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal direction="scale" delay={200}>
              <div className="relative hidden lg:block">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-4 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#22D3EE]/20 bg-[#22D3EE]/10 shadow-level-2"
                >
                  <BarChart3 className="h-6 w-6 text-[#0F766E]" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-16 -left-6 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white shadow-level-2"
                >
                  <Cloud className="h-5 w-5 text-[#2563EB]" />
                </motion.div>

                <div className="rounded-bento border border-border bg-white/80 backdrop-blur-xl p-6 shadow-level-2">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 rounded-xl border border-border bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-label-sm text-text-secondary">Performance Overview</span>
                        <span className="text-label-sm font-semibold text-[#22D3EE]">+23.5%</span>
                      </div>
                      <svg viewBox="0 0 200 50" className="mt-3 h-12 w-full">
                        <polyline fill="none" stroke="#2563EB" strokeWidth="2" points="0,40 30,35 60,38 90,20 120,25 150,10 200,5" />
                      </svg>
                    </div>

                    <div className="rounded-xl border border-border bg-white p-4 flex flex-col items-center justify-center">
                      <span className="text-label-sm text-text-secondary mb-2">Project Status</span>
                      <div className="relative h-16 w-16">
                        <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                          <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                          <circle cx="18" cy="18" r="16" fill="none" stroke="#0F766E" strokeWidth="3" strokeDasharray="100" strokeDashoffset="22" strokeLinecap="round" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-label-sm font-bold text-text-primary">
                          78%
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#0F172A] p-4 font-mono text-xs text-[#22D3EE] leading-relaxed">
                      <div>const Shashwat = {"{"}</div>
                      <div className="pl-3 text-white/70">vision: "Digital Excellence",</div>
                      <div className="pl-3 text-white/70">impact: "Global"</div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-border bg-white p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-label-sm text-text-secondary">Active Projects</span>
                      <span className="text-body-md font-bold text-text-primary">120+</span>
                    </div>
                    <span className="text-label-sm text-text-secondary">Across 15+ Countries</span>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-5 -right-3 z-10 flex items-center gap-2 rounded-xl border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-3 shadow-level-2"
                >
                  <Bot className="h-5 w-5 text-[#0F766E]" />
                  <span className="text-label-sm font-medium text-[#0F766E]">AI Integration Enabled</span>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CLIENT MARQUEE */}
        <ClientMarquee />

        {/* SERVICES */}
        <section className="mx-auto max-w-container px-margin-mobile py-24 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="mb-12">
              <p className="text-label-sm uppercase text-text-secondary">Core Competencies</p>
              <h2 className="mt-2 text-headline-md text-text-primary max-w-lg">
                Precision engineering across the full technology stack to drive enterprise innovation.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topRow.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} direction="up" delay={i * 80}>
                  <div className="group h-full cursor-pointer rounded-bento border border-border bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-[#2563EB] hover:shadow-magnetic-hover">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low group-hover:bg-[#2563EB]/10">
                      <Icon className="h-5 w-5 text-[#2563EB]" />
                    </div>
                    <h3 className="text-body-md font-semibold text-text-primary">{service.title}</h3>
                    <p className="mt-2 text-body-md text-text-secondary">{service.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              {stacked.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} direction="up" delay={300 + i * 80}>
                    <div className="group h-full cursor-pointer rounded-bento border border-border bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-[#2563EB] hover:shadow-magnetic-hover">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low group-hover:bg-[#2563EB]/10">
                        <Icon className="h-5 w-5 text-[#2563EB]" />
                      </div>
                      <h3 className="text-body-md font-semibold text-text-primary">{service.title}</h3>
                      <p className="mt-2 text-body-md text-text-secondary">{service.desc}</p>
                      {service.swatches && (
                        <div className="mt-4 flex gap-2">
                          <div className="h-5 w-5 rounded bg-surface-container-high" />
                          <div className="h-5 w-5 rounded bg-[#0F766E]" />
                          <div className="h-5 w-5 rounded bg-[#22D3EE]" />
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal direction="up" delay={380}>
              <div className="group h-full cursor-pointer rounded-bento border border-[#0F172A] bg-[#0F172A] p-6 transition-all duration-300 hover:scale-[1.02]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Zap className="h-5 w-5 text-[#059669]" />
                </div>
                <h3 className="text-body-md font-semibold text-white">AI Integration</h3>
                <p className="mt-2 text-body-md text-white/70">Large language models & predictive analytics.</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={460}>
              <div className="group h-full cursor-pointer rounded-bento border border-border bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-[#2563EB] hover:shadow-magnetic-hover">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low group-hover:bg-[#2563EB]/10">
                  <Shield className="h-5 w-5 text-[#2563EB]" />
                </div>
                <h3 className="text-body-md font-semibold text-text-primary">Cyber Security</h3>
                <p className="mt-2 text-body-md text-text-secondary">Secure by design.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY SHASHWAT */}
        <section className="bg-surface-container-low">
          <div className="mx-auto max-w-container px-margin-mobile py-24 md:px-gutter lg:px-margin-desktop">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal direction="left">
                <div className="relative rounded-bento border border-border bg-white p-8 shadow-level-2 overflow-hidden">
                  <div aria-hidden className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#2563EB] opacity-10 blur-2xl" />
                  <div className="flex flex-col gap-4 relative">
                    <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#22D3EE]/10">
                      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 300 160" preserveAspectRatio="none">
                        <polyline fill="none" stroke="#2563EB" strokeWidth="2" points="10,120 70,95 130,110 190,55 260,75" />
                      </svg>
                      <motion.div
                        animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-level-2"
                      >
                        <TrendingUp className="h-5 w-5 text-[#2563EB]" />
                      </motion.div>
                      <motion.div
                        animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute right-8 top-10 flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-level-2"
                      >
                        <Sparkles className="h-4 w-4 text-[#22D3EE]" />
                      </motion.div>
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-6 left-16 flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-level-2"
                      >
                        <Award className="h-4 w-4 text-[#0F766E]" />
                      </motion.div>
                    </div>

                    <Badge className="w-fit border border-[#84CC16]/30 bg-[#84CC16]/10 text-[#0F766E]">10+ Years of Excellence</Badge>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-1.5 rounded-full bg-[#2563EB]" />
                      <div className="h-1.5 rounded-full bg-[#22D3EE]" />
                      <div className="h-1.5 rounded-full bg-surface-container-high" />
                    </div>
                  </div>
                </div>
              </Reveal>
              <div className="flex flex-col gap-8">
                <Reveal direction="right">
                  <div>
                    <p className="text-label-sm uppercase text-text-secondary">Why SHASHWAT?</p>
                    <h2 className="mt-2 text-headline-md text-text-primary">
                      Built for enterprise.<br />Engineered for scale.
                    </h2>
                  </div>
                </Reveal>
                {reasons.map((item, i) => (
                  <Reveal key={item.title} direction="right" delay={i * 100}>
                    <div className="flex items-start gap-4 group">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#059669]/10 group-hover:bg-[#059669]/20 transition-colors">
                        <CheckCircle className="h-4 w-4 text-[#059669]" />
                      </div>
                      <div>
                        <h3 className="text-body-md font-semibold text-text-primary">{item.title}</h3>
                        <p className="mt-1 text-body-md text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mx-auto max-w-container px-margin-mobile py-24 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="mb-12 text-center">
              <p className="text-label-sm uppercase text-text-secondary">Our Technology Stack</p>
              <h2 className="mt-2 text-headline-md text-text-primary">Built on world-class tools</h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <Reveal key={tech} direction="scale" delay={i * 60}>
                <div className="cursor-default rounded-full border border-border bg-white px-5 py-2 text-body-md font-medium text-text-secondary transition-all duration-200 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-magnetic-hover hover:scale-105">
                  {tech}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-container px-margin-mobile pb-8 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#042f2e] via-[#064e3b] to-[#0F172A] shadow-level-2">
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{ x: ["-10%", "10%", "-10%"] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1/2 left-0 h-full w-full rounded-full bg-[#22D3EE]/10 blur-[100px]"
                />
                <motion.div
                  animate={{ x: ["10%", "-10%", "10%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-1/2 right-0 h-full w-full rounded-full bg-[#0F766E]/15 blur-[120px]"
                />
                <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 800 300" preserveAspectRatio="none">
                  <path d="M0,150 Q200,80 400,150 T800,150" fill="none" stroke="#22D3EE" strokeWidth="1" />
                  <path d="M0,200 Q200,130 400,200 T800,200" fill="none" stroke="#2563EB" strokeWidth="1" />
                </svg>
                {[20, 55, 78, 33, 90, 12].map((left, i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute h-1.5 w-1.5 rounded-full bg-[#22D3EE]"
                    style={{ left: `${left}%`, top: `${20 + (i % 3) * 25}%` }}
                  />
                ))}
              </div>

              <div className="relative grid grid-cols-1 items-center gap-12 px-8 py-16 md:px-16 md:py-20 lg:grid-cols-2">
                <div>
                  <h2 className="text-display-lg-mobile font-bold text-white md:text-headline-md">
                    Ready to modernize your{" "}
                    <span className="text-[#059669]">enterprise operations?</span>
                  </h2>
                  <p className="mt-4 text-body-lg text-white/70 max-w-xl">
                    Join the ranks of high-performing enterprises that trust SHASHWAT
                    for their critical digital transformations.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button className="bg-[#059669] hover:bg-[#047857] text-white" size="lg">Get Started Today</Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="secondary" className="border border-white/20 bg-transparent text-white hover:bg-white/10" size="lg">
                        Contact Sales <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative hidden h-64 items-center justify-center lg:flex">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute h-56 w-56 rounded-full border border-dashed border-[#22D3EE]/30"
                  />
                  <svg viewBox="0 0 200 100" className="relative h-32 w-64">
                    <path
                      d="M50,50 C50,25 85,25 100,50 C115,75 150,75 150,50 C150,25 115,25 100,50 C85,75 50,75 50,50 Z"
                      fill="none"
                      stroke="url(#infinityGradient)"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="50%" stopColor="#0F766E" />
                        <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </main>
  );
}
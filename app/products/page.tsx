import Link from "next/link";
import {
  Cloud, ShieldCheck, TrendingUp, Boxes, Lock, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { Reveal } from "@/components/effects/reveal";
import { PremiumCard } from "@/components/effects/premium-card";
import AboutBackground from "@/app/about/AboutBackground";
import { RequestDemoModal } from "@/components/effects/request-demo-modal";
import { IntegrationFlow } from "@/components/effects/integration-flow";

export const metadata = buildMetadata({
  title: "Products",
  path: "/products",
});

const rigorFeatures = [
  {
    icon: Cloud,
    title: "Multi-Cloud Sync",
    desc: "Seamlessly bridge AWS, GCP, and Azure datasets with zero latency overhead.",
  },
  {
    icon: ShieldCheck,
    title: "Military-Grade Encryption",
    desc: "AES-256 at rest and in transit, compliant with global SOC2 Type II standards.",
  },
];

const integrationSteps = ["Ingest", "Process", "Predict", "Optimize"];

const infraLogos = ["KUBERNETES", "RUST CORE", "POSTGRES", "PYTORCH", "TERRAFORM"];

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AboutBackground />

      <div className="relative z-10">

        {/* HERO */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-container px-margin-mobile py-20 text-center md:px-gutter lg:py-28 lg:px-margin-desktop">
            <Reveal direction="up">
              <Badge variant="accent" className="mx-auto w-fit">Enterprise Edition v4.0</Badge>
            </Reveal>
            <Reveal direction="left" delay={100}>
              <h1 className="mx-auto mt-6 max-w-2xl text-display-lg-mobile font-bold text-text-primary md:text-display-lg">
                Intelligence that scales{" "}
                <span className="italic text-[#0F766E]">at the speed of commerce.</span>
              </h1>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
                The ultimate data infrastructure for high-performance enterprise
                environments. Harmonize fragmented data streams into a single
                source of truth with Shashwat's predictive engine.
              </p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <div className="mt-8 flex justify-center">
                <RequestDemoModal />
              </div>
            </Reveal>
          </div>
        </section>

        {/* TECHNICAL RIGOR */}
        <section className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-5">
              <Reveal direction="left">
                <h2 className="text-headline-md text-text-primary">Designed for Technical Rigor.</h2>
              </Reveal>
              {rigorFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} direction="left" delay={150 + i * 120}>
                    <PremiumCard>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#22D3EE]/10">
                        <Icon className="h-4 w-4 text-[#0F766E]" />
                      </div>
                      <h3 className="mt-3 text-body-md font-semibold text-text-primary">{f.title}</h3>
                      <p className="mt-1 text-body-sm text-text-secondary">{f.desc}</p>
                    </PremiumCard>
                  </Reveal>
                );
              })}
            </div>

            <Reveal direction="right" delay={200}>
              <PremiumCard className="shadow-level-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 rounded-xl border border-border bg-white/80 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-label-sm text-text-secondary">Product Detail</span>
                      <span className="text-label-sm font-semibold text-[#22D3EE]">+18.2%</span>
                    </div>
                    <svg viewBox="0 0 200 50" className="mt-3 h-10 w-full">
                      <polyline fill="none" stroke="#0F766E" strokeWidth="2" points="0,35 40,30 80,32 120,15 160,20 200,8" />
                    </svg>
                  </div>
                  <div className="rounded-xl bg-[#0F766E] p-4 text-white">
                    <p className="text-label-sm text-white/70">Retention</p>
                    <p className="mt-1 text-body-lg font-bold">98.4%</p>
                  </div>
                  <div className="rounded-xl border border-border bg-white/80 p-4">
                    <p className="text-label-sm text-text-secondary">Data Points</p>
                    <p className="mt-1 text-body-lg font-bold text-text-primary">4.2M</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-border bg-white/80 p-4">
                  <p className="text-label-sm text-text-secondary">Predictive Insights</p>
                  <div className="mt-2 flex items-end gap-1.5">
                    {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-[#22D3EE]/50" style={{ height: `${h * 0.5}px` }} />
                    ))}
                  </div>
                </div>
              </PremiumCard>
            </Reveal>
          </div>
        </section>

        {/* PRECISION FEATURES — bento */}
        <section className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="mb-12 text-center">
              <h2 className="text-headline-md text-text-primary">Precision Engineered Features.</h2>
              <p className="mt-2 text-body-md text-text-secondary">
                Every module is built to solve a specific enterprise challenge with absolute reliability.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Reveal direction="left" delay={0}>
              <PremiumCard className="h-full overflow-hidden">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#22D3EE]/10">
                  <Boxes className="h-4 w-4 text-[#0F766E]" />
                </div>
                <h3 className="mt-4 text-body-md font-semibold text-text-primary">Global Unified Data Lake</h3>
                <p className="mt-1 text-body-sm text-text-secondary">
                  Consolidate disparate data sources into a high-performance vector
                  database optimized for RAG and LLM implementations.
                </p>
                <div className="relative mt-5 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-[#0d3b36] to-[#0F766E]">
                  <svg viewBox="0 0 300 150" className="absolute inset-0 h-full w-full opacity-70">
                    <path d="M40,90 Q100,40 160,80 T260,60" fill="none" stroke="#22D3EE" strokeWidth="1" opacity="0.7" />
                    <path d="M30,110 Q120,130 200,100 T280,110" fill="none" stroke="#A8D420" strokeWidth="1" opacity="0.5" />
                    <circle cx="40" cy="90" r="2.5" fill="#22D3EE" />
                    <circle cx="160" cy="80" r="2.5" fill="#A8D420" />
                    <circle cx="260" cy="60" r="2.5" fill="#22D3EE" />
                    <circle cx="200" cy="100" r="2.5" fill="#A8D420" />
                  </svg>
                </div>
              </PremiumCard>
            </Reveal>

            <div className="flex flex-col gap-4">
              <Reveal direction="up" delay={120}>
                <PremiumCard>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-body-md font-semibold text-text-primary">Predictive Logic</h3>
                      <p className="mt-1 text-body-sm text-text-secondary">
                        Advanced ML models that forecast resource demand 72 hours in advance with 99.4% accuracy.
                      </p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#22D3EE]/20">
                      <TrendingUp className="h-5 w-5 text-[#0F766E]" />
                    </div>
                  </div>
                </PremiumCard>
              </Reveal>
              <Reveal direction="up" delay={200}>
                <PremiumCard className="flex h-full items-center gap-3">
                  <Boxes className="h-5 w-5 text-[#0F766E]" />
                  <div>
                    <h3 className="text-body-md font-semibold text-text-primary">200+ Integrations</h3>
                    <p className="text-body-sm text-text-secondary">Native connectors for every tool in your stack.</p>
                  </div>
                </PremiumCard>
              </Reveal>
            </div>

            <Reveal direction="right" delay={240}>
              <PremiumCard className="relative h-full overflow-hidden border-[#0F766E]/40 bg-gradient-to-br from-[#0F766E]/10 to-[#22D3EE]/10">
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <h3 className="text-body-md font-semibold text-text-primary">Zero-Trust Auth</h3>
                    <p className="mt-1 text-body-sm text-text-secondary">Biometric and hardware key support built-in.</p>
                  </div>
                  <Lock className="mt-6 h-8 w-8 text-[#0F766E]/60" />
                </div>
              </PremiumCard>
            </Reveal>
          </div>
        </section>

        {/* HOW IT INTEGRATES — blue+green combined, more motion */}
        <section className="mx-auto max-w-container px-margin-mobile py-4 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-bento border border-white/10 p-8 shadow-level-2 lg:p-10">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #1e3a5f 0%, #0F766E 50%, #0d3b36 100%)",
                }}
              />
              <div aria-hidden className="absolute inset-0 opacity-30">
                <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[#2563EB] blur-[100px]" />
                <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-[#22D3EE] blur-[100px]" />
              </div>

              <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-headline-md text-white">
                    How it <span className="text-[#22D3EE]">Integrates.</span>
                  </h3>
                  <p className="mt-3 text-body-md text-white/60">
                    Implementation is a seamless four-step evolution from legacy to cloud-native intelligence.
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {integrationSteps.map((step, i) => (
                      <li key={step} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#22D3EE]/40 text-label-sm text-[#22D3EE]">
                          {i + 1}
                        </span>
                        <span className="text-body-md text-white/80">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20">
                  <IntegrationFlow />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* INFRA STRIP */}
        <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <p className="mb-8 text-center text-label-sm uppercase tracking-widest text-text-secondary">
              The Infrastructure Powering Shashwat
            </p>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {infraLogos.map((logo, i) => (
              <Reveal key={logo} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <span className="text-label-sm font-semibold tracking-widest text-text-secondary">{logo}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-container px-margin-mobile pb-20 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-bento bg-gradient-to-br from-[#0d3b36] via-[#0F766E] to-[#0d3b36] p-8 shadow-level-2 lg:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/10 via-transparent to-[#A8D420]/10" />
              <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
                <div>
                  <h3 className="text-headline-md text-white">
                    Ready to lead the <span className="text-[#22D3EE]">next frontier?</span>
                  </h3>
                  <p className="mt-2 text-body-md text-white/60">
                    Join the 400+ Fortune 1000 companies optimizing their future with Shashwat.
                  </p>
                </div>
                <Link href="/contact">
                  <Button className="bg-[#22D3EE] text-[#0d3b36] hover:bg-[#67e8f9]" size="lg">
                    Contact Sales Team <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </main>
  );
}
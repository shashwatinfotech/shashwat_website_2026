import { ArrowRight, Lock, ShieldCheck, KeyRound, Server, FileCheck, Scale } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MaskReveal } from "@/components/effects/mask-reveal";
import { PremiumCard } from "@/components/effects/premium-card";
import AboutBackground from "@/app/about/AboutBackground";

export const metadata = buildMetadata({
  title: "Security",
  path: "/security",
});

const sections = [
  {
    icon: Lock,
    title: "1. Data Encryption",
    content:
      "All data transmitted to and from our platform is protected with industry-standard AES-256 encryption at rest and TLS encryption in transit. Your information stays protected at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "2. Infrastructure Security",
    content:
      "Our systems run on secure, monitored cloud infrastructure with regular vulnerability assessments, automated threat detection, and continuous uptime monitoring to keep your data and our services safe.",
  },
  {
    icon: KeyRound,
    title: "3. Access Control",
    content:
      "We enforce strict role-based access controls internally, ensuring only authorized personnel can access sensitive systems and data, with all access logged and auditable.",
  },
  {
    icon: Server,
    title: "4. Compliance & Audits",
    content:
      "We conduct regular internal security audits and align our practices with recognized industry standards to ensure our infrastructure and processes stay resilient against evolving threats.",
  },
  {
    icon: FileCheck,
    title: "5. Terms of Use",
    content:
      "By accessing or using our website and services, you agree to use them only for lawful purposes and in accordance with these terms. Content, branding, and materials on this site are the property of " +
      siteConfig.fullName +
      " and may not be reproduced without prior written permission.",
  },
  {
    icon: Scale,
    title: "6. Limitation of Liability",
    content:
      siteConfig.fullName +
      " provides its website and services on an \"as is\" basis. While we work hard to ensure accuracy and reliability, we are not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.",
  },
];

export default function SecurityPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AboutBackground />

      <div className="relative z-10">

        {/* HERO */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-container px-margin-mobile py-20 text-center md:px-gutter lg:py-24 lg:px-margin-desktop">
            <MaskReveal direction="top">
              <Badge variant="accent" className="mx-auto w-fit">Legal</Badge>
            </MaskReveal>
            <MaskReveal direction="left" delay={100}>
              <h1 className="mx-auto mt-6 max-w-2xl text-display-lg-mobile font-bold text-text-primary md:text-display-lg">
                Security & <span className="italic text-[#0F766E]">Terms</span>
              </h1>
            </MaskReveal>
            <MaskReveal direction="right" delay={200}>
              <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
                Your trust matters to us. Here's how {siteConfig.fullName} protects
                your data, and the terms that govern your use of our website
                and services.
              </p>
              <p className="mt-2 text-label-sm text-text-secondary">
                Last updated: January 2026
              </p>
            </MaskReveal>
          </div>
        </section>

        {/* SECURITY + TERMS GRID */}
        <section className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <MaskReveal
                  key={section.title}
                  direction={i % 2 === 0 ? "left" : "right"}
                  delay={i * 90}
                >
                  <PremiumCard className="h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#22D3EE]/10">
                      <Icon className="h-5 w-5 text-[#0F766E]" />
                    </div>
                    <h3 className="mt-4 text-body-lg font-semibold text-text-primary">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-body-md leading-relaxed text-text-secondary">
                      {section.content}
                    </p>
                  </PremiumCard>
                </MaskReveal>
              );
            })}

            {/* Contact — highlighted, spans full width */}
            <MaskReveal direction="top" delay={sections.length * 90} className="md:col-span-2">
              <div className="relative overflow-hidden rounded-bento bg-gradient-to-br from-[#0d3b36] via-[#0F766E] to-[#0d3b36] p-8 shadow-level-2 lg:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/10 via-transparent to-[#A8D420]/10" />
                <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
                  <div>
                    <h3 className="text-body-lg font-semibold text-white">
                      Have a security concern?
                    </h3>
                    <p className="mt-1 text-body-md text-white/60">
                      If you believe you've found a vulnerability or have
                      questions about how we protect your data, let us know.
                    </p>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-[#22D3EE] text-[#0d3b36] hover:bg-[#67e8f9]" size="lg">
                      Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </MaskReveal>
          </div>
        </section>

      </div>
    </main>
  );
}
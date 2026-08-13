import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MaskReveal } from "@/components/effects/mask-reveal";
import { PremiumCard } from "@/components/effects/premium-card";
import AboutBackground from "@/app/about/AboutBackground";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly to us, such as your name, email address, phone number, and company details when you fill out a contact form, subscribe to our newsletter, or communicate with us. We also automatically collect certain technical information, including your IP address, browser type, device information, and usage data when you visit our website.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services; respond to your inquiries and support requests; send you updates, newsletters, and marketing communications (which you can opt out of at any time); analyze usage trends to improve our website and offerings; and comply with legal obligations.",
  },
  {
    title: "3. Information Sharing",
    content:
      "We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose information when required by law or to protect our rights.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement industry-standard security measures, including encryption, access controls, and regular security audits, to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie preferences through your browser settings at any time.",
  },
  {
    title: "6. Your Rights",
    content:
      "Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information. You may also have the right to object to certain processing activities or request a copy of your data. To exercise any of these rights, please contact us using the details below.",
  },
  {
    title: "7. Data Retention",
    content:
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page with a revised effective date.",
  },
];

export default function PrivacyPolicyPage() {
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
                Privacy <span className="italic text-[#0F766E]">Policy</span>
              </h1>
            </MaskReveal>
            <MaskReveal direction="right" delay={200}>
              <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
                At {siteConfig.fullName}, we take your privacy seriously. This
                policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>
              <p className="mt-2 text-label-sm text-text-secondary">
                Last updated: August 2026
              </p>
            </MaskReveal>
          </div>
        </section>

        {/* POLICY GRID */}
        <section className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sections.map((section, i) => (
              <MaskReveal
                key={section.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 90}
              >
                <PremiumCard className="h-full">
                  <h3 className="text-body-lg font-semibold text-text-primary">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-body-md leading-relaxed text-text-secondary">
                    {section.content}
                  </p>
                </PremiumCard>
              </MaskReveal>
            ))}

            {/* Contact — highlighted, spans full width */}
            <MaskReveal direction="top" delay={sections.length * 90} className="md:col-span-2">
              <div className="relative overflow-hidden rounded-bento bg-gradient-to-br from-[#0d3b36] via-[#0F766E] to-[#0d3b36] p-8 shadow-level-2 lg:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/10 via-transparent to-[#A8D420]/10" />
                <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
                  <div>
                    <h3 className="text-body-lg font-semibold text-white">
                      10. Questions about this policy?
                    </h3>
                    <p className="mt-1 text-body-md text-white/60">
                      If you have any questions or concerns about our data
                      practices, reach out anytime — we're happy to help.
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
import Link from "next/link";
import {
  Globe, School, FileText, Inbox, Package, CalendarCheck,
  ShoppingCart, Users, BarChart3, MessageSquare, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { Reveal } from "@/components/effects/reveal";
import { PremiumCard } from "@/components/effects/premium-card";
import AboutBackground from "@/app/about/AboutBackground";

export const metadata = buildMetadata({
  title: "Products",
  path: "/products",
});

const solutions = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Fast, modern websites for companies that want a strong online presence — like the one you're on right now.",
  },
  {
    icon: School,
    title: "Institute Management Apps",
    desc: "Attendance, registration, notifications, and reports for schools and training institutes, built mobile-first.",
  },
  {
    icon: FileText,
    title: "Document Simplifier Tools",
    desc: "Tools that read long documents — like insurance policies — and send back a plain-language summary by email.",
  },
  {
    icon: Inbox,
    title: "Enquiry & Contact Dashboards",
    desc: "Admin panels that collect enquiries from your website and organize them in one place for your team.",
  },
  {
    icon: Package,
    title: "Inventory & Stock Tracking",
    desc: "Simple systems for small businesses to track stock levels, restocking, and item movement.",
  },
  {
    icon: CalendarCheck,
    title: "Booking & Appointment Systems",
    desc: "Online booking for clinics, salons, and service businesses, with reminders built in.",
  },
  {
    icon: ShoppingCart,
    title: "Online Stores",
    desc: "Storefronts for small and growing businesses to sell products online.",
  },
  {
    icon: Users,
    title: "HR & Attendance Tools",
    desc: "Employee attendance, leave tracking, and basic payroll support for small teams.",
  },
  {
    icon: BarChart3,
    title: "Sales & Lead Tracking (CRM)",
    desc: "Lightweight CRMs to track leads, follow-ups, and deals without enterprise software overhead.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp / Chat Automation",
    desc: "Automated replies and basic support flows over WhatsApp or web chat for customer queries.",
  },
];

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AboutBackground />

      <div className="relative z-10">

        {/* HERO */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-container px-margin-mobile py-20 text-center md:px-gutter lg:py-28 lg:px-margin-desktop">
            <Reveal direction="up">
              <Badge variant="accent" className="mx-auto w-fit">What We Build</Badge>
            </Reveal>
            <Reveal direction="left" delay={100}>
              <h1 className="mx-auto mt-6 max-w-2xl text-display-lg-mobile font-bold text-text-primary md:text-display-lg">
                We don&apos;t sell one product —{" "}
                <span className="italic text-[#0F766E]">we build the one you need.</span>
              </h1>
            </Reveal>
            <Reveal direction="right" delay={200}>
              <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
                Every business is different, so we don&apos;t force you into a rigid
                platform. Here are examples of the kind of software we build —
                each one tailored to how you actually work.
              </p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <div className="mt-8 flex justify-center">
                <Link href="/contact">
                  <Button className="bg-[#0F766E] hover:bg-[#0d6058] text-white" size="lg">
                    Discuss Your Idea <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="mb-12 text-center">
              <h2 className="text-headline-md text-text-primary">Examples of what we build.</h2>
              <p className="mt-2 text-body-md text-text-secondary">
                Not a fixed catalog — a starting point. Tell us your problem and we&apos;ll tell you what fits.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} direction="up" delay={i * 60}>
                  <PremiumCard className="h-full">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#22D3EE]/10">
                      <Icon className="h-4 w-4 text-[#0F766E]" />
                    </div>
                    <h3 className="mt-4 text-body-md font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-1 text-body-sm text-text-secondary">{item.desc}</p>
                  </PremiumCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* HOW WE WORK */}
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

              <div className="relative">
                <h3 className="text-headline-md text-white">
                  How a project <span className="text-[#22D3EE]">usually goes.</span>
                </h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {["Understand your problem", "Plan the build", "Build & review together", "Launch & support"].map((step, i) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#22D3EE]/40 text-label-sm text-[#22D3EE]">
                        {i + 1}
                      </span>
                      <span className="text-body-md text-white/80">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-container px-margin-mobile pb-20 pt-16 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-bento bg-gradient-to-br from-[#0d3b36] via-[#0F766E] to-[#0d3b36] p-8 shadow-level-2 lg:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/10 via-transparent to-[#A8D420]/10" />
              <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
                <div>
                  <h3 className="text-headline-md text-white">
                    Got an idea? <span className="text-[#22D3EE]">Let&apos;s build it.</span>
                  </h3>
                  <p className="mt-2 text-body-md text-white/60">
                    Tell us what you're trying to solve — we'll tell you if and how we can build it.
                  </p>
                </div>
                <Link href="/contact">
                  <Button className="bg-[#22D3EE] text-[#0d3b36] hover:bg-[#67e8f9]" size="lg">
                    Contact Us <ArrowRight className="ml-1 h-4 w-4" />
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
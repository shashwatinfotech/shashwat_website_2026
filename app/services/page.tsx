import Link from "next/link";
import {
  Terminal, Globe as GlobeIcon, Cloud, Smartphone, Palette, ShieldCheck,
  ArrowRight, CheckCircle, Building2, HeartPulse, ShoppingCart, Factory,
  Truck, Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { Reveal } from "@/components/effects/reveal";
import { ServicesBackground } from "@/components/effects/services-background";

export const metadata = buildMetadata({
  title: "Services",
  path: "/services",
});

const services = [
  {
    icon: Terminal,
    title: "Custom Software",
    desc: "Bespoke architectures built for high-scale enterprise demands.",
    points: ["Scalable backend systems", "API design & integration", "Legacy system modernization"],
  },
  {
    icon: GlobeIcon,
    title: "Web Ecosystems",
    desc: "Next-gen progressive web experiences.",
    points: ["Responsive enterprise portals", "Performance-first architecture", "SEO & accessibility built-in"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Scalable AWS, Azure & GCP clusters.",
    points: ["Auto-scaling deployments", "Cost-optimized architecture", "24/7 monitoring & alerts"],
  },
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    desc: "iOS & Android native performance.",
    points: ["Cross-platform & native apps", "Offline-first design", "App store deployment support"],
  },
  {
    icon: Palette,
    title: "Product Design",
    desc: "Human-centric interfaces that convert.",
    points: ["UX research & prototyping", "Design systems", "Conversion-focused UI"],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Enterprise-grade security at every layer.",
    points: ["Vulnerability assessments", "Compliance & audits", "Secure infrastructure design"],
  },
];

const process = [
  { step: "01", title: "Discover", desc: "We understand your business, constraints, and goals before writing a single line of code." },
  { step: "02", title: "Design", desc: "Architecture and interface plans are built collaboratively, with your team's input at every stage." },
  { step: "03", title: "Build", desc: "Agile sprints with regular check-ins — you see progress, not surprises, at every milestone." },
  { step: "04", title: "Deploy & Support", desc: "We launch, monitor, and stay on for ongoing support, scaling with you as you grow." },
];

const reasons = [
  { title: "Expert Engineering", desc: "Seasoned architects and engineers delivering enterprise-grade solutions." },
  { title: "Business-Centric", desc: "Solutions designed around your business goals and customer outcomes." },
  { title: "Future-Ready", desc: "Scalable, secure, and adaptive systems built for long-term growth." },
];

const industries = [
  { icon: Building2, title: "Finance & Banking" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: ShoppingCart, title: "Retail & E-commerce" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Truck, title: "Logistics" },
  { icon: Layers, title: "SaaS & Technology" },
];

const techStack = ["Next.js", "Node.js", "TypeScript", "React", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"];

const faqs = [
  { q: "What types of projects do you work on?", a: "We work across custom software, cloud infrastructure, mobile apps, and enterprise-grade platforms." },
{ q: "What is your typical project timeline?", a: "Timelines vary based on project scope and complexity — we provide a clear estimate after understanding your requirements during the discovery phase." },
  { q: "How do you ensure data security?", a: "Every project follows secure-by-design principles, with regular audits and compliance checks." },
  { q: "Do you provide ongoing support?", a: "Yes — we offer continuous monitoring, maintenance, and scaling support post-launch." },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <ServicesBackground />

      {/* HERO */}
      <section className="relative z-10 border-b border-border">
        <div className="mx-auto max-w-container px-margin-mobile py-20 text-center md:px-gutter lg:py-28 lg:px-margin-desktop">
          <Reveal direction="blur">
            <Badge variant="accent" className="mx-auto w-fit">Our Services</Badge>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h1 className="mx-auto mt-6 max-w-2xl text-display-lg-mobile font-bold text-text-primary md:text-display-lg">
              Precision engineering across the full technology stack
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
              From custom software to enterprise security, we deliver solutions
              engineered for scale, reliability, and long-term growth.
            </p>
          </Reveal>
          <Reveal direction="scale" delay={300}>
            
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID — detailed */}
      <section className="relative z-10 mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
        <Reveal direction="up">
          <div className="mb-12 text-center">
            <p className="text-label-sm uppercase text-text-secondary">Our Capabilities</p>
            <h2 className="mt-2 text-headline-md text-text-primary">
              A modular approach to full-spectrum digital transformation
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} direction="up" delay={i * 80}>
              <div className="group h-full rounded-bento border border-border bg-white/70 backdrop-blur-xl p-8 transition-all duration-300 hover:scale-[1.01] hover:border-primary-container hover:shadow-magnetic-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-secondary-container-foreground" />
                </div>
                <h3 className="mt-5 text-body-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-body-md text-text-secondary">{service.desc}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-body-sm text-text-secondary">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-container" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 border-y border-border bg-surface-container-low/70 backdrop-blur-xl">
        <div className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="mb-12 text-center">
              <p className="text-label-sm uppercase text-text-secondary">How We Work</p>
              <h2 className="mt-2 text-headline-md text-text-primary">
                A process built for clarity and momentum
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} direction="up" delay={i * 80}>
                <div className="h-full rounded-bento border border-border bg-white/70 backdrop-blur-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-magnetic-hover">
                  <p className="text-display-sm font-bold text-primary-container">{item.step}</p>
                  <h3 className="mt-2 text-body-md font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-body-sm text-text-secondary">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SHASHWAT */}
      <section className="relative z-10 mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
        <Reveal direction="up">
          <div className="mb-12 text-center">
            <p className="text-label-sm uppercase text-text-secondary">Why Choose SHASHWAT?</p>
            <h2 className="mt-2 text-headline-md text-text-primary">
              Built on expertise, focused on outcomes
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {reasons.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 100}>
              <div className="h-full rounded-bento border border-border bg-white/70 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-magnetic-hover">
                <h3 className="text-body-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-body-md text-text-secondary">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="relative z-10 border-y border-border bg-surface-container-low/70 backdrop-blur-xl">
        <div className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="mb-12 text-center">
              <p className="text-label-sm uppercase text-text-secondary">Industries We Serve</p>
              <h2 className="mt-2 text-headline-md text-text-primary">
                Engineering solutions across every sector
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((item, i) => (
              <Reveal key={item.title} direction="scale" delay={i * 60}>
                <div className="flex h-full flex-col items-center gap-3 rounded-bento border border-border bg-white/70 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:scale-[1.05] hover:border-primary-container hover:shadow-magnetic-hover">
                  <item.icon className="h-6 w-6 text-primary-container" />
                  <span className="text-body-sm font-medium text-text-primary">{item.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="relative z-10 mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
        <Reveal direction="up">
          <div className="mb-12 text-center">
            <p className="text-label-sm uppercase text-text-secondary">Our Technology Stack</p>
            <h2 className="mt-2 text-headline-md text-text-primary">Built on world-class tools</h2>
          </div>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <Reveal key={tech} direction="scale" delay={i * 50}>
              <div className="cursor-default rounded-full border border-border bg-white/70 backdrop-blur-xl px-5 py-2 text-body-md font-medium text-text-secondary transition-all duration-200 hover:border-primary-container hover:text-primary-container hover:scale-105">
                {tech}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-y border-border bg-surface-container-low/70 backdrop-blur-xl">
        <div className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <div className="mb-12 text-center">
              <p className="text-label-sm uppercase text-text-secondary">Frequently Asked Questions</p>
              <h2 className="mt-2 text-headline-md text-text-primary">Answers to common questions</h2>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {faqs.map((item, i) => (
              <Reveal key={item.q} direction="up" delay={i * 80}>
                <div className="h-full rounded-bento border border-border bg-white/70 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-magnetic-hover">
                  <h3 className="text-body-md font-semibold text-text-primary">{item.q}</h3>
                  <p className="mt-2 text-body-sm text-text-secondary">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-inverse-surface">
        <div className="mx-auto max-w-container px-margin-mobile py-20 text-center md:px-gutter lg:px-margin-desktop">
          <Reveal direction="up">
            <h2 className="text-display-lg-mobile font-bold text-inverse-on-surface md:text-headline-md">
              Ready to start your <span className="text-accent">next project?</span>
            </h2>
            <p className="mt-4 text-body-lg text-inverse-on-surface/70">
              Let's discuss how we can help engineer your next solution.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
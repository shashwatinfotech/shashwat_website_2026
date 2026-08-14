"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/effects/reveal";
import { PremiumCard } from "@/components/effects/premium-card";
import AboutBackground from "@/app/about/AboutBackground";

type StackChip = { role: string; value: string };
type Shot = { src: string; alt: string; caption: string };

type CaseStudy = {
  id: string;
  code: string;
  sector: string;
  title: string;
  tagline: string;
  client: string;
  scope: string;
  problemHeading: string;
  problemLede: string;
  challenge: string;
  solutionHeading: string;
  solutionLede: string;
  stack: StackChip[];
  shots?: Shot[];
  deliverables: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "sv-chemtex",
    code: "CASE STUDY / 001",
    sector: "Chemical Industry · E-Commerce & Support Automation",
    title: "SV Chemtex",
    tagline:
      "A full-stack ordering experience for a chemical distributor — a native customer app backed by a chatbot, with an internet-hosted admin panel behind it.",
    client: "SV Chemtex",
    scope: "React Native App + Admin Panel",
    problemHeading: "Ordering chemicals meant phone calls and paperwork",
    problemLede:
      "SV Chemtex sells chemical products to business buyers, but had no digital storefront. Every enquiry, quote, and order depended on a person picking up the phone or replying to email — slow for the buyer, and hard for the SV Chemtex team to track, manage, or scale.",
    challenge:
      "Give customers a self-serve way to browse, ask questions, and place orders — without losing the guidance a chemical buyer needs before purchasing — while giving the SV Chemtex team a single place to run the whole operation.",
    solutionHeading: "A native app with a built-in chatbot, run from one admin panel",
    solutionLede:
      "A full-stack e-commerce application built with React Native, so customers get a native mobile experience for browsing products and ordering. ChemBot, an AI assistant built into the app, answers product questions and walks buyers through a compliant order — checking purity, quantity, and hazmat handling along the way. Order history, invoicing, and settlement are all handled in-app. An admin panel hosted online gives the SV Chemtex team a live view of orders, products, and customer activity from anywhere.",
    stack: [
      { role: "Customer App", value: "React Native" },
      { role: "Interaction", value: "E-commerce Chatbot" },
      { role: "Admin Panel", value: "Web-based, Internet-hosted" },
      { role: "Architecture", value: "Full Stack" },
    ],
    shots: [
      { src: "https://res.cloudinary.com/ylsy6gvy/image/upload/v1784705376/shot-home_dofhp5.jpg", alt: "SV Chemtex home dashboard", caption: "Home dashboard — compliance status & quick access to orders" },
      { src: "https://res.cloudinary.com/ylsy6gvy/image/upload/v1784705375/shot-chatbot_lqivlz.jpg", alt: "ChemBot chat interface", caption: "ChemBot — AI ordering assistant" },
      { src: "https://res.cloudinary.com/ylsy6gvy/image/upload/v1784705375/shot-history_p6dpgr.jpg", alt: "Order history screen", caption: "Order history — searchable compliance records" },
    ],
    deliverables: [
      "Full-stack e-commerce application for the chemical industry vertical",
      "Native customer-facing app built with React Native, with an integrated ordering chatbot",
      "Admin panel hosted over the internet for day-to-day operations",
    ],
  },
  {
    id: "shashwat-consultant",
    code: "CASE STUDY / 002",
    sector: "Business Consulting · Guided Software Recommendation",
    title: "Shashwat Business Consultant",
    tagline:
      "An informational website that asks a business a few questions and tells them which software solution would actually help them grow.",
    client: "Shashwat Business Consultant",
    scope: "Website + Recommendation Engine",
    problemHeading: "Every business needs different software — but doesn't know which",
    problemLede:
      "Shashwat Business Consultant advises businesses on how to grow, and software recommendations are a core part of that advice. But there was no way to give that recommendation without a one-on-one conversation every time.",
    challenge:
      "Take a business through a short set of questions about how they operate, and surface a software recommendation suited to their situation — automatically, on the website, without waiting on a consultant's time.",
    solutionHeading: "A questionnaire-driven website that recommends the right software",
    solutionLede:
      "A business-facing website built with a React front end and a FastAPI backend, backed by PostgreSQL. A visitor answers a short questionnaire about their business, and the backend evaluates the answers to suggest which software solution would help that business grow. Every response is also pushed to Google Cloud and logged into a spreadsheet.",
    stack: [
      { role: "Frontend", value: "React" },
      { role: "Backend", value: "FastAPI" },
      { role: "Database", value: "PostgreSQL" },
      { role: "Data Logging", value: "Google Cloud → Sheets" },
    ],
    shots: [
      { src: "https://res.cloudinary.com/ylsy6gvy/image/upload/v1784714227/Screenshot_2026-07-22_152652_vb5gsu.png", alt: "Website homepage", caption: "Website homepage" },
      { src: "https://res.cloudinary.com/ylsy6gvy/image/upload/v1784714042/Screenshot_2026-07-22_151943_rj0jtw.png", alt: "Chat interface", caption: "The conversational questionnaire" },
      { src: "https://res.cloudinary.com/ylsy6gvy/image/upload/v1784714042/Screenshot_2026-07-22_152155_jax4yp.png", alt: "Software suggestion", caption: "Recommendation returned to the business" },
    ],
    deliverables: [
      "Informational business website with an interactive questionnaire",
      "Backend logic (FastAPI + PostgreSQL) that evaluates answers and recommends a software solution",
      "Automatic logging of every questionnaire response to Google Sheets via Google Cloud",
    ],
  },
  {
    id: "health-insurance-bot",
    code: "CASE STUDY / 003",
    sector: "Health Insurance · Document Q&A (RAG)",
    title: "Shashwat-Health Insurance Bot",
    tagline:
      "A chatbot that answers policy and coverage questions by retrieving the answer straight from the actual insurance documents.",
    client: "Shashwat-Health Insurance Bot",
    scope: "RAG Chatbot / Q&A Interface",
    problemHeading: "Policy answers were buried inside dense coverage documents",
    problemLede:
      "Health insurance policies and coverage documents are long, dense, and hard for a customer to search through on their own. Finding a straight answer to a question like \"is this procedure covered\" meant reading through pages of policy text, or waiting on a person to look it up.",
    challenge:
      "Let a customer ask a plain-language question about their policy or coverage and get an accurate answer pulled directly from the relevant documents — instead of a generic answer or a manual document search.",
    solutionHeading: "A retrieval-augmented chatbot grounded in the policy documents",
    solutionLede:
      "A Retrieval-Augmented Generation (RAG) chatbot with a React front end. Policy and coverage documents are converted into embeddings, so when a customer asks a question, the system retrieves the most relevant passages and passes them to an LLM to generate a grounded, accurate answer — rather than the model guessing from general knowledge.",
    stack: [
      { role: "Frontend", value: "React" },
      { role: "Retrieval", value: "Embeddings" },
      { role: "Generation", value: "LLM" },
      { role: "Architecture", value: "RAG" },
    ],
    shots: [
      { src: "https://res.cloudinary.com/ylsy6gvy/image/upload/v1784721003/Screenshot_2026-07-22_171509_blyudx.png", alt: "Chatbot interface", caption: "Chatbot interface" },
      { src: "https://res.cloudinary.com/ylsy6gvy/image/upload/v1784721004/Screenshot_2026-07-22_171500_hstwal.png", alt: "Policy question and answer", caption: "Policy question & retrieved answer" },
      { src: "https://res.cloudinary.com/ylsy6gvy/image/upload/v1784721003/Screenshot_2026-07-22_171529_hxwz1m.png", alt: "Source document reference", caption: "Source document reference" },
    ],
    deliverables: [
      "RAG chatbot answering policy and coverage questions from source documents",
      "Embedding-based retrieval pipeline over health insurance policy documents",
      "React-based chat interface for customer-facing Q&A",
    ],
  },
  {
    id: "shashwat-migrate",
    code: "CASE STUDY / 004",
    sector: "Healthcare · Data Migration",
    title: "Shashwat.Migrate",
    tagline:
      "A migration project that pulled patient records out of many disconnected scripts and systems and consolidated them into one.",
    client: "Shashwat.Migrate",
    scope: "Patient Record Migration",
    problemHeading: "Patient records were scattered across many separate scripts",
    problemLede:
      "Patient records existed across a number of disconnected scripts, each handling its own slice of the data in its own way. There was no single source of truth — the same patient's information could be split across several systems.",
    challenge:
      "Consolidate patient records spread across many separate scripts into one unified system, without losing or corrupting data along the way.",
    solutionHeading: "A Java-based migration pipeline unifying the scripts into one",
    solutionLede:
      "A migration pipeline built on a Java framework, working alongside the existing PHP scripts, to pull patient records out of each separate script and merge them into a single, consistent system. The migration was built to handle the many-to-one consolidation cleanly.",
    stack: [
      { role: "Migration Framework", value: "Java" },
      { role: "Legacy Scripts", value: "PHP" },
      { role: "Migration Pattern", value: "Many → One" },
      { role: "Data Type", value: "Patient Records" },
    ],
    deliverables: [
      "Java-based migration pipeline consolidating patient records from many scripts into one system",
      "Integration with existing PHP scripts as source systems for the migration",
      "Unified patient record store replacing the previously fragmented setup",
    ],
  },
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal direction="up" delay={index * 100}>
      <PremiumCard className="overflow-hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full flex-col items-start gap-5 text-left sm:flex-row sm:justify-between"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-label-sm text-[#0F766E]">{study.code}</span>
              <span className="rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-3 py-1 text-label-sm text-[#0F766E]">
                ● Delivered
              </span>
            </div>
            <p className="font-mono text-label-sm uppercase tracking-wide text-text-secondary">
              {study.sector}
            </p>
            <h3 className="text-headline-md leading-tight text-text-primary">{study.title}</h3>
            <p className="max-w-2xl text-body-lg leading-relaxed text-text-secondary">{study.tagline}</p>
          </div>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>

        <div className="mt-8 grid grid-cols-1 gap-5 border-t border-border pt-6 sm:grid-cols-3">
          <div>
            <p className="text-label-sm uppercase text-text-secondary">Client</p>
            <p className="mt-1 text-body-md font-semibold text-text-primary">{study.client}</p>
          </div>
          <div>
            <p className="text-label-sm uppercase text-text-secondary">Sector</p>
            <p className="mt-1 text-body-md font-semibold text-text-primary">{study.sector.split("·")[0].trim()}</p>
          </div>
          <div>
            <p className="text-label-sm uppercase text-text-secondary">Scope</p>
            <p className="mt-1 text-body-md font-semibold text-text-primary">{study.scope}</p>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-8 flex flex-col gap-10 border-t border-border pt-8">

                {/* PROBLEM */}
                <div>
                  <p className="font-mono text-label-sm text-[#0F766E]">01 / PROBLEM</p>
                  <h4 className="mt-2 text-body-lg font-semibold leading-snug text-text-primary">{study.problemHeading}</h4>
                  <p className="mt-3 text-body-md leading-relaxed text-text-secondary">{study.problemLede}</p>
                  <div className="mt-4 rounded-xl bg-[#0F172A] p-5">
                    <p className="font-mono text-label-sm uppercase text-[#22D3EE]">Core challenge</p>
                    <p className="mt-2 text-body-sm leading-relaxed text-white/80">{study.challenge}</p>
                  </div>
                </div>

                {/* SOLUTION */}
                <div>
                  <p className="font-mono text-label-sm text-[#0F766E]">02 / SOLUTION</p>
                  <h4 className="mt-2 text-body-lg font-semibold leading-snug text-text-primary">{study.solutionHeading}</h4>
                  <p className="mt-3 text-body-md leading-relaxed text-text-secondary">{study.solutionLede}</p>
                  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {study.stack.map((chip) => (
                      <div key={chip.role} className="rounded-lg border border-border bg-surface-container-low p-4">
                        <p className="text-label-sm uppercase text-text-secondary">{chip.role}</p>
                        <p className="mt-1.5 text-body-sm font-semibold text-text-primary">{chip.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EVIDENCE */}
                {study.shots && study.shots.length > 0 && (
                  <div>
                    <p className="font-mono text-label-sm text-[#0F766E]">03 / FROM THE BUILD</p>
                    <div className="mt-4 flex gap-5 overflow-x-auto pb-2">
                      {study.shots.map((shot) => (
                        <div key={shot.src} className="w-64 shrink-0 overflow-hidden rounded-xl border border-border bg-white">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={shot.src} alt={shot.alt} className="h-72 w-full object-cover object-top" />
                          <p className="p-4 text-body-sm text-text-secondary">{shot.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* DELIVERABLES */}
                <div>
                  <p className="font-mono text-label-sm text-[#0F766E]">
                    {study.shots ? "04" : "03"} / DELIVERABLES
                  </p>
                  <ul className="mt-4 flex flex-col gap-3">
                    {study.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-surface-container-low p-4 text-body-md text-text-secondary">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PremiumCard>
    </Reveal>
  );
}

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AboutBackground />

      <div className="relative z-10">

        {/* HERO */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-container px-margin-mobile py-20 text-center md:px-gutter lg:py-24 lg:px-margin-desktop">
            <Reveal direction="up">
              <Badge variant="accent" className="mx-auto w-fit">Case Studies</Badge>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h1 className="mx-auto mt-6 max-w-2xl text-display-lg-mobile font-bold text-text-primary md:text-display-lg">
                Real problems.{" "}
                <span className="italic text-[#0F766E]">Real builds.</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="mx-auto mt-5 max-w-xl text-body-lg text-text-secondary">
                A few of the projects we've shipped — tap any card to see the
                problem, the solution, and what was delivered.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CASE STUDIES LIST */}
        <section className="mx-auto max-w-container px-margin-mobile py-20 md:px-gutter lg:px-margin-desktop">
          <div className="flex flex-col gap-8">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
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
                    Got a problem like these? <span className="text-[#22D3EE]">Let's talk.</span>
                  </h3>
                  <p className="mt-2 text-body-md text-white/60">
                    Tell us what you're dealing with — we'll tell you how we'd approach it.
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
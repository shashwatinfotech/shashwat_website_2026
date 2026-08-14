import { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";


import AboutBackground from "@/app/about/AboutBackground";
import Hero from "./Hero";
import FounderStory from "./FounderStory";
import MissionVision from "./MissionVision";
import EngineeringPrinciples from "./EngineeringPrinciples";
import HowWeOperate from "@/components/sections/how-we-operate";

import AboutTimeline from "./AboutTimeline";
import Infrastructure from "./Infrastructure";
import FinalCTA from "./FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  path: "/about",
});





const principles = [
  {
    title:
      "Precision First",
    description:
      "Every line of code is engineered for reliability, scale and future growth.",
    icon:
      "⌘",
  },

  {
    title:
      "Developer Mindset",
    description:
      "We solve problems like engineers, not just deliver features.",
    icon:
      "</>",
  },

  {
    title:
      "Technical Excellence",
    description:
      "Modern architecture, clean systems and obsessive attention to detail.",
    icon:
      "∞",
  },

  {
    title:
      "Fast Iteration",
    description:
      "Rapid experiments without compromising quality.",
    icon:
      "⚡",
  },

  {
    title:
      "Infotech Security",
    description:
      "Security designed into every layer.",
    icon:
      "◈",
  },
];


const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "A small engineering team started building software with a bigger vision.",
  },

  {
    year: "2023",
    title: "Scaling Products",
    description:
      "Expanded into enterprise-grade applications.",
  },

  {
    year: "2025",
    title: "Cloud Era",
    description:
      "Built scalable cloud-first systems.",
  },

  {
    year: "2026",
    title: "Engineering At Scale",
    description:
      "Helping businesses worldwide build digital products.",
  },
];


export default function AboutPage() {

  return (

    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-white
      text-neutral-900
      "
    >


      {/* GLOBAL MOTION BACKGROUND */}

      <AboutBackground />



      {/* HERO */}

      <Hero />



      {/* STORY */}

      <FounderStory />



      {/* MISSION */}

      <MissionVision />



      {/* PRINCIPLES */}

      <EngineeringPrinciples
        principles={principles}
      />

    {/* HOW WE OPERATE */}

    <HowWeOperate />



      {/* TIMELINE */}

      <AboutTimeline
        timeline={timeline}
      />



      {/* NUMBERS */}

      <Infrastructure />



      {/* FINAL CTA */}

      <FinalCTA />



    </main>

  );
}
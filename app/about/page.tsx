import { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import { buildMetadata } from "@/lib/seo";

import AboutBackground from "@/app/about/AboutBackground";
import Hero from "./Hero";
import FounderStory from "./FounderStory";
import MissionVision from "./MissionVision";
import EngineeringPrinciples from "./EngineeringPrinciples";
import MindsBehind from "./MindsBehind";
import AboutTimeline from "./AboutTimeline";
import Infrastructure from "./Infrastructure";
import FinalCTA from "./FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  path: "/about",
});


const engineers = [
  {
    name: "Alan Turing",
    role: "Computational Thinking",
    quote:
      "Machines take me by surprise with great frequency.",
    speciality:
      "Algorithms • Artificial Intelligence • Logic",
    image:
      "/images/minds/turing.webp",
  },

  {
    name: "Grace Hopper",
    role: "Programming Pioneer",
    quote:
      "The most dangerous phrase is 'we've always done it this way'.",
    speciality:
      "Compilers • Languages • Systems",
    image:
      "/images/minds/hopper.webp",
  },

  {
    name: "Dennis Ritchie",
    role: "Systems Architect",
    quote:
      "Software shapes the world we build.",
    speciality:
      "C Language • UNIX • Operating Systems",
    image:
      "/images/minds/ritchie.webp",
  },

  {
    name: "Ada Lovelace",
    role:
      "First Computer Programmer",
    quote:
      "The analytical engine weaves algebraic patterns.",
    speciality:
      "Mathematics • Computing • Innovation",
    image:
      "/images/minds/ada.webp",
  },

  {
    name: "Linus Torvalds",
    role:
      "Open Source Engineering",
    quote:
      "Talk is cheap. Show me the code.",
    speciality:
      "Linux • Kernel • Distributed Systems",
    image:
      "/images/minds/linus.webp",
  },

  {
    name: "Tim Berners-Lee",
    role:
      "Web Infrastructure",
    quote:
      "The web is more a social creation than a technical one.",
    speciality:
      "Internet • Protocols • Web",
    image:
      "/images/minds/tim.webp",
  },
];


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
      "Enterprise Security",
    description:
      "Security designed into every layer.",
    icon:
      "◈",
  },
];


const timeline = [
  {
    year:
      "2014",
    title:
      "The Beginning",
    description:
      "A small engineering team started building software with a bigger vision.",
  },

  {
    year:
      "2017",
    title:
      "Scaling Products",
    description:
      "Expanded into enterprise-grade applications.",
  },

  {
    year:
      "2020",
    title:
      "Cloud Era",
    description:
      "Built scalable cloud-first systems.",
  },

  {
    year:
      "2026",
    title:
      "Engineering At Scale",
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



      {/* TECHNOLOGY LEGENDS */}

      <MindsBehind
        engineers={engineers}
      />



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
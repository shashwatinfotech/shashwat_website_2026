"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, ArrowUp } from "lucide-react";
import { siteConfig, footerNav, socialLinks } from "@/constants/site";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

export function Footer() {
  const year = new Date().getFullYear();
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-border bg-white">
      <div className="mx-auto max-w-container px-margin-mobile py-16 md:px-gutter lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <span className="text-body-lg font-bold text-slate-900">
              {siteConfig.name}
            </span>
            <p className="text-body-md text-slate-600 max-w-xs">
              Precision engineering for the next generation of digital
              enterprise. Accelerating digitalization through world-class
              technology solutions.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-slate-600 transition-colors hover:border-teal-600 hover:text-teal-700"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerNav.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <span className="text-label-sm uppercase font-semibold text-slate-800">
                {group.title}
              </span>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body-md text-slate-600 transition-colors hover:text-teal-700 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:gap-8">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="flex items-center gap-2 text-body-md text-slate-600 transition-colors hover:text-teal-700"
          >
            <Mail className="h-4 w-4 text-teal-700" />
            {siteConfig.contactEmail}
          </a>
          <a
            href={`tel:${siteConfig.supportPhone}`}
            className="flex items-center gap-2 text-body-md text-slate-600 transition-colors hover:text-teal-700"
          >
            <Phone className="h-4 w-4 text-teal-700" />
            {siteConfig.supportPhone}
          </a>
          <div className="flex items-center gap-2 text-body-md text-slate-600">
            <MapPin className="h-4 w-4 text-teal-700" />
            11th Floor, Citadel, Opp. Star Bazaar, Adajan Road, Surat 395009, India
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <span
            onDoubleClick={() => router.push("/admin")}
            className="cursor-default select-none text-label-sm text-slate-500"
          >
            © {year} {siteConfig.fullName}. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-600 hover:text-teal-700"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
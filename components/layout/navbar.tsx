"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { primaryNav, authRoutes, siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/layout/nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-5 z-50 flex justify-center px-4
          animate-[nav-drop_0.65s_cubic-bezier(0.22,1,0.36,1)_forwards]"
      >
        <div className={cn(
          "w-full max-w-7xl rounded-2xl border transition-all duration-500 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/75",
          scrolled
            ? "border-emerald-100/70 bg-white/85 shadow-[0_20px_60px_rgba(15,118,110,.12)]"
            : "border-white/50 bg-white/55 shadow-[0_12px_40px_rgba(15,23,42,.05)]"
        )}>
          <div className="flex h-16 items-center justify-between px-6 lg:px-8">

            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 focus-visible:outline-none">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-md transition-transform duration-250 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt={siteConfig.name}
                  width={42}
                  height={42}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-emerald-200/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900">
                  {siteConfig.name}
                </span>
                <span className="hidden text-[11px] font-medium tracking-[0.25em] uppercase text-slate-500 lg:block">
                  Enterprise Technology
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-10 lg:flex">
              {primaryNav.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link href={authRoutes.login}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full px-5 text-slate-600 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900"
                >
                  Login
                </Button>
              </Link>
              <Link href="/contact">
  <Button
    variant="primary"
    size="sm"
    className="group rounded-full bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 px-6 shadow-lg shadow-teal-700/20 transition-all duration-300 hover:shadow-xl hover:shadow-teal-600/30"
  >
    <span>Get Started</span>

    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Button>
</Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-teal-300 hover:text-teal-700 hover:rotate-90 active:scale-[0.92] lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="h-24" aria-hidden="true" />
    </>
  );
}
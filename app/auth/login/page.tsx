"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/effects/reveal";
// ⚠️ CONFIRM PATH — same background component used across the site
import AboutBackground from "@/app/about/AboutBackground";

export default function LoginPage() {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden px-margin-mobile py-16">

      <AboutBackground />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-8">

        {/* BRAND HEADER */}
        <Reveal direction="up">
          <div className="text-center">
            <h1 className="text-headline-md font-bold tracking-tight text-text-primary">
              SHASHWAT
            </h1>
            <p className="mt-1 text-label-sm uppercase tracking-widest text-text-secondary">
              Enterprise Identity
            </p>
          </div>
        </Reveal>

        {/* AUTH CARD */}
        <Reveal direction="scale" delay={100}>
            <div className="w-full max-w-8x4 rounded-bento border border-border bg-white p-60 shadow-level-2 sm:p-32">
            {/* TABS */}
            <div className="flex items-center gap-40 border-b border-border">
              <button
                onClick={() => setTab("login")}
                className={`relative pb-3 text-body-sm font-semibold uppercase tracking-wide transition-colors ${
                  tab === "login" ? "text-[#0F766E]" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Login
                {tab === "login" && (
                  <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-[#0F766E]" />
                )}
              </button>
              <button
                onClick={() => setTab("register")}
                className={`relative pb-3 text-body-sm font-semibold uppercase tracking-wide transition-colors ${
                  tab === "register" ? "text-[#0F766E]" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Register
                {tab === "register" && (
                  <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-[#0F766E]" />
                )}
              </button>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col gap-5"
            >
              {tab === "register" && (
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your name" required />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="name@company.com" required
                  className="py-3 text-body-lg" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  {tab === "login" && (
                    <Link href="/auth/forgot-password" className="text-label-sm font-medium text-[#0F766E] hover:underline">
                      Forgot password?
                    </Link>
                  )}
                </div>
                <Input id="password" type="password" placeholder="••••••••" required
                  className="py-3 text-body-lg" />
              </div>

              <Button type="submit" variant="primary" size="lg" className="mt-1 w-full">
                {tab === "login" ? "Continue" : "Create Account"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-label-sm text-text-secondary">OR</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-body-sm font-medium text-text-primary transition-colors hover:border-[#0F766E]">
                <svg className="h-4 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0012 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 015.5 12c0-.73.13-1.44.34-2.09V7.06H2.18A11 11 0 001 12c0 1.77.42 3.45 1.18 4.94l3.66-2.85z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 00-9.82 6.06l3.66 2.85C6.71 7.31 9.14 5.38 12 5.38z" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-body-sm font-medium text-text-primary transition-colors hover:border-[#0F766E]">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.365 1.43c0 1.14-.42 2.05-1.26 2.83-.9.85-2.02 1.35-3.16 1.26-.13-1.14.44-2.13 1.26-2.9.86-.83 2.14-1.4 3.16-1.19zM20.5 17.19c-.5 1.15-.74 1.66-1.38 2.68-.9 1.42-2.16 3.2-3.73 3.21-1.4.02-1.76-.9-3.65-.89-1.9.01-2.3.91-3.7.89-1.57-.02-2.76-1.62-3.66-3.03-2.5-3.92-2.77-8.53-1.22-10.98 1.1-1.74 2.83-2.76 4.46-2.76 1.65 0 2.7.9 4.06.9 1.32 0 2.14-.9 4.06-.9 1.45 0 2.99.8 4.08 2.17-3.6 1.98-3.02 7.13.68 8.71z" />
                </svg>
                Apple
              </button>
            </div>
          </div>
        </Reveal>

        {/* FOOTER LINKS */}
        <Reveal direction="up" delay={200}>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-4 text-label-sm text-text-secondary">
              <Link href="/privacy" className="hover:text-text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-text-primary">Terms of Service</Link>
              <Link href="/security" className="hover:text-text-primary">Security</Link>
            </div>
            <p className="text-label-sm text-text-secondary/70">
              © 2024 SHASHWAT ENTERPRISE. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
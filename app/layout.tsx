import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { siteConfig } from "@/constants/site";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { FloatingContact } from "@/components/effects/floating-contact";
import { AdminShortcut } from "@/components/effects/admin-shortcut";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-text-primary">
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
        <Toaster />
        <AdminShortcut />
      </body>
    </html>
  );
}
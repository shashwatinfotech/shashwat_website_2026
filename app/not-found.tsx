import Link from "next/link";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";
// ⚠️ CONFIRM PATH — same background component used on About/Home/Products/Services/Contact
import AboutBackground from "@/app/about/AboutBackground";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-x-hidden px-margin-mobile text-center">

      <AboutBackground />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <Reveal direction="scale">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-container">
            <SearchX className="h-8 w-8 text-secondary-container-foreground" />
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div>
            <h1 className="text-display-lg-mobile text-text-primary md:text-display-lg">
              404
            </h1>
            <p className="mt-2 text-body-lg text-text-secondary">
              This page could not be found.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <p className="max-w-sm text-body-sm text-text-secondary">
            The page you're looking for may have been moved, deleted, or never existed.
          </p>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/">
              <Button variant="primary" size="lg">Back to Home</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">Contact Support</Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
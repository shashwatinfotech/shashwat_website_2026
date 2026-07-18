import { siteConfig } from "@/constants/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-margin-mobile text-center">
      <span className="rounded-full bg-secondary-container px-3 py-1 text-label-sm uppercase text-secondary-container-foreground">
        Phase 1 — Foundation
      </span>
      <h1 className="text-display-lg-mobile text-text-primary md:text-display-lg">
        {siteConfig.name}
      </h1>
      <p className="max-w-md text-body-lg text-text-secondary">
        {siteConfig.tagline}. Design tokens, fonts, and motion primitives are
        wired up — homepage sections land in Phase 5.
      </p>
    </main>
  );
}

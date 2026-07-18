# Shashwat Enterprise

Enterprise SaaS marketing site, client portal, and admin panel — built with
Next.js 15, React 19, TypeScript, and Tailwind CSS, on the **Kinetic
Precision** design system.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js 15 (App Router, Server Components by default)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS, tokens in `tailwind.config.ts` + `constants/design-tokens.ts`
- **Motion:** Framer Motion, shared variants in `lib/motion.ts`
- **Forms:** React Hook Form + Zod
- **Primitives:** Radix UI (used to build the shadcn-style components in `components/ui`)
- **Icons:** Lucide React
- **Charts:** Recharts

## Folder structure

```
/app          route segments (pages, layouts)
/components   /ui (primitives), /layout (nav, footer), /sections (page sections)
/features     feature-scoped modules (auth, portal, admin)
/hooks        shared React hooks
/lib          fonts, motion variants, utils (cn, formatters)
/utils        pure helper functions
/constants    design tokens, site nav, static config
/types        shared TypeScript types
/public       static assets
```

## Design system source of truth

`tailwind.config.ts` and `constants/design-tokens.ts` are both derived
directly from `DESIGN.md` (Kinetic Precision). If a token needs to change,
change it there first, not in a component.

## Build phases

| # | Phase | Status |
|---|-------|--------|
| 1 | Project Setup | ✅ Done |
| 2 | Global UI Components | ⏳ Next |
| 3 | Navigation | Pending |
| 4 | Footer / Cookie Banner / Back-to-top | Pending |
| 5–7 | Homepage | Pending |
| 8 | About | Pending |
| 9 | Solutions / Services | Pending |
| 10–11 | Products | Pending |
| 12 | Technologies | Pending |
| 13 | Careers | Pending |
| 14 | Contact | Pending |
| 15 | Support | Pending |
| 16 | Authentication | Pending |
| 17–18 | Client Portal | Pending |
| 19–20 | Admin Panel | Pending |
| 21 | 404 + QA | Pending |

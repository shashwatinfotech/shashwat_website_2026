export const siteConfig = {
  name: "SHASHWAT",
  fullName: "Shashwat Enterprise",
  tagline: "Accelerating Digitalization",
  description:
    "Precision engineered enterprise solutions for the modern world.",
  url: "https://shashwat.enterprise",
  supportEmail: "support@shashwat.io",
  contactEmail: "hello@shashwat.enterprise",
  supportPhone: "+1 (800) SHASHWAT",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Resources", href: "/resources" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Products", href: "/products" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Integration", href: "/integration" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal & Contact",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Security", href: "/legal/security" },
      { label: "Status", href: "/status" },
    ],
  },
];

export const authRoutes = {
  login: "/auth/login",
  register: "/auth/register",
} as const;

export const siteConfig = {
  name: "SHASHWAT",
  fullName: "Shashwat Enterprise",
  tagline: "Accelerating Digitalization",
  description: "Precision engineered enterprise solutions for the modern world.",
  url: "https://shashwat.enterprise",
  supportEmail: "support@shashwat.io",
  contactEmail: "info.shashwatinfotech@gmail.com",
  supportPhone: "+91 94275 48252",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
{ label: "Products", href: "/products" },  { label: "Services", href: "/services" },
{ label: "Privacy Policy", href: "/privacy" },];


export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Products", href: "/products" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Security", href: "/security" },
    ],
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
];

export const authRoutes = {
  login: "/auth/login",
  register: "/auth/register",
} as const;
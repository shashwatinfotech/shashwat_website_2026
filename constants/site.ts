export const siteConfig = {
  name: "SHASHWAT",
  fullName: "Shashwat Enterprise",
  tagline: "Accelerating Digitalization",
  description: "Precision engineered enterprise solutions for the modern world.",
  url: "https://shashwat.enterprise",
  supportEmail: "support@shashwat.io",
  contactEmail: "info.shashwatinfotech@gmail.com",
  supportPhone: "+91 92744 49511",
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
     { label: "Case Studies", href: "/casestudies" },
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
  { label: "Facebook", href: "https://www.facebook.com/share/1cRn2Fdao6/", icon: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shashwat-infotech-6b5a38200", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/info.shashwatinfotech", icon: "instagram" },
];

export const authRoutes = {
  login: "/auth/login",
  register: "/auth/register",
} as const;
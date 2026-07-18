export type Status = "active" | "pending" | "critical";

export interface StatCardData {
  label: string;
  value: string;
  delta?: string;
  deltaDirection?: "up" | "down";
  icon?: React.ReactNode;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  span?: "sm" | "md" | "lg";
  variant?: "default" | "dark" | "accent";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

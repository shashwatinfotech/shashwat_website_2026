"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/constants/site";

interface NavLinkProps {
  href: string;
  label: string;
  children?: NavItem[];
  onClick?: () => void;
  className?: string;
}

export function NavLink({
  href,
  label,
  children,
  onClick,
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive =
    pathname === href || pathname.startsWith(href + "/");

  if (!children || children.length === 0) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "group relative flex items-center justify-center py-2",
          className
        )}
      >
        <motion.span
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "relative text-[14px] font-semibold tracking-wide transition-colors duration-300",
            isActive ? "text-teal-700" : "text-slate-600 group-hover:text-slate-900"
          )}
        >
          {label}
          <motion.span
            className={cn(
              "absolute -bottom-2 left-1/2 h-[2px] rounded-full bg-gradient-to-r from-teal-600 to-emerald-500",
              isActive ? "w-full" : "w-0"
            )}
            initial={false}
            animate={{ width: isActive ? "100%" : 0, x: "-50%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        </motion.span>
      </Link>
    );
  }

  return (
    <div
      className="relative flex items-center py-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        onClick={onClick}
        className="group flex items-center gap-1 focus-visible:outline-none"
      >
        <span
          className={cn(
            "text-[14px] font-semibold tracking-wide transition-colors duration-300",
            isActive ? "text-teal-700" : "text-slate-600 group-hover:text-slate-900"
          )}
        >
          {label}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-slate-500 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-emerald-100/70 bg-white/95 p-2 shadow-[0_20px_60px_rgba(15,118,110,.15)] backdrop-blur-xl"
          >
            {children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClick}
                className="block rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-emerald-50"
              >
                <span className="block text-[14px] font-semibold text-slate-800">
                  {child.label}
                </span>
                {child.description && (
                  <span className="mt-0.5 block text-[12px] text-slate-500">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
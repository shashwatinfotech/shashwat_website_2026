"use client";
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div className={cn(
        "flex flex-col gap-2 transition-all duration-300",
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      )}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.shashwatinfotech@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-label-sm font-medium text-text-primary shadow-level-2 border border-border hover:border-primary-container transition-colors">
          <Mail className="h-4 w-4 text-primary-container" />Email Us
        </a>
        <a href="tel:+919427548252"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-label-sm font-medium text-text-primary shadow-level-2 border border-border hover:border-primary-container transition-colors">
          <Phone className="h-4 w-4 text-primary-container" />Call Us
        </a>
        <Link href="/contact"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-label-sm font-medium text-text-primary shadow-level-2 border border-border hover:border-primary-container transition-colors">
          <MessageCircle className="h-4 w-4 text-primary-container" />Contact Form
        </Link>
      </div>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close" : "Contact"}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-level-2 transition-all duration-300",
          open ? "bg-text-primary text-white" : "bg-primary-container text-white hover:scale-110"
        )}>
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
}
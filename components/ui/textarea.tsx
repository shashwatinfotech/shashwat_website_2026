"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onInput, rows = 4, ...props }, ref) => {
    const innerRef = React.useRef<HTMLTextAreaElement | null>(null);

    const setRefs = (node: HTMLTextAreaElement) => {
      innerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
    };

    const handleInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
      const el = event.currentTarget;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
      onInput?.(event);
    };

    return (
      <textarea
        ref={setRefs}
        rows={rows}
        onInput={handleInput}
        className={cn(
          "flex w-full resize-none rounded-input border border-border bg-white px-3 py-2 text-body-md text-text-primary placeholder:text-text-secondary transition-colors",
          "focus-visible:border-primary-container focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-container/10",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
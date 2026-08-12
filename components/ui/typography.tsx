import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("text-text-primary", {
  variants: {
    size: {
      display: "text-display-lg-mobile md:text-display-lg",
      headline: "text-headline-md",
    },
  },
  defaultVariants: { size: "headline" },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h2", size, className, ...props }, ref) => {
    const Tag = as;
    return (
      <Tag ref={ref} className={cn(headingVariants({ size, className }))} {...props} />
    );
  }
);
Heading.displayName = "Heading";

const textVariants = cva("", {
  variants: {
    size: {
      lg: "text-body-lg",
      md: "text-body-md",
      label: "text-label-sm uppercase",
      mono: "text-mono-code font-mono",
    },
    tone: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      inverse: "text-inverse-on-surface",
      inherit: "text-inherit",
    },
  },
  defaultVariants: { size: "md", tone: "primary" },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ as = "p", size, tone, className, ...props }, ref) => {
    const Tag = as;
    return (
      <Tag
        
        ref={ref}
        className={cn(textVariants({ size, tone, className }))}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "primary" | "secondary";
}

const Eyebrow = React.forwardRef<HTMLSpanElement, EyebrowProps>(
  ({ tone = "secondary", className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "text-label-sm uppercase tracking-wide",
        tone === "primary" ? "text-primary-container" : "text-text-secondary",
        className
      )}
      {...props}
    />
  )
);
Eyebrow.displayName = "Eyebrow";

export { Heading, Text, Eyebrow, headingVariants, textVariants };
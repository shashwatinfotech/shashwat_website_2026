import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-label-sm font-medium uppercase leading-none",
  {
    variants: {
      variant: {
        active: "bg-secondary-container text-secondary-container-foreground",
        pending: "bg-surface-container-high text-on-surface-variant",
        critical: "bg-error-container text-error-container-foreground",
        accent: "bg-accent text-accent-foreground",
        outline: "border border-border bg-transparent text-text-secondary",
      },
    },
    defaultVariants: { variant: "outline" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ variant, className, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
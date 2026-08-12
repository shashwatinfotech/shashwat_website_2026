import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const sectionVariants = cva("w-full py-margin-mobile md:py-margin-desktop", {
  variants: {
    background: {
      base: "bg-background",
      surface: "bg-surface-container-low",
      white: "bg-white",
      dark: "bg-inverse-surface text-inverse-on-surface",
    },
  },
  defaultVariants: { background: "base" },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  contained?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ background, contained = true, className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn(sectionVariants({ background, className }))} {...props}>
        {contained ? <Container>{children}</Container> : children}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section, sectionVariants };
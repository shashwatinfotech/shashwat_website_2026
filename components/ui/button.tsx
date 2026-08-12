"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { easing } from "@/constants/design-tokens";

/**
 * Button variants — per DESIGN.md > Components > Buttons:
 * - primary: bg #1A7A74 (primary-container token), white text, no border
 * - secondary: white bg, 1px #ECECEC border, #1C1C1C text
 * - ghost: no bg/border, #8C8C8C text -> #1C1C1C on hover
 * - destructive: uses the error tokens (added for form/danger actions;
 *   not in the original spec but built entirely from existing tokens)
 */
const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-sans text-body-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-container text-white hover:bg-primary shadow-sm",
        secondary:
          "border border-border bg-white text-text-primary hover:bg-surface-container-low",
        ghost: "bg-transparent text-text-secondary hover:text-text-primary",
        destructive: "bg-error text-error-foreground hover:bg-error/90",
      },
      size: {
        sm: "h-9 px-3 text-label-sm",
        md: "h-10 px-5",
        lg: "h-12 px-6 text-body-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element (e.g. a Next.js <Link>) instead of a <button>. */
  asChild?: boolean;
  /** Disables the magnetic-pull hover translate, e.g. inside dense tables. */
  disableMagnetic?: boolean;
}

const MAGNETIC_STRENGTH = 0.25;
const MAGNETIC_MAX_OFFSET = 6;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      disableMagnetic = false,
      onMouseMove,
      onMouseLeave,
      children,
      ...props
    },
    ref
  ) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
      onMouseMove?.(event);
      if (disableMagnetic || variant === "ghost") return;

      const rect = event.currentTarget.getBoundingClientRect();
      const relativeX = event.clientX - (rect.left + rect.width / 2);
      const relativeY = event.clientY - (rect.top + rect.height / 2);

      x.set(
        Math.max(
          Math.min(relativeX * MAGNETIC_STRENGTH, MAGNETIC_MAX_OFFSET),
          -MAGNETIC_MAX_OFFSET
        )
      );
      y.set(
        Math.max(
          Math.min(relativeY * MAGNETIC_STRENGTH, MAGNETIC_MAX_OFFSET),
          -MAGNETIC_MAX_OFFSET
        )
      );
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
      onMouseLeave?.(event);
      x.set(0);
      y.set(0);
    };

    if (asChild) {
      // Slot path: no motion wrapper, so links and other custom elements
      // keep their native semantics. Magnetic hover only applies to <button>.
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ ease: easing.mechanical }}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
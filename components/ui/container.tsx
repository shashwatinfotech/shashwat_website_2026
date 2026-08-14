import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "header" | "footer";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ as = "div", className, ...props }, ref) => {
    const Tag = as;
    return (
      <Tag
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-container px-margin-mobile md:px-gutter lg:px-margin-desktop",
          className
        )}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container };
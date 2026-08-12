import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeMap = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-9 w-9" } as const;

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeMap;
  label?: string;
}

function Spinner({ size = "md", label = "Loading", className, ...props }: SpinnerProps) {
  return (
    <div role="status" className={cn("inline-flex items-center justify-center", className)} {...props}>
      <Loader2 className={cn(sizeMap[size], "animate-spin text-primary-container")} />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export { Spinner };
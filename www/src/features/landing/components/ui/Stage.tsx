import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface StageProps {
  children: ReactNode;
  className?: string;
}

// Dark product stage with a faint grid and soft blue glows.
export function Stage({ children, className }: StageProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[28px] border border-stage-line bg-stage p-3 sm:p-6 lg:p-8",
        className,
      )}
    >
      <div aria-hidden className="stage-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 -z-10 size-96 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-0 -bottom-40 -z-10 size-96 rounded-full bg-violet-ink/15 blur-3xl"
      />
      {children}
    </div>
  );
}

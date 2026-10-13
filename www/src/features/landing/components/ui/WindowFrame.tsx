import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface WindowFrameProps {
  title: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function WindowFrame({ title, actions, children, className }: WindowFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-2xl bg-surface shadow-window", className)}>
      <div className="flex h-11 items-center gap-3 border-b border-line px-4">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="min-w-0 flex-1 truncate text-[13px] font-semibold text-ink-soft">{title}</span>
        {actions}
      </div>
      {children}
    </div>
  );
}

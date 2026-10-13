import type { ReactNode } from "react";

interface PillBadgeProps {
  children: ReactNode;
  index?: string;
}

export function PillBadge({ children, index }: PillBadgeProps) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface py-1 pr-3 pl-1 text-[13px] font-medium text-ink-soft shadow-card">
      {index && (
        <span className="rounded-full bg-sunken px-2 py-0.5 font-mono text-[11px] font-medium text-accent-edge">
          {index}
        </span>
      )}
      {children}
    </span>
  );
}

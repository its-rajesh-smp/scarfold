import type { ReactNode } from "react";
import { PillBadge } from "./PillBadge";

interface SectionHeadingProps {
  badge: string;
  index?: string;
  title: ReactNode;
  description: string;
}

export function SectionHeading({ badge, index, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      <PillBadge index={index}>{badge}</PillBadge>
      <h2 className="mt-5 text-4xl font-medium tracking-[-0.025em] text-balance sm:text-5xl sm:leading-[1.1]">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{description}</p>
    </div>
  );
}

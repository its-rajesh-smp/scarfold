import type { ReactNode } from "react";
import type { Tone } from "../../types/landing";
import { TONE_CARD, TONE_INK } from "../../constants/tones";
import { cn } from "@/utils/cn";

interface BentoCardProps {
  tone: Tone;
  lead: string;
  rest: string;
  description: string;
  wide?: boolean;
  children?: ReactNode;
}

export function BentoCard({ tone, lead, rest, description, wide = false, children }: BentoCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-[28px] border p-6 shadow-card sm:p-7",
        TONE_CARD[tone],
        wide && "sm:col-span-2",
      )}
    >
      <h3 className="text-2xl leading-tight font-medium tracking-[-0.035em] text-balance">
        <span className={TONE_INK[tone]}>{lead}</span> {rest}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted">{description}</p>
      {children && <div className="mt-6 flex flex-1 flex-col justify-end">{children}</div>}
    </article>
  );
}

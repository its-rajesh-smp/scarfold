import type { Tone } from "../types/landing";

// Full class strings so Tailwind can see them.
export const TONE_CARD: Record<Tone, string> = {
  violet: "bg-violet-tint border-violet-edge",
  sky: "bg-sky-tint border-sky-edge",
  peach: "bg-peach-tint border-peach-edge",
  mint: "bg-mint-tint border-mint-edge",
  plain: "bg-surface border-line",
};

export const TONE_INK: Record<Tone, string> = {
  violet: "text-violet-ink",
  sky: "text-sky-ink",
  peach: "text-peach-ink",
  mint: "text-mint-ink",
  plain: "text-ink",
};

export const TONE_ICON: Record<Exclude<Tone, "plain">, string> = {
  violet: "bg-violet-tint text-violet-ink",
  sky: "bg-sky-tint text-sky-ink",
  peach: "bg-peach-tint text-peach-ink",
  mint: "bg-mint-tint text-mint-ink",
};

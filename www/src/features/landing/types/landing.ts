import type { LucideIcon } from "lucide-react";

export type Tone = "violet" | "sky" | "peach" | "mint" | "plain";

export interface NavLink {
  id: string;
  label: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface FieldType {
  name: string;
  type: string;
  icon: LucideIcon;
  tone: Exclude<Tone, "plain">;
}

export interface CodeSample {
  id: string;
  label: string;
  code: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

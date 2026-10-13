import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "accent" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink-soft",
  accent: "bg-accent border border-accent-edge/70 text-ink hover:bg-accent-deep",
  secondary: "bg-surface border border-line text-ink shadow-card hover:bg-sunken",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-edge",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}

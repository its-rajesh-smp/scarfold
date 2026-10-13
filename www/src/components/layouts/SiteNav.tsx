"use client";

import { ArrowRight } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SIGN_UP_HREF } from "@/features/landing/constants/content";
import { cn } from "@/utils/cn";

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function SiteNav() {
  const scrolled = useScrolled();
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="sticky top-3 z-50 px-4 sm:top-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border border-line bg-surface/75 pr-2 pl-4 backdrop-blur-xl transition-shadow",
          scrolled ? "shadow-float" : "shadow-card",
        )}
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "block rounded-full px-3.5 py-1.5 text-[13px] leading-none font-semibold transition-colors",
                  active === link.id ? "bg-accent text-ink" : "text-muted hover:bg-sunken hover:text-ink",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ButtonLink href={SIGN_UP_HREF} size="sm">
          Get started
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </ButtonLink>
      </nav>
    </header>
  );
}

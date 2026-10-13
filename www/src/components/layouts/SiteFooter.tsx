import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_COLUMNS } from "@/features/landing/constants/content";
import { getCurrentYear } from "@/utils/date";

export async function SiteFooter() {
  const year = await getCurrentYear();

  return (
    <footer className="overflow-hidden border-t border-line bg-canvas pt-16">
      <Container>
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              A simple content API for portfolios, landing pages and side projects.
            </p>
          </div>

          <div className="flex gap-16">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="text-[13px] font-semibold text-ink">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[15px] text-muted transition-colors hover:text-ink">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p
          aria-hidden
          className="mt-16 text-center text-[22vw] leading-[0.8] font-semibold tracking-[-0.06em] bg-gradient-to-b from-accent/70 to-transparent bg-clip-text text-transparent select-none lg:text-[240px]"
        >
          Scarfold
        </p>

        <p className="border-t border-line py-6 text-[13px] text-subtle">
          © {year} Scarfold. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

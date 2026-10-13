import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Scarfold home"
      className="flex items-center gap-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-edge"
    >
      <span className="grid size-7 place-items-center rounded-lg bg-ink">
        <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
          <rect x="3" y="3" width="10" height="2.4" rx="1.2" className="fill-accent" />
          <rect x="3" y="6.8" width="7" height="2.4" rx="1.2" className="fill-white" />
          <rect x="3" y="10.6" width="4.5" height="2.4" rx="1.2" className="fill-white/60" />
        </svg>
      </span>
      <span className="text-[17px] leading-none font-semibold tracking-[-0.03em]">Scarfold</span>
    </Link>
  );
}

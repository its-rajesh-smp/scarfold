import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ctaSky from "@/assets/cta-sky.webp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SIGN_UP_HREF } from "../../constants/content";

export function GetStarted() {
  return (
    <section id="get-started" className="reveal pb-24 sm:pb-32">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[32px] border border-line px-6 py-16 shadow-card sm:px-12 sm:py-24">
          <Image
            src={ctaSky}
            alt=""
            placeholder="blur"
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="absolute inset-0 -z-20 size-full object-cover object-bottom"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-white/55 via-white/15 to-transparent" />

          <div className="max-w-lg">
            <h2 className="text-4xl font-medium tracking-[-0.025em] text-balance sm:text-5xl sm:leading-[1.1]">
              Your content, one <span className="marker">fetch</span> away
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">
              Set up your first project in a few minutes.
            </p>
            <ButtonLink href={SIGN_UP_HREF} size="lg" className="mt-8">
              Create your first project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

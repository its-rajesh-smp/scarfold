import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SIGN_UP_HREF } from "../../constants/content";
import { ProductPreview } from "./ProductPreview";

export function Hero() {
  return (
    <section className="pt-20 sm:pt-24">
      <Container className="flex flex-col items-center text-center">
        <div className="flex animate-rise flex-col items-center">
          <h1 className="max-w-4xl text-[44px] leading-[0.98] font-normal tracking-[-0.035em] text-balance sm:text-6xl lg:text-[76px]">
            Content for your projects, <span className="marker">served as an API</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
            Create a project, add fields, and fetch your content from any site.
          </p>
          <ButtonLink href={SIGN_UP_HREF} size="lg" className="mt-9">
            Start building
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
      </Container>

      <Container className="mt-16 animate-rise-late sm:mt-20">
        <ProductPreview />
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STEPS } from "../../constants/content";
import { StepVisual } from "../ui/StepVisual";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="reveal py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="01"
          badge="How it works"
          title={
            <>
              From sign-in to <span className="marker">live content</span> in four steps
            </>
          }
          description="No servers, no database, no admin panel to build. Just the content your site needs."
        />

        <ol className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.number} className="rounded-[28px] border border-line bg-surface p-2 shadow-card">
              <div className="grid h-40 place-items-center rounded-[20px] bg-sunken px-4">
                <StepVisual number={step.number} />
              </div>
              <div className="px-4 pt-5 pb-4">
                <p className="font-mono text-[13px] text-subtle">{step.number}</p>
                <h3 className="mt-1 text-2xl font-medium tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

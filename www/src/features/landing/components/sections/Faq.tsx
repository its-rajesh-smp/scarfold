import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQS } from "../../constants/content";

export function Faq() {
  return (
    <section id="faq" className="reveal py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          index="04"
          badge="FAQ"
          title="Questions, answered"
          description="The short version of what people ask before they sign up."
        />

        <div className="mt-12 divide-y divide-line rounded-[28px] border border-line bg-surface shadow-card sm:mt-14">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group px-6 sm:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[16px] font-semibold [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sunken transition-colors group-open:bg-accent">
                  <Plus className="size-4 transition-transform duration-200 group-open:rotate-45" />
                </span>
              </summary>
              <p className="-mt-1 pr-12 pb-5 text-[15px] leading-relaxed text-pretty text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

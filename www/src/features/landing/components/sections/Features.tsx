import { Check, Pencil } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FIELD_TYPES } from "../../constants/content";
import { BentoCard } from "../ui/BentoCard";
import { FieldRow } from "../ui/FieldRow";

const FRAMEWORKS = ["Next.js", "Astro", "React", "Vue", "Svelte", "HTML"];
const SMALL_PERKS = ["No database to manage", "No SDK required", "One endpoint per project"];

export function Features() {
  return (
    <section id="features" className="reveal py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="02"
          badge="Features"
          title="Everything a small site needs, nothing it doesn't"
          description="Scarfold stays out of your way, so you can spend your time on the parts people see."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          <BentoCard
            wide
            tone="violet"
            lead="Fields"
            rest="that fit your content"
            description="Text, images, numbers, dates, lists and toggles. Shape each project the way your site reads it."
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {FIELD_TYPES.map((field) => (
                <FieldRow key={field.name} field={field} />
              ))}
            </div>
          </BentoCard>

          <BentoCard
            tone="sky"
            lead="One key"
            rest="per project"
            description="Every project gets its own API key, so a leak in one place stays in one place."
          >
            <div className="flex items-center gap-2 rounded-2xl bg-surface px-3 py-2.5 font-mono text-[12px] text-ink-soft shadow-card">
              <span className="size-2 rounded-full bg-success" />
              scf_••••••••3f9a
            </div>
          </BentoCard>

          <BentoCard
            tone="plain"
            lead="Clean"
            rest="JSON out"
            description="Your field names in, your field names out. No wrappers to unpick."
          >
            <pre className="rounded-2xl bg-sunken p-3 font-mono text-[12px] leading-relaxed text-ink-soft">
              {`{ "title": "Harbour Lights" }`}
            </pre>
          </BentoCard>

          <BentoCard
            tone="plain"
            lead="Any"
            rest="frontend"
            description="It's plain HTTP. If it can make a request, it can read your content."
          >
            <ul className="flex flex-wrap gap-1.5">
              {FRAMEWORKS.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-line bg-surface px-2.5 py-1 text-[12px] font-semibold text-ink-soft"
                >
                  {name}
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard
            tone="peach"
            lead="Edit"
            rest="without redeploys"
            description="Change copy in the dashboard and your site picks it up on the next request."
          >
            <div className="flex items-center gap-3 rounded-2xl bg-surface px-3 py-2.5 shadow-card">
              <span className="grid size-7 place-items-center rounded-lg bg-peach-tint text-peach-ink">
                <Pencil className="size-3.5" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold">
                  Updated title <span className="font-normal text-subtle">· just now</span>
                </p>
                <p className="truncate text-[12px] text-muted">Portfolio / Harbour Lights</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard
            wide
            tone="mint"
            lead="Made for"
            rest="small projects"
            description="Built for one person and a handful of sites, not a content team of fifty."
          >
            <ul className="grid gap-2 sm:grid-cols-3">
              {SMALL_PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 rounded-2xl bg-surface px-3 py-2.5 text-[13px] font-semibold shadow-card"
                >
                  <Check className="size-3.5 shrink-0 text-mint-ink" />
                  {perk}
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}

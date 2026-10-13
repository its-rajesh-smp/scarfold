import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SAMPLE_RESPONSE } from "../../constants/content";
import { CodeBlock } from "../ui/CodeBlock";
import { Stage } from "../ui/Stage";
import { WindowFrame } from "../ui/WindowFrame";
import { RequestPanel } from "./RequestPanel";

export function ApiSection() {
  return (
    <section id="api" className="reveal py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="03"
          badge="API"
          title={
            <>
              <span className="text-sky-ink">One request,</span> all your content
            </>
          }
          description="Drop your endpoint into the code you already write. Use your favourite client or none at all."
        />

        <Stage className="mt-12 sm:mt-14">
          <div className="grid grid-cols-1 items-start gap-3 sm:gap-5 lg:grid-cols-2">
            <RequestPanel />
            <WindowFrame
              title="Response"
              actions={<span className="font-mono text-[12px] text-mint-ink">200 OK</span>}
            >
              <div className="p-3 sm:p-4">
                <CodeBlock code={SAMPLE_RESPONSE} label="Example JSON response" />
              </div>
            </WindowFrame>
          </div>
        </Stage>
      </Container>
    </section>
  );
}

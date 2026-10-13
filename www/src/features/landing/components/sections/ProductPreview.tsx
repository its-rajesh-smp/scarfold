import { Copy, FolderClosed, Plus } from "lucide-react";
import { SAMPLE_ENDPOINT, SAMPLE_RESPONSE, STAGE_FIELDS } from "../../constants/content";
import { CodeBlock } from "../ui/CodeBlock";
import { FieldRow } from "../ui/FieldRow";
import { Stage } from "../ui/Stage";
import { WindowFrame } from "../ui/WindowFrame";
import { cn } from "@/utils/cn";

const PROJECTS = ["Portfolio", "Studio site", "Recipes blog"];

function ProjectSidebar() {
  return (
    <aside className="hidden border-r border-line p-3 lg:block">
      <p className="px-2 pb-2 text-[11px] font-semibold tracking-wide text-subtle uppercase">Projects</p>
      <ul className="space-y-0.5">
        {PROJECTS.map((project, index) => (
          <li
            key={project}
            className={cn(
              "flex items-center gap-2 rounded-xl px-2 py-1.5 text-[13px] font-semibold",
              index === 0 ? "bg-sunken text-ink" : "text-muted",
            )}
          >
            <FolderClosed className="size-3.5" />
            {project}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FieldsPanel() {
  return (
    <div className="p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[15px] font-semibold tracking-[-0.01em]">Projects collection</p>
          <p className="text-[12px] text-muted">{STAGE_FIELDS.length} fields</p>
        </div>
        <span className="inline-flex h-8 items-center gap-1 rounded-full border border-accent-edge/70 bg-accent px-3 text-[12px] font-semibold">
          <Plus className="size-3.5" />
          Add field
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {STAGE_FIELDS.map((field) => (
          <FieldRow key={field.name} field={field} />
        ))}
      </div>
    </div>
  );
}

function ApiPanel() {
  return (
    <div className="border-t border-line p-4 sm:p-5 md:border-t-0 md:border-l">
      <p className="text-[15px] font-semibold tracking-[-0.01em]">Your endpoint</p>
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-line px-3 py-2">
        <span className="rounded-md bg-mint-tint px-1.5 py-0.5 font-mono text-[11px] font-semibold text-mint-ink">
          GET
        </span>
        <span className="min-w-0 flex-1 truncate font-mono text-[12px] text-ink-soft">{SAMPLE_ENDPOINT}</span>
        <Copy className="size-3.5 shrink-0 text-subtle" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-muted">Response</p>
        <span className="font-mono text-[11px] text-mint-ink">200 OK</span>
      </div>
      <div className="mt-2">
        <CodeBlock code={SAMPLE_RESPONSE} label="Example JSON response" />
      </div>
    </div>
  );
}

export function ProductPreview() {
  return (
    <Stage>
      <WindowFrame title="Portfolio · Scarfold">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,1fr)]">
          <ProjectSidebar />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <FieldsPanel />
            <ApiPanel />
          </div>
        </div>
      </WindowFrame>
    </Stage>
  );
}

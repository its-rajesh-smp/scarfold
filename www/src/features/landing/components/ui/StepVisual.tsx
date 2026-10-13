import { Check, FolderClosed, Mail } from "lucide-react";
import { FIELD_TYPES } from "../../constants/content";
import { FieldRow } from "./FieldRow";

function SignInVisual() {
  return (
    <div className="w-full max-w-[200px] space-y-2">
      <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-[12px] text-muted">
        <Mail className="size-3.5" />
        you@studio.dev
        <span className="h-3.5 w-px animate-blink bg-ink" />
      </div>
      <div className="rounded-full bg-ink py-2 text-center text-[12px] font-semibold text-white">Continue</div>
    </div>
  );
}

function ProjectVisual() {
  return (
    <div className="w-full max-w-[200px] space-y-2">
      {["Portfolio", "Client page"].map((name, index) => (
        <div
          key={name}
          className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-[12px] font-semibold shadow-card"
        >
          <FolderClosed className="size-3.5 text-muted" />
          <span className="flex-1">{name}</span>
          {index === 0 && <span className="rounded-full bg-accent px-1.5 text-[10px]">New</span>}
        </div>
      ))}
    </div>
  );
}

function FieldsVisual() {
  return (
    <div className="w-full max-w-[200px] space-y-1.5">
      {FIELD_TYPES.slice(0, 2).map((field) => (
        <FieldRow key={field.name} field={field} compact />
      ))}
    </div>
  );
}

function ApiVisual() {
  return (
    <div className="w-full max-w-[200px] space-y-2 font-mono text-[11px]">
      <div className="rounded-xl border border-line bg-surface px-3 py-2 text-ink-soft">
        <span className="font-semibold text-mint-ink">GET</span> /v1/portfolio/…
      </div>
      <div className="flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3 py-2 text-mint-ink">
        <Check className="size-3.5" />
        200 OK · JSON
      </div>
    </div>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "01": SignInVisual,
  "02": ProjectVisual,
  "03": FieldsVisual,
  "04": ApiVisual,
};

export function StepVisual({ number }: { number: string }) {
  const Visual = VISUALS[number];
  return Visual ? <Visual /> : null;
}

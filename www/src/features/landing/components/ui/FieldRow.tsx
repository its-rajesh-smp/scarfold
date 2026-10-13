import type { FieldType } from "../../types/landing";
import { TONE_ICON } from "../../constants/tones";
import { cn } from "@/utils/cn";

interface FieldRowProps {
  field: FieldType;
  compact?: boolean;
}

export function FieldRow({ field, compact = false }: FieldRowProps) {
  const Icon = field.icon;

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-line/70 bg-surface shadow-card",
        compact ? "px-2.5 py-2" : "px-3 py-2.5",
      )}
    >
      <span className={cn("grid size-7 shrink-0 place-items-center rounded-lg", TONE_ICON[field.tone])}>
        <Icon className="size-3.5" />
      </span>
      <span className="min-w-0 flex-1 truncate font-mono text-[13px] text-ink-soft">{field.name}</span>
      <span className="rounded-full bg-sunken px-2 py-0.5 text-[11px] font-semibold text-muted">
        {field.type}
      </span>
    </div>
  );
}

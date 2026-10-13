import { cn } from "@/utils/cn";

interface SegmentedTabsProps {
  tabs: { id: string; label: string }[];
  activeId: string;
  onSelect: (id: string) => void;
  label: string;
}

export function SegmentedTabs({ tabs, activeId, onSelect, label }: SegmentedTabsProps) {
  return (
    <div role="tablist" aria-label={label} className="flex rounded-full border border-line bg-surface p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={tab.id === activeId}
          onClick={() => onSelect(tab.id)}
          className={cn(
            "rounded-full px-3 py-1 text-[12px] font-semibold transition-colors",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-edge",
            tab.id === activeId ? "bg-ink text-white" : "text-muted hover:bg-sunken hover:text-ink",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

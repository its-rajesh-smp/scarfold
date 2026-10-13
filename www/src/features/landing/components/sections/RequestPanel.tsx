"use client";

import { useState } from "react";
import { CODE_SAMPLES } from "../../constants/content";
import { CodeBlock } from "../ui/CodeBlock";
import { SegmentedTabs } from "../ui/SegmentedTabs";
import { WindowFrame } from "../ui/WindowFrame";

export function RequestPanel() {
  const [activeId, setActiveId] = useState(CODE_SAMPLES[0].id);
  const sample = CODE_SAMPLES.find((item) => item.id === activeId) ?? CODE_SAMPLES[0];

  return (
    <WindowFrame
      title="Request"
      actions={
        <SegmentedTabs tabs={CODE_SAMPLES} activeId={activeId} onSelect={setActiveId} label="Request language" />
      }
    >
      <div className="p-3 sm:p-4">
        <CodeBlock code={sample.code} label={`${sample.label} request example`} />
      </div>
    </WindowFrame>
  );
}

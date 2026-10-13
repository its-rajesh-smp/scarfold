interface CodeBlockProps {
  code: string;
  label: string;
}

export function CodeBlock({ code, label }: CodeBlockProps) {
  return (
    <pre
      aria-label={label}
      className="overflow-x-auto rounded-2xl bg-sunken p-4 font-mono text-[12.5px] leading-relaxed text-ink-soft sm:text-[13px]"
    >
      <code>{code}</code>
    </pre>
  );
}

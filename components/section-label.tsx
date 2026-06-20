export function SectionLabel({
  command,
  title,
}: {
  command: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <div className="font-mono text-xs text-ink-dim">
        <span className="text-accent">$</span> {command}
      </div>
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      <div className="mt-4 h-px bg-line" />
    </div>
  );
}

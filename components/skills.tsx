import { SectionLabel } from "./section-label";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <SectionLabel command="ls -la ./skills" title="Skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-line bg-bg-raised p-5"
          >
            <h3 className="font-mono text-xs text-accent uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[12px] px-2.5 py-1 rounded border border-line text-ink-dim"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

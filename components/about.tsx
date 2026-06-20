import { SectionLabel } from "./section-label";
import { profile } from "@/data/content";

export function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <SectionLabel command="cat about.md" title="About" />
      <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
        <div className="w-20 h-20 rounded-full bg-accent-dim border border-accent/30 flex items-center justify-center font-mono text-xl text-accent font-medium shrink-0">
          {profile.avatarInitials}
        </div>
        <div className="space-y-4 text-ink-dim leading-relaxed max-w-2xl">
          <p>
            I&apos;m switching into DevOps from a different career path, and I&apos;m building this
            site as proof of work, not just a list of claims. Every pipeline, deployment, and
            uptime number on this page is real and reproducible — the source is one click away in
            every project card below.
          </p>
          <p>
            What pulled me toward DevOps is the same thing that pulls a lot of people in: the
            satisfaction of a system that just works, quietly, even when nobody&apos;s watching it.
            I care about the boring reliability work — health checks, rollback paths, alerting
            that actually fires — more than chasing the newest tool.
          </p>
          <p>
            Currently based in {profile.location}, open to remote and on-site roles.
          </p>
        </div>
      </div>
    </section>
  );
}

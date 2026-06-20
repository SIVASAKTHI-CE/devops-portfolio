"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, stats } from "@/data/content";

const consoleLines = [
  { text: "$ whoami", delay: 0 },
  { text: profile.role.toLowerCase().replace(/ /g, "_"), delay: 0.4, isOutput: true },
  { text: "$ status --check", delay: 1.0 },
  { text: "all systems operational", delay: 1.4, isOutput: true, ok: true },
  { text: "$ cat mission.txt", delay: 2.0 },
  { text: profile.tagline, delay: 2.4, isOutput: true },
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = consoleLines.map((_, i) =>
      setTimeout(() => setVisibleLines((v) => v + 1), consoleLines[i].delay * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="status-dot w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-ink-dim uppercase tracking-wider">
              available for opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink leading-[1.1]">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-accent text-lg">{profile.role}</p>
          <p className="mt-5 text-ink-dim text-base sm:text-lg leading-relaxed max-w-md">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded bg-accent text-bg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View projects
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded border border-line text-ink font-medium text-sm hover:border-accent hover:text-accent transition-colors"
            >
              Resume ↗
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-xl sm:text-2xl text-ink font-medium">
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] text-ink-dim mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature element: live deploy console */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-line bg-bg-raised overflow-hidden shadow-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line bg-bg">
            <span className="w-2.5 h-2.5 rounded-full bg-fail/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-warn/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <span className="ml-2 font-mono text-[11px] text-ink-dim">console</span>
          </div>
          <div className="p-5 font-mono text-[13px] leading-7 min-h-[220px]">
            {consoleLines.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={
                  line.isOutput
                    ? line.ok
                      ? "text-accent pl-3"
                      : "text-ink-dim pl-3"
                    : "text-ink"
                }
              >
                {line.text}
                {i === visibleLines - 1 && <span className="cursor-blink" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

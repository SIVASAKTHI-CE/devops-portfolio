"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { SectionLabel } from "./section-label";
import { pipelineStages } from "@/data/content";

type StageStatus = "pending" | "running" | "done";

export function PipelineSection() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [statuses, setStatuses] = useState<StageStatus[]>(
    pipelineStages.map(() => "pending")
  );
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let i = -1;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting animation state on cycle restart, not syncing from props
    setStatuses(pipelineStages.map(() => "pending"));
    setActiveIndex(-1);

    const interval = setInterval(() => {
      i += 1;
      if (i >= pipelineStages.length) {
        clearInterval(interval);
        setTimeout(() => setCycle((c) => c + 1), 2200);
        return;
      }
      setActiveIndex(i);
      setStatuses((prev) => {
        const next = [...prev];
        next[i] = "running";
        return next;
      });
      setTimeout(() => {
        setStatuses((prev) => {
          const next = [...prev];
          next[i] = "done";
          return next;
        });
      }, 750);
    }, 950);

    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <section id="pipeline" className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <SectionLabel command="./run-pipeline.sh --watch" title="CI/CD Pipeline" />

      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <p className="text-ink-dim text-sm max-w-md">
          This is a live simulation of the actual GitHub Actions pipeline that deploys this
          site. Every push to <code className="font-mono text-accent">main</code> runs these
          exact stages.
        </p>
        <a
          href="https://github.com/yourusername/devops-portfolio/actions"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Image
            src="https://img.shields.io/github/actions/workflow/status/yourusername/devops-portfolio/deploy.yml?label=build&style=flat-square"
            alt="GitHub Actions build status"
            width={140}
            height={20}
            className="h-6 w-auto"
            unoptimized
          />
        </a>
      </div>

      <div className="rounded-lg border border-line bg-bg-raised p-6 sm:p-8 overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {pipelineStages.map((stage, i) => (
            <div key={stage.id} className="flex items-center">
              <div className="flex flex-col items-center gap-2 w-[100px]">
                <motion.div
                  animate={{
                    scale: statuses[i] === "running" ? 1.08 : 1,
                  }}
                  className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    statuses[i] === "done"
                      ? "border-accent bg-accent-dim"
                      : statuses[i] === "running"
                      ? "border-warn bg-warn/10"
                      : "border-line bg-bg"
                  }`}
                >
                  {statuses[i] === "done" && <Check size={18} className="text-accent" />}
                  {statuses[i] === "running" && (
                    <Loader2 size={16} className="text-warn animate-spin" />
                  )}
                </motion.div>
                <div className="text-center">
                  <div className="font-mono text-xs text-ink">{stage.label}</div>
                  <div className="font-mono text-[10px] text-ink-dim mt-0.5 leading-tight">
                    {stage.detail}
                  </div>
                </div>
              </div>
              {i < pipelineStages.length - 1 && (
                <div className="w-8 sm:w-12 h-px bg-line mb-7 relative -top-0">
                  <motion.div
                    className="h-px bg-accent absolute top-0 left-0"
                    initial={{ width: "0%" }}
                    animate={{
                      width: statuses[i] === "done" ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-line flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              activeIndex >= 0 && activeIndex < pipelineStages.length
                ? "bg-warn status-dot"
                : "bg-accent status-dot"
            }`}
          />
          <span className="font-mono text-xs text-ink-dim">
            {activeIndex >= 0 && statuses[activeIndex] !== "done"
              ? `running: ${pipelineStages[activeIndex].label}...`
              : "pipeline idle — waiting for next push"}
          </span>
        </div>
      </div>
    </section>
  );
}

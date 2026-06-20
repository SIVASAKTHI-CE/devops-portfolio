import { SectionLabel } from "./section-label";
import { projects } from "@/data/content";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const statusStyles: Record<string, string> = {
  deployed: "text-accent border-accent/30 bg-accent-dim",
  building: "text-warn border-warn/30 bg-warn/10",
  planned: "text-ink-dim border-line bg-bg",
};

const statusLabel: Record<string, string> = {
  deployed: "● deployed",
  building: "● building",
  planned: "○ planned",
};

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <SectionLabel command="ls -la ./projects" title="Projects" />
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="rounded-lg border border-line bg-bg-raised p-5 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-medium text-ink text-base leading-snug">{project.name}</h3>
              <span
                className={`shrink-0 font-mono text-[10px] px-2 py-1 rounded border ${
                  statusStyles[project.status]
                }`}
              >
                {statusLabel[project.status]}
              </span>
            </div>
            <p className="text-ink-dim text-sm leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2 py-0.5 rounded border border-line text-ink-dim"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-5 pt-4 border-t border-line">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-ink-dim hover:text-accent transition-colors"
              >
                <FaGithub size={14} /> source
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-ink-dim hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} /> live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

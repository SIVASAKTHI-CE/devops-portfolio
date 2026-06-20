import { SectionLabel } from "./section-label";
import { profile } from "@/data/content";
import { Mail, Briefcase } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <SectionLabel command="curl -X POST /contact" title="Get in touch" />
      <p className="text-ink-dim max-w-md mb-8 leading-relaxed">
        Open to DevOps and platform engineering roles. The fastest way to reach me is email —
        I read every message.
      </p>
      <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-3 rounded-lg border border-line bg-bg-raised p-4 hover:border-accent/40 transition-colors"
        >
          <Mail size={18} className="text-accent shrink-0" />
          <div>
            <div className="text-sm text-ink font-medium">Email</div>
            <div className="font-mono text-xs text-ink-dim">{profile.email}</div>
          </div>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-line bg-bg-raised p-4 hover:border-accent/40 transition-colors"
        >
          <FaGithub size={18} className="text-accent shrink-0" />
          <div>
            <div className="text-sm text-ink font-medium">GitHub</div>
            <div className="font-mono text-xs text-ink-dim">@yourusername</div>
          </div>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-line bg-bg-raised p-4 hover:border-accent/40 transition-colors"
        >
          <FaLinkedin size={18} className="text-accent shrink-0" />
          <div>
            <div className="text-sm text-ink font-medium">LinkedIn</div>
            <div className="font-mono text-xs text-ink-dim">Connect with me</div>
          </div>
        </a>
        <a
          href={profile.naukri}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-line bg-bg-raised p-4 hover:border-accent/40 transition-colors"
        >
          <Briefcase size={18} className="text-accent shrink-0" />
          <div>
            <div className="text-sm text-ink font-medium">Naukri</div>
            <div className="font-mono text-xs text-ink-dim">View profile</div>
          </div>
        </a>
      </div>
    </section>
  );
}

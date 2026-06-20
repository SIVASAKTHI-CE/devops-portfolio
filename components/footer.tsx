import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line mt-auto">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono text-[11px] text-ink-dim">
          © {new Date().getFullYear()} {profile.name} · built with Next.js, deployed with zero
          downtime
        </p>
        <p className="font-mono text-[11px] text-ink-dim">status: all systems operational</p>
      </div>
    </footer>
  );
}

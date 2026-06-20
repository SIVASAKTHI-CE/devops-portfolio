"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { profile } from "@/data/content";

const navLinks = [
  { href: "/#about", label: "about" },
  { href: "/#skills", label: "skills" },
  { href: "/#pipeline", label: "pipeline" },
  { href: "/#projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/#contact", label: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line">
      <nav className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm text-ink hover:text-accent transition-colors">
          <span className="text-accent">~/</span>
          {profile.name.toLowerCase().replace(" ", "-")}
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] text-ink-dim hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="w-9 h-9 flex items-center justify-center text-ink-dim"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-bg px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-ink-dim hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

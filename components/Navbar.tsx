"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { asset } from "@/lib/asset";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-white/10 bg-black/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-sm font-bold text-black">AJ</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-3 py-2 text-sm text-neutral-400 transition hover:bg-white/5 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={asset(profile.resume)}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-neutral-200 sm:inline-block"
          >
            Resume
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-4 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-white/10 px-4 py-3 md:hidden">
          {[...links, { href: asset(profile.resume), label: "Resume" }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-neutral-300 hover:bg-white/5">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

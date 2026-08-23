"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoFull } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          height: scrolled ? 60 : 72,
        }}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.3, 1] }}
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-border px-5 transition-colors duration-300 backdrop-blur-md ${scrolled ? "bg-card/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]" : "bg-card/50"
          }`}
      >
        <a href="#top" className="shrink-0 relative z-80">
          <LogoFull className="h-6" />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-muted lg:flex">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s Talk
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass w-full max-w-6xl z-40 flex flex-col gap-1 rounded-3xl border border-border bg-card/95 p-4 shadow-xl lg:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-fg transition-colors hover:bg-bg-alt"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg"
          >
            Let&apos;s Talk <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      )}
    </header>
  );
}

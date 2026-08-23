"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ServiceCard({
  index,
  title,
  headline,
  body,
  visual,
}: {
  index: string;
  title: string;
  headline: string;
  body: string;
  visual: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="brand-border-gradient group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-[0_28px_60px_-24px_var(--glow-teal)] lg:p-9"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(closest-side, var(--glow-lime), transparent 70%)" }}
      />

      <span className="text-xs font-semibold tracking-[0.15em] text-muted">{index}</span>
      <h3 className="mt-4 text-2xl font-bold tracking-tight text-fg">{title}</h3>
      <p className="mt-3 text-base font-medium text-fg/90">{headline}</p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{body}</p>

      <div className="mt-8 flex-1 transition-transform duration-500 group-hover:scale-[1.02]">
        {visual}
      </div>

      <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-teal">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
}

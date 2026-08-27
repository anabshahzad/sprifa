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
      whileHover={{ y: -4 }}
      className="brand-border-gradient group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_44px_-24px_var(--glow-teal)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(closest-side, var(--glow-lime), transparent 70%)" }}
      />

      <span className="text-[10px] font-semibold tracking-[0.15em] text-muted">{index}</span>
      <h3 className="mt-2.5 text-lg font-bold tracking-tight text-fg">{title}</h3>
      <p className="mt-1.5 text-sm font-medium text-fg/90">{headline}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-muted">{body}</p>

      <div className="mt-5 flex-1 transition-transform duration-500 group-hover:scale-[1.02]">
        {visual}
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-teal">
        Learn more
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
}

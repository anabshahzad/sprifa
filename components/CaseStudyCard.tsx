"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function CaseStudyCard({
  title,
  subtitle,
  tags,
  visual,
  reverse = false,
  placeholder = false,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  visual: ReactNode;
  reverse?: boolean;
  placeholder?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
      className={`grid items-center gap-10 rounded-[2rem] border border-border bg-card p-8 lg:grid-cols-2 lg:gap-16 lg:p-14 ${
        placeholder ? "opacity-60" : ""
      }`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-bg-alt px-3 py-1 text-[10px] font-semibold tracking-[0.1em] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-3xl font-bold tracking-tight text-fg lg:text-4xl">{title}</h3>
        <p className="mt-3 max-w-md text-base text-muted">{subtitle}</p>
        {!placeholder && (
          <a
            href="#"
            className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-teal"
          >
            View project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
      </div>
      <div className={reverse ? "lg:order-1" : ""}>{visual}</div>
    </motion.article>
  );
}

"use client";

import { motion } from "framer-motion";

const TECH = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "APIs",
  "Cloud",
  "Databases",
  "Automation",
  "WhatsApp",
];

export function Technology() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.02em] text-fg"
        >
          Built with modern technology. Designed for humans.
        </motion.h2>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {TECH.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-full border border-border bg-bg-alt px-4 py-2 text-xs font-medium text-muted"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

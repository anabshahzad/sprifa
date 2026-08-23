"use client";

import { motion } from "framer-motion";

const INDUSTRIES = [
  "Restaurants",
  "Startups",
  "Retail",
  "Healthcare",
  "Professional Services",
  "Local Businesses",
  "SaaS",
  "Growing Brands",
];

function Row() {
  return (
    <>
      {INDUSTRIES.map((label) => (
        <span key={label} className="group mx-6 inline-flex items-center gap-3 sm:mx-10">
          <span className="h-2 w-2 rounded-full brand-gradient-bg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="text-[clamp(1.6rem,4vw,3rem)] font-bold tracking-[-0.02em] text-muted transition-colors duration-300 group-hover:text-fg">
            {label}
          </span>
        </span>
      ))}
    </>
  );
}

export function Industries() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto mb-12 max-w-2xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-xs font-semibold tracking-[0.2em] text-muted"
        >
          WHO WE BUILD FOR
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.02em] text-fg"
        >
          Different businesses. Same goal. Better digital experiences.
        </motion.h2>
      </div>

      <div className="no-scrollbar relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center [animation-play-state:running] hover:[animation-play-state:paused]">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroProductSystem } from "./HeroProductSystem";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-16 lg:pt-48 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--glow-lime), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
          className="mb-8 flex items-center gap-4 text-xs font-semibold tracking-[0.2em] text-muted"
        >
          <span className="h-px w-10 bg-border" />
          PRODUCT STUDIO FOR REAL BUSINESSES
          <span className="h-px w-10 bg-border" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.7, 0.3, 1] }}
          className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-fg"
        >
          We design and build{" "}
          <span className="brand-gradient-text">the tools</span>
          <br className="hidden sm:block" /> your customers actually use.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted"
        >
          From websites and mobile apps to SaaS platforms and automation, we
          turn complex business ideas into simple digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full brand-gradient-bg px-7 py-3.5 text-sm font-semibold text-[#061223] shadow-[0_16px_36px_-14px_var(--glow-teal)] transition-transform hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-fg transition-colors hover:bg-bg-alt"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.7, 0.3, 1] }}
        className="relative mt-20 lg:mt-28"
      >
        <HeroProductSystem />
      </motion.div>
    </section>
  );
}

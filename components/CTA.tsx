"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#061223] px-6 py-32 text-white lg:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(closest-side, #A8E85F, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(closest-side, #00D8D0, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(closest-side, #007F7A, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em]"
        >
          Have something worth building?
          <br />
          Let&apos;s turn it into something people{" "}
          <span className="brand-gradient-text">actually use</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full brand-gradient-bg px-7 py-3.5 text-sm font-semibold text-[#061223]"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

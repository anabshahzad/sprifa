"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  { quote: "[Add a real customer quote here.]", name: "[Owner name]", role: "[Business name]" },
  { quote: "[Add a real customer quote here.]", name: "[Owner name]", role: "[Business name]" },
  { quote: "[Add a real customer quote here.]", name: "[Owner name]", role: "[Business name]" },
];

export function Testimonials() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <Quote className="mx-auto mb-6 h-8 w-8 text-teal opacity-60" />
          <p className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-fg">
            Great digital products should feel obvious.
          </p>
        </motion.div>

        {/* <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-dashed border-border bg-bg-alt p-6"
            >
              <p className="text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 text-sm font-semibold text-fg">{t.name}</div>
              <div className="text-xs text-muted">{t.role}</div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

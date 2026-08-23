"use client";

import { motion } from "framer-motion";

const STAGES = [
  { n: "01", title: "Discover", body: "Understand the business, customers, goals, and constraints." },
  { n: "02", title: "Design", body: "Transform ideas into clear digital experiences." },
  { n: "03", title: "Build", body: "Develop scalable, production-ready products." },
  { n: "04", title: "Grow", body: "Launch, measure, improve, and evolve." },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-muted"
          >
            HOW WE WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[clamp(2rem,3.6vw,3rem)] font-bold tracking-[-0.03em] text-fg"
          >
            From idea to product. Without the unnecessary complexity.
          </motion.h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.2, 0.7, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-6 h-px brand-gradient-bg"
          />
          <div className="grid grid-cols-4 gap-8">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="pt-14"
              >
                <div className="absolute -mt-[62px] flex h-3 w-3 items-center justify-center">
                  <span className="h-3 w-3 rounded-full brand-gradient-bg" />
                </div>
                <span className="brand-gradient-text text-sm font-bold">{s.n}</span>
                <h3 className="mt-2 text-xl font-bold text-fg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative flex flex-col gap-10 lg:hidden">
          <div className="absolute bottom-0 left-[5px] top-0 w-px bg-border" />
          {STAGES.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8"
            >
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full brand-gradient-bg" />
              <span className="brand-gradient-text text-xs font-bold">{s.n}</span>
              <h3 className="mt-1 text-lg font-bold text-fg">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

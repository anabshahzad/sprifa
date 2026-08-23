"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  { n: "01", title: "Simple", body: "Complex systems should feel simple to the people using them." },
  { n: "02", title: "Useful", body: "Every feature should serve a real purpose." },
  { n: "03", title: "Scalable", body: "Products should be built to grow with the business." },
];

export function WhySprifa() {
  return (
    <section id="about" className="bg-bg-alt px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl text-[clamp(2rem,3.8vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.03em] text-fg"
        >
          Technology should solve problems, not create more of them.
        </motion.h2>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="brand-gradient-text text-6xl font-extrabold tracking-tight opacity-80 lg:text-7xl">
                {p.n}
              </span>
              <h3 className="mt-4 text-xl font-bold text-fg">{p.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

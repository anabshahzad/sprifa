"use client";

import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="px-6 py-32 lg:py-44">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xs font-semibold tracking-[0.2em] text-muted"
        >
          BUILT WITH PURPOSE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2rem,4.4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-fg"
        >
          Good digital products don&apos;t just look better.
          <br />
          They make businesses <span className="brand-gradient-text">work better</span>.
        </motion.h2>
      </div>
    </section>
  );
}

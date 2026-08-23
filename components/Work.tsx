"use client";

import { motion } from "framer-motion";
import { CaseStudyCard } from "./CaseStudyCard";
import { QRServePreview } from "./QRServePreview";
import { InvoCanvasPreview } from "./InvoCanvasPreview";

export function Work() {
  return (
    <section id="work" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-muted"
          >
            SELECTED WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[clamp(2rem,3.6vw,3rem)] font-bold tracking-[-0.03em] text-fg"
          >
            Products built for the real world.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-6">
          <CaseStudyCard
            title="QRServe"
            subtitle="Restaurant ordering, reimagined."
            tags={["PRODUCT DESIGN", "WHATSAPP", "AUTOMATION"]}
            visual={<QRServePreview />}
          />
          <CaseStudyCard
            title="InvoCanvas"
            subtitle="Invoices without rigid templates."
            tags={["SAAS", "PRODUCT DESIGN", "DEVELOPMENT"]}
            visual={<InvoCanvasPreview />}
            reverse
          />
          {/* <CaseStudyCard
            title="[Next case study]"
            subtitle="[Add a short one-line result for this project.]"
            tags={["PROJECT TYPE"]}
            visual={
              <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-border text-sm text-muted">
                Project preview
              </div>
            }
            placeholder
          /> */}
        </div>
      </div>
    </section>
  );
}

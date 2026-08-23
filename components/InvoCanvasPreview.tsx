"use client";

import { motion } from "framer-motion";

const BLOCKS = ["Header", "Client", "Items", "Tax", "Discount", "Total", "Notes"];

export function InvoCanvasPreview({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        dark ? "border-white/10 bg-white/5" : "border-border bg-bg-alt"
      }`}
    >
      <div className="flex flex-wrap gap-2">
        {BLOCKS.map((b, i) => (
          <motion.span
            key={b}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${
              dark
                ? "border-white/10 bg-[#0D1927] text-white/80"
                : "border-border bg-card text-fg"
            }`}
          >
            {b}
          </motion.span>
        ))}
      </div>

      <div className={`mt-4 rounded-xl p-4 text-sm ${dark ? "bg-[#0D1927]" : "bg-card"}`}>
        <div className="flex justify-between text-xs" style={{ color: dark ? "#9BA9B3" : "var(--muted)" }}>
          <span>Brand consult — 4 hrs</span>
          <span>$320.00</span>
        </div>
        <div className="mt-2 flex justify-between text-xs" style={{ color: dark ? "#9BA9B3" : "var(--muted)" }}>
          <span>Landing page build</span>
          <span>$980.00</span>
        </div>
        <div
          className={`mt-3 flex justify-between border-t pt-3 text-sm font-bold ${
            dark ? "border-white/10 text-white" : "border-border text-fg"
          }`}
        >
          <span>Total</span>
          <span>$1,300.00</span>
        </div>
      </div>
    </div>
  );
}

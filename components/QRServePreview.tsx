"use client";

import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

export function QRServePreview({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex justify-center">
      <div
        className={`relative w-56 rounded-[2rem] border p-3 shadow-xl ${
          dark ? "border-white/10 bg-white/5" : "border-border bg-bg-alt"
        }`}
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />
        <div
          className={`rounded-2xl p-3 ${dark ? "bg-[#0D1927]" : "bg-card"}`}
        >
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-muted">
            <QrCode className="h-3.5 w-3.5 text-lime" /> QRServe
          </div>
          <div className="space-y-1.5">
            <div className={`w-3/4 rounded-lg px-2.5 py-1.5 text-[10px] ${dark ? "bg-white/10 text-white/80" : "bg-bg-alt text-fg"}`}>
              Hi! Here&apos;s today&apos;s menu.
            </div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="ml-auto w-3/4 rounded-lg px-2.5 py-1.5 text-right text-[10px] font-medium text-[#061223]"
              style={{ background: "linear-gradient(135deg, #A8E85F, #00D8D0)" }}
            >
              2 iced lattes + a croissant
            </motion.div>
            <div className={`w-2/3 rounded-lg px-2.5 py-1.5 text-[10px] ${dark ? "bg-white/10 text-white/80" : "bg-bg-alt text-fg"}`}>
              Total&apos;s $18.50 — confirm?
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-between px-1 text-[10px] font-semibold" style={{ color: dark ? "#9BA9B3" : "var(--muted)" }}>
          <span>Order total</span>
          <span className={dark ? "text-white" : "text-fg"}>$18.50</span>
        </div>
      </div>
    </div>
  );
}

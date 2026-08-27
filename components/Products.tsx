"use client";

import { motion } from "framer-motion";
import { ArrowRight, QrCode, MenuSquare, MessageCircle, ShoppingBag, User } from "lucide-react";
import { InvoCanvasPreview } from "./InvoCanvasPreview";
import { QRServePreview } from "./QRServePreview";

const QR_TAGS = ["PRODUCT DESIGN", "WHATSAPP", "AUTOMATION"];
const INVO_TAGS = ["SAAS", "PRODUCT DESIGN", "DEVELOPMENT"];

const FLOW = [
  { label: "QR Code", icon: QrCode },
  { label: "Restaurant Menu", icon: MenuSquare },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Order", icon: ShoppingBag },
  { label: "Customer", icon: User },
];

export function Products() {
  return (
    <section id="products" className="bg-[#061223] px-6 py-28 text-white lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/50"
          >
            OUR OWN PRODUCTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[clamp(2rem,3.6vw,3rem)] font-bold tracking-[-0.03em]"
          >
            We don&apos;t just build products for clients.
            <br />
            We build our <span className="brand-gradient-text">own</span>.
          </motion.h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* QRServe */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D1927] p-8 lg:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(0,230,220,0.35), transparent 70%)" }}
            />
            <div className="mb-5 flex flex-wrap gap-2">
              {QR_TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold tracking-[0.1em] text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold">QRServe</h3>
            <p className="mt-2 max-w-sm text-sm text-white/60">
              Turn a menu scan into a conversation.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_auto]">
              <div className="relative flex flex-col justify-center gap-2">
                {FLOW.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{ background: "linear-gradient(135deg, rgba(168,232,95,0.25), rgba(0,216,208,0.25))" }}
                    >
                      <step.icon className="h-4 w-4 text-[#72D85A]" />
                    </div>
                    <span className="text-sm font-medium text-white/85">{step.label}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="justify-self-center sm:justify-self-end"
              >
                <QRServePreview dark />
              </motion.div>
            </div>

            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00E6DC]"
            >
              Explore QRServe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* InvoCanvas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D1927] p-8 lg:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -bottom-16 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(168,232,95,0.35), transparent 70%)" }}
            />
            <div className="mb-5 flex flex-wrap gap-2">
              {INVO_TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold tracking-[0.1em] text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold">InvoCanvas</h3>
            <p className="mt-2 max-w-sm text-sm text-white/60">
              Build invoices exactly the way your business needs them.
            </p>

            <div className="mt-8 max-w-md">
              <InvoCanvasPreview dark />
            </div>

            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#A8E85F]"
            >
              Explore InvoCanvas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

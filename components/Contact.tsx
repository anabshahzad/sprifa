"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

const STEPS = [
  "Share your requirements",
  "Discuss them with our experts",
  "Get a free quote in 24 hours",
  "Start your project",
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#00CFC5]";

  return (
    <section id="contact" className="bg-[#061223] px-6 py-28 text-white lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/50"
          >
            CONTACT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[clamp(2rem,3.6vw,3rem)] font-bold tracking-[-0.03em]"
          >
            For <span className="brand-gradient-text">inquiries</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-sm text-sm text-white/60"
          >
            Ready to turn your idea into a high-quality web or mobile app? Get
            a free quote within 24 hours.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D1927] p-8 lg:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(168,232,95,0.35), transparent 70%)" }}
            />

            <div className="relative flex flex-col gap-4">
              <a
                href="tel:+923289304793"
                className="group flex items-center gap-3 text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, rgba(168,232,95,0.25), rgba(0,216,208,0.25))" }}
                >
                  <Phone className="h-4 w-4 text-[#72D85A]" />
                </span>
                +92 328 9304793
              </a>
              <a
                href="mailto:sprifaoffical@gmail.com"
                className="group flex items-center gap-3 text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, rgba(0,216,208,0.25), rgba(0,127,122,0.25))" }}
                >
                  <Mail className="h-4 w-4 text-[#00E6DC]" />
                </span>
                sprifaoffical@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm font-medium text-white/85">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, rgba(0,127,122,0.25), rgba(6,18,35,0.25))" }}
                >
                  <MapPin className="h-4 w-4 text-[#00CFC5]" />
                </span>
                Remote — Global
              </div>
            </div>

            <div className="relative mt-10 flex flex-col gap-3 border-t border-white/10 pt-8">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-xs font-semibold tracking-[0.06em] text-white/50"
                >
                  <span className="text-[#A8E85F]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="uppercase">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D1927] p-8 lg:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(0,230,220,0.35), transparent 70%)" }}
            />

            <h3 className="relative text-xl font-bold tracking-tight">Send us a message</h3>

            <form onSubmit={handleSubmit} className="relative mt-7 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-medium text-white/45">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-medium text-white/45">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-medium text-white/45">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className={inputClass} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-medium text-white/45">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-2 rounded-full brand-gradient-bg px-6 py-3 text-sm font-semibold text-[#061223] shadow-[0_16px_36px_-14px_var(--glow-teal)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Submit Inquiry"}
                  {status === "sending" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                </button>

                {status === "sent" && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A8E85F]">
                    <CheckCircle2 className="h-4 w-4" /> Message sent — we&apos;ll reply soon.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-xs font-medium text-red-400">{errorMessage}</span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

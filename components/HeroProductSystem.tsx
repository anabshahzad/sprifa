"use client";

import { motion } from "framer-motion";
import { Bell, QrCode, Receipt, LayoutDashboard, Globe } from "lucide-react";
import { LogoMark } from "./Logo";

function Float({
  children,
  delay = 0,
  duration = 5,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroProductSystem() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Desktop / tablet composition */}
      <div className="relative hidden h-[520px] md:block">
        <svg
          viewBox="0 0 1000 520"
          className="pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
        >
          <defs>
            <linearGradient id="connector" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A8E85F" stopOpacity="0.6" />
              <stop offset="55%" stopColor="#00D8D0" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#007F7A" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M180 120 L 470 250" stroke="url(#connector)" strokeWidth="1.5" strokeDasharray="4 6" />
          <path d="M470 250 L 200 380" stroke="url(#connector)" strokeWidth="1.5" strokeDasharray="4 6" />
          <path d="M470 250 L 800 150" stroke="url(#connector)" strokeWidth="1.5" strokeDasharray="4 6" />
          <path d="M470 250 L 790 380" stroke="url(#connector)" strokeWidth="1.5" strokeDasharray="4 6" />
          <path d="M470 250 L 500 60" stroke="url(#connector)" strokeWidth="1.5" strokeDasharray="4 6" />
        </svg>

        {/* Center abstract shape */}
        <div className="absolute left-1/2 top-[250px] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex h-24 w-24 items-center justify-center rounded-3xl brand-gradient-bg shadow-[0_20px_50px_-16px_var(--glow-teal)]"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <LogoMark className="h-11 w-11" />
            </motion.div>
          </motion.div>
        </div>

        {/* Browser window */}
        <Float delay={0.2} duration={6} className="absolute left-[40px] top-[70px] w-[220px]">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-xl">
            <div className="mb-2 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-lime/70" />
              <span className="h-2 w-2 rounded-full bg-aqua/70" />
              <span className="h-2 w-2 rounded-full bg-teal/70" />
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-bg-alt px-2 py-1.5 text-[10px] text-muted">
              <Globe className="h-3 w-3" /> sprifa.com
            </div>
            <div className="mt-3 h-3 w-3/4 rounded bg-bg-alt" />
            <div className="mt-2 h-3 w-1/2 rounded bg-bg-alt" />
            <div className="mt-3 h-14 rounded-lg brand-gradient-bg opacity-90" />
          </div>
        </Float>

        {/* QR interface */}
        <Float delay={0.6} duration={5} className="absolute right-[70px] top-[40px] w-[150px]">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-xl">
            <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-muted">
              <QrCode className="h-3.5 w-3.5 text-teal" /> Scan to order
            </div>
            <div className="grid grid-cols-5 gap-[3px]">
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className="aspect-square rounded-[2px]"
                  style={{ background: [3, 7, 11, 13, 17, 21].includes(i) ? "transparent" : "var(--fg)" }}
                />
              ))}
            </div>
          </div>
        </Float>

        {/* Dashboard */}
        <Float delay={0.1} duration={7} className="absolute right-[20px] top-[300px] w-[240px]">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-xl">
            <div className="mb-3 flex items-center gap-1.5 text-[10px] font-semibold text-muted">
              <LayoutDashboard className="h-3.5 w-3.5 text-aqua" /> Live dashboard
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-bg-alt p-2">
                <div className="text-[9px] text-muted">Orders</div>
                <div className="text-sm font-bold text-fg">128</div>
              </div>
              <div className="rounded-lg bg-bg-alt p-2">
                <div className="text-[9px] text-muted">Repeat</div>
                <div className="text-sm font-bold text-fg">62%</div>
              </div>
            </div>
            <div className="mt-2 h-10 rounded-lg bg-bg-alt" />
          </div>
        </Float>

        {/* Invoice */}
        <Float delay={0.4} duration={5.5} className="absolute left-[100px] top-[330px] w-[180px]">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-xl">
            <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-muted">
              <Receipt className="h-3.5 w-3.5 text-lime" /> Invoice #0142
            </div>
            <div className="flex justify-between text-[10px] text-muted">
              <span>Landing page build</span>
              <span>$980</span>
            </div>
            <div className="mt-1.5 flex justify-between border-t border-border pt-1.5 text-[10px] font-bold text-fg">
              <span>Total</span>
              <span>$1,300</span>
            </div>
          </div>
        </Float>

        {/* Floating notification */}
        <Float delay={0.8} duration={4.5} className="absolute left-1/2 top-[10px] -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-[10px] font-semibold text-fg shadow-lg">
            <Bell className="h-3 w-3 text-teal" /> New order confirmed
          </div>
        </Float>
      </div>

      {/* Mobile: simplified ecosystem */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        <div className="col-span-2 flex items-center justify-center rounded-2xl brand-gradient-bg p-6">
          <LogoMark className="h-10 w-10" />
        </div>
        <div className="rounded-2xl border border-border bg-card p-3 shadow-md">
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-muted">
            <LayoutDashboard className="h-3.5 w-3.5 text-aqua" /> Dashboard
          </div>
          <div className="text-lg font-bold text-fg">128</div>
          <div className="text-[10px] text-muted">Orders today</div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-3 shadow-md">
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold text-muted">
            <QrCode className="h-3.5 w-3.5 text-teal" /> QRServe
          </div>
          <div className="text-lg font-bold text-fg">62%</div>
          <div className="text-[10px] text-muted">Repeat orders</div>
        </div>
      </div>
    </div>
  );
}

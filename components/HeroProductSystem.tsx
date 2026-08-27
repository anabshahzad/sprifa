"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Bell, QrCode, Receipt, LayoutDashboard } from "lucide-react";
import { LogoMark } from "./Logo";

function useParallax() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return { springX, springY, onMouseMove, onMouseLeave };
}

function Satellite({
  x,
  y,
  factor,
  springX,
  springY,
  delay,
  floatDuration,
  children,
}: {
  x: number;
  y: number;
  factor: number;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  delay: number;
  floatDuration: number;
  children: React.ReactNode;
}) {
  const px = useTransform(springX, (v) => v * factor);
  const py = useTransform(springY, (v) => v * factor);

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, x: px, y: py }}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay }}
    >
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: floatDuration, delay: delay + 0.7, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function GlassChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl border border-white/15 bg-white/10 p-3 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-white/[0.06]">
      {children}
    </div>
  );
}

export function HeroProductSystem() {
  const { springX, springY, onMouseMove, onMouseLeave } = useParallax();
  const containerRef = useRef<HTMLDivElement>(null);

  const cardRotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const cardRotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const glowX = useTransform(springX, (v) => v * -40);
  const glowY = useTransform(springY, (v) => v * -40);

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Desktop / tablet composition */}
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative hidden h-[480px] md:block"
        style={{ perspective: 1400 }}
      >
        {/* Aurora background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[3rem]">
          <motion.div
            className="absolute h-[380px] w-[380px] rounded-full blur-[90px]"
            style={{ background: "radial-gradient(circle, #A8E85F, transparent 70%)", left: "6%", top: "0%" }}
            animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0], scale: [1, 1.08, 0.96, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-[420px] w-[420px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, #00D8D0, transparent 70%)", right: "2%", top: "10%" }}
            animate={{ x: [0, -25, 15, 0], y: [0, 20, -15, 0], scale: [1, 0.94, 1.06, 1] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-[320px] w-[320px] rounded-full blur-[90px] opacity-70"
            style={{ background: "radial-gradient(circle, #007F7A, transparent 70%)", left: "30%", bottom: "-10%" }}
            animate={{ x: [0, 20, -20, 0], y: [0, -10, 15, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(color-mix(in oklab, var(--fg) 60%, transparent) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        {/* Center flagship glass card */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[2.2rem] opacity-70 blur-2xl"
            style={{
              background: "conic-gradient(from 90deg, #A8E85F, #00D8D0, #007F7A, #A8E85F)",
              x: glowX,
              y: glowY,
            }}
          />
          <motion.div
            style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[300px] overflow-hidden rounded-[1.75rem] border border-white/20 bg-card/90 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-lime/70" />
                <span className="h-2 w-2 rounded-full bg-aqua/70" />
                <span className="h-2 w-2 rounded-full bg-teal/70" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-lg brand-gradient-bg">
                <LogoMark className="h-3.5 w-3.5" />
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-[10px] font-semibold text-muted">
                <span className="flex items-center gap-1.5">
                  <LayoutDashboard className="h-3.5 w-3.5 text-aqua" /> Live dashboard
                </span>
                <span className="text-lime">● Live</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="rounded-xl bg-bg-alt p-3">
                  <div className="text-[9px] text-muted">Orders</div>
                  <div className="text-lg font-bold text-fg">128</div>
                </div>
                <div className="rounded-xl bg-bg-alt p-3">
                  <div className="text-[9px] text-muted">Repeat</div>
                  <div className="text-lg font-bold text-fg">62%</div>
                </div>
              </div>
              <div className="mt-3 h-16 overflow-hidden rounded-xl bg-bg-alt">
                <svg viewBox="0 0 300 64" className="h-full w-full" preserveAspectRatio="none">
                  <path
                    d="M0 48 C 40 30, 70 55, 110 34 S 170 12, 210 28 S 260 8, 300 20"
                    fill="none"
                    stroke="url(#chart-grad)"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#A8E85F" />
                      <stop offset="55%" stopColor="#00D8D0" />
                      <stop offset="100%" stopColor="#007F7A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Satellite glass chips */}
        <Satellite x={30} y={40} factor={22} springX={springX} springY={springY} delay={0.25} floatDuration={5.5}>
          <GlassChip>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-fg">
              <QrCode className="h-3.5 w-3.5 text-teal" /> Scan to order
            </div>
          </GlassChip>
        </Satellite>

        <Satellite x={760} y={60} factor={-18} springX={springX} springY={springY} delay={0.4} floatDuration={6.5}>
          <GlassChip>
            <div className="flex items-center gap-2 text-[10px] font-semibold text-fg">
              <Bell className="h-3.5 w-3.5 text-lime" /> New order confirmed
            </div>
          </GlassChip>
        </Satellite>

        <Satellite x={800} y={310} factor={26} springX={springX} springY={springY} delay={0.55} floatDuration={5}>
          <GlassChip>
            <div className="text-[10px] font-semibold text-fg">
              <div className="mb-1 flex items-center gap-1.5 text-muted">
                <Receipt className="h-3.5 w-3.5 text-aqua" /> Invoice #0142
              </div>
              <div className="text-sm font-bold">$1,300.00</div>
            </div>
          </GlassChip>
        </Satellite>

        <Satellite x={50} y={340} factor={-20} springX={springX} springY={springY} delay={0.7} floatDuration={6}>
          <GlassChip>
            <div className="text-[10px] font-semibold text-fg">
              Repeat customers
              <div className="text-sm font-bold text-lime">62%</div>
            </div>
          </GlassChip>
        </Satellite>
      </div>

      {/* Mobile: simplified glass showcase */}
      <div className="relative overflow-hidden rounded-[2rem] md:hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-10 -top-10 h-56 w-56 rounded-full opacity-60 blur-[70px]"
            style={{ background: "radial-gradient(circle, #A8E85F, transparent 70%)" }}
          />
          <div
            className="absolute -right-10 bottom-0 h-56 w-56 rounded-full opacity-50 blur-[70px]"
            style={{ background: "radial-gradient(circle, #00D8D0, transparent 70%)" }}
          />
        </div>
        <div className="relative flex flex-col gap-3 p-1">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-[1.5rem] border border-white/20 bg-card/90 p-5 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between text-[10px] font-semibold text-muted">
              <span className="flex items-center gap-1.5">
                <LayoutDashboard className="h-3.5 w-3.5 text-aqua" /> Live dashboard
              </span>
              <div className="flex h-6 w-6 items-center justify-center rounded-lg brand-gradient-bg">
                <LogoMark className="h-3.5 w-3.5" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl bg-bg-alt p-3">
                <div className="text-[9px] text-muted">Orders</div>
                <div className="text-lg font-bold text-fg">128</div>
              </div>
              <div className="rounded-xl bg-bg-alt p-3">
                <div className="text-[9px] text-muted">Repeat</div>
                <div className="text-lg font-bold text-fg">62%</div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-3">
            <GlassChip>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-fg">
                <QrCode className="h-3.5 w-3.5 text-teal" /> QRServe
              </div>
            </GlassChip>
            <GlassChip>
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-fg">
                <Receipt className="h-3.5 w-3.5 text-aqua" /> $1,300.00
              </div>
            </GlassChip>
          </div>
        </div>
      </div>
    </div>
  );
}

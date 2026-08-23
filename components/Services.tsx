"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, LayoutDashboard, Workflow } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

function BrowserVisual() {
  return (
    <div className="rounded-2xl border border-border bg-bg-alt p-4">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-lime/70" />
        <span className="h-2 w-2 rounded-full bg-aqua/70" />
        <span className="h-2 w-2 rounded-full bg-teal/70" />
      </div>
      <div className="h-3 w-2/3 rounded bg-card" />
      <div className="mt-2 h-3 w-1/2 rounded bg-card" />
      <div className="mt-3 h-16 rounded-xl brand-gradient-bg opacity-90" />
    </div>
  );
}

function PhoneVisual() {
  return (
    <div className="flex justify-center">
      <div className="w-28 rounded-[1.6rem] border border-border bg-bg-alt p-2.5">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-card" />
        <div className="h-20 rounded-xl brand-gradient-bg opacity-90" />
        <div className="mt-2 h-2.5 w-2/3 rounded bg-card" />
        <div className="mt-1.5 h-2.5 w-1/2 rounded bg-card" />
      </div>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="rounded-2xl border border-border bg-bg-alt p-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-card p-2.5">
          <div className="text-[10px] text-muted">MRR</div>
          <div className="text-sm font-bold text-fg">$18.2k</div>
        </div>
        <div className="rounded-lg bg-card p-2.5">
          <div className="text-[10px] text-muted">Active users</div>
          <div className="text-sm font-bold text-fg">2,140</div>
        </div>
      </div>
      <div className="mt-2 h-12 rounded-lg bg-card" />
    </div>
  );
}

function AutomationVisual() {
  const steps = ["Website", "CRM", "WhatsApp", "Dashboard", "Customer"];
  return (
    <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-bg-alt p-4">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div className="flex-1 rounded-lg bg-card px-3 py-2 text-xs font-medium text-fg">{s}</div>
          {i < steps.length - 1 && <div className="h-3 w-px bg-border" />}
        </div>
      ))}
    </div>
  );
}

const SERVICES = [
  {
    index: "01",
    title: "Websites",
    icon: Globe,
    headline: "Websites that turn attention into action.",
    body: "High-performance websites designed around your customers, brand, and business goals.",
    visual: <BrowserVisual />,
  },
  {
    index: "02",
    title: "Mobile Apps",
    icon: Smartphone,
    headline: "Apps people actually want to use.",
    body: "Design and development for intuitive mobile experiences.",
    visual: <PhoneVisual />,
  },
  {
    index: "03",
    title: "SaaS Products",
    icon: LayoutDashboard,
    headline: "Complex workflows made simple.",
    body: "Build scalable SaaS platforms with dashboards, authentication, workflows, billing, integrations, and more.",
    visual: <DashboardVisual />,
  },
  {
    index: "04",
    title: "Automation",
    icon: Workflow,
    headline: "Less repetitive work. More momentum.",
    body: "Connect your systems and automate repetitive business processes.",
    visual: <AutomationVisual />,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-bg-alt px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-muted"
          >
            WHAT WE BUILD
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-[clamp(2rem,3.6vw,3rem)] font-bold tracking-[-0.03em] text-fg"
          >
            Digital products designed around your business.
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.title}
              index={s.index}
              title={s.title}
              headline={s.headline}
              body={s.body}
              visual={s.visual}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

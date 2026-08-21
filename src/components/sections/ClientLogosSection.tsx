"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, Cloud, Server, Cpu, Layers } from "lucide-react";

const ITEMS = [
  { name: "Full Stack Web", icon: Layout },
  { name: "Agentic AI Systems", icon: Cpu },
  { name: "Backend APIs", icon: Server },
  { name: "Cloud Architecture", icon: Cloud },
  { name: "Mobile Applications", icon: Smartphone },
  { name: "System Design", icon: Layers },
  { name: "Database Optimization", icon: Database },
  { name: "Custom Solutions", icon: Code2 },
];

export function ClientLogosSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] py-10 sm:py-12 border-y border-white/[0.08]">
      <div className="layout-wrap flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.2em] text-[#FFF7ED]/40 md:border-r md:border-white/[0.1] md:pr-12">
          Engineering Focus
        </p>

        {/* Marquee Container */}
        <div className="relative flex w-full overflow-hidden mask-horizontal">
          <motion.div
            initial={reduceMotion ? { x: 0 } : { x: "0%" }}
            animate={reduceMotion ? {} : { x: "-50%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center gap-10 sm:gap-16 whitespace-nowrap pr-10 sm:pr-16"
          >
            {[...ITEMS, ...ITEMS, ...ITEMS].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-${index}`}
                  className="flex items-center gap-3 opacity-50 transition-opacity hover:opacity-100"
                >
                  <Icon size={24} className="text-[#FF6A00]" />
                  <span className="text-lg sm:text-xl font-medium tracking-tight text-[#FFF7ED]">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { type ServiceItem } from "@/data/services";
import { Layers } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ServiceTechStackSection({ service }: { service: ServiceItem }) {
  const stack = service.techStackDetails;
  if (!stack || stack.length === 0) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="layout-wrap relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <span className="section-eyebrow">Enterprise Stack</span>
          <h2 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-tight text-white sm:text-[2.5rem]">
            Built with <span className="italic text-[#FF6A00]">production-grade</span> tools
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: easeOut }}
              className="group flex flex-col justify-between rounded-[20px] border border-white/[0.08] bg-white/[0.02] p-6 hover:border-[#FF6A00]/40 transition-colors shadow-sm"
            >
              <div>
                <span className="inline-block px-2 py-1 mb-4 rounded-md bg-[#FF6A00]/10 text-[10px] font-bold uppercase tracking-wider text-[#FF6A00]">
                  {tech.category}
                </span>
                <h3 className="mb-2 text-[1.1rem] font-bold text-white/90">{tech.name}</h3>
                <p className="text-[13px] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ServiceItem } from "@/data/services";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ServiceCTASection({ service }: { service: ServiceItem }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0F0F0F] pt-24 pb-24 sm:pt-32 sm:pb-32 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.05),transparent_70%)]" />
      
      <div className="layout-wrap relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#1A1A1A] border border-white/10 shadow-[0_0_30px_rgba(255,106,0,0.1)]">
            <BrandIcon base={brandIcons.cta.startProject} tone="orange" size={40} />
          </div>
          
          <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-tight text-white sm:text-[3.5rem] md:text-[4rem]">
            Ready to build your <span className="italic font-light text-[#FF6A00]">{service.title.toLowerCase()}?</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
            Let's discuss your project scope, timeline, and architectural requirements. No commitments, just a technical discovery call.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FF6A00] px-8 text-[13px] font-bold uppercase tracking-[0.1em] text-black transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Start a project brief <ArrowRight size={16} />
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white/5 px-8 text-[13px] font-bold uppercase tracking-[0.1em] text-white border border-white/10 transition-colors hover:bg-white/10 w-full sm:w-auto"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

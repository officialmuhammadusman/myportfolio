"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type AboutItem } from "@/data/aboutData";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AboutCTASection({ about }: { about: AboutItem }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] py-32 sm:py-48">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,1)_0%,rgba(20,20,20,0)_50%,rgba(10,10,10,1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.08),transparent_70%)]" />
      
      <div className="layout-wrap relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: easeOut }}
        >
          <div className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#111111] border border-white/[0.08] shadow-[0_0_40px_rgba(255,106,0,0.15)] relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-[#FF6A00]/10 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100" />
            <BrandIcon base={brandIcons.cta.letsTalk} tone="orange" size={48} className="relative z-10 transition-transform duration-500 group-hover:scale-110" />
          </div>
          
          <h2 className="text-[2.75rem] leading-[1.05] tracking-tight text-white sm:text-[4rem] md:text-[4.5rem]">
            Ready to leverage <br className="hidden sm:block" />
            <span className="italic font-light text-[#FF6A00] relative inline-block">
              this expertise?
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5, ease: easeOut }}
                className="absolute -bottom-2 left-0 h-[2px] bg-[#FF6A00]"
              />
            </span>
          </h2>
          
          <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-relaxed text-white/50 sm:text-[20px] font-medium">
            Whether you need a scalable architecture, an AI integration, or a complete product rewrite, let's discuss how we can execute it perfectly.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link 
              href="/contact" 
              className="group relative inline-flex h-16 w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 text-[13px] font-medium uppercase tracking-[0.14em] text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-[#FF6A00] translate-y-[100%] transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white flex items-center gap-2">
                Start a Conversation <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link 
              href="/work" 
              className="inline-flex h-16 w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white/[0.03] px-10 text-[13px] font-medium uppercase tracking-[0.14em] text-white border border-white/10 transition-all hover:bg-white/[0.08] hover:border-white/20"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

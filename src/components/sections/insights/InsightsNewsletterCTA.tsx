"use client";

import { motion } from "framer-motion";
import { type InsightCategory } from "@/data/insightsData";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";
import { Mail, ArrowRight } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function InsightsNewsletterCTA({ category }: { category: InsightCategory }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0F0F0F] pt-24 pb-24 sm:pt-32 sm:pb-32 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.05),transparent_70%)]" />
      
      <div className="layout-wrap relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#1A1A1A] border border-white/10 shadow-[0_0_30px_rgba(255,106,0,0.1)]">
            <Mail className="h-8 w-8 text-[#FF6A00]" />
          </div>
          
          <h2 className="text-[2.5rem] leading-[1.1] tracking-tight text-white sm:text-[3.5rem]">
            Get insights on <span className="italic text-[#FF6A00]">engineering.</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
            Join my private newsletter for deep technical notes on Next.js, AI architectures, and production scaling. No spam, just code.
          </p>
          
          <form className="mt-10 mx-auto flex max-w-md flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="h-14 w-full rounded-full bg-white/5 px-6 text-[14px] text-white outline-none border border-white/10 focus:border-[#FF6A00]/50 transition-colors placeholder:text-white/30"
              required
            />
            <button 
              type="submit" 
              className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-8 text-[13px] font-medium uppercase tracking-[0.1em] text-black transition-transform hover:scale-105 active:scale-95"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
          
          <p className="mt-6 text-[12px] text-white/40">
            Unsubscribe at any time. Read our privacy policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SERVICES, SERVICE_PROCESS } from "@/data/services";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";
import { MobileTextDrawer } from "@/components/ui/MobileTextDrawer";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ServicesClientPage() {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleServices = SERVICES.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 2, SERVICES.length));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      
      {/* ── HERO BANNER ── */}
      <section className="relative isolate min-h-[60vh] flex flex-col justify-end overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600&h=900"
            alt="Services Hero"
            fill
            priority
            className="object-cover object-[center_30%] opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.4)_0%,rgba(5,5,5,0.9)_70%,rgba(5,5,5,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,106,0,0.15),transparent_60%)]" />
        </motion.div>
        
        <div className="layout-wrap relative z-10 w-full">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            >
              <h1 className="text-[2.5rem] font-medium leading-[1.05] tracking-tight text-white sm:text-[3.5rem] md:text-[4rem] lg:text-[4.75rem]">
                Services built to <span className="italic text-[#FF6A00]">ship.</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
              className="mt-6 text-[16px] leading-relaxed text-white/70 sm:mt-8 sm:text-[20px] max-w-2xl font-medium"
            >
              Software agency for founders and businesses — full-stack products, AI/RAG systems,
              backends, cloud, and mobile. Clear scope. Weekly progress. Production-ready code.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-20 pb-24 sm:pt-28 sm:pb-32 border-t border-white/5">
        <div className="layout-wrap relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 mb-10">
            <AnimatePresence mode="popLayout">
              {visibleServices.map((service, index) => (
                <Link 
                  key={service.id} 
                  href={`/services/${service.id}`}
                  className="block h-auto w-full"
                >
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
                  className="h-full group relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-[#0A0A0A] transition-all hover:border-[#FF6A00]/30 flex flex-col hover:shadow-[0_0_40px_rgba(255,106,0,0.15)] hover:-translate-y-1"
                >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.05),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {service.heroImage && (
                  <div className="h-56 w-full overflow-hidden border-b border-white/5 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={service.heroImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-60 grayscale-[10%] transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105" 
                    />
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full p-8 sm:p-10">
                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#FF6A00]">
                    {service.eyebrow}
                  </p>
                  
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1A1A1A] border border-white/10 group-hover:border-[#FF6A00]/30 transition-colors">
                      <BrandIcon base={service.iconBase} tone="orange" size={28} />
                    </div>
                    <h2 className="text-[1.5rem] font-medium leading-[1.1] tracking-tight text-white group-hover:text-[#FF6A00] transition-colors">
                      {service.title}
                    </h2>
                  </div>

                  <MobileTextDrawer
                    text={service.description}
                    lines={3}
                    className="mb-6 text-[15px] leading-relaxed text-white/60"
                  >
                    <div className="mb-8 flex flex-wrap gap-2">
                      {service.stack.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-white/70">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                      <p className="text-[13px] font-medium text-white/80">
                        <span className="text-white/40">Outcome:</span> {service.outcome}
                      </p>
                    </div>
                  </MobileTextDrawer>
                </div>
              </motion.article>
              </Link>
              ))}
            </AnimatePresence>
          </div>
          
          {visibleCount < SERVICES.length && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-8"
            >
              <button
                onClick={handleShowMore}
                className="group relative flex items-center justify-center gap-3 rounded-full bg-[#FF6A00] px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_24px_rgba(255,106,0,0.25)] hover:shadow-[0_0_40px_rgba(255,106,0,0.45)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2">
                  Load More Capabilities
                  <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="relative isolate overflow-hidden bg-[#050505] pt-24 pb-24 sm:pt-32 sm:pb-32 border-t border-white/5">
        <div className="layout-wrap relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-16 text-center"
          >
            <span className="section-eyebrow">Delivery Pipeline</span>
            <h3 className="mt-4 text-[2rem] font-medium leading-[1.1] tracking-tight text-white sm:text-[2.75rem]">
              How engagements <span className="italic text-[#FF6A00]">run.</span>
            </h3>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
                className="relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#0A0A0A] p-8"
              >
                <p className="mb-4 font-mono text-[14px] font-medium text-[#FF6A00]">{step.step}</p>
                <p className="mb-3 text-[1.25rem] font-medium text-white">
                  {step.title}
                </p>
                <p className="text-[14px] leading-relaxed text-white/50">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK CTA ── */}
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
            
            <h2 className="text-[2rem] font-medium leading-[1.1] tracking-tight text-white sm:text-[2.75rem] md:text-[3.25rem]">
              Ready to start your <span className="italic font-light text-[#FF6A00]">project?</span>
            </h2>
            
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/60 sm:text-[18px]">
              Tell me the goal — I'll reply with scope, timeline, and next steps. No commitments, just a technical discovery call.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FF6A00] px-8 text-[13px] font-medium uppercase tracking-[0.1em] text-black transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Let's Talk <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

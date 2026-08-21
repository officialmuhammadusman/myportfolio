"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { type ServiceItem } from "@/data/services";
import { BrandIcon } from "@/components/ui/BrandIcon";

const cineEase = [0.16, 1, 0.3, 1] as const;

export function ServiceHeroSection({ service }: { service: ServiceItem }) {
  const fallbackImage = "/images/projects/live/cliender.png";
  
  return (
    <section className="relative isolate min-h-[90vh] sm:min-h-screen flex flex-col justify-end overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 bg-[#050505]">
      
      {/* Cinematic Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: cineEase }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={service.heroImage || fallbackImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-[center_30%]"
        />
        
        {/* Gradients to blend image into background and overlay text */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.4)_0%,rgba(5,5,5,0.7)_40%,rgba(5,5,5,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,106,0,0.15),transparent_60%)]" />
      </motion.div>
      
      <div className="layout-wrap relative z-10 w-full">
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: cineEase }}
          className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 sm:mb-12 sm:text-xs"
        >
          <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
          <ChevronRight size={12} className="opacity-50" />
          <Link href="/services" className="hover:text-[#FF6A00] transition-colors">Services</Link>
          <ChevronRight size={12} className="opacity-50" />
          <span className="text-[#FF6A00]">{service.shortTitle}</span>
        </motion.div>

        {/* Hero Content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: cineEase }}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
                <BrandIcon base={service.iconBase} tone="orange" size={24} />
              </div>
              <h1 className="text-[2.75rem] leading-[1.05] tracking-tight text-white sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem]">
                {service.title.split(" ").map((word, i, arr) => (
                   <span key={i} className={i === arr.length - 1 ? "italic text-gradient" : ""}>
                     {word}{" "}
                   </span>
                ))}
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: cineEase }}
              className="mt-6 text-[15px] leading-relaxed text-white/70 sm:mt-8 sm:text-[18px] lg:text-[20px] max-w-2xl"
            >
              {service.description}
            </motion.p>
          </div>

          {/* Quick Stats / Outcome Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: cineEase }}
            className="w-full lg:w-[340px] shrink-0 rounded-[24px] border border-white/10 bg-[#0A0A0A]/40 backdrop-blur-2xl p-8 relative overflow-hidden group hover:border-[#FF6A00]/40 transition-colors shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute inset-x-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#FF6A00]/40 to-transparent group-hover:via-[#FF6A00] transition-all duration-700" />
            <div className="absolute top-0 right-0 p-4 opacity-10 mix-blend-overlay pointer-events-none">
              <BrandIcon base={service.iconBase} tone="white" size={120} />
            </div>
            
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#FF6A00] mb-3 relative z-10">Primary Outcome</p>
            <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed text-white/90 relative z-10">{service.outcome}</p>
            
            <div className="mt-6 flex flex-wrap gap-2 relative z-10">
              {service.homeTags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-white/70 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

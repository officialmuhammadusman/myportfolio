"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { type AboutItem } from "@/data/aboutData";

const cineEase = [0.16, 1, 0.3, 1] as const;

export function AboutHeroSection({ about, imageSrc }: { about: AboutItem; imageSrc: string }) {
  return (
    <section className="relative isolate min-h-[85vh] flex flex-col justify-end overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 bg-[#050505]">
      
      {/* Cinematic Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: cineEase }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={imageSrc}
          alt={about.title}
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-[center_30%] opacity-60"
        />
        
        {/* Gradients to blend image into background and overlay text */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.8)_60%,rgba(5,5,5,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,106,0,0.1),transparent_50%)]" />
      </motion.div>
      
      <div className="layout-wrap relative z-10 w-full">
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: cineEase }}
          className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 sm:mb-12 sm:text-xs"
        >
          <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
          <ChevronRight size={12} className="opacity-50" />
          <Link href="/about" className="hover:text-[#FF6A00] transition-colors">About</Link>
          <ChevronRight size={12} className="opacity-50" />
          <span className="text-[#FF6A00]">{about.title}</span>
        </motion.div>

        {/* Hero Content */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: cineEase }}
            >
              <h1 className="font-display text-[3rem] leading-[1.05] tracking-tight text-white sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
                {about.title}
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: cineEase }}
              className="mt-6 text-[16px] leading-relaxed text-[#FF6A00] sm:mt-8 sm:text-[20px] lg:text-[24px] max-w-2xl font-medium"
            >
              {about.subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

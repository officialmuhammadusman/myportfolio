"use client";
import { motion } from "framer-motion";
import { Download, MapPin, ArrowRight, Mail, Phone, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { PageShell } from "@/components/layout/PageShell";

export function AboutHero() {
  return (
    <section className="relative isolate min-h-[60vh] flex flex-col justify-end overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-[#050505]">
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600&h=900"
          alt="About Me"
          className="w-full h-full object-cover object-[center_30%] opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.4)_0%,rgba(5,5,5,0.9)_70%,rgba(5,5,5,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,106,0,0.15),transparent_60%)]" />
      </motion.div>
      
      <div className="layout-wrap relative z-10 w-full">
        <div className="max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 inline-flex items-center justify-center rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#FF6A00]">
              Full Stack & Applied AI Engineer
            </span>
            <h1 className="mt-4 font-display text-[4rem] leading-[1.05] tracking-tight text-white sm:text-[5rem] md:text-[6.5rem]">
              Muhammad <span className="italic text-[#FF6A00]">Usman.</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[16px] leading-relaxed text-white/70 sm:mt-8 sm:text-[18px] max-w-3xl font-medium"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-6 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href={SOCIAL_LINKS.find(s => s.platform === "LinkedIn")?.url || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors hover:bg-white/10 hover:border-[#FF6A00]/50 hover:text-[#FF6A00]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.find(s => s.platform === "GitHub")?.url || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors hover:bg-white/10 hover:border-[#FF6A00]/50 hover:text-[#FF6A00]"
              >
                <Github size={20} />
              </a>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/20" />

            <div className="flex flex-col gap-1 text-white/50">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#FF6A00]" />
                <span className="text-[12px] font-mono uppercase tracking-widest text-white/70">
                  {PERSONAL_INFO.location}
                </span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest ml-6 text-white/40">
                {PERSONAL_INFO.locationRemote}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

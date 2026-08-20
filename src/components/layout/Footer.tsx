"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Linkedin, ChevronDown } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { HEADER_MEGA } from "@/data/headerMega";
import { cn } from "@/lib/utils";
import { MobileBottomSheet } from "@/components/ui/MobileBottomSheet";

const currentYear = new Date().getFullYear();

const SocialIcon = ({ icon }: { icon: string }) => {
  if (icon === "github") return <SiGithub size={20} />;
  if (icon === "linkedin") return <Linkedin size={20} />;
  if (icon === "whatsapp") return <SiWhatsapp size={20} />;
  return <ArrowUpRight size={20} />;
};

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="relative bg-[#0A0A0A] text-[#FFF7ED] pt-16 sm:pt-24 lg:pt-32 border-t border-white/[0.08] overflow-hidden">
      <div className="layout-wrap relative z-10">
        
        {/* Footer Top: Brand & Mega Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 pb-16 sm:pb-24 border-b border-white/[0.08]">
          
          {/* Brand Info (Left Column) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="font-display text-3xl font-bold tracking-tight text-[#FFF7ED]">
              {PERSONAL_INFO.name}<span className="text-[#FF6A00]">.</span>
            </Link>
            <p className="text-sm leading-relaxed text-[#FFF7ED]/60 max-w-[280px]">
              {PERSONAL_INFO.bioShort}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28C840] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#28C840]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#28C840]">
                {PERSONAL_INFO.availabilityText}
              </span>
            </div>
            
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="text-[#FFF7ED]/30 hover:text-[#FF6A00] transition-colors touch-target bg-white/[0.03] p-3 rounded-xl border border-white/[0.05] hover:bg-white/[0.08]"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Mega Grid (Hidden on Mobile) */}
          <div className="hidden sm:grid lg:col-span-8 grid-cols-4 gap-8">
            
            {/* Services */}
            <div className="flex flex-col gap-6">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Services
              </h3>
              <ul className="flex flex-col gap-4">
                {HEADER_MEGA.services.sections?.[0].links.slice(0, 4).map(link => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-[13px] font-medium text-[#FFF7ED]/50 hover:text-[#FFF7ED] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Work */}
            <div className="flex flex-col gap-6">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Work
              </h3>
              <ul className="flex flex-col gap-4">
                {HEADER_MEGA.work.sections?.[0].links.map(link => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-[13px] font-medium text-[#FFF7ED]/50 hover:text-[#FFF7ED] transition-colors flex items-center gap-2">
                      {link.label}
                      {link.badge && (
                        <span className="text-[9px] uppercase tracking-wider text-[#FF6A00] bg-[#FF6A00]/10 px-1.5 py-0.5 rounded-sm">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About & Insights */}
            <div className="flex flex-col gap-6">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                About
              </h3>
              <ul className="flex flex-col gap-4 mb-4">
                <li><Link href="/about" className="text-[13px] font-medium text-[#FFF7ED]/50 hover:text-[#FFF7ED] transition-colors">Profile & Story</Link></li>
                <li><Link href="/about#experience" className="text-[13px] font-medium text-[#FFF7ED]/50 hover:text-[#FFF7ED] transition-colors">Experience</Link></li>
              </ul>
              
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Insights
              </h3>
              <ul className="flex flex-col gap-4">
                <li><Link href="/blog" className="text-[13px] font-medium text-[#FFF7ED]/50 hover:text-[#FFF7ED] transition-colors">Engineering Notes</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-6">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A00]">
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[13px] font-medium text-[#FFF7ED]/50 hover:text-[#FFF7ED] transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`} className="text-[13px] font-medium text-[#FFF7ED]/50 hover:text-[#FFF7ED] transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </li>
              </ul>
              <div className="mt-2 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#FFF7ED]/40 mb-2">Location</p>
                <p className="text-[12px] text-[#FFF7ED]/70 leading-relaxed">Rawalpindi / Islamabad<br />Pakistan</p>
              </div>
            </div>

          </div>

          {/* Mobile Menu List */}
          <div className="sm:hidden flex flex-col -mx-4 border-t border-white/[0.08]">
            <div className="border-b border-white/[0.08]">
              <button 
                onClick={() => setOpenSection('services')}
                className="w-full flex items-center justify-between px-4 py-5"
              >
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#FFF7ED]">Services</span>
                <ArrowUpRight size={18} className="text-[#FFF7ED]/50" />
              </button>
            </div>

            <div className="border-b border-white/[0.08]">
              <button 
                onClick={() => setOpenSection('work')}
                className="w-full flex items-center justify-between px-4 py-5"
              >
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#FFF7ED]">Work</span>
                <ArrowUpRight size={18} className="text-[#FFF7ED]/50" />
              </button>
            </div>

            <div className="border-b border-white/[0.08]">
              <button 
                onClick={() => setOpenSection('about')}
                className="w-full flex items-center justify-between px-4 py-5"
              >
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#FFF7ED]">About & Insights</span>
                <ArrowUpRight size={18} className="text-[#FFF7ED]/50" />
              </button>
            </div>

            <div className="border-b border-white/[0.08]">
              <div className="px-4 py-5">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-4 block">Get in touch</span>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[14px] font-medium text-[#FFF7ED]/60">
                      {PERSONAL_INFO.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`} className="text-[14px] font-medium text-[#FFF7ED]/60">
                      {PERSONAL_INFO.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <MobileBottomSheet
            open={openSection === 'services'}
            onClose={() => setOpenSection(null)}
            title="Services"
          >
            <div className="p-5">
              <ul className="flex flex-col gap-4 pb-6">
                {HEADER_MEGA.services.sections?.[0].links.slice(0, 4).map(link => (
                  <li key={link.id}>
                    <Link href={link.href} onClick={() => setOpenSection(null)} className="text-[15px] font-medium text-[#FFF7ED]/60">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </MobileBottomSheet>

          <MobileBottomSheet
            open={openSection === 'work'}
            onClose={() => setOpenSection(null)}
            title="Work"
          >
            <div className="p-5">
              <ul className="flex flex-col gap-4 pb-6">
                {HEADER_MEGA.work.sections?.[0].links.map(link => (
                  <li key={link.id}>
                    <Link href={link.href} onClick={() => setOpenSection(null)} className="text-[15px] font-medium text-[#FFF7ED]/60 flex items-center gap-2">
                      {link.label}
                      {link.badge && (
                        <span className="text-[10px] uppercase tracking-wider text-[#FF6A00] bg-[#FF6A00]/10 px-2 py-0.5 rounded-sm">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </MobileBottomSheet>

          <MobileBottomSheet
            open={openSection === 'about'}
            onClose={() => setOpenSection(null)}
            title="About & Insights"
          >
            <div className="p-5">
              <ul className="flex flex-col gap-4 pb-6">
                <li><Link href="/about" onClick={() => setOpenSection(null)} className="text-[15px] font-medium text-[#FFF7ED]/60">Profile & Story</Link></li>
                <li><Link href="/about#experience" onClick={() => setOpenSection(null)} className="text-[15px] font-medium text-[#FFF7ED]/60">Experience</Link></li>
                <li><Link href="/blog" onClick={() => setOpenSection(null)} className="text-[15px] font-medium text-[#FFF7ED]/60">Engineering Notes</Link></li>
              </ul>
            </div>
          </MobileBottomSheet>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8">
          <p className="text-[11px] sm:text-xs font-medium text-[#FFF7ED]/30">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-medium text-[#FFF7ED]/30">
            <span>Built with Next.js</span>
            <span className="hidden sm:inline">•</span>
            <span>Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

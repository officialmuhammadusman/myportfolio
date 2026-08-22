"use client";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { SOCIAL_LINKS } from "@/lib/constants";
import theme from "@/lib/theme";

export function FloatingWhatsApp() {
  const whatsappUrl = SOCIAL_LINKS.find((s) => s.icon === "whatsapp")?.url ?? "/contact";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
      aria-label="Contact us on WhatsApp"
      style={{ zIndex: theme.zIndex.sticky }}
      className="group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 h-[52px] pr-5 pl-1.5 rounded-full flex items-center gap-3 bg-bg-primary  border border-divider text-text-primary shadow-[0_0_30px_rgba(37,211,102,0.15)] hover:border-[#25D366]/50 hover:shadow-[0_0_40px_rgba(37,211,102,0.25)] hover:bg-bg-primary transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-black shadow-[0_0_15px_rgba(37,211,102,0.4)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all duration-300">
        <SiWhatsapp size={20} />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[9px] font-bold uppercase tracking-widest text-[#25D366]/80 group-hover:text-[#25D366] transition-colors leading-none mb-1">
          Chat with us
        </span>
        <span className="font-semibold text-[13px] tracking-wide text-text-primary transition-colors leading-none">
          WhatsApp
        </span>
      </div>
    </motion.a>
  );
}

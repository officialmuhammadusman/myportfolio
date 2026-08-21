"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { brandIcons } from "@/lib/brandAssets";
import { PERSONAL_INFO } from "@/lib/constants";
import { contactSubjectHref } from "@/data/contact";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactSocialsSection() {
  const socials = [
    {
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      iconBase: brandIcons.cta.email,
    },
    {
      label: "WhatsApp",
      value: "Fast replies for KSA, UAE",
      href: `https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, "")}`,
      iconBase: brandIcons.cta.whatsapp,
    },
    {
      label: "LinkedIn",
      value: "Professional Network",
      href: "https://linkedin.com", // Adjust to real LinkedIn URL later if needed
      iconBase: brandIcons.social.linkedin,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-24 pb-24 sm:pt-32 sm:pb-32 border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,106,0,0.05),transparent_70%)]" />
      
      <div className="layout-wrap relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <h2 className="text-[2rem] font-medium leading-[1.1] tracking-tight text-white sm:text-[2.75rem]">
            Other ways to <span className="italic text-[#FF6A00]">connect.</span>
          </h2>
          
          <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {socials.map((social, i) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-4 rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-8 transition-all hover:border-[#FF6A00]/40 hover:bg-[#FF6A00]/5"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F0F0F] border border-white/10 group-hover:border-[#FF6A00]/30 transition-colors">
                    <BrandIcon base={social.iconBase} tone="orange" size={24} />
                  </div>
                  
                  <div>
                    <h3 className="text-[1.1rem] font-medium text-white group-hover:text-[#FF6A00] transition-colors">{social.label}</h3>
                    <p className="mt-1 text-[13px] text-white/50">{social.value}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

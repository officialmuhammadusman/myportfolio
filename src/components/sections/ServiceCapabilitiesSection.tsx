"use client";

import { motion } from "framer-motion";
import { type ServiceItem } from "@/data/services";
import { CheckCircle2, Hexagon } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ServiceCapabilitiesSection({ service }: { service: ServiceItem }) {
  if (!service.detailedCapabilities?.length) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pt-20 pb-20 sm:pt-28 sm:pb-28 border-t border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,106,0,0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse 40% 40% at 90% 90%, rgba(255,106,0,0.04) 0%, transparent 60%)",
          ].join(", "),
        }}
      />
      
      <div className="layout-wrap relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12 sm:mb-16 md:mb-20 max-w-2xl"
        >
          <span className="section-eyebrow">Capabilities</span>
          <h2 className="mt-4 font-display text-[2rem] leading-[1.1] tracking-tight text-white sm:text-[2.5rem] md:text-[3rem]">
            Specialized execution in <span className="italic text-[#FF6A00]">{service.shortTitle.toLowerCase()}</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.detailedCapabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-8 transition-all hover:border-[#FF6A00]/30 hover:bg-white/[0.04]"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FF6A00]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F0F0F] border border-white/10 group-hover:border-[#FF6A00]/40 transition-colors">
                  <Hexagon className="h-5 w-5 text-[#FF6A00] opacity-80" />
                </div>
                
                <h3 className="mb-3 text-[1.15rem] font-bold text-white group-hover:text-[#FF6A00] transition-colors">{cap.title}</h3>
                <p className="text-[14px] leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-24 rounded-[32px] border border-white/10 bg-[#0F0F0F] p-8 sm:p-12 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF6A00]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
           <p className="section-eyebrow mb-6">Included Deliverables</p>
           <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
             {service.deliverables.map((item, i) => (
               <li key={i} className="flex items-start gap-3">
                 <CheckCircle2 className="h-5 w-5 text-[#FF6A00] shrink-0 mt-0.5" />
                 <span className="text-[15px] text-white/80">{item}</span>
               </li>
             ))}
           </ul>
        </motion.div>
      </div>
    </section>
  );
}

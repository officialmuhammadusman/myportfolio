"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type ContactCategory } from "@/data/contactData";
import { ChevronDown } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactFAQSection({ category }: { category: ContactCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!category.faqs || category.faqs.length === 0) return null;

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] pt-24 pb-24 sm:pt-32 sm:pb-32 border-t border-white/5">
      <div className="layout-wrap relative z-10 max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-16 text-center"
        >
          <span className="section-eyebrow">Common Questions</span>
          <h2 className="mt-4 font-display text-[2.5rem] leading-[1.1] tracking-tight text-white sm:text-[3rem]">
            FAQ for <span className="italic text-[#FF6A00]">{category.title.replace("Start an ", "").replace("Submit a ", "")}</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {category.faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
                className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0A0A0A] transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
                >
                  <span className="text-[1.1rem] font-bold text-white sm:text-[1.25rem]">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#FF6A00] bg-[#FF6A00]/10 text-[#FF6A00]"
                        : "border-white/20 bg-transparent text-white/50"
                    }`}
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: easeOut }}
                    >
                      <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                        <p className="text-[15px] leading-relaxed text-white/60 sm:text-[16px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/constants";

const techItems = ["React", "Next.js", "TypeScript","MongoDB", "PostgreSQL" ];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end start"] 
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 20% 40%, rgba(200,98,42,0.08) 0%, transparent 50%),
              radial-gradient(ellipse 100% 100% at 80% 60%, rgba(212,168,67,0.05) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full h-full"
      >
        {/* Main content grid */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
            
            {/* LEFT: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex items-center gap-2 w-fit">
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ background: "var(--accent-primary)" }}
                  >
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: "var(--accent-primary)" }}
                    />
                  </span>
                  <span
                    className="text-xs sm:text-sm font-semibold tracking-widest uppercase"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    Currently Available
                  </span>
                </div>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mb-4 sm:mb-6"
              >
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {PERSONAL_INFO.firstName}
                </h1>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mt-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span className="text-gradient">{PERSONAL_INFO.lastName}</span>
                </h1>
              </motion.div>

              {/* Role & Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mb-4 sm:mb-6"
              >
                <p
                  className="text-lg sm:text-xl font-semibold tracking-wide uppercase"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {PERSONAL_INFO.role}
                </p>
                <p
                  className="text-sm sm:text-base font-medium mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                   {PERSONAL_INFO.location}
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="text-base sm:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
               Architecting and delivering scalable, production-grade applications focused on performance, reliability, and real-world impact.
              </motion.p>

              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="mb-8 sm:mb-10 flex flex-wrap gap-3"
              >
                {techItems.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full border"
                    style={{
                      borderColor: "var(--border-hover)",
                      color: "var(--text-muted)",
                      background: "var(--bg-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white rounded-full lg:rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                  style={{ 
                    background: "var(--accent-primary)",
                  }}
                >
                  Explore Portfolio
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-full lg:rounded-lg border transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)]"
                  style={{
                    borderColor: "var(--border-hover)",
                    color: "var(--text-primary)",
                  }}
                >
                  Start a Conversation
                </Link>

                <a
                  href={PERSONAL_INFO.cvUrl}
                  download
                  className="group inline-flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-full lg:rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    color: "var(--text-muted)",
                    borderColor: "var(--border)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Download size={16} />
                  <span className="group-hover:underline">Resume</span>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT: Image */}
            <motion.div
              ref={imageRef}
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex items-center justify-center"
            >
              <div
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: `
                    0 20px 50px rgba(0,0,0,0.15),
                    inset 0 1px 1px rgba(255,255,255,0.1)
                  `,
                }}
              >
                {/* Image with gradient overlay */}
                <img
                  src="/myimg1.png"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Subtle overlay gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(0,0,0,0.05) 0%, 
                        transparent 50%, 
                        rgba(0,0,0,0.1) 100%
                      )
                    `,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - visible on larger screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2"
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Scroll to discover more
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: "var(--accent-primary)" }}
            >
              <polyline points="6 9 10 14 14 9"></polyline>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
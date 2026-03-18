"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, certifications } from "@/data/experience";

export function EducationSection() {
  return (
    <section className="section-padding border-b" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
      <div className="max-w-[1280px] mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">Education</span>
            <div className="fancy-divider" />
            <h2
              className="font-display font-bold mt-2 mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-primary)" }}
            >
              Academic background
            </h2>

            {education.map((edu, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-[12px] border"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <GraduationCap size={22} style={{ color: "var(--accent-primary)" }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--text-primary)", fontFamily: "var(--font-body)" }}>
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--accent-primary)" }}>
                    {edu.institution}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    {edu.location} · Graduated {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-eyebrow">Certifications</span>
            <div className="fancy-divider" />
            <h2
              className="font-display font-bold mt-2 mb-8"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text-primary)" }}
            >
              Continuous learning
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-start gap-3 p-4 rounded-[10px] border transition-all duration-200 hover:border-[var(--accent-primary)] hover:shadow-[var(--shadow-card-hover)]"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0"
                    style={{ background: "var(--bg-secondary)" }}
                  >
                    <Award size={16} style={{ color: "var(--accent-secondary)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold line-clamp-2 mb-0.5 group-hover:text-[var(--accent-primary)] transition-colors" style={{ color: "var(--text-primary)" }}>
                      {cert.title}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {cert.platform} · {cert.completedAt}
                    </p>
                  </div>
                  <ExternalLink size={12} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent-primary)" }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

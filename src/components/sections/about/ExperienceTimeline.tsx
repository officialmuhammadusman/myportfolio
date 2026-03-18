"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="section-padding border-b" style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}>
      <div className="max-w-[1280px] mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-eyebrow">Experience</span>
          <div className="fancy-divider" />
          <h2
            className="font-display font-bold mt-2"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-primary)" }}
          >
            Work history
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[18px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 w-9 h-9 rounded-full border-2 items-center justify-center hidden md:flex"
                  style={{
                    background: "var(--surface)",
                    borderColor: i === 0 ? "var(--accent-primary)" : "var(--border)",
                  }}
                >
                  <Briefcase size={14} style={{ color: i === 0 ? "var(--accent-primary)" : "var(--text-muted)" }} />
                </div>

                <div
                  className="p-6 rounded-[12px] border"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="font-display font-bold text-lg mb-0.5"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: "var(--accent-primary)" }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {exp.startDate} — {exp.endDate}
                      </p>
                      <div className="flex items-center gap-1 justify-end mt-2">
                        <MapPin size={11} style={{ color: "var(--text-muted)" }} />
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.description.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "var(--accent-primary)" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tag-pill"
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text-muted)",
                          borderColor: "var(--border)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

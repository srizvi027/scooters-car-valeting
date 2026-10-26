"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Reveal from "./Reveal";
import { Heading } from "./Reveal";

export default function ServiceArea() {
  return (
    <section className="section area">
      <div className="wrap area-grid">
        <div>
          <Heading eyebrow="SERVICE AREA" lines={["LOCAL CARE.", "PERSONAL SERVICE."]} />
          <Reveal as="p" className="area-text" delay={0.15}>
            Serving Hethersett and surrounding local areas.
          </Reveal>
          <Reveal delay={0.25}>
            <Button href="#contact">GET IN TOUCH</Button>
          </Reveal>
        </div>

        {/* restrained location graphic: concentric rings + pin on typography */}
        <Reveal className="area-graphic" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="area-rings">
            {[190, 140, 90, 40].map((r, i) => (
              <motion.circle
                key={r}
                cx="200"
                cy="200"
                r={r}
                fill="none"
                stroke={i === 3 ? "#F60017" : "rgba(254,254,254,.22)"}
                strokeWidth={i === 3 ? 2 : 1}
                strokeDasharray={i % 2 ? "4 8" : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: i * 0.15, ease: "easeInOut" }}
              />
            ))}
            <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(254,254,254,.1)" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(254,254,254,.1)" />
          </svg>
          <span className="area-pulse" />
          <span className="area-dot" />
          <span className="area-name">HETHERSETT</span>
        </Reveal>
      </div>
    </section>
  );
}

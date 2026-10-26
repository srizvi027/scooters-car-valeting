"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Heading } from "./Reveal";

export default function Testimonials() {
  return (
    <section className="section testi">
      <div className="wrap">
        <Heading eyebrow="REVIEWS" lines={["KIND", "WORDS."]} />
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              className="testi-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {t.demo && <span className="demo-tag">DEMO PLACEHOLDER</span>}
              <span className="testi-mark" aria-hidden="true">&ldquo;</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <small>{t.detail}</small>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

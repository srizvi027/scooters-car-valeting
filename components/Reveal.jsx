"use client";

import { motion } from "framer-motion";

/** Fade-up on scroll, plays once. */
export default function Reveal({ children, delay = 0, y = 28, className = "", as = "div", ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export const maskUp = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 0.85, ease: [0.2, 0.8, 0.2, 1] } },
};

/** Section heading with a masked line reveal. `lines` is an array of strings. */
export function Heading({ eyebrow, lines, sub, className = "" }) {
  return (
    <div className={`sec-head ${className}`}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow">
          <i /> {eyebrow}
        </Reveal>
      )}
      {/* the observer sits on the h2 (not the clipped inner spans) so it always fires */}
      <motion.h2
        className="sec-title"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {lines.map((l, i) => (
          <span className="mask" key={i}>
            <motion.span variants={maskUp}>{l}</motion.span>
          </span>
        ))}
      </motion.h2>
      {sub && (
        <Reveal as="p" className="sec-sub" delay={0.15}>
          {sub}
        </Reveal>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { business } from "@/lib/data";
import { images } from "@/lib/images";
import { useReady } from "@/lib/ready";
import SmartImage from "./SmartImage";
import Button from "./Button";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({ y: "0%", transition: { delay: 0.35 + i * 0.16, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } }),
};
const fadeUp = (d) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay: d, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
});

export default function Hero() {
  const ready = useReady();
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);

  // cursor parallax: desktop (fine pointer) only
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const px = useTransform(sx, [-1, 1], [16, -16]);
  const py = useTransform(sy, [-1, 1], [10, -10]);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 900px)");
    const update = () => setFine(mq.matches && !reduce);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  useEffect(() => {
    if (!fine) return;
    const move = (e) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [fine, mx, my]);

  const state = ready ? "show" : "hidden";

  return (
    <section id="home" className="hero">
      {/* background: slow scale-in, then parallax */}
      <motion.div
        className="hero-bg"
        initial={{ scale: reduce ? 1 : 1.2 }}
        animate={{ scale: ready ? 1 : reduce ? 1 : 1.2 }}
        transition={{ duration: 2.8, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <motion.div className="hero-parallax" style={fine ? { x: px, y: py } : undefined}>
          <SmartImage img={images.hero} priority sizes="100vw" />
        </motion.div>
      </motion.div>

      <div className="hero-shade" />
      <div className="hero-grain" />

      {/* red scanning light across the paintwork */}
      {!reduce && (
        <motion.span
          className="hero-scan"
          style={{ skewX: -20 }}
          initial={{ x: "-45vw", opacity: 0 }}
          animate={ready ? { x: "150vw", opacity: [0, 1, 1, 0] } : {}}
          transition={{ delay: 0.5, duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 9 }}
        />
      )}

      {/* racing details */}
      <span className="hero-stripe hero-stripe-1" />
      <span className="hero-stripe hero-stripe-2" />

      <div className="wrap hero-content">
        <motion.p className="eyebrow" variants={fadeUp(0.2)} initial="hidden" animate={state}>
          <i /> HETHERSETT &amp; LOCAL AREAS
        </motion.p>

        <h1 className="hero-title">
          <span className="mask">
            <motion.span custom={0} variants={line} initial="hidden" animate={state}>
              YOUR CAR.
            </motion.span>
          </span>
          <span className="mask">
            <motion.span className="red" custom={1} variants={line} initial="hidden" animate={state}>
              OUR OBSESSION.
            </motion.span>
          </span>
        </h1>

        <motion.p className="hero-sub" variants={fadeUp(0.95)} initial="hidden" animate={state}>
          Professional car valeting with attention to every detail.
        </motion.p>

        <div className="hero-ctas">
          <motion.div variants={fadeUp(1.1)} initial="hidden" animate={state}>
            <Button href="#contact">BOOK YOUR VALET</Button>
          </motion.div>
          <motion.div variants={fadeUp(1.22)} initial="hidden" animate={state}>
            <Button href={business.phoneHref} variant="ghost">
              CALL {business.phoneShort}
            </Button>
          </motion.div>
        </div>
      </div>

      <a href="#services" className="scroll-ind" aria-label="Scroll to services">
        <span>SCROLL</span>
        <i>
          <b />
        </i>
      </a>
    </section>
  );
}

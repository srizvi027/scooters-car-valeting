"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { extras, services } from "@/lib/data";
import { images } from "@/lib/images";
import SmartImage from "./SmartImage";
import { Heading } from "./Reveal";
import { ArrowIcon } from "./Icons";

/**
 * One service row. Desktop: hover/focus slides an image in from the right.
 * Mobile: tap to expand description + image.
 */
function ServiceRow({ s, i, openId, setOpenId }) {
  const [hover, setHover] = useState(false);
  const expanded = openId === s.id;
  const active = hover || expanded;
  const img = images.services[s.image];

  return (
    <motion.li
      className={`svc ${active ? "is-active" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        className="svc-btn"
        aria-expanded={expanded}
        onClick={() => setOpenId(expanded ? null : s.id)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
      >
        <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
        <span className="svc-name">{s.name}</span>
        <span className="svc-desc">{s.description}</span>
        {s.price && <span className="svc-price">{s.price}</span>}
        <span className="svc-arrow" aria-hidden="true">
          <ArrowIcon width={26} height={26} />
        </span>
        <span className="svc-line" />
      </button>

      {/* desktop hover image */}
      <div className="svc-hoverimg" aria-hidden="true">
        <motion.div
          className="svc-hoverimg-inner"
          initial={false}
          animate={{ x: active ? "0%" : "105%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <SmartImage img={img} sizes="(min-width: 900px) 34vw, 0px" />
        </motion.div>
      </div>

      {/* mobile expand */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="svc-expand"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="svc-expand-inner">
              <p>{s.description}</p>
              <div className="svc-expand-img">
                <SmartImage img={img} sizes="100vw" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="services" className="section services">
      <div className="wrap">
        <Heading eyebrow="WHAT WE DO" lines={["THE VALET", "MENU"]} sub="Give your vehicle the care and attention it deserves." />
        <ul className="svc-list">
          {services.map((s, i) => (
            <ServiceRow key={s.id} s={s} i={i} openId={openId} setOpenId={setOpenId} />
          ))}
        </ul>
        <div className="svc-foot">
          <p>
            <strong>ALSO AVAILABLE:</strong> {extras.join(" · ")}
          </p>
          <p className="svc-note">Prices as per the current Scooter&apos;s price list. Get in touch to confirm what&apos;s right for your vehicle.</p>
        </div>
      </div>
    </section>
  );
}

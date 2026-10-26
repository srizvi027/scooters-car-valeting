"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business, navLinks } from "@/lib/data";
import { logo } from "@/lib/images";
import Button from "./Button";
import { PhoneIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently in view
  useEffect(() => {
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    return () => document.documentElement.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Scooter's Car Valeting - home" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt="" width={44} height={44} className="brand-mark" />
          <span className="brand-text">
            <strong>SCOOTER&apos;S</strong>
            <small>CAR VALETING</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link ${active === l.id ? "is-active" : ""}`}>
              <span>{l.label}</span>
              {active === l.id && <motion.i layoutId="nav-indicator" className="nav-indicator" transition={{ type: "spring", stiffness: 500, damping: 40 }} />}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <Button href="#contact">BOOK YOUR VALET</Button>
        </div>

        <button
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i />
          <i />
          <i />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  className={active === l.id ? "is-active" : ""}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.4 }}
                >
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.div className="mobile-menu-cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
              <Button href="#contact" onClick={() => setOpen(false)}>BOOK YOUR VALET</Button>
              <Button href={business.phoneHref} variant="ghost">
                <PhoneIcon width={18} height={18} /> CALL NOW
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

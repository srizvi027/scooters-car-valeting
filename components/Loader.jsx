"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { logo } from "@/lib/images";

/**
 * Custom automotive loader (~2s):
 * 1. Two red light streaks race in from opposite sides
 * 2. They meet in the centre -> sharp red flash
 * 3. Logo is revealed, a red ring draws around it
 * 4. A scanning light runs underneath like a paint-inspection lamp
 * 5. Logo lifts away while a diagonal mask wipes the loader off the hero
 *
 * To use a different logo, replace /public/logo.png (or edit lib/images.js).
 */

const COVER = "polygon(0% 0%, 140% 0%, 100% 100%, -40% 100%)";
const WIPED = "polygon(-40% 0%, 0% 0%, -40% 100%, -80% 100%)";
const ease = [0.7, 0, 0.2, 1];

export default function Loader({ onStartReveal }) {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  // lock scroll while the loader plays
  useEffect(() => {
    if (!show) {
      document.documentElement.classList.remove("is-loading");
      return;
    }
    document.documentElement.classList.add("is-loading");
    return () => document.documentElement.classList.remove("is-loading");
  }, [show]);

  useEffect(() => {
    const wait = reduce ? 0 : 1700;
    const t = setTimeout(() => {
      setShow(false);
      onStartReveal();
    }, wait);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && !reduce && (
        <motion.div
          key="loader"
          className="loader"
          aria-hidden="true"
          initial={{ clipPath: COVER }}
          animate={{ clipPath: COVER }}
          exit={{ clipPath: WIPED, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* streaks */}
          <motion.span
            className="streak streak-l"
            initial={{ x: "-110vw", opacity: 1 }}
            animate={{ x: "0vw", opacity: [1, 1, 0] }}
            transition={{ x: { duration: 0.55, ease }, opacity: { duration: 0.8, times: [0, 0.7, 1] } }}
          />
          <motion.span
            className="streak streak-r"
            initial={{ x: "110vw", opacity: 1 }}
            animate={{ x: "0vw", opacity: [1, 1, 0] }}
            transition={{ x: { duration: 0.55, ease }, opacity: { duration: 0.8, times: [0, 0.7, 1] } }}
          />

          {/* flash where they meet */}
          <motion.span
            className="flash"
            initial={{ opacity: 0, scaleX: 0.2 }}
            animate={{ opacity: [0, 1, 0], scaleX: [0.2, 1, 1.4] }}
            transition={{ delay: 0.5, duration: 0.45, times: [0, 0.3, 1] }}
          />

          {/* logo + outline + scan */}
          <motion.div
            className="loader-logo"
            exit={{ y: -80, opacity: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } }}
          >
            <motion.div
              className="loader-logo-img"
              initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0, scale: 0.94 }}
              animate={{ clipPath: "inset(0 0% 0 0%)", opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt="" width={500} height={500} />
            </motion.div>

            <svg className="loader-ring" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="49"
                fill="none"
                stroke="#F60017"
                strokeWidth="0.7"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 1 }}
                animate={{ pathLength: 1, opacity: [1, 1, 0.35] }}
                transition={{ delay: 0.75, duration: 0.8, ease: [0.4, 0, 0.2, 1], opacity: { delay: 0.75, duration: 1, times: [0, 0.7, 1] } }}
              />
            </svg>

            <div className="loader-scan">
              <motion.span
                initial={{ x: "-110%", opacity: 0 }}
                animate={{ x: "110%", opacity: [0, 1, 1, 0] }}
                transition={{ delay: 1.0, duration: 0.65, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useTransform } from "framer-motion";
import SmartImage from "./SmartImage";

/**
 * Reusable before / after slider.
 * - drag with mouse, swipe on touch (pointer events)
 * - keyboard: arrow keys, Home / End
 * - both images fill the same box, so use matching photos
 */
export default function CompareSlider({ before, after, aspect = "720 / 575" }) {
  const box = useRef(null);
  const pos = useMotionValue(50); // % revealed on the BEFORE side (left)
  const dragging = useRef(false);
  const inView = useInView(box, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  const clip = useTransform(pos, (p) => `inset(0 ${100 - p}% 0 0)`);
  const left = useTransform(pos, (p) => `${p}%`);
  const [valueNow, setValueNow] = useState(50);
  useMotionValueEvent(pos, "change", (p) => setValueNow(Math.round(p)));

  // one gentle hint the first time it scrolls into view
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(pos, [50, 32, 68, 50], { duration: 1.8, ease: "easeInOut", delay: 0.3 });
    return () => c.stop();
  }, [inView, reduce, pos]);

  const setFromEvent = (e) => {
    const r = box.current.getBoundingClientRect();
    pos.set(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)));
  };

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromEvent(e);
  };
  const onPointerMove = (e) => dragging.current && setFromEvent(e);
  const onPointerUp = (e) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") pos.set(Math.max(0, pos.get() - step));
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") pos.set(Math.min(100, pos.get() + step));
    else if (e.key === "Home") pos.set(0);
    else if (e.key === "End") pos.set(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={box}
      className="cmp"
      style={{ aspectRatio: aspect }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* AFTER sits underneath */}
      <div className="cmp-layer">
        <SmartImage img={after} sizes="(min-width: 1100px) 1100px, 100vw" />
      </div>
      {/* BEFORE on top, clipped from the right */}
      <motion.div className="cmp-layer" style={{ clipPath: clip }}>
        <SmartImage img={before} sizes="(min-width: 1100px) 1100px, 100vw" />
      </motion.div>

      <span className="cmp-label cmp-before">BEFORE</span>
      <span className="cmp-label cmp-after">AFTER</span>

      <motion.div
        className="cmp-handle"
        style={{ left }}
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={valueNow}
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
      >
        <span className="cmp-line" />
        <span className="cmp-knob">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </span>
      </motion.div>
    </div>
  );
}

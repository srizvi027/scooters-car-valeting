"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { videos } from "@/lib/images";
import { Heading } from "./Reveal";
import Reveal from "./Reveal";
import { PauseIcon, PlayIcon, SoundOff, SoundOn } from "./Icons";

/** Autoplays muted while on screen, pauses when scrolled away. Tap to pause, button for sound. */
function ReelCard({ v }) {
  const ref = useRef(null);
  const wrap = useRef(null);
  const inView = useInView(wrap, { amount: 0.5 });
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (inView && !reduce && !userPaused) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [inView, reduce, userPaused]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      setUserPaused(false);
      el.play().catch(() => {});
    } else {
      setUserPaused(true);
      el.pause();
    }
  };

  return (
    <div className="reel" ref={wrap}>
      <video
        ref={ref}
        src={v.src}
        poster={v.poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label={v.title}
        onClick={toggle}
      />
      <div className="reel-bar">
        <button onClick={toggle} aria-label={playing ? "Pause video" : "Play video"}>
          {playing ? <PauseIcon width={18} height={18} /> : <PlayIcon width={18} height={18} />}
        </button>
        <span>{v.title}</span>
        <button onClick={() => setMuted((m) => !m)} aria-label={muted ? "Turn sound on" : "Mute video"}>
          {muted ? <SoundOff width={18} height={18} /> : <SoundOn width={18} height={18} />}
        </button>
      </div>
    </div>
  );
}

export default function VideoReel() {
  return (
    <section id="reels" className="section reels">
      <div className="wrap">
        <Heading eyebrow="IN ACTION" lines={["SEE IT", "IN ACTION."]} sub="Real valets, straight from Scooter's." />
        <div className="reel-row">
          {videos.map((v, i) => (
            <Reveal key={v.src} delay={i * 0.1}>
              <ReelCard v={v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

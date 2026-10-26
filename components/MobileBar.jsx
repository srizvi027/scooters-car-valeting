"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/data";
import { useReady } from "@/lib/ready";
import { PhoneIcon } from "./Icons";

/** Sticky call / book bar on phones, so contacting the business is always one tap away. */
export default function MobileBar() {
  const ready = useReady();
  const [hide, setHide] = useState(false);

  // hide while the contact section itself is on screen
  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setHide(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`mbar ${ready && !hide ? "is-in" : ""}`}>
      <a href={business.phoneHref} className="mbar-call">
        <PhoneIcon width={18} height={18} /> CALL NOW
      </a>
      <a href="#contact" className="mbar-book">BOOK YOUR VALET</a>
    </div>
  );
}

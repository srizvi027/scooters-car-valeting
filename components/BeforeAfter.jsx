"use client";

import { useState } from "react";
import { images } from "@/lib/images";
import { Heading } from "./Reveal";
import Reveal from "./Reveal";
import CompareSlider from "./CompareSlider";

export default function BeforeAfter() {
  const pairs = images.beforeAfter;
  const [idx, setIdx] = useState(0);
  const cur = pairs[idx];

  return (
    <section id="before-after" className="section compare">
      <div className="wrap">
        <Heading eyebrow="REAL RESULTS" lines={["SEE THE", "DIFFERENCE."]} sub="Clean surfaces. Sharper finishes. A fresh look." />

        <Reveal className="compare-stage">
          {pairs.length > 1 && (
            <div className="compare-tabs" role="tablist" aria-label="Choose a comparison">
              {pairs.map((p, i) => (
                <button key={p.id} role="tab" aria-selected={i === idx} className={i === idx ? "is-on" : ""} onClick={() => setIdx(i)}>
                  <em>{String(i + 1).padStart(2, "0")}</em> {p.label}
                </button>
              ))}
            </div>
          )}
          {/* key forces a fresh slider (and hint) per pair */}
          <CompareSlider key={cur.id} before={cur.before} after={cur.after} />
          <p className="compare-hint">Drag the red handle, swipe, or use the arrow keys.</p>
        </Reveal>
      </div>
    </section>
  );
}

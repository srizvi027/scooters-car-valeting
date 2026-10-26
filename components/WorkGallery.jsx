"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";
import SmartImage from "./SmartImage";
import { Heading } from "./Reveal";

export default function WorkGallery() {
  return (
    <section id="work" className="section work">
      <div className="wrap">
        <Heading eyebrow="RECENT WORK" lines={["THE WORK", "SPEAKS."]} sub="A closer look at the details." />

        <div className="gallery">
          {images.work.map((img, i) => (
            <motion.figure
              key={img.src}
              className={`g g-${img.area}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="g-img">
                <SmartImage img={img} sizes="(min-width: 900px) 40vw, 50vw" />
              </div>
              <div className="g-overlay" />
              <figcaption className="g-label">DETAIL {String(i + 1).padStart(2, "0")}</figcaption>
              <span className="g-line" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

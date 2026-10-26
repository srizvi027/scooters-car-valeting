"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";
import SmartImage from "./SmartImage";
import { maskUp } from "./Reveal";

const words = [
  ["IT'S", "ALL"],
  ["IN", "THE", "DETAIL."],
];

export default function StatementSection() {
  let n = 0;
  return (
    <section className="statement" aria-label="It's all in the detail">
      <div className="statement-img" aria-hidden="true">
        <SmartImage img={images.statement} sizes="60vw" />
      </div>

      <div className="wrap statement-inner">
        <motion.h2
          className="statement-title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
        >
          {words.map((line, li) => (
            <span className="statement-line" key={li}>
              {line.map((w) => {
                n++;
                return (
                  <span className="mask" key={w}>
                    <motion.span className={w === "DETAIL." ? "red" : ""} variants={maskUp}>
                      {w}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </motion.h2>
        <motion.span
          className="statement-rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
    </section>
  );
}

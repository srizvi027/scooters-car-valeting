"use client";

import { motion } from "framer-motion";
import { principles } from "@/lib/data";
import { Heading } from "./Reveal";

export default function WhyChooseUs() {
  return (
    <section className="section why">
      <div className="wrap">
        <Heading eyebrow="WHY SCOOTER'S" lines={["THE DETAILS", "MATTER."]} />
        <ol className="why-list">
          {principles.map((p, i) => (
            <motion.li
              key={p.title}
              className="why-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{p.title.toUpperCase()}</h3>
                <p>{p.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

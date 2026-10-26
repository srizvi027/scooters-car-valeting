"use client";

import { useState } from "react";
import { business, services } from "@/lib/data";
import { Heading } from "./Reveal";
import Reveal from "./Reveal";
import Button from "./Button";
import { MailIcon, PhoneIcon } from "./Icons";

const empty = { name: "", contact: "", vehicle: "", service: "", date: "", details: "" };

/**
 * No backend is connected, so the form is email-based: pressing SEND ENQUIRY
 * opens the visitor's email app with the enquiry pre-filled, addressed to the
 * business. The Call / Email buttons work independently of the form.
 *
 * To send straight to an inbox instead, point this at a form service
 * (e.g. Formspree) or a Next.js route handler and replace `handleSubmit`.
 */
export default function BookingContact() {
  const [f, setF] = useState(empty);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${f.name}`,
      `Phone or email: ${f.contact}`,
      `Vehicle: ${f.vehicle || "-"}`,
      `Service: ${f.service || "-"}`,
      `Preferred date: ${f.date || "-"}`,
      "",
      "Details:",
      f.details || "-",
    ].join("\n");
    const subject = `Valet enquiry from ${f.name}`;
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <Heading eyebrow="BOOK" lines={["READY FOR A", "FRESH FINISH?"]} sub="Get in touch to arrange your next valet." />

        <Reveal className="contact-actions">
          <a href={business.phoneHref} className="big-action">
            <span className="big-ico"><PhoneIcon width={30} height={30} /></span>
            <span>
              <small>CALL SCOOTER&apos;S</small>
              <strong>{business.phone}</strong>
            </span>
          </a>
          <a href={business.emailHref} className="big-action">
            <span className="big-ico"><MailIcon width={30} height={30} /></span>
            <span>
              <small>MESSAGE ON EMAIL</small>
              <strong>scooterscleaning<wbr />@outlook.com</strong>
            </span>
          </a>
        </Reveal>

        <Reveal className="form-wrap" delay={0.1}>
          <div className="form-intro">
            <h3>OR SEND AN ENQUIRY</h3>
            <p>Fill this in and your email app will open with everything ready to send.</p>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <label>
              <span>Name *</span>
              <input required value={f.name} onChange={set("name")} autoComplete="name" />
            </label>
            <label>
              <span>Phone or email *</span>
              <input required value={f.contact} onChange={set("contact")} autoComplete="email" />
            </label>
            <label>
              <span>Vehicle</span>
              <input value={f.vehicle} onChange={set("vehicle")} placeholder="Make, model, colour" />
            </label>
            <label>
              <span>Service interested in</span>
              <select value={f.service} onChange={set("service")}>
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                    {s.price ? ` (${s.price})` : ""}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>
            <label>
              <span>Preferred date</span>
              <input type="date" value={f.date} onChange={set("date")} />
            </label>
            <label className="full">
              <span>Additional details</span>
              <textarea rows={4} value={f.details} onChange={set("details")} />
            </label>

            <div className="full form-foot">
              <Button type="submit">SEND ENQUIRY</Button>
              {sent && (
                <p className="form-status" role="status">
                  Your email app should now open with your enquiry ready to send. Nothing is sent until you press send there. If it
                  doesn&apos;t open, email <a href={business.emailHref}>{business.email}</a> or call <a href={business.phoneHref}>{business.phone}</a>.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

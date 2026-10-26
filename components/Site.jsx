"use client";

import { useState } from "react";
import { ReadyContext } from "@/lib/ready";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ContactStrip from "./ContactStrip";
import Services from "./Services";
import BeforeAfter from "./BeforeAfter";
import WorkGallery from "./WorkGallery";
import VideoReel from "./VideoReel";
import StatementSection from "./StatementSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import BookingContact from "./BookingContact";
import ServiceArea from "./ServiceArea";
import Footer from "./Footer";
import MobileBar from "./MobileBar";

export default function Site() {
  const [ready, setReady] = useState(false);

  return (
    <ReadyContext.Provider value={ready}>
      <Loader onStartReveal={() => setReady(true)} />
      <Navbar />
      <main>
        <Hero />
        <ContactStrip />
        <Services />
        <BeforeAfter />
        <WorkGallery />
        <VideoReel />
        <StatementSection />
        <WhyChooseUs />
        <Testimonials />
        <BookingContact />
        <ServiceArea />
      </main>
      <Footer />
      <MobileBar />
    </ReadyContext.Provider>
  );
}

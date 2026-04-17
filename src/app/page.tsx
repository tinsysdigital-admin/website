import React from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex-1 w-full relative">
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <CapabilitiesSection />
        <AboutSection />
        <CtaBand />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

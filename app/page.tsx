"use client";

import FeaturesSection from "@/components/sections/home-page/features";
import HeroSection from "@/components/sections/home-page/hero-section";
import HowItWorksSection from "@/components/sections/home-page/how-it-works";
import PartnersSection from "@/components/sections/home-page/partners-section";
import ShareTravelExperienceSection from "@/components/sections/home-page/share-travel-experience";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <HeroSection />
      <PartnersSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ShareTravelExperienceSection />
      <Toaster />
    </main>
  );
}

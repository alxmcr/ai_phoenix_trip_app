"use client";

import { FormReview } from "@/components/forms/form-review";
import HeroSection from "@/components/sections/home-page/hero-section";
import PartnersSection from "@/components/sections/home-page/partners-section";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <HeroSection />
      <PartnersSection />
      <FormReview />
      <Toaster />
    </main>
  );
}

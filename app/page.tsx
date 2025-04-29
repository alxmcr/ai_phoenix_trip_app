"use client";

import { FormReview } from "@/components/forms/form-review";
import Hero from "@/components/sections/home-page/hero";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Hero />
      <FormReview />
      <Toaster />
    </main>
  );
}

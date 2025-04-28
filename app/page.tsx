"use client";

import { FormReview } from "@/components/forms/form-review";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <FormReview />
      <Toaster />
    </main>
  );
}

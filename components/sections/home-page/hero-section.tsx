import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 px-4 md:px-0 container" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6">
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Unlock insights from passenger trip experiences with AI
          </h1>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform analyzes passenger feedback to deliver
            actionable insights, sentiment analysis, and recommendations to
            improve your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button asChild size="lg" className="gap-2">
              <Link href="#form">
                Share your travel experience <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">View analytics dashboard</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <div className="relative w-full h-full transition-opacity duration-500">
            <Image
              src="/illustrations/home-page/daylight.jpg"
              alt="Illustration showing AI analyzing passenger trip data during daylight"
              fill
              className={`object-cover transition-opacity duration-500 ${
                mounted && resolvedTheme === "dark" ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
            <Image
              src="/illustrations/home-page/night.jpg"
              alt="Illustration showing AI analyzing passenger trip data during night time"
              fill
              className={`object-cover transition-opacity duration-500 ${
                mounted && resolvedTheme === "dark" ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { mockPartners } from "@/mocks/data/mock-partners";
import Image from "next/image";
import React from "react";

export default function PartnersSection() {
  // Duplicate the partners array to create a seamless loop
  const allPartners = [...mockPartners, ...mockPartners];

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  // Animation effect for the carousel
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set animation properties
    container.style.animationPlayState = isPaused ? "paused" : "running";

    // Reset animation when it completes
    const handleAnimationEnd = () => {
      if (container) {
        container.style.animation = "none";
        container.style.animation = `scroll 30s linear infinite`;
      }
    };

    container.addEventListener("animationend", handleAnimationEnd);

    return () => {
      container.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [isPaused]);

  return (
    <section className="w-full py-12 bg-muted/50">
      <div className="w-full px-4 mx-auto max-w-7xl">
        <div className="w-full text-center mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-inter text-muted-foreground mb-2 break-words">
            Trusted by leading companies in the travel industry
          </h2>
        </div>

        <div className="relative w-full overflow-hidden py-4 bg-muted/20 rounded-lg">
          {/* Add animation keyframes */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>

          <div
            ref={containerRef}
            className="flex items-center gap-12 animate-none"
            style={{
              animation: "scroll 30s linear infinite",
              width: "fit-content",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-20 w-32"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

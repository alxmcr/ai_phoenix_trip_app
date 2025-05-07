"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo32x32PhoenixTrip from "./logos/32x32/Logo32x32PhoenixTrip";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Nav } from "./nav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center md:flex-row md:justify-center sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-0">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Phoenix Trip - Home"
          >
            <Logo32x32PhoenixTrip aria-hidden="true" />
            <span className="px-2 text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-400 text-transparent bg-clip-text">
              Phoenix Trip
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Nav />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button asChild>
              <Link href="/" aria-label="Share your travel experience">
                Share Experience
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation menu"
          className="md:hidden container py-4 pb-6 px-2 md:px-0"
        >
          <Nav isMobile onLinkClick={() => setIsMenuOpen(false)} />
          <Button asChild className="mt-2">
            <Link href="#form" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}

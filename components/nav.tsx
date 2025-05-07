"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export function Nav({ isMobile = false, onLinkClick }: NavProps) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <nav
      role="navigation"
      aria-label={isMobile ? "Mobile navigation" : "Main navigation"}
      className={`${isMobile ? "flex flex-col gap-4" : "flex items-center gap-6"}`}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
        onClick={onLinkClick}
      >
        Dashboard
      </Link>
      {isLandingPage && (
        <>
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={onLinkClick}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={onLinkClick}
          >
            How It Works
          </Link>
        </>
      )}
      {isMobile && (
        <>
          <Link
            href="#form"
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={onLinkClick}
          >
            Share Experience
          </Link>
        </>
      )}
    </nav>
  );
}
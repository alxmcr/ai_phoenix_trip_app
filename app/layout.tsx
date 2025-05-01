import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "AI Phoenix Trip - AI-powered insights from passenger trip experiences",
    default: "AI Phoenix Trip",
  },
  icons: {
    icon: "logos/16x16/logo-phoenix-trip-ai-16x16.svg",
    apple: "logos/32x32/logo-phoenix-trip-ai-32x32.svg",
  },
  openGraph: {
    title: "AI Phoenix Trip - AI-powered insights from passenger trip experiences",
    description:
      "Get AI-powered insights from passenger trip experiences with sentiment analysis, actionable recommendations, and more.",
    url: "https://ai-phoenix-trip.vercel.app",
    siteName:
      "AI Phoenix Trip - AI-powered insights from passenger trip experiences",
    images: [
      {
        url: "https://ai-phoenix-trip.vercel.app/bg-seo/bg-seo-phoenix.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://ai-phoenix-trip.vercel.app/bg-seo/bg-seo-phoenix.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "AI Phoenix Trip",
      },
    ],
    videos: [
      {
        url: "https://ai-phoenix-trip.vercel.app/video.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: "https://ai-phoenix-trip.vercel.app/audio.mp3", // Must be an absolute URL
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

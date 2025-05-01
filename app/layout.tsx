import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-phoenix-trip.vercel.app"),
  title: {
    template: "%s | Phoenix Trip",
    default: "Phoenix Trip - AI-powered insights from passenger trip experiences",
  },
  description: "Get AI-powered insights from passenger trip experiences with sentiment analysis, actionable recommendations, and more.",
  keywords: ["Phoenix Trip", "AI insights", "passenger experience", "sentiment analysis", "travel analytics"],
  authors: [{ name: "Phoenix Trip Team" }],
  creator: "Phoenix Trip",
  publisher: "Phoenix Trip",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "logos/16x16/logo-phoenix-trip-ai-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "logos/32x32/logo-phoenix-trip-ai-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    apple: [
      { url: "logos/32x32/logo-phoenix-trip-ai-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Phoenix Trip - AI-powered insights from passenger trip experiences",
    description: "Get AI-powered insights from passenger trip experiences with sentiment analysis, actionable recommendations, and more.",
    url: "https://ai-phoenix-trip.vercel.app",
    siteName: "Phoenix Trip",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-images/og-phoenix.png",
        width: 1200,
        height: 630,
        alt: "Phoenix Trip - AI-powered insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Trip - AI-powered insights from passenger trip experiences",
    description: "Get AI-powered insights from passenger trip experiences with sentiment analysis, actionable recommendations, and more.",
    images: ["/og-images/og-phoenix.png"],
    creator: "@phoenixtrip",
    site: "@phoenixtrip",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://ai-phoenix-trip.vercel.app",
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
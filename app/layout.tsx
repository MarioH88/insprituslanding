import type { Metadata } from "next";
import "aos/dist/aos.css";
import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import SiteFooter from "@/components/ui/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    }
  ],
  variable: "--font-nacelle",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insprit.us"),
  title: {
    default: "Inspritus LLC | AI-Powered Compliance for Risk and Governance",
    template: "%s | Inspritus",
  },
  description:
    "Inspritus is an AI-driven compliance platform for automating SOC 2, ISO 27001, and NIST frameworks. Built for startups, grant recipients, and public sector teams.",
  keywords: [
    "compliance automation",
    "GRC platform",
    "SOC 2",
    "ISO 27001",
    "NIST 800-53",
    "AI compliance",
    "risk register",
    "audit readiness",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://insprit.us",
    siteName: "Inspritus",
    title: "Inspritus LLC | AI-Powered Compliance for Risk and Governance",
    description:
      "Automate SOC 2, ISO 27001, and NIST compliance with AI-powered GRC workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspritus LLC | AI-Powered Compliance",
    description:
      "Automate SOC 2, ISO 27001, and NIST compliance with AI-powered GRC workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

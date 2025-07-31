import "aos/dist/aos.css";
import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";

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

export const metadata = {
  title: "Inspritus LLC | AI-Powered Compliance for Risk and Governance",
  description: "Inspritus is an AI-driven compliance platform for automating SOC 2, ISO 27001, and NIST frameworks. Built for startups, grant recipients, and public sector teams.",
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
          <footer className="mt-auto w-full py-8 text-center border-t border-white/10 bg-gray-950">
            <p className="text-gray-400 text-sm tracking-wide">
              © 2025 <span className="font-bold text-white">Inspritus LLC</span>. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}

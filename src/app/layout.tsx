import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jack T. Belshé",
  description: "Welcome to my attempt at a personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col`}
      >
        {/* Global Navbar */}
        <header className="w-full border-b bg-white shadow-sm">
          <nav className="mx-auto max-w-6xl p-4">
            <Navbar />
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 mx-auto w-full max-w-5xl p-6">{children}<Analytics/><SpeedInsights/></main>

        {/* Global Footer */}
        <footer className="mt-8 border-t bg-white py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Jack Belshe. All rights reserved.
        </footer>
      </body>
    </html>
  );
}


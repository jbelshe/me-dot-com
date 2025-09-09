import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <Link href="/" className="text-2xl font-semibold sm:text-3xl">
                Jack Belshé
              </Link>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm sm:gap-x-4 sm:text-base">
                <a href="/about" className="px-2.5 py-1 rounded hover:bg-gray-50 hover:text-blue-600 transition-colors whitespace-nowrap">
                  About Me
                </a>
                <a href="/projects" className="px-2.5 py-1 rounded hover:bg-gray-50 hover:text-blue-600 transition-colors whitespace-nowrap">
                  Side Quests
                </a>
                <a 
                  href="https://jtbelshe.substack.com/?utm_campaign=profile_chips" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1 rounded hover:bg-gray-50 hover:text-blue-600 transition-colors whitespace-nowrap flex items-center"
                >
                  The Great Escape
                </a>
                <a href="/techno-blogic" className="px-2.5 py-1 rounded hover:bg-gray-50 hover:text-blue-600 transition-colors whitespace-nowrap">
                  Techno-Blogic
                </a>
                <a href="/woodwork" className="px-2.5 py-1 rounded hover:bg-gray-50 hover:text-blue-600 transition-colors whitespace-nowrap">
                  Woodwork
                </a>
                <a href="/jacks-picks" className="px-2.5 py-1 rounded hover:bg-gray-50 hover:text-blue-600 transition-colors whitespace-nowrap">
                  Jack&apos;s Picks
                </a>
                <a href="/contact-me" className="px-2.5 py-1 rounded hover:bg-gray-50 hover:text-blue-600transition-colors whitespace-nowrap">
                  Bang My Line
                </a>
              </div>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 mx-auto w-full max-w-5xl p-6">{children}</main>

        {/* Global Footer */}
        <footer className="mt-8 border-t bg-white py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Jack Belshe. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

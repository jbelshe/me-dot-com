import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <a href="/" className="text-3xl font-semibold">
              Jack Belshé
            </a>
            <div className="space-x-8">
              <a href="/about" className="hover:text-blue-600">
                About Me
              </a>
              <a href="/projects" className="hover:text-blue-600">
                Side Quests
              </a>
              <a href="https://jtbelshe.substack.com/?utm_campaign=profile_chips" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 ">
                The Great Escape
              </a>
              <a href="/techno-blogic" className="hover:text-blue-600">
                Techno-Blogic
              </a>
              <a href="/woodwork" className="hover:text-blue-600">
                Woodwork
              </a>
              <a href="/jacks-picks" className="hover:text-blue-600">
                Jack's Picks
              </a>
              <a href="/contact-me" className="hover:text-blue-600">
                Bang My Line
              </a>
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

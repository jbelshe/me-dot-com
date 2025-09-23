'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const linkBase =
    'px-3 py-2 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors whitespace-nowrap';

  return (
    <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold sm:text-3xl" onClick={close}>
          Jack Belshé
        </Link>
        {/* Mobile menu button */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggle}
        >
          {/* Simple hamburger / close icon */}
          <span className="sr-only">Open main menu</span>
          <svg
            className={`h-6 w-6 ${open ? 'hidden' : 'block'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? 'block' : 'hidden'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Desktop links */}
      <div className="hidden sm:flex sm:flex-row sm:items-center sm:gap-x-4 sm:text-base">
        <a href="/about" className={linkBase}>
          About Me
        </a>
        <a href="/projects" className={linkBase}>
          Side Quests
        </a>
        <a href="/techno-blogic" className={linkBase}>
          Techno-Blogic
        </a>
        <a href="/the-great-escape" className={`${linkBase} flex items-center`}>
          The Great Escape
        </a>
        <a href="/woodwork" className={linkBase}>
          Woodwork
        </a>
        <a href="/jacks-picks" className={linkBase}>
          Jack&apos;s Picks
        </a>
        <a href="/contact-me" className={linkBase}>
          Contact
        </a>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="sm:hidden">
          <div className="mt-2 grid grid-cols-1 gap-2">
            <a href="/about" onClick={close} className={`${linkBase} border border-gray-200 bg-white text-center`}>
              About Me
            </a>
            <a href="/projects" onClick={close} className={`${linkBase} border border-gray-200 bg-white text-center`}>
              Side Quests
            </a>
            <a href="/techno-blogic" onClick={close} className={`${linkBase} border border-gray-200 bg-white text-center`}>
              Techno-Blogic
            </a>
            <a
              href="/the-great-escape"
              onClick={close}
              className={`${linkBase} border border-gray-200 bg-white text-center`}
            >
              The Great Escape
            </a>
            <a href="/woodwork" onClick={close} className={`${linkBase} border border-gray-200 bg-white text-center`}>
              Woodwork
            </a>
            <a href="/jacks-picks" onClick={close} className={`${linkBase} border border-gray-200 bg-white text-center`}>
              Jack&apos;s Picks
            </a>
            <a href="/contact-me" onClick={close} className={`${linkBase} border border-gray-200 bg-white text-center`}>
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

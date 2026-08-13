"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-3">

        <div className="flex items-center justify-between">

          {/* Logo + Company Name */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src="/jamestuns-shield-logo.png"
              alt="Jamestuns Trading Venture"
              className="h-16 w-16 object-contain"
            />

            <div className="hidden sm:block">
              <h1 className="text-xl font-extrabold text-blue-900 leading-tight">
                Jamestuns
              </h1>

              <p className="text-xs font-semibold tracking-wider text-green-600 uppercase">
                Trading Venture
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              About
            </Link>

            <Link
              href="/services"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="font-medium text-gray-700 hover:text-blue-700 transition"
            >
              Contact
            </Link>

            <Link
              href="/agent"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Become an Agent
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-100 pt-4 pb-2">

            <div className="flex flex-col gap-2">

              <Link
                href="/"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                About
              </Link>

              <Link
                href="/services"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Services
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
              >
                Contact
              </Link>

              <Link
                href="/agent"
                onClick={closeMenu}
                className="mt-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold text-center transition"
              >
                Become an Agent
              </Link>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
}
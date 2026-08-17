"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, Phone, Calendar } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // At the top of the home page, it matches the hero background exactly.
  // On scroll, it transitions to a translucent warm whitish/ivory background with a bottom border.
  const isAtTop = isHome && !isScrolled;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`w-full transition-all duration-300 ${
          isAtTop
            ? "bg-[#fdfbf7] border-b border-transparent shadow-none"
            : "bg-[#fdfbf7]/85 backdrop-blur-md border-b border-amber-200/60 shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 transition-transform group-hover:rotate-12">
                <Sparkles className="w-5 h-5 text-amber-700" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-slate-900 text-base sm:text-lg leading-tight tracking-tight">
                  Suman Adhikari
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-amber-800 uppercase">
                  Vedic Astrologer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-red-600 font-semibold"
                        : "text-slate-700 hover:text-amber-900"
                    }`}
                  >
                    {link.name}
                    {/* Active Red Underline Indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-600 rounded-full transition-all duration-300" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Action */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+9779841692527"
                className="p-2.5 rounded-full text-slate-700 hover:text-amber-800 hover:bg-amber-100/50 transition-colors"
                title="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Session</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-amber-100/60 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#fdfbf7]/95 backdrop-blur-md border-b border-amber-200/80 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                    isActive
                      ? "text-red-600 bg-red-50/50"
                      : "text-slate-700 hover:bg-amber-100/50 hover:text-amber-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-amber-200/60 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
"use client";

import React, { useState } from "react";
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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-amber-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
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
          <nav className="hidden md:flex items-center gap-1 bg-amber-50/60 p-1 rounded-full border border-amber-200/60">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? "bg-amber-600 text-white shadow-xs"
                      : "text-slate-700 hover:text-amber-900 hover:bg-amber-100/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+9779800000000"
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
        <div className="md:hidden bg-[#fdfbf7] border-b border-amber-200/80 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-amber-600 text-white"
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
    </header>
  );
}
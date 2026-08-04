"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Expertise", href: "#expertise" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky glass backdrop intensity
      setScrolled(window.scrollY > 20);

      // ScrollSpy: Detect active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const link of links) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-xl border-b border-amber-500/15 py-3.5 shadow-[0_4px_25px_-5px_rgba(217,119,6,0.06)]" 
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          {/* Brand Logo Identity */}
          <a href="#home" className="group flex items-center gap-2.5 focus:outline-none">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 flex items-center justify-center text-white font-serif font-bold shadow-[0_4px_14px_rgba(217,119,6,0.25)] group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-white stroke-[2]" />
            </div>
            <span className="font-serif tracking-tight text-xl text-slate-900 group-hover:text-amber-800 transition-colors duration-200">
              Suman <span className="font-light text-slate-600 group-hover:text-amber-700 transition-colors">Adhikari</span>
            </span>
          </a>

          {/* Desktop Navigation Links - No Outer Box/Border, Smooth Underline */}
          <div className="hidden md:flex items-center gap-7 relative">
            {links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`relative py-1 text-sm font-medium tracking-wide font-sans transition-colors duration-300 ${
                    isActive ? "text-amber-950 font-semibold" : "text-slate-600 hover:text-amber-800"
                  }`}
                >
                  {/* Link Text */}
                  <span>{link.name}</span>

                  {/* Clean Animated Underline Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-full shadow-[0_2px_8px_rgba(217,119,6,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-xs font-semibold tracking-wider uppercase border border-amber-400/30 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(217,119,6,0.22)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.32)]"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Menu Action Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-slate-700 hover:text-amber-800 bg-white/80 border border-amber-500/20 rounded-xl focus:outline-none transition-colors shadow-xs"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Full Animated Mobile Screen Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 bg-white/95 backdrop-blur-2xl border-b border-amber-500/15 z-40 md:hidden px-6 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {links.map((link, index) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.href);
                      setIsOpen(false);
                    }}
                    className={`relative flex items-center justify-between text-base font-medium py-3 px-3 font-sans transition-all ${
                      isActive 
                        ? "text-amber-950 font-semibold" 
                        : "text-slate-700 hover:text-amber-800"
                    }`}
                  >
                    <span>{link.name}</span>

                    {/* Minimal Underline/Indicator for Mobile */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeMobileLine" 
                        className="w-1.5 h-4 rounded-full bg-gradient-to-b from-amber-500 to-orange-600" 
                      />
                    )}
                  </motion.a>
                );
              })}
              
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white font-semibold py-3.5 rounded-xl shadow-[0_4px_15px_rgba(217,119,6,0.22)] active:scale-[0.99] transition-transform"
              >
                Book Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
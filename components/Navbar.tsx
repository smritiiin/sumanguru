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

  // Detect scroll position to transform background blur profile
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[#0A0B10]/70 backdrop-blur-md border-b border-slate-900/50 py-3 shadow-lg shadow-black/10" 
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          {/* Brand Logo Identity */}
          <a href="#home" className="group flex items-center gap-2 focus:outline-none">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-serif font-bold shadow-md shadow-amber-500/10">
              <Sparkles className="w-4 h-4 text-slate-950 stroke-[2]" />
            </div>
            <span className="font-serif tracking-wide text-lg text-slate-200 group-hover:text-white transition-colors duration-200">
              Suman <span className="font-light text-slate-400 group-hover:text-amber-300 transition-colors">Adhikari</span>
            </span>
          </a>

          {/* Desktop Navigation Link Cluster */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/40 backdrop-blur-md border border-slate-800/40 px-2 py-1.5 rounded-full">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-1.5 text-xs font-medium tracking-wide font-sans text-slate-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Call Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-xs font-medium tracking-wider uppercase border border-amber-500/20 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 px-5 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Menu Action Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white bg-slate-900/50 border border-slate-800/60 rounded-xl focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Full Animated Mobile Screen Modal Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 bg-[#0A0B10]/95 backdrop-blur-lg border-b border-slate-900 z-40 md:hidden px-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-400 hover:text-amber-400 py-2 border-b border-slate-900/60 font-sans transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-medium py-3 rounded-xl shadow-lg"
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
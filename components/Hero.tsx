"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, ArrowUpRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-slate-50 text-slate-900 px-4 sm:px-6 py-20 lg:py-0"
    >
      {/* Vibrant Ambient Sunlight Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-tr from-amber-300/35 via-orange-300/25 to-rose-300/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[280px] h-[280px] bg-amber-400/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[240px] h-[240px] bg-rose-200/30 rounded-full blur-[70px] pointer-events-none" />

      {/* Subtle Warm Celestial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9770615_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 text-amber-700 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
          >
            <Compass className="w-4 h-4 animate-[spin_20s_linear_infinite] text-amber-600" />
            <span>Vedic Astrologer & Spiritual Guide</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-slate-900 font-serif leading-[1.15]"
          >
            Discover Clarity Through <br />
            <span className="font-serif italic font-normal bg-gradient-to-r from-amber-700 via-orange-600 to-amber-600 bg-clip-text text-transparent">
              Ancient Stellar Wisdom
            </span>
          </motion.h1>

          {/* Bio Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal"
          >
            Guiding you through the cosmic maps of Vedic Astrology, Numerology, 
            and Palmistry to reveal your true purpose, alignment, and modern life direction.
          </motion.p>

          {/* Interactive Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium px-8 py-3.5 rounded-full shadow-[0_6px_25px_rgba(217,119,6,0.3)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center border border-amber-200/80 bg-white/70 backdrop-blur-md text-slate-700 hover:text-amber-800 hover:border-amber-400/80 hover:bg-white/90 px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Right Column: Cosmic Profile Portrait */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[280px] sm:w-[360px] lg:w-[400px] aspect-[4/5]"
          >
            {/* Infinite Rotating Outer Astrology Ring */}
            <div className="absolute -inset-6 border border-dashed border-amber-400/40 rounded-full animate-[spin_120s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-3 border border-orange-200/60 rounded-full animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />

            {/* Main Image Frame Container */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-amber-100 bg-amber-50/50 shadow-[0_20px_50px_rgba(217,119,6,0.12)]">
              <Image
                src="/images/Suman.png"
                alt="Suman Adhikari"
                fill
                sizes="(max-w-7xl) 100vw"
                className="object-cover scale-105 hover:scale-100 transition-transform duration-700 saturate-[1.05]"
                priority
              />
              {/* Soft warm bottom glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-100/30 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Glassmorphism Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 sm:-left-8 bg-white/80 backdrop-blur-md border border-amber-200/80 px-4 py-3 rounded-2xl hidden sm:flex items-center gap-3 shadow-lg shadow-amber-900/5"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-slate-700">Available for Readings</span>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
      >
        <a
          href="#about"
          aria-label="Scroll to About Section"
          className="group flex flex-col items-center text-amber-700/80 hover:text-amber-800 transition-colors"
        >
          <span className="text-[10px] uppercase font-semibold tracking-widest text-amber-800/60 group-hover:text-amber-800 transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-amber-300/80 bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:border-amber-400 group-hover:bg-white transition-all"
          >
            <ChevronDown className="w-4 h-4 text-amber-700" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
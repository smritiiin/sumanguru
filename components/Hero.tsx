"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0B10] text-slate-100 px-4 sm:px-6 py-20 lg:py-0"
    >
      {/* Celestial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle Starry Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 text-amber-400/90 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
          >
            <Compass className="w-4 h-4 animate-[spin_20s_linear_infinite] text-amber-500/80" />
            <span>Vedic Astrologer & Spiritual Guide</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white font-serif leading-[1.15]"
          >
            Discover Clarity Through <br />
            <span className="font-serif italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Ancient Stellar Wisdom
            </span>
          </motion.h1>

          {/* Bio Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
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
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-medium px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center border border-slate-800 bg-slate-900/40 backdrop-blur-md text-slate-300 hover:text-white hover:border-slate-600 px-8 py-3.5 rounded-full transition-all duration-300"
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
            <div className="absolute -inset-6 border border-dashed border-amber-500/20 rounded-full animate-[spin_120s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-3 border border-slate-800 rounded-full animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />

            {/* Main Image Frame Container */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-slate-800/80 bg-slate-950 shadow-2xl shadow-indigo-950/20">
              <Image
                src="/images/Suman.png"
                alt="Suman Adhikari"
                fill
                sizes="(max-w-7xl) 100vw"
                className="object-cover scale-105 hover:scale-100 transition-transform duration-700 brightness-[0.95] contrast-[1.05]"
                priority
              />
              {/* Soft bottom vignette overlay for premium depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent opacity-40" />
            </div>

            {/* Floating Glassmorphism Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 sm:-left-8 bg-slate-950/70 backdrop-blur-md border border-slate-800/80 px-4 py-3 rounded-2xl hidden sm:flex items-center gap-3 shadow-xl"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-slate-300">Available for Readings</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
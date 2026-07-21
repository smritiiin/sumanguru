"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Languages, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#07080B] text-slate-200 overflow-hidden"
    >
      {/* Subtle Right Side Nebula Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Frame & Image */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-[280px] sm:w-[360px] aspect-[3/4]"
          >
            {/* Geometric Accent Border Offset */}
            <div className="absolute inset-0 border border-amber-500/20 translate-x-4 translate-y-4 rounded-[2rem] pointer-events-none transition-transform duration-500 hover:translate-x-2 hover:translate-y-2" />
            
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-800/60 bg-slate-900 shadow-2xl">
              <Image
                src="/images/Suman.png"
                alt="Suman Adhikari - Vedic Astrologer"
                fill
                sizes="(max-w-7xl) 100vw"
                className="object-cover brightness-95 contrast-[1.02]"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Narrative Text & Pillars */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
              The Lineage & Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-white mb-6">
              Meet Suman Adhikari
            </h2>

            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 mb-6 w-fit">
              <MapPin className="w-3.5 h-3.5 text-amber-500/80" />
              <span>Based in Bhaktapur, Nepal</span>
            </div>

            <p className="text-slate-400 leading-relaxed font-sans mb-6">
              My path combines the deep calculations of traditional **Vedic Astrology (Jyotish)**, 
              Numerology, and Palmistry with an empathetic approach to modern Spiritual Counseling. 
              Instead of rigid fatalism, I view the cosmic chart as a blueprint for empowerment—helping 
              you navigate life's core milestones with precision and clarity.
            </p>
          </motion.div>

          {/* Core Values / Competency Matrix */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Pillar 1: Interdisciplinary */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="text-sm font-medium text-white mb-1.5 font-sans">Holistic Guidance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Weaving together chart calculations, planetary alignments, and structural palm indicators.
              </p>
            </motion.div>

            {/* Pillar 2: Global Accessibility */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
                <Languages className="w-4 h-4 text-indigo-400" />
              </div>
              <h3 className="text-sm font-medium text-white mb-1.5 font-sans">Multilingual Teaching</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Breaking down cryptic Sanskrit and historical formulas fluently in **Nepali, English, and Hindi**.
              </p>
            </motion.div>

          </div>

          {/* Subtle Bottom Trust Quote */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 pt-6 border-t border-slate-900 flex items-center gap-3 text-slate-400 text-sm"
          >
            <ShieldCheck className="w-4 h-4 text-amber-500/60 shrink-0" />
            <span className="italic">"Ancient principles translated directly for modern life architectural alignment."</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
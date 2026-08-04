"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Languages, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 via-amber-50/50 to-orange-50/30 text-slate-900 overflow-hidden"
    >
      {/* Vibrant Ambient Sunlight Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-gradient-to-br from-amber-300/25 via-orange-300/20 to-rose-200/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[250px] h-[250px] bg-amber-200/30 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle Warm Celestial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9770612_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
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
            <div className="absolute inset-0 border border-amber-400/50 translate-x-4 translate-y-4 rounded-[2rem] pointer-events-none transition-transform duration-500 hover:translate-x-2 hover:translate-y-2" />
            
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-amber-200/80 bg-amber-50/40 shadow-[0_20px_50px_rgba(217,119,6,0.12)]">
              <Image
                src="/images/Suman.png"
                alt="Suman Adhikari - Vedic Astrologer"
                fill
                sizes="(max-w-7xl) 100vw"
                className="object-cover saturate-[1.05]"
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
            <span className="text-amber-700 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
              The Lineage & Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-slate-900 mb-6">
              Meet Suman Adhikari
            </h2>

            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-amber-200/80 text-xs font-medium text-slate-700 mb-6 w-fit shadow-sm backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Based in Bhaktapur, Nepal</span>
            </div>

            <p className="text-slate-600 leading-relaxed font-sans font-normal mb-6">
              My path combines the deep calculations of traditional <strong className="font-semibold text-slate-900">Vedic Astrology (Jyotish)</strong>, 
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
              className="p-5 rounded-2xl bg-white/70 border border-amber-200/70 backdrop-blur-md shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5 font-sans">Holistic Guidance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Weaving together chart calculations, planetary alignments, and structural palm indicators.
              </p>
            </motion.div>

            {/* Pillar 2: Global Accessibility */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 rounded-2xl bg-white/70 border border-amber-200/70 backdrop-blur-md shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3">
                <Languages className="w-4 h-4 text-orange-600" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5 font-sans">Multilingual Teaching</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Breaking down cryptic Sanskrit and historical formulas fluently in <strong className="font-semibold text-slate-800">Nepali, English, and Hindi</strong>.
              </p>
            </motion.div>

          </div>

          {/* Subtle Bottom Trust Quote */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 pt-6 border-t border-amber-200/60 flex items-center gap-3 text-slate-600 text-sm"
          >
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="italic font-normal">"Ancient principles translated directly for modern life architectural alignment."</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
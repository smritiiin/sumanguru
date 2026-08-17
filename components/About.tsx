"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, ShieldCheck, Sparkles, MapPin, ArrowRight, Compass, Sun, Moon } from "lucide-react";

const zodiacHouses = [
  { id: 1, label: "1st", bhava: "Tanu Bhava", sign: "Aries (Mesha)", ruler: "Mars (Mangal)", element: "Fire", focus: "Self, Physical Body, Life Path" },
  { id: 2, label: "2nd", bhava: "Dhana Bhava", sign: "Taurus (Vrishabha)", ruler: "Venus (Shukra)", element: "Earth", focus: "Wealth, Family, Speech" },
  { id: 3, label: "3rd", bhava: "Sahaja Bhava", sign: "Gemini (Mithuna)", ruler: "Mercury (Budha)", element: "Air", focus: "Courage, Siblings, Skills" },
  { id: 4, label: "4th", bhava: "Bandhu Bhava", sign: "Cancer (Karka)", ruler: "Moon (Chandra)", element: "Water", focus: "Home, Mother, Inner Peace" },
  { id: 5, label: "5th", bhava: "Putra Bhava", sign: "Leo (Simha)", ruler: "Sun (Surya)", element: "Fire", focus: "Intellect, Karma, Children" },
  { id: 6, label: "6th", bhava: "Ari Bhava", sign: "Virgo (Kanya)", ruler: "Mercury (Budha)", element: "Earth", focus: "Health, Obstacles, Service" },
  { id: 7, label: "7th", bhava: "Yuvati Bhava", sign: "Libra (Tula)", ruler: "Venus (Shukra)", element: "Air", focus: "Marriage, Partnerships, Trade" },
  { id: 8, label: "8th", bhava: "Randhra Bhava", sign: "Scorpio (Vrischika)", ruler: "Mars (Mangal)", element: "Water", focus: "Longevity, Transformation, Intuition" },
  { id: 9, label: "9th", bhava: "Dharma Bhava", sign: "Sagittarius (Dhanu)", ruler: "Jupiter (Guru)", element: "Fire", focus: "Higher Wisdom, Luck, Lineage" },
  { id: 10, label: "10th", bhava: "Karma Bhava", sign: "Capricorn (Makara)", ruler: "Saturn (Shani)", element: "Earth", focus: "Career, Public Reputation, Action" },
  { id: 11, label: "11th", bhava: "Labha Bhava", sign: "Aquarius (Kumbha)", ruler: "Saturn (Shani)", element: "Air", focus: "Gains, Networks, Aspirations" },
  { id: 12, label: "12th", bhava: "Vyaya Bhava", sign: "Pisces (Meena)", ruler: "Jupiter (Guru)", element: "Water", focus: "Moksha, Foreign Travels, Subconscious" },
];

export default function AboutSection() {
  const [activeHouseId, setActiveHouseId] = useState<number>(1);
  const selectedHouse = zodiacHouses.find((h) => h.id === activeHouseId) || zodiacHouses[0];

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 via-amber-50/50 to-orange-50/30 text-slate-900 overflow-hidden"
    >
      {/* Radiant Background Sunlight Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-gradient-to-br from-amber-300/25 via-orange-300/20 to-rose-200/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[250px] h-[250px] bg-amber-200/30 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle Celestial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9770612_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Dynamic Lively Janma Kundali Visual */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-[320px] sm:w-[410px] aspect-square flex items-center justify-center"
          >
            {/* Outer Rotating Celestial Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-amber-300/80 pointer-events-none"
            />

            {/* Middle Counter-Rotating Pulse Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-amber-400/30 pointer-events-none"
            />

            {/* Central Kundali Card */}
            <div className="relative w-[270px] sm:w-[340px] aspect-square bg-white/85 backdrop-blur-md border border-amber-300/90 rounded-3xl shadow-xl p-4 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/40 via-transparent to-orange-100/30 pointer-events-none" />

              {/* Card Header */}
              <div className="flex justify-between items-center z-10">
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-900 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" /> Vedic Horoscope Grid
                </span>
                <span className="text-[9px] bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-2xs">
                  {selectedHouse.element} Tattwa
                </span>
              </div>

              {/* 12-House Dynamic Grid */}
              <div className="my-auto grid grid-cols-4 gap-1.5 relative z-10">
                {zodiacHouses.map((house) => {
                  const isActive = house.id === activeHouseId;
                  return (
                    <button
                      key={house.id}
                      onClick={() => setActiveHouseId(house.id)}
                      className={`aspect-square rounded-xl border text-center flex flex-col items-center justify-center p-1 transition-all cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-br from-amber-500 to-orange-600 text-white border-amber-600 shadow-md scale-105"
                          : "bg-amber-50/70 hover:bg-amber-100/80 text-slate-800 border-amber-200/80"
                      }`}
                    >
                      <span className="text-[9px] font-bold">{house.label}</span>
                      <span className="text-[7px] truncate max-w-full opacity-90">{house.bhava.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic House Details Footer */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHouse.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="z-10 bg-amber-50/90 border border-amber-200/90 rounded-xl p-2.5 text-left"
                >
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="text-[11px] font-bold text-slate-900">{selectedHouse.bhava} ({selectedHouse.label} House)</span>
                    <span className="text-[9px] font-semibold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded border border-amber-200">
                      Ruler: {selectedHouse.ruler.split(" ")[0]}
                    </span>
                  </div>
                  <div className="text-[9px] text-slate-700 font-medium truncate">
                    <strong className="text-amber-900">Sign:</strong> {selectedHouse.sign}
                  </div>
                  <div className="text-[9px] text-slate-600 truncate mt-0.5">
                    <strong className="text-slate-800">Domain:</strong> {selectedHouse.focus}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Orbiting Sun and Moon Badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-2 bg-white/95 border border-amber-300 p-2 rounded-2xl shadow-md flex items-center gap-1.5 backdrop-blur-sm z-20"
            >
              <Sun className="w-4 h-4 text-amber-600 fill-amber-100" />
              <span className="text-[10px] font-bold text-slate-800">Surya (Sun)</span>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-2 bg-white/95 border border-amber-300 p-2 rounded-2xl shadow-md flex items-center gap-1.5 backdrop-blur-sm z-20"
            >
              <Moon className="w-4 h-4 text-orange-600 fill-orange-100" />
              <span className="text-[10px] font-bold text-slate-800">Chandra (Moon)</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Narrative Text & Links */}
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-amber-200/80 text-xs font-medium text-slate-700 mb-6 w-fit shadow-2xs backdrop-blur-sm">
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

          {/* Pillars Grid */}
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl bg-white/70 border border-amber-200/70 backdrop-blur-md shadow-2xs hover:shadow-md hover:border-amber-300 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1.5 font-sans">Holistic Guidance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Weaving together chart calculations, planetary alignments, and structural palm indicators.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 rounded-2xl bg-white/70 border border-amber-200/70 backdrop-blur-md shadow-2xs hover:shadow-md hover:border-amber-300 transition-all duration-300"
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

          {/* Bottom Trust Quote & Navigation Link */}
          <div className="mt-8 pt-6 border-t border-amber-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-600 text-xs italic font-normal">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>"Ancient principles translated directly for modern architectural alignment."</span>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm transition-all shrink-0 cursor-pointer"
            >
              <span>Learn More About Suman</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
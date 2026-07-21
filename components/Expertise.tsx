"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

// Categorized expertise with visual technical mastery levels
const expertiseData = [
  { name: "Vedic Astrology (Jyotish)", level: 95, detail: "Parashara system, planetary dashas, and divisional charts." },
  { name: "Horoscope Matching", level: 92, detail: "Ashta-koota compatibility calculation and manglik dosha analysis." },
  { name: "Palmistry (Samudrika Shastra)", level: 88, detail: "Hand geometry analysis, major line shifts, and mount reading." },
  { name: "Career Direction Geometry", level: 90, detail: "Decoding the 10th house, professional timings, and wealth yogas." },
  { name: "Numerology Analysis", level: 85, detail: "Chaldean systems, name corrections, and radical/destiny keys." },
  { name: "Relationship Counseling", level: 87, detail: "Untangling synastry blocks and planetary relational blockages." },
  { name: "Spiritual Counseling", level: 94, detail: "Karmic path mapping, mantra remedies, and meditative alignment." },
  { name: "Astrology Teaching", level: 91, detail: "Instructing ancient Sanskrit texts for international modern students." },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative py-24 md:py-32 bg-[#07080B] text-slate-200 overflow-hidden"
    >
      {/* Structural Central Glow Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
            Mastery & Lineage
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-white">
            Technical Areas of Expertise
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            A breakdown of calculated disciplines, technical tracking systems, and traditional intuitive methodologies.
          </p>
        </div>

        {/* Custom Layout Grid: Splitting descriptive summary and graphical bars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Descriptive Summary Accent Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 p-8 rounded-3xl bg-slate-900/20 border border-slate-900/60 backdrop-blur-md sticky top-24"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400 border border-amber-500/20">
              <Award className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-xl font-serif text-white mb-4">Calculated Accuracy</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-sans mb-6">
              True Vedic chart computation relies heavily on astronomical mathematics. My calculations adjust for the precessional movement of the Earth (Ayanamsha), ensuring accurate cosmic coordinates rather than generalized estimates.
            </p>
            
            {/* Tiny Core Focus Bullet Stack */}
            <div className="space-y-3 pt-4 border-t border-slate-900/80">
              {["Traditional Text Integrity", "Mathematical System Precision", "Empathetic Delivery"].map((text) => (
                <div key={text} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-500/80 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Percentage Skill Matrix Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertiseData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-5 rounded-2xl bg-slate-900/30 border border-slate-900/60 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-sm sm:text-base font-sans font-medium text-slate-200">
                      {skill.name}
                    </h4>
                    <span className="text-xs font-mono font-medium text-amber-400/80">
                      {skill.level}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal font-sans mb-4">
                    {skill.detail}
                  </p>
                </div>

                {/* Animated Track Bar Container */}
                <div className="w-full h-[3px] bg-slate-950 rounded-full overflow-hidden border-t border-slate-900/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
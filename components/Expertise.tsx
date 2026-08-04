"use client";

import { motion } from "framer-motion";
import { Compass, HeartHandshake, BookOpen, Sparkles } from "lucide-react";

const expertiseAreas = [
  {
    icon: Compass,
    title: "Vedic Astrology & Yogas",
    desc: "Parashara system calculations, Dasha timing, and divisional chart analysis.",
    tags: ["Horoscope Matching", "Career Alignment", "Wealth Yogas"],
  },
  {
    icon: Sparkles,
    title: "Palmistry & Numerology",
    desc: "Samudrika Shastra hand analysis paired with Chaldean name corrections.",
    tags: ["Hand Geometry", "Destiny Numbers", "Name Tuning"],
  },
  {
    icon: HeartHandshake,
    title: "Relationship Counseling",
    desc: "Untangling synastry blocks, Ashta-koota compatibility, and Manglik dosha remedies.",
    tags: ["Matchmaking", "Karmic Blocks", "Dosha Remedies"],
  },
  {
    icon: BookOpen,
    title: "Spiritual & Mantra Guidance",
    desc: "Authentic Sanskrit text insights, meditative alignment, and personalized remedies.",
    tags: ["Mantra Remedies", "Karmic Mapping", "Astrology Teaching"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 md:py-20 bg-gradient-to-b from-slate-50 via-amber-50/30 to-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Compact Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase block mb-1">
            Mastery & Lineage
          </span>
          <h2 className="text-2xl sm:text-4xl font-light font-serif text-slate-900">
            Core Areas of Expertise
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {expertiseAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white/80 border border-amber-200/80 backdrop-blur-xs shadow-2xs hover:shadow-md hover:border-amber-300 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/20 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900">{item.title}</h3>
                </div>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {/* Micro Pill Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-amber-900/80 bg-amber-500/10 border border-amber-300/40 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
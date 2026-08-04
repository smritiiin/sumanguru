"use client";

import { motion } from "framer-motion";
import { Compass, Home, Hand, GraduationCap, Flame, ArrowUpRight } from "lucide-react";

const premiumServices = [
  {
    name: "Astrological Life Mapping",
    slug: "Birth Chart Reading",
    icon: Compass,
    desc: "Comprehensive Jyotish blueprint merging birth chart readings, career timing alignment, and relationship synastry into a unified strategy."
  },
  {
    name: "Sacred Space Design (Vastu)",
    slug: "Vastu Consultation",
    icon: Home,
    desc: "Architectural energy audits analyzing structural alignment. Includes non-destructive elemental corrections and energy balancing remedies."
  },
  {
    name: "Esoteric Signatures",
    slug: "Birth Chart Reading",
    icon: Hand,
    desc: "Cross-discipline evaluation combining tactical Chaldean Numerology corrections with structural Palmistry mount analysis to parse hidden currents."
  },
  {
    name: "Vedic Karmakanda & Rituals",
    slug: "Vedic Karmakanda",
    icon: Flame,
    desc: "Authentic Vedic rituals including traditional Marriage ceremonies (Vivaha), Bratabandha, Griha Pravesh, and sacred Vedic pujas."
  },
  {
    name: "Spiritual Mentorship",
    slug: "One-on-One Mentorship",
    icon: GraduationCap,
    desc: "Private 1-on-1 counseling designed to dismantle deep karmic patterns, teach traditional methods, and map personal sadhana practices."
  }
];

const containerVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 14 }
  }
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-gradient-to-b from-orange-50/30 via-amber-50/40 to-slate-50 text-slate-900 overflow-hidden"
    >
      {/* Vibrant Ambient Sunlight Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-amber-300/20 via-orange-300/15 to-rose-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Warm Celestial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9770612_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-700 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
            Sacred Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-slate-900">
            Consultations & Rituals
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
            High-end strategic consulting frameworks designed to synthesize ancient stellar logic for modern life architectural alignment.
          </p>
        </div>

        {/* 5-Column Single Line Desktop Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5"
        >
          {premiumServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.a
                key={service.name}
                href="#contact"
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-2xl bg-white/70 border border-amber-200/80 backdrop-blur-md shadow-xs hover:shadow-xl hover:border-amber-400/80 hover:bg-white/90 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Top horizontal highlight glow strip on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/60 rounded-t-2xl transition-all duration-500" />

                <div>
                  {/* Service Icon Container */}
                  <div className="w-10 h-10 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-center text-amber-700 group-hover:text-amber-800 group-hover:bg-amber-100/80 group-hover:border-amber-300 transition-all duration-300 mb-4 shadow-2xs">
                    <IconComponent className="w-4 h-4 stroke-[1.5]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif font-medium text-slate-900 group-hover:text-amber-900 transition-colors duration-200 text-base leading-snug">
                    {service.name}
                  </h3>
                  
                  {/* Detailed Description */}
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans font-normal group-hover:text-slate-700 transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Intent Anchor Integration */}
                <div className="mt-6 pt-3 border-t border-amber-200/60 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-slate-500 group-hover:text-amber-700 transition-colors duration-300">
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
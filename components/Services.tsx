"use client";

import { motion } from "framer-motion";
import { Compass, Home, Hand, GraduationCap, ArrowUpRight } from "lucide-react";

const premiumServices = [
  {
    name: "Astrological Life Mapping",
    slug: "Birth Chart Reading", // Matches option values in the Contact dropdown form
    icon: Compass,
    desc: "Comprehensive Jyotish blueprint merging birth chart readings, career timing alignment, and relationship synastry into a unified strategy for clear life direction."
  },
  {
    name: "Sacred Space Design (Vastu)",
    slug: "Vastu Consultation",
    icon: Home,
    desc: "Architectural energy audits analyzing structural alignment. Includes non-destructive elemental corrections and energy balancing remedies to optimize prosperity."
  },
  {
    name: "Esoteric Signatures",
    slug: "Birth Chart Reading", // Can map to standard reading or a fallback
    icon: Hand,
    desc: "A deeper cross-discipline evaluation combining tactical Chaldean Numerology corrections with structural Palmistry mount analysis to parse hidden inner currents."
  },
  {
    name: "Spiritual Mentorship",
    slug: "One-on-One Mentorship",
    icon: GraduationCap,
    desc: "Private, intensive 1-on-1 counseling designed to dismantle deep karmic patterns, teach traditional methods, and map personal sadhana practices."
  }
];

const containerVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 25 },
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
      className="relative py-24 md:py-32 bg-[#0A0B10] text-slate-200 overflow-hidden"
    >
      {/* Background Ambience Layer */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-indigo-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
            Sacred Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-white">
            Consultations & Guidance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            High-end strategic consulting frameworks designed to synthesize ancient stellar logic for modern life architectural alignment.
          </p>
        </div>

        {/* Streamlined Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {premiumServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.a
                key={service.name}
                href="#contact"
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-slate-900/20 border border-slate-900/80 backdrop-blur-md hover:border-slate-800/60 hover:bg-slate-900/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Subtle top horizontal highlight glow strip on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-400/50 rounded-t-2xl transition-all duration-500" />

                <div>
                  {/* Service Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-900/80 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:border-amber-500/20 transition-all duration-300 mb-5">
                    <IconComponent className="w-5 h-5 stroke-[1.25]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif font-medium text-slate-100 group-hover:text-white transition-colors duration-200 text-base lg:text-lg">
                    {service.name}
                  </h3>
                  
                  {/* Detailed Strategic Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-light group-hover:text-slate-300 transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Intent Anchor Integration */}
                <div className="mt-8 pt-4 border-t border-slate-900/60 flex items-center justify-between text-xs font-medium tracking-wider uppercase text-slate-500 group-hover:text-amber-400 transition-colors duration-300">
                  <span>Inquire Consultation</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
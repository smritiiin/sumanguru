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
      className="relative py-24 md:py-32 bg-gradient-to-b from-orange-50/30 via-amber-50/40 to-slate-50 text-slate-900 overflow-hidden"
    >
      {/* Vibrant Ambient Sunlight Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-amber-300/20 via-orange-300/15 to-rose-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Warm Celestial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9770612_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-amber-700 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
            Sacred Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-slate-900">
            Consultations & Guidance
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
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
                className="group relative p-6 rounded-2xl bg-white/70 border border-amber-200/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-amber-400/80 hover:bg-white/90 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Subtle top horizontal highlight glow strip on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/60 rounded-t-2xl transition-all duration-500" />

                <div>
                  {/* Service Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-center text-amber-700 group-hover:text-amber-800 group-hover:bg-amber-100/80 group-hover:border-amber-300 transition-all duration-300 mb-5 shadow-xs">
                    <IconComponent className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif font-medium text-slate-900 group-hover:text-amber-900 transition-colors duration-200 text-base lg:text-lg">
                    {service.name}
                  </h3>
                  
                  {/* Detailed Strategic Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal group-hover:text-slate-700 transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Intent Anchor Integration */}
                <div className="mt-8 pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-slate-500 group-hover:text-amber-700 transition-colors duration-300">
                  <span>Inquire Consultation</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
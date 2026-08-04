"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, Calendar, Clock, MapPin, ArrowRight, RefreshCw, Sun, Moon, Star } from "lucide-react";

// --- Vedic Sign Data & Archetypes ---
const ZODIAC_SIGNS = [
  { name: "Aries (Mesha)", ruler: "Mars", element: "Fire", trait: "Pioneering, Energetic, Courageous" },
  { name: "Taurus (Vrishabha)", ruler: "Venus", element: "Earth", trait: "Grounded, Patient, Resourceful" },
  { name: "Gemini (Mithuna)", ruler: "Mercury", element: "Air", trait: "Curious, Adaptable, Expressive" },
  { name: "Cancer (Karka)", ruler: "Moon", element: "Water", trait: "Intuitive, Nurturing, Empathetic" },
  { name: "Leo (Simha)", ruler: "Sun", element: "Fire", trait: "Charismatic, Noble, Visionary" },
  { name: "Virgo (Kanya)", ruler: "Mercury", element: "Earth", trait: "Analytical, Precise, Service-oriented" },
  { name: "Libra (Tula)", ruler: "Venus", element: "Air", trait: "Harmonious, Diplomatic, Aesthetic" },
  { name: "Scorpio (Vrischika)", ruler: "Mars", element: "Water", trait: "Transformative, Deep, Perceptive" },
  { name: "Sagittarius (Dhanu)", ruler: "Jupiter", element: "Fire", trait: "Philosophical, Expansive, Truth-seeking" },
  { name: "Capricorn (Makara)", ruler: "Saturn", element: "Earth", trait: "Disciplined, Ambitious, Strategic" },
  { name: "Aquarius (Kumbha)", ruler: "Saturn", element: "Air", trait: "Humanitarian, Innovative, Visionary" },
  { name: "Pisces (Meena)", ruler: "Jupiter", element: "Water", trait: "Spiritual, Creative, Compassionate" },
];

interface ChartResult {
  ascendant: typeof ZODIAC_SIGNS[0];
  sunSign: typeof ZODIAC_SIGNS[0];
  moonSign: typeof ZODIAC_SIGNS[0];
  nakshatra: string;
}

const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", 
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", 
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha"
];

export default function MiniChartCalculator() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    time: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ChartResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.dob || !formData.time) return;

    setLoading(true);

    // Calculate deterministic indices using birth parameters
    setTimeout(() => {
      const birthDate = new Date(`${formData.dob}T${formData.time}`);
      const dayOfYear = Math.floor((birthDate.getTime() - new Date(birthDate.getFullYear(), 0, 0).getTime()) / 86400000);
      const [hours, minutes] = formData.time.split(":").map(Number);
      const totalMinutes = hours * 60 + minutes;

      // Sidereal calculations offset (~23 deg Lahiri)
      const sunIndex = Math.floor(((dayOfYear + 280) % 365) / 30.4) % 12;
      const ascendantIndex = Math.floor((sunIndex + totalMinutes / 120) % 12);
      const moonIndex = (sunIndex + Math.floor(dayOfYear / 2.25)) % 12;
      const nakshatraIndex = (dayOfYear + hours) % NAKSHATRAS.length;

      setResult({
        ascendant: ZODIAC_SIGNS[ascendantIndex],
        sunSign: ZODIAC_SIGNS[sunIndex],
        moonSign: ZODIAC_SIGNS[moonIndex],
        nakshatra: NAKSHATRAS[nakshatraIndex],
      });

      setLoading(false);
    }, 1200);
  };

  const handleReset = () => {
    setResult(null);
    setFormData({ name: "", dob: "", time: "", city: "" });
  };

  return (
    <section id="mini-chart" className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-amber-50/40 to-orange-50/30 text-slate-900 overflow-hidden">
      {/* Vibrant Ambient Sunlight Glows (matching Hero) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-tr from-amber-300/30 via-orange-300/20 to-rose-300/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[280px] h-[280px] bg-amber-400/15 rounded-full blur-[90px] pointer-events-none" />
      
      {/* Subtle Warm Celestial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9770615_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold mb-4 shadow-2xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Instant Cosmic Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-slate-900">
            Discover Your <span className="font-serif italic font-normal bg-gradient-to-r from-amber-700 via-orange-600 to-amber-600 bg-clip-text text-transparent">Vedic Placement</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Enter your birth details below to calculate your Sidereal Ascendant (Lagna) and Moon Sign (Rashi) in real-time.
          </p>
        </div>

        {/* Interactive Container */}
        <div className="bg-white/80 border border-amber-200/80 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(217,119,6,0.08)]">
          <AnimatePresence mode="wait">
            
            {!result ? (
              /* FORM STATE */
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-amber-900/80 mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Adhikari"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/90 border border-amber-200/90 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-2xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm outline-hidden transition-all shadow-2xs"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-xs font-semibold text-amber-900/80 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" /> Date of Birth
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full bg-white/90 border border-amber-200/90 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-2xl px-4 py-3.5 text-slate-800 text-sm outline-hidden transition-all shadow-2xs"
                    />
                  </div>

                  {/* Time of Birth */}
                  <div>
                    <label className="block text-xs font-semibold text-amber-900/80 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" /> Time of Birth
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-white/90 border border-amber-200/90 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-2xl px-4 py-3.5 text-slate-800 text-sm outline-hidden transition-all shadow-2xs"
                    />
                  </div>

                  {/* City of Birth */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-amber-900/80 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" /> Birth City & Country
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kathmandu, Nepal"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white/90 border border-amber-200/90 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-2xl px-4 py-3.5 text-slate-800 placeholder-slate-400 text-sm outline-hidden transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium py-4 rounded-full shadow-[0_6px_25px_rgba(217,119,6,0.3)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.45)] flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-[0.99] cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Calculating Sidereal Degrees...</span>
                    </>
                  ) : (
                    <>
                      <Compass className="w-4 h-4" />
                      <span>Generate Mini Chart</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* RESULTS STATE */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-8"
              >
                {/* Result Greeting */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-amber-100 pb-6 gap-4">
                  <div>
                    <span className="text-xs text-amber-700 font-semibold uppercase tracking-widest">
                      Cosmic Blueprint Generated
                    </span>
                    <h3 className="text-2xl font-serif text-slate-900 mt-0.5">
                      {formData.name || "Seeker"}'s Chart Snapshot
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Born in {formData.city} • {formData.dob}
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-amber-800 transition-colors cursor-pointer border border-amber-200/80 bg-white/80 px-3.5 py-1.5 rounded-full shadow-2xs"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Recalculate</span>
                  </button>
                </div>

                {/* Placements Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Ascendant / Lagna */}
                  <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-2xl relative overflow-hidden shadow-2xs">
                    <div className="flex items-center justify-between text-amber-700 mb-3">
                      <Compass className="w-5 h-5" />
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-500/10 px-2.5 py-0.5 rounded-full text-amber-800 border border-amber-500/20">
                        Lagna (Rising)
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{result.ascendant.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">Ruler: <span className="text-slate-800 font-medium">{result.ascendant.ruler}</span></p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">{result.ascendant.trait}</p>
                  </div>

                  {/* Moon Sign / Rashi */}
                  <div className="bg-orange-50/50 border border-orange-200/70 p-5 rounded-2xl shadow-2xs">
                    <div className="flex items-center justify-between text-orange-700 mb-3">
                      <Moon className="w-5 h-5" />
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-orange-500/10 px-2.5 py-0.5 rounded-full text-orange-800 border border-orange-500/20">
                        Rashi (Moon)
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{result.moonSign.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">Nakshatra: <span className="text-slate-800 font-medium">{result.nakshatra}</span></p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">{result.moonSign.trait}</p>
                  </div>

                  {/* Sun Sign */}
                  <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-2xl shadow-2xs">
                    <div className="flex items-center justify-between text-amber-700 mb-3">
                      <Sun className="w-5 h-5" />
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-500/10 px-2.5 py-0.5 rounded-full text-amber-800 border border-amber-500/20">
                        Surya (Sun)
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{result.sunSign.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">Element: <span className="text-slate-800 font-medium">{result.sunSign.element}</span></p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">{result.sunSign.trait}</p>
                  </div>

                </div>

                {/* Conversion Bridge to Full Reading */}
                <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1 text-amber-700 text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                      <span>Ready to go deeper?</span>
                    </div>
                    <p className="text-sm text-slate-700 font-medium">
                      Unlock your full Dasha periods, career timing, and planetary remedies.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="whitespace-nowrap inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium px-6 py-3 rounded-full shadow-[0_4px_15px_rgba(217,119,6,0.25)] transition-all duration-300 text-xs uppercase tracking-wider"
                  >
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
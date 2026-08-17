"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Award,
  ChevronRight,
  Check,
} from "lucide-react";

// --- Types ---
interface KundaliData {
  userName: string;
  dob: string;
  time: string;
  place: string;
  ascendant: string;
  moonSign: string;
  sunSign: string;
  nakshatra: string;
  dasha: string;
}

export default function PersonalKundaliCalculator() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    time: "",
    place: "",
    // Partner (Girl's) details for matchmaking
    partnerName: "",
    partnerDob: "",
    partnerTime: "",
    partnerPlace: "",
  });

  const [mode, setMode] = useState<"single" | "matchmaking">("single");
  const [step, setStep] = useState<"form" | "kundali" | "booking">("form");
  const [loading, setLoading] = useState(false);
  const [generatedKundali, setGeneratedKundali] = useState<KundaliData | null>(null);

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate astronomical Kundali calculation
    setTimeout(() => {
      setGeneratedKundali({
        userName: formData.name || "Seeker",
        dob: formData.dob,
        time: formData.time,
        place: formData.place,
        ascendant: "Taurus (Vrishabha)",
        moonSign: "Cancer (Karka)",
        sunSign: "Leo (Simha)",
        nakshatra: "Pushya (Pada 2)",
        dasha: "Jupiter - Saturn (Vimshottari)",
      });
      setLoading(false);
      setStep("kundali");
    }, 1200);
  };

  const handleReset = () => {
    setStep("form");
    setGeneratedKundali(null);
  };

  // Direct Redirect, Smooth Scroll & Auto-select Dropdown on Contact Form
  const handleBookNow = () => {
    const selectedService = "free-30-min";
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const selectElement = contactSection.querySelector<HTMLSelectElement>("select");
      if (selectElement) {
        selectElement.value = selectedService;
        selectElement.dispatchEvent(new Event("input", { bubbles: true }));
        selectElement.dispatchEvent(new Event("change", { bubbles: true }));
      }
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#contact?service=${selectedService}`;
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#fffdf9] via-[#fef7eb] to-[#fcefdc] text-[#331c04] font-sans overflow-hidden flex flex-col justify-center py-12 px-4 sm:px-8">
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Glowing Ambient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-[#fcd69b]/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f9bc68]/30 rounded-full blur-3xl"
        />

        {/* Floating Star / Sparkle Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2, y: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute rounded-full bg-[#d97706]/20"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + (i * 17) % 80}%`,
              width: `${6 + (i % 3) * 4}px`,
              height: `${6 + (i % 3) * 4}px`,
            }}
          />
        ))}

        {/* Subtle Watermark Mandala */}
        <div
          className="absolute inset-0 opacity-[0.04] bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'%3E%3Ccircle cx='250' cy='250' r='200' fill='none' stroke='%3Crect%' stroke-width='2'/%3E%3Cpath d='M250,50 L250,450 M50,250 L450,250 M108,108 L392,392 M108,392 L392,108' stroke='%3Crect%' stroke-width='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Narrative & Branding */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#f3d3a7] text-[#92400e] text-xs font-semibold shadow-sm backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Authentic Vedic Chart Engine</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-serif font-medium leading-tight text-[#451a03]"
            >
              {step === "form" && (mode === "single" ? "Personal Birth Chart" : "Matchmaking Compatibility")}
              {step === "kundali" && "Your Kundali Blueprint"}
              {step === "booking" && "Reserve Free Session"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#78350f]/80 text-sm leading-relaxed max-w-md"
            >
              {step === "form" &&
                "Generate accurate astronomical Sidereal charts using exact coordinates and birth timing. Pure mathematical accuracy with zero unnecessary forms."}
              {step === "kundali" &&
                "Your birth details have been processed to calculate Lagna lord position, Nakshatra quarter, and current Vimshottari dasha period."}
              {step === "booking" &&
                "Lock in your complimentary 30-minute consultation window to discuss chart remedies, career directions, and timing."}
            </motion.p>

            {/* Mode Switcher Buttons */}
            {step === "form" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 pt-2"
              >
                <button
                  type="button"
                  onClick={() => setMode("single")}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    mode === "single"
                      ? "bg-[#b45309] text-white shadow-md shadow-amber-900/10"
                      : "bg-white/70 text-[#78350f] hover:bg-white border border-[#f5d0a1]"
                  }`}
                >
                  Personal Kundali
                </button>
                <button
                  type="button"
                  onClick={() => setMode("matchmaking")}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    mode === "matchmaking"
                      ? "bg-[#b45309] text-white shadow-md shadow-amber-900/10"
                      : "bg-white/70 text-[#78350f] hover:bg-white border border-[#f5d0a1]"
                  }`}
                >
                  Guna Matchmaking
                </button>
              </motion.div>
            )}

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#f3d0a2] grid grid-cols-2 gap-4 text-xs text-[#92400e]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d97706]" />
                <span>Lahiri Ayanamsha</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d97706]" />
                <span>Precision Astro Degrees</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Form / Ticket Card */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-9 shadow-xl shadow-amber-950/5 border-2 border-[#fcdfa6]"
            >
              {/* Card Decorative Cutouts */}
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-7 h-7 bg-[#fffdf9] border-r-2 border-[#fcdfa6] rounded-full" />
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-7 h-7 bg-[#fffdf9] border-l-2 border-[#fcdfa6] rounded-full" />

              <AnimatePresence mode="wait">
                
                {/* STEP 1: INPUT FORM */}
                {step === "form" && (
                  <motion.form
                    key="form-step"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h2 className="text-xl font-serif font-bold text-center text-[#581c87] text-[#451a03]">
                      {mode === "single" ? "Enter Birth Details" : "Enter Both Birth Details"}
                    </h2>

                    {/* BOY / SINGLE PERSON DETAILS */}
                    <div className="space-y-4">
                      {mode === "matchmaking" && (
                        <div className="text-xs font-bold uppercase tracking-wider text-[#b45309] border-b border-[#fde68a] pb-1">
                          Boy's Information
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-semibold text-[#78350f] mb-1">
                            {mode === "matchmaking" ? "Boy's Name" : "Full Name"}
                          </label>
                          <div className="relative border-b-2 border-[#f59e0b]/40 focus-within:border-[#d97706] transition-colors">
                            <input
                              type="text"
                              required
                              placeholder="Full name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-transparent py-2 text-sm text-[#451a03] placeholder-[#d97706]/40 outline-none"
                            />
                            <User className="absolute right-1 top-2.5 w-4 h-4 text-[#d97706]/50" />
                          </div>
                        </div>

                        {/* Date of Birth */}
                        <div>
                          <label className="block text-xs font-semibold text-[#78350f] mb-1">
                            {mode === "matchmaking" ? "Boy's Date of Birth" : "Date of Birth"}
                          </label>
                          <div className="relative border-b-2 border-[#f59e0b]/40 focus-within:border-[#d97706] transition-colors">
                            <input
                              type="date"
                              required
                              value={formData.dob}
                              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                              className="w-full bg-transparent py-2 text-sm text-[#451a03] outline-none"
                            />
                            <Calendar className="absolute right-1 top-2.5 w-4 h-4 text-[#d97706]/50 pointer-events-none" />
                          </div>
                        </div>

                        {/* Time of Birth */}
                        <div>
                          <label className="block text-xs font-semibold text-[#78350f] mb-1">
                            {mode === "matchmaking" ? "Boy's Time of Birth" : "Time of Birth"}
                          </label>
                          <div className="relative border-b-2 border-[#f59e0b]/40 focus-within:border-[#d97706] transition-colors">
                            <input
                              type="time"
                              required
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                              className="w-full bg-transparent py-2 text-sm text-[#451a03] outline-none"
                            />
                            <Clock className="absolute right-1 top-2.5 w-4 h-4 text-[#d97706]/50 pointer-events-none" />
                          </div>
                        </div>

                        {/* Birth Place */}
                        <div>
                          <label className="block text-xs font-semibold text-[#78350f] mb-1">
                            {mode === "matchmaking" ? "Boy's Birth City" : "Birth City / Location"}
                          </label>
                          <div className="relative border-b-2 border-[#f59e0b]/40 focus-within:border-[#d97706] transition-colors">
                            <input
                              type="text"
                              required
                              placeholder="City, Country"
                              value={formData.place}
                              onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                              className="w-full bg-transparent py-2 text-sm text-[#451a03] placeholder-[#d97706]/40 outline-none"
                            />
                            <MapPin className="absolute right-1 top-2.5 w-4 h-4 text-[#d97706]/50" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* GIRL'S DETAILS (MATCHMAKING MODE) */}
                    {mode === "matchmaking" && (
                      <div className="space-y-4 pt-3 border-t border-[#fde68a]">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#b45309] border-b border-[#fde68a] pb-1">
                          Girl's Information
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Girl's Name */}
                          <div>
                            <label className="block text-xs font-semibold text-[#78350f] mb-1">Girl's Name</label>
                            <div className="relative border-b-2 border-[#f59e0b]/40 focus-within:border-[#d97706] transition-colors">
                              <input
                                type="text"
                                required
                                placeholder="Full name"
                                value={formData.partnerName}
                                onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                                className="w-full bg-transparent py-2 text-sm text-[#451a03] placeholder-[#d97706]/40 outline-none"
                              />
                              <User className="absolute right-1 top-2.5 w-4 h-4 text-[#d97706]/50" />
                            </div>
                          </div>

                          {/* Girl's DOB */}
                          <div>
                            <label className="block text-xs font-semibold text-[#78350f] mb-1">Girl's Date of Birth</label>
                            <div className="relative border-b-2 border-[#f59e0b]/40 focus-within:border-[#d97706] transition-colors">
                              <input
                                type="date"
                                required
                                value={formData.partnerDob}
                                onChange={(e) => setFormData({ ...formData, partnerDob: e.target.value })}
                                className="w-full bg-transparent py-2 text-sm text-[#451a03] outline-none"
                              />
                              <Calendar className="absolute right-1 top-2.5 w-4 h-4 text-[#d97706]/50 pointer-events-none" />
                            </div>
                          </div>

                          {/* Girl's Time */}
                          <div>
                            <label className="block text-xs font-semibold text-[#78350f] mb-1">Girl's Time of Birth</label>
                            <div className="relative border-b-2 border-[#f59e0b]/40 focus-within:border-[#d97706] transition-colors">
                              <input
                                type="time"
                                required
                                value={formData.partnerTime}
                                onChange={(e) => setFormData({ ...formData, partnerTime: e.target.value })}
                                className="w-full bg-transparent py-2 text-sm text-[#451a03] outline-none"
                              />
                              <Clock className="absolute right-1 top-2.5 w-4 h-4 text-[#d97706]/50 pointer-events-none" />
                            </div>
                          </div>

                          {/* Girl's Place */}
                          <div>
                            <label className="block text-xs font-semibold text-[#78350f] mb-1">Girl's Birth City</label>
                            <div className="relative border-b-2 border-[#f59e0b]/40 focus-within:border-[#d97706] transition-colors">
                              <input
                                type="text"
                                required
                                placeholder="City, Country"
                                value={formData.partnerPlace}
                                onChange={(e) => setFormData({ ...formData, partnerPlace: e.target.value })}
                                className="w-full bg-transparent py-2 text-sm text-[#451a03] placeholder-[#d97706]/40 outline-none"
                              />
                              <MapPin className="absolute right-1 top-2.5 w-4 h-4 text-[#d97706]/50" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-6 bg-gradient-to-r from-[#d97706] via-[#ea580c] to-[#d97706] hover:brightness-105 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-orange-950/10 flex items-center justify-center gap-2 transition-all cursor-pointer text-xs tracking-wider uppercase"
                    >
                      {loading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Calculating Sidereal Chart...</span>
                        </>
                      ) : (
                        <span>Generate Kundali Now</span>
                      )}
                    </button>
                  </motion.form>
                )}

                {/* STEP 2: GENERATED KUNDALI DISPLAY */}
                {step === "kundali" && generatedKundali && (
                  <motion.div
                    key="kundali-step"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between border-b border-[#fde68a] pb-4">
                      <div>
                        <span className="text-[10px] font-bold text-[#b45309] uppercase tracking-widest bg-[#fef3c7] px-2.5 py-1 rounded-full border border-[#fde68a]">
                          Vedic Reference Chart
                        </span>
                        <h3 className="text-xl font-serif font-bold text-[#451a03] mt-1.5">
                          {generatedKundali.userName}'s Kundali
                        </h3>
                        <p className="text-xs text-[#78350f]/80">
                          {generatedKundali.place} • {generatedKundali.dob} @ {generatedKundali.time}
                        </p>
                      </div>
                      <button
                        onClick={handleReset}
                        className="text-xs text-[#b45309] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Re-enter
                      </button>
                    </div>

                    {/* Chart Visualization */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                      <div className="sm:col-span-5 flex flex-col items-center bg-[#fffbf5] p-4 rounded-2xl border border-[#fde68a]">
                        <span className="text-[10px] font-bold text-[#b45309] uppercase tracking-widest mb-2">
                          Lagna Kundali (D1)
                        </span>
                        <div className="w-36 h-36 relative flex items-center justify-center">
                          <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#d97706] fill-none stroke-[1.5]">
                            <rect x="10" y="10" width="180" height="180" />
                            <polygon points="100,10 190,100 100,190 10,100" />
                            <line x1="10" y1="10" x2="190" y2="190" />
                            <line x1="190" y1="10" x2="10" y2="190" />
                          </svg>
                          <div className="absolute text-center">
                            <span className="text-xs font-bold text-[#b45309] block">Lagna</span>
                            <span className="text-[10px] text-[#78350f] font-semibold">House 1</span>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-7 space-y-2.5 text-xs">
                        <div className="bg-[#fffbf5] p-3 rounded-xl border border-[#fde68a]">
                          <div className="text-[#b45309] font-semibold">Ascendant (Lagna)</div>
                          <div className="text-sm font-bold text-[#451a03]">{generatedKundali.ascendant}</div>
                        </div>

                        <div className="bg-[#fffbf5] p-3 rounded-xl border border-[#fde68a]">
                          <div className="text-[#b45309] font-semibold">Moon Sign & Nakshatra</div>
                          <div className="text-sm font-bold text-[#451a03]">
                            {generatedKundali.moonSign} • {generatedKundali.nakshatra}
                          </div>
                        </div>

                        <div className="bg-[#fffbf5] p-3 rounded-xl border border-[#fde68a]">
                          <div className="text-[#b45309] font-semibold">Current Vimshottari Dasha</div>
                          <div className="text-sm font-bold text-[#451a03]">{generatedKundali.dasha}</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#fde68a] flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-[#78350f]/80 text-center sm:text-left">
                        Need a detailed interpretation of career, marriage timing, or remedies?
                      </p>
                      <button
                        onClick={() => setStep("booking")}
                        className="w-full sm:w-auto bg-gradient-to-r from-[#d97706] to-[#ea580c] hover:brightness-105 text-white font-semibold px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer text-xs uppercase tracking-wide"
                      >
                        <span>Proceed to Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: RESERVE CONSULTATION & EXCLUSIVE FREE 30 MIN BOOK NOW */}
                {step === "booking" && (
                  <motion.div
                    key="booking-step"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#fef3c7] rounded-full text-[#b45309] mb-1 border border-[#fde68a]">
                      <Award className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#451a03]">
                        Reserve Free Consultation
                      </h3>
                      <p className="text-xs text-[#78350f]/80 mt-1 max-w-md mx-auto">
                        Your chart for <span className="font-semibold text-[#451a03]">{formData.name || "Seeker"}</span> is complete. Lock in your 30-minute session below.
                      </p>
                    </div>

                    {/* Single Free 30 Min Card */}
                    <div className="p-5 rounded-2xl border-2 border-[#d97706] bg-[#fffbf5] shadow-sm text-left relative">
                      <div className="absolute top-4 right-4 text-[#b45309] flex items-center gap-1 bg-[#fef3c7] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#fde68a]">
                        <Check className="w-3 h-3" /> Selected
                      </div>
                      <div className="text-[10px] font-bold text-[#b45309] uppercase tracking-wider">
                        Complimentary Session
                      </div>
                      <div className="text-lg font-bold text-[#451a03] mt-0.5">Free 30 Mins Consultation</div>
                      <p className="text-xs text-[#78350f]/80 mt-1 leading-relaxed">
                        1-on-1 introductory consultation to analyze your primary chart, planetary periods, and tailored Vedic remedies.
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-[#fde68a] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep("kundali")}
                        className="text-xs font-semibold text-[#b45309] hover:underline cursor-pointer"
                      >
                        ← Back to Chart
                      </button>
                      
                      {/* Book Now Button */}
                      <button
                        type="button"
                        onClick={handleBookNow}
                        className="bg-gradient-to-r from-[#d97706] via-[#ea580c] to-[#d97706] hover:brightness-105 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all"
                      >
                        <span>Book Now</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
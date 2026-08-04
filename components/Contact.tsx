"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Clock, Sparkles } from "lucide-react";

// --- Official SVG Brand Logos ---
const WhatsappLogo = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.555 4.109 1.525 5.836L0 24l6.304-1.503A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.817 0-3.535-.483-5.023-1.328l-.36-.203-3.733.89.91-3.636-.226-.36A9.956 9.956 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);

const ViberLogo = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M11.986 0C5.485 0 0 5.176 0 11.55c0 3.398 1.554 6.44 4.015 8.528V24l3.874-2.128c1.282.38 2.652.593 4.097.593 6.501 0 12-5.176 12-11.551S18.487 0 11.986 0zm.014 20.443c-1.293 0-2.527-.202-3.673-.574l-.263-.085-2.298 1.262.33-2.213-.198-.21A9.458 9.458 0 012 11.55C2 6.284 6.478 2 12 2s10 4.284 10 9.55-4.478 9.893-10 9.893zm4.773-6.52c-.282-.246-.967-.487-1.352-.164-.326.272-.511.572-.738.525-.226-.048-1.283-.497-2.164-1.352-.881-.855-1.341-1.882-1.39-2.102-.048-.22.259-.4.538-.718.32-.375.11-.941-.096-1.282-.206-.341-.951-2.222-1.332-2.193-.38.03-.787.218-.992.42-.206.202-.572.637-.572 1.402 0 .765.51 1.761 1.09 2.532 1.34 1.785 3.327 3.322 5.097 3.829 1.488.426 2.052.28 2.457.19.405-.09.99-.444 1.157-.932.167-.487.167-.899.096-.991-.07-.092-.416-.273-.7-.518z"/>
  </svg>
);

const MessengerLogo = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.238 0 0 4.97 0 11.103c0 3.498 1.696 6.61 4.35 8.653V24l4.088-2.243c1.118.309 2.308.476 3.562.476 6.762 0 12-4.97 12-11.103C24 4.97 18.762 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259 6.556-6.963 3.13 3.259 5.889-3.259-6.556 6.963z"/>
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ 
    name: "", 
    email: "", 
    service: "Free 30-Min Discovery Session", 
    isFreeSession: true,
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: formState.isFreeSession 
            ? "Your free 30-minute session request is transmitted! Suman will connect with you shortly to finalize your time slot."
            : "Message transmitted successfully! Suman will connect with you shortly.",
        });
        setFormState({ name: "", email: "", service: "Free 30-Min Discovery Session", isFreeSession: true, message: "" });
      } else {
        throw new Error(result.error || "Failed to transmit message.");
      }
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "An error occurred while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 via-amber-50/40 to-orange-50/30 text-slate-900 overflow-hidden border-t border-amber-200/60"
    >
      {/* Structural Ambient Glow Effects */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-300/20 via-orange-300/15 to-rose-200/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d9770612_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-700 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
            Initiate Alignment
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-slate-900">
            Connect & Schedule
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
            Book a complimentary 30-minute introductory consultation or reach out directly on your preferred channel.
          </p>
        </div>

        {/* Free Session Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-300/80 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Clock className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                  Complementary Offer
                </span>
                <Sparkles className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-slate-900">
                Book a Free 30-Minute Alignment Session
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                First-time visitors can claim a 30-minute initial chart overview or Vastu assessment with zero obligation.
              </p>
            </div>
          </div>
          <a
            href="#booking-form"
            onClick={() => setFormState(prev => ({ ...prev, service: "Free 30-Min Discovery Session", isFreeSession: true }))}
            className="shrink-0 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Claim Free Session
          </a>
        </motion.div>

        {/* Content Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* 1. HIGHLIGHTED & COMPACT INSTANT MESSAGING (TOP) */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-200/20 border-2 border-amber-400/60 backdrop-blur-md shadow-sm relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold tracking-wider uppercase text-amber-900 font-sans flex items-center gap-1.5">
                  <span>Fastest Response</span>
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white px-2 py-0.5 rounded-full shadow-2xs">
                  Instant Messaging
                </span>
              </div>

              {/* Compact 3-Column Quick Links */}
              <div className="grid grid-cols-3 gap-2">
                
                {/* Official WhatsApp */}
                <a
                  href="https://wa.me/9779841692527?text=Namaste%20Suman%20ji,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/90 hover:bg-[#25D366] text-slate-800 hover:text-white border border-amber-200/80 hover:border-[#25D366] transition-all shadow-2xs group"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#25D366] group-hover:bg-white text-white group-hover:text-[#25D366] flex items-center justify-center mb-1 transition-colors">
                    <WhatsappLogo />
                  </span>
                  <span className="text-[11px] font-semibold">WhatsApp</span>
                </a>

                {/* Official Viber */}
                <a
                  href="viber://chat?number=%2B9779841692527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/90 hover:bg-[#7360F2] text-slate-800 hover:text-white border border-amber-200/80 hover:border-[#7360F2] transition-all shadow-2xs group"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#7360F2] group-hover:bg-white text-white group-hover:text-[#7360F2] flex items-center justify-center mb-1 transition-colors">
                    <ViberLogo />
                  </span>
                  <span className="text-[11px] font-semibold">Viber</span>
                </a>

                {/* Official Messenger */}
                <a
                  href="https://m.me/suman.adhikary.92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white/90 hover:bg-[#0084FF] text-slate-800 hover:text-white border border-amber-200/80 hover:border-[#0084FF] transition-all shadow-2xs group"
                >
                  <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0084FF] via-[#A033FF] to-[#FF5280] group-hover:bg-none group-hover:bg-white text-white group-hover:text-[#0084FF] flex items-center justify-center mb-1 transition-colors">
                    <MessengerLogo />
                  </span>
                  <span className="text-[11px] font-semibold">Messenger</span>
                </a>

              </div>
            </div>

            {/* 2. DIRECT CONTACT DETAILS (BELOW MESSAGING) */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-sans mb-1 px-1">
                Direct Contact
              </h3>

              {/* Phone Entry */}
              <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 backdrop-blur-md flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0">
                  <Phone className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-sans mb-0.5">Phone Call</h4>
                  <p className="text-sm font-medium text-slate-900 hover:text-amber-700 transition-colors">
                    <a href="tel:+9779841692527">+977 9841692527</a>
                  </p>
                </div>
              </div>

              {/* Email Entry */}
              <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 backdrop-blur-md flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0">
                  <Mail className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-sans mb-0.5">Email Address</h4>
                  <p className="text-sm font-medium text-slate-900 hover:text-amber-700 transition-colors">
                    <a href="mailto:mastermindsu@gmail.com">mastermindsu@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Location Entry */}
              <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 backdrop-blur-md flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0">
                  <MapPin className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-sans mb-0.5">Studio Location</h4>
                  <p className="text-sm font-medium text-slate-900">Bhaktapur, Nepal</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Booking Request Form */}
          <motion.div 
            id="booking-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/80 border border-amber-200/80 backdrop-blur-md shadow-2xs"
          >
            <div className="flex items-center gap-2 mb-6 text-amber-700 text-sm font-semibold">
              <MessageSquare className="w-4 h-4" />
              <span>Schedule or Inquire</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wide text-slate-600 uppercase">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="e.g. Liam Sharma" 
                    className="w-full bg-white/90 border border-amber-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wide text-slate-600 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="name@domain.com" 
                    className="w-full bg-white/90 border border-amber-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Service Dynamic Selector Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wide text-slate-600 uppercase">Select Session Type</label>
                <div className="relative">
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({
                      ...formState, 
                      service: e.target.value,
                      isFreeSession: e.target.value === "Free 30-Min Discovery Session"
                    })}
                    className="w-full bg-white/90 border border-amber-200/90 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none cursor-pointer"
                  >
                    <option value="Free 30-Min Discovery Session">🎁 Free 30-Minute Discovery Session (First Time Clients)</option>
                    <option value="Birth Chart Reading">Birth Chart Reading (Jyotish Analysis)</option>
                    <option value="Vastu Consultation">Vastu Spatial Consultation</option>
                    <option value="Marriage Compatibility Analysis">Marriage & Synastry Matching</option>
                    <option value="Career & Wealth Guidance">Career Timing Consultation</option>
                    <option value="One-on-One Mentorship">Academic One-on-One Mentorship</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500 text-xs">▼</div>
                </div>
              </div>

              {/* Context or Notes Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wide text-slate-600 uppercase">Birth Parameters / Preferred Session Time</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Provide your date/time/place of birth or specify preferred consultation timings..." 
                  className="w-full bg-white/90 border border-amber-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Status Alert Message */}
              {status.type && (
                <div
                  className={`flex items-center gap-2 p-3.5 rounded-xl text-xs sm:text-sm ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:from-slate-300 disabled:to-slate-300 text-white disabled:text-slate-500 font-semibold px-6 py-3.5 rounded-xl shadow-[0_6px_25px_rgba(217,119,6,0.25)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.35)] transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Transmitting Fields..." : formState.isFreeSession ? "Book Free 30-Min Session" : "Transmit Message"}</span>
                {!isSubmitting && <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[1.8]" />}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
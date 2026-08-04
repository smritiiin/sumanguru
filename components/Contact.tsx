"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

// --- Official SVG Brand Logos ---
const WhatsappLogo = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.555 4.109 1.525 5.836L0 24l6.304-1.503A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.817 0-3.535-.483-5.023-1.328l-.36-.203-3.733.89.91-3.636-.226-.36A9.956 9.956 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);

const ViberLogo = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M11.986 0C5.485 0 0 5.176 0 11.55c0 3.398 1.554 6.44 4.015 8.528V24l3.874-2.128c1.282.38 2.652.593 4.097.593 6.501 0 12-5.176 12-11.551S18.487 0 11.986 0zm.014 20.443c-1.293 0-2.527-.202-3.673-.574l-.263-.085-2.298 1.262.33-2.213-.198-.21A9.458 9.458 0 012 11.55C2 6.284 6.478 2 12 2s10 4.284 10 9.55-4.478 9.893-10 9.893zm4.773-6.52c-.282-.246-.967-.487-1.352-.164-.326.272-.511.572-.738.525-.226-.048-1.283-.497-2.164-1.352-.881-.855-1.341-1.882-1.39-2.102-.048-.22.259-.4.538-.718.32-.375.11-.941-.096-1.282-.206-.341-.951-2.222-1.332-2.193-.38.03-.787.218-.992.42-.206.202-.572.637-.572 1.402 0 .765.51 1.761 1.09 2.532 1.34 1.785 3.327 3.322 5.097 3.829 1.488.426 2.052.28 2.457.19.405-.09.99-.444 1.157-.932.167-.487.167-.899.096-.991-.07-.092-.416-.273-.7-.518z"/>
  </svg>
);

const MessengerLogo = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.238 0 0 4.97 0 11.103c0 3.498 1.696 6.61 4.35 8.653V24l4.088-2.243c1.118.309 2.308.476 3.562.476 6.762 0 12-4.97 12-11.103C24 4.97 18.762 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259 6.556-6.963 3.13 3.259 5.889-3.259-6.556 6.963z"/>
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ 
    name: "", 
    email: "", 
    phone: "",
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
            ? "Your free 30-minute session request is sent! Suman will connect with you shortly."
            : "Message transmitted successfully! Suman will connect with you shortly.",
        });
        setFormState({ name: "", email: "", phone: "", service: "Free 30-Min Discovery Session", isFreeSession: true, message: "" });
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
      className="relative py-12 md:py-16 bg-gradient-to-b from-slate-50 via-amber-50/40 to-orange-50/30 text-slate-900 overflow-hidden border-t border-amber-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase block mb-1">
            Initiate Alignment
          </span>
          <h2 className="text-2xl sm:text-4xl font-light font-serif text-slate-900">
            Connect & Schedule
          </h2>
        </div>

        {/* 30/70 Grid Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column (30%) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            
            {/* Quick Messaging */}
            <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 backdrop-blur-md shadow-2xs">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900">Instant Messaging</span>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-500 text-white px-1.5 py-0.5 rounded-full">Fast Response</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                <a
                  href="https://wa.me/9779841692527?text=Namaste%20Suman%20ji,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 hover:bg-[#25D366] text-slate-800 hover:text-white border border-slate-200/80 transition-all group"
                >
                  <span className="w-5 h-5 rounded-md bg-[#25D366] group-hover:bg-white text-white group-hover:text-[#25D366] flex items-center justify-center mb-0.5">
                    <WhatsappLogo />
                  </span>
                  <span className="text-[10px] font-medium">WhatsApp</span>
                </a>

                <a
                  href="viber://chat?number=%2B9779841692527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 hover:bg-[#7360F2] text-slate-800 hover:text-white border border-slate-200/80 transition-all group"
                >
                  <span className="w-5 h-5 rounded-md bg-[#7360F2] group-hover:bg-white text-white group-hover:text-[#7360F2] flex items-center justify-center mb-0.5">
                    <ViberLogo />
                  </span>
                  <span className="text-[10px] font-medium">Viber</span>
                </a>

                <a
                  href="https://m.me/suman.adhikary.92"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 hover:bg-[#0084FF] text-slate-800 hover:text-white border border-slate-200/80 transition-all group"
                >
                  <span className="w-5 h-5 rounded-md bg-[#0084FF] group-hover:bg-white text-white group-hover:text-[#0084FF] flex items-center justify-center mb-0.5">
                    <MessengerLogo />
                  </span>
                  <span className="text-[10px] font-medium">Messenger</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="p-4 rounded-2xl bg-white/80 border border-amber-200/80 backdrop-blur-md shadow-2xs space-y-2.5 overflow-hidden">
              <a 
                href="tel:+9779841692527" 
                className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-amber-50/50 transition-colors min-w-0"
              >
                <div className="w-7 h-7 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] uppercase font-semibold text-slate-400 leading-none mb-0.5">Phone</div>
                  <div className="text-xs font-medium text-slate-800 truncate leading-tight">+977 9841692527</div>
                </div>
              </a>

              <a 
                href="mailto:mastermindsu@gmail.com" 
                className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-amber-50/50 transition-colors min-w-0"
              >
                <div className="w-7 h-7 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] uppercase font-semibold text-slate-400 leading-none mb-0.5">Email</div>
                  <div className="text-xs font-medium text-slate-800 truncate leading-tight">mastermindsu@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-1.5 min-w-0">
                <div className="w-7 h-7 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] uppercase font-semibold text-slate-400 leading-none mb-0.5">Location</div>
                  <div className="text-xs font-medium text-slate-800 truncate leading-tight">Bhaktapur, Nepal</div>
                </div>
              </div>
            </div>

          </div>

          {/* Form Column (70%) */}
          <motion.div 
            id="booking-form"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-white/80 border border-amber-200/80 backdrop-blur-md shadow-2xs"
          >
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-amber-100">
              <div className="flex items-center gap-2 text-slate-900 font-medium text-sm sm:text-base">
                <MessageSquare className="w-4 h-4 text-amber-600" />
                <span>Schedule Consultation</span>
              </div>
              
              <button
                type="button"
                onClick={() => setFormState(prev => ({ ...prev, service: "Free 30-Min Discovery Session", isFreeSession: true }))}
                className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-800 bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300/80 px-3 py-1 rounded-full transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Claim Free 30-Min Session</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-500 uppercase">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="e.g. Liam Sharma" 
                  className="w-full bg-white border border-amber-200/80 rounded-lg px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="name@domain.com" 
                    className="w-full bg-white border border-amber-200/80 rounded-lg px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    placeholder="+977 98XXXXXXXX" 
                    className="w-full bg-white border border-amber-200/80 rounded-lg px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-500 uppercase">Session Type</label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({
                    ...formState, 
                    service: e.target.value,
                    isFreeSession: e.target.value === "Free 30-Min Discovery Session"
                  })}
                  className="w-full bg-white border border-amber-200/80 rounded-lg px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 cursor-pointer"
                >
                  <option value="Free 30-Min Discovery Session">🎁 Free 30-Minute Discovery Session</option>
                  <option value="Birth Chart Reading">Birth Chart Reading (Jyotish Analysis)</option>
                  <option value="Vastu Consultation">Vastu Spatial Consultation</option>
                  <option value="Vedic Karmakanda">Vedic Karmakanda & Rituals</option>
                  <option value="Marriage Compatibility Analysis">Marriage & Synastry Matching</option>
                  <option value="One-on-One Mentorship">Academic One-on-One Mentorship</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-500 uppercase">Birth Details / Notes</label>
                <textarea 
                  rows={3}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Include date, time, place of birth or preferred appointment timings..." 
                  className="w-full bg-white border border-amber-200/80 rounded-lg px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
                />
              </div>

              {status.type && (
                <div
                  className={`flex items-center gap-2 p-2.5 rounded-lg text-xs ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:from-slate-300 disabled:to-slate-300 text-white disabled:text-slate-500 font-semibold text-xs py-2.5 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <span>{isSubmitting ? "Transmitting..." : formState.isFreeSession ? "Book Free 30-Min Session" : "Transmit Message"}</span>
                {!isSubmitting && <Send className="w-3.5 h-3.5 stroke-[2]" />}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
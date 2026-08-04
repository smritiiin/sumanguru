"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", service: "Birth Chart Reading", message: "" });
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
          message: "Message transmitted successfully! Suman will connect with you shortly.",
        });
        setFormState({ name: "", email: "", service: "Birth Chart Reading", message: "" });
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
      {/* Structural Corner Glow Effect */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-300/20 via-orange-300/15 to-rose-200/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Warm Celestial Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9770612_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-amber-700 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
            Initiate Alignment
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-slate-900">
            Connect & Schedule
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
            Reach out to schedule private readings, geometric spatial consultations, or tailored academic instruction.
          </p>
        </div>

        {/* Responsive Content Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side Column: Direct Contact Info Blocks */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Phone Entry */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/70 border border-amber-200/80 backdrop-blur-md flex items-start gap-4 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0 shadow-xs">
                <Phone className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-sans mb-1">Direct Calling</h3>
                <p className="text-sm font-medium text-slate-900 tracking-wide hover:text-amber-700 transition-colors">
                  <a href="tel:+9779841692527">+977 9841692527</a>
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Available Mon - Sat (10 AM - 6 PM)</p>
              </div>
            </motion.div>

            {/* Email Entry */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="p-6 rounded-2xl bg-white/70 border border-amber-200/80 backdrop-blur-md flex items-start gap-4 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0 shadow-xs">
                <Mail className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-sans mb-1">Electronic Mail</h3>
                <p className="text-sm font-medium text-slate-900 tracking-wide hover:text-amber-700 transition-colors">
                  <a href="mailto:mastermindsu@gmail.com">mastermindsu@gmail.com</a>
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Response timeframe within 24 hours</p>
              </div>
            </motion.div>

            {/* Address Entry */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-white/70 border border-amber-200/80 backdrop-blur-md flex items-start gap-4 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0 shadow-xs">
                <MapPin className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-sans mb-1">Consultation Studio</h3>
                <p className="text-sm font-medium text-slate-900">Bhaktapur, Nepal</p>
                <p className="text-[11px] text-slate-500 mt-0.5">In-person visits strictly by appointment only</p>
              </div>
            </motion.div>

          </div>

          {/* Right Side Column: Modern Booking Request Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/80 border border-amber-200/80 backdrop-blur-md shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6 text-amber-700 text-sm font-semibold">
              <MessageSquare className="w-4 h-4" />
              <span>Send an Inquiry Request</span>
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
                    className="w-full bg-white/90 border border-amber-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
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
                    className="w-full bg-white/90 border border-amber-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Service Dynamic Selector Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wide text-slate-600 uppercase">Select Target Alignment Focus</label>
                <div className="relative">
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({...formState, service: e.target.value})}
                    className="w-full bg-white/90 border border-amber-200/90 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none cursor-pointer"
                  >
                    <option value="Birth Chart Reading">Birth Chart Reading (Jyotish Analysis)</option>
                    <option value="Vastu Consultation">Vastu Spatial Consultation</option>
                    <option value="Marriage Compatibility Analysis">Marriage & Synastry Matching</option>
                    <option value="Career & Wealth Guidance">Career Timing Consultation</option>
                    <option value="One-on-One Mentorship">Academic One-on-One Mentorship</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500 text-xs">▼</div>
                </div>
              </div>

              {/* Message Block text-area */}
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wide text-slate-600 uppercase">Context or Birth Parameters</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Provide any specific questions, preferred scheduling times, or birth coordinates (date, time, location)..." 
                  className="w-full bg-white/90 border border-amber-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none leading-relaxed"
                />
              </div>

              {/* Feedback Status Alert Message */}
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

              {/* Action Button Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:from-slate-300 disabled:to-slate-300 text-white disabled:text-slate-500 font-medium px-6 py-3.5 rounded-xl shadow-[0_6px_25px_rgba(217,119,6,0.25)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.35)] transition-all duration-300 pointer-events-auto cursor-pointer disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Transmitting Fields..." : "Transmit Message"}</span>
                {!isSubmitting && <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[1.8]" />}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
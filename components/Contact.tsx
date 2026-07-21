"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", service: "Birth Chart Reading", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message queued successfully! Suman will connect with you shortly.");
      setFormState({ name: "", email: "", service: "Birth Chart Reading", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#0A0B10] text-slate-200 overflow-hidden border-t border-slate-900/60"
    >
      {/* Structural Corner Glow Effect */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-amber-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
            Initiate Alignment
          </span>
          <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-white">
            Connect & Schedule
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
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
              className="p-6 rounded-2xl bg-slate-900/30 border border-slate-900/80 backdrop-blur-sm flex items-start gap-4 hover:border-slate-800/80 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-amber-400 shrink-0 border border-slate-800/60">
                <Phone className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-slate-500 font-sans mb-1">Direct Calling</h3>
                <p className="text-sm font-medium text-slate-200 tracking-wide hover:text-white transition-colors">
                  <a href="tel:+9779800000000">+977 9800000000</a>
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
              className="p-6 rounded-2xl bg-slate-900/30 border border-slate-900/80 backdrop-blur-sm flex items-start gap-4 hover:border-slate-800/80 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-amber-400 shrink-0 border border-slate-800/60">
                <Mail className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-slate-500 font-sans mb-1">Electronic Mail</h3>
                <p className="text-sm font-medium text-slate-200 tracking-wide hover:text-white transition-colors">
                  <a href="mailto:suman@gmail.com">suman@gmail.com</a>
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
              className="p-6 rounded-2xl bg-slate-900/30 border border-slate-900/80 backdrop-blur-sm flex items-start gap-4 hover:border-slate-800/80 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-amber-400 shrink-0 border border-slate-800/60">
                <MapPin className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-slate-500 font-sans mb-1">Consultation Studio</h3>
                <p className="text-sm font-medium text-slate-200">Bhaktapur, Nepal</p>
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
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-900/20 border border-slate-900/80 backdrop-blur-md"
          >
            <div className="flex items-center gap-2 mb-6 text-amber-400/90 text-sm font-medium">
              <MessageSquare className="w-4 h-4" />
              <span>Send an Inquiry Request</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-medium tracking-wide text-slate-400 uppercase">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="e.g. Liam Sharma" 
                    className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-350"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-medium tracking-wide text-slate-400 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="name@domain.com" 
                    className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-350"
                  />
                </div>
              </div>

              {/* Service Dynamic Selector Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-medium tracking-wide text-slate-400 uppercase">Select Target Alignment Focus</label>
                <div className="relative">
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({...formState, service: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500/50 appearance-none cursor-pointer"
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
                <label className="text-xs font-medium tracking-wide text-slate-400 uppercase">Context or Birth Parameters</label>
                <textarea 
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Provide any specific questions, preferred scheduling times, or birth coordinates (date, time, location)..." 
                  className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all duration-350 resize-none leading-relaxed"
                />
              </div>

              {/* Action Button Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:from-slate-800 disabled:to-slate-800 text-slate-950 disabled:text-slate-500 font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-amber-950/10 transition-all duration-300 pointer-events-auto cursor-pointer disabled:cursor-not-allowed"
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
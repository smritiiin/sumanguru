"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Calendar,
  User,
  CheckCircle2,
} from "lucide-react";

export default function HomepageContactSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    service: "free-30-min",
    notes: "",
  });

  const handleProceedToContactPage = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct URL search params to pre-fill the dedicated Contact Page
    const params = new URLSearchParams({
      name: formData.name,
      service: formData.service,
      notes: formData.notes,
    });

    // Navigate to dedicated /contact page with pre-filled state
    router.push(`/contact?${params.toString()}`);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-[#fffdf9] via-[#fef7eb] to-[#fcefdc] flex flex-col justify-center py-20 px-4 sm:px-8 overflow-hidden border-b border-amber-200/50"
    >
      {/* Background Soft Glow & Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Guidance Header & Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-[#b45309] text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                <span>Step 1 of 2 • Fast Booking</span>
              </span>

              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#451a03] leading-tight">
                Initiate Your Consultation
              </h2>

              <p className="text-[#78350f]/80 text-sm leading-relaxed">
                Select your preferred guidance session below to begin. We will redirect you to finalize your date, time slot, and direct contact details.
              </p>
            </motion.div>

            {/* Direct Instant Channels */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-[#b45309] uppercase tracking-wider">
                Or Reach Out Directly
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#451a03]">
                <a
                  href="https://wa.me/9779841692527"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-amber-200/80 shadow-2xs hover:border-amber-400 hover:bg-white transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#78350f]/60 font-medium uppercase">WhatsApp</div>
                    <span>Chat Now</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-amber-200/80 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-[#b45309] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#78350f]/60 font-medium uppercase">Phone Call</div>
                    <span>+977 9841692527</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-amber-200/80 shadow-2xs text-xs font-semibold text-[#451a03]">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-[#b45309] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#78350f]/60 font-medium uppercase">Location</div>
                  <span>Bhaktapur Office & Online Worldwide Zoom</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Full-Screen Step 1 Entry Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-7 sm:p-10 shadow-xl shadow-amber-950/5 border-2 border-[#fcdfa6] relative"
            >
              <form onSubmit={handleProceedToContactPage} className="space-y-6">
                <div className="flex items-center justify-between border-b border-amber-100 pb-4">
                  <h3 className="text-xl font-serif font-bold text-[#451a03]">
                    Select Service & Enter Details
                  </h3>
                  <span className="text-xs font-bold text-[#b45309] bg-[#fef3c7] px-3 py-1 rounded-full border border-[#fde68a]">
                    Step 1 of 2
                  </span>
                </div>

                {/* Name Input */}
                <div>
                  <label className="block text-xs font-semibold text-[#78350f] mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative border-b-2 border-amber-300 focus-within:border-[#d97706] transition-colors">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent py-2 text-sm text-[#451a03] placeholder-amber-800/30 outline-none"
                    />
                    <User className="absolute right-1 top-2.5 w-4 h-4 text-amber-600/50" />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#78350f] mb-1.5">
                    Choose Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-amber-50/50 border border-amber-200 rounded-xl px-3.5 py-3 text-xs font-medium text-[#451a03] focus:outline-none focus:border-[#d97706] focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="free-30-min">🎁 Free 30-Minute Discovery Session</option>
                    <option value="kundali">Birth Chart Reading (Jyotish Analysis)</option>
                    <option value="marriage">Marriage Compatibility Analysis</option>
                    <option value="vastu">Vastu Consultation</option>
                    <option value="palmistry">Academic One-on-One Mentorship</option>
                  </select>
                </div>

                {/* Notes / Birth Details */}
                <div>
                  <label className="block text-xs font-semibold text-[#78350f] mb-1.5">
                    Brief Notes or Birth Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention birth date, time, location, or specific questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-amber-50/50 border border-amber-200 rounded-xl p-3.5 text-xs text-[#451a03] placeholder-amber-800/30 outline-none focus:border-[#d97706] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Proceed Button */}
                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-semibold text-xs py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <span>Proceed to Finalize & Contact Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
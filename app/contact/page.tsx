"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Clock,
  ExternalLink,
} from "lucide-react";

// Brand & Social Media SVG Icons
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

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const serviceMapping: Record<string, string> = {
  "free-30-min": "Free 30-Min Discovery Session",
  kundali: "Birth Chart Reading",
  marriage: "Marriage Compatibility Analysis",
  vastu: "Vastu Consultation",
  palmistry: "Academic One-on-One Mentorship",
};

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"instant" | "details" | "map">("instant");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Free 30-Min Discovery Session",
    isFreeSession: true,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const nameParam = searchParams.get("name");
    const notesParam = searchParams.get("notes");

    const resolvedService =
      serviceParam && serviceMapping[serviceParam]
        ? serviceMapping[serviceParam]
        : serviceParam || "Free 30-Min Discovery Session";

    setFormState((prev) => ({
      ...prev,
      name: nameParam || prev.name,
      message: notesParam || prev.message,
      service: resolvedService,
      isFreeSession: resolvedService === "Free 30-Min Discovery Session",
    }));
  }, [searchParams]);

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
        setFormState({
          name: "",
          email: "",
          phone: "",
          service: "Free 30-Min Discovery Session",
          isFreeSession: true,
          message: "",
        });
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
      {/* Left Column: Direct Info & Instant Connect */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-amber-200/60 shadow-xs">
        <div>
          <h3 className="text-xl font-serif text-slate-900 font-medium mb-1">
            Get in Touch
          </h3>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Reach out directly via instant message, phone, or view our office location in Bhaktapur.
          </p>

          <div className="flex bg-slate-100/80 p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setActiveTab("instant")}
              className={`flex-1 text-[11px] font-semibold py-1.5 rounded-lg transition-all ${
                activeTab === "instant"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Instant Chat
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("details")}
              className={`flex-1 text-[11px] font-semibold py-1.5 rounded-lg transition-all ${
                activeTab === "details"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Direct Info
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("map")}
              className={`flex-1 text-[11px] font-semibold py-1.5 rounded-lg transition-all ${
                activeTab === "map"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Location
            </button>
          </div>

          {activeTab === "instant" && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
              <a
                href="https://wa.me/9779841692527?text=Namaste%20Suman%20ji,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#25D366]/10 border border-slate-200/80 hover:border-[#25D366]/40 transition-all text-slate-800 group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <WhatsappLogo />
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-semibold">WhatsApp</div>
                    <div className="text-[10px] text-slate-500">Quick chat & scheduling</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#25D366]" />
              </a>

              <a
                href="viber://chat?number=%2B9779841692527"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#7360F2]/10 border border-slate-200/80 hover:border-[#7360F2]/40 transition-all text-slate-800 group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#7360F2] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <ViberLogo />
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-semibold">Viber</div>
                    <div className="text-[10px] text-slate-500">Direct mobile messaging</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#7360F2]" />
              </a>

              <a
                href="https://m.me/suman.adhikary.92"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#0084FF]/10 border border-slate-200/80 hover:border-[#0084FF]/40 transition-all text-slate-800 group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#0084FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessengerLogo />
                  </span>
                  <div className="text-left">
                    <div className="text-xs font-semibold">Facebook Messenger</div>
                    <div className="text-[10px] text-slate-500">Facebook profile chat</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0084FF]" />
              </a>
            </motion.div>
          )}

          {activeTab === "details" && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <a href="tel:+9779841692527" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-amber-50/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Phone / Mobile</div>
                  <div className="text-xs font-medium text-slate-800">+977 9841692527</div>
                </div>
              </a>

              <a href="mailto:mastermindsu@gmail.com" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-amber-50/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Email Address</div>
                  <div className="text-xs font-medium text-slate-800">mastermindsu@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Physical Office</div>
                  <div className="text-xs font-medium text-slate-800">Bhaktapur Durbar Square Area, Nepal</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 border-t border-amber-100 pt-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Consultation Hours</div>
                  <div className="text-xs font-medium text-slate-800">Mon – Sun: 8:00 AM – 8:00 PM (NPT)</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "map" && (
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
              <div className="w-full h-44 rounded-xl overflow-hidden border border-amber-200/80 shadow-inner">
                <iframe
                  title="Suman Adhikari Office Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.02325010695!2d85.4276183!3d27.6710237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a403487f547%3A0x6b8f7223cf0d7967!2sBhaktapur%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Bhaktapur+Durbar+Square"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          )}
        </div>

        <div className="pt-4 border-t border-amber-100/80">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Connect & Follow
          </div>
          <div className="flex items-center gap-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-900 flex items-center justify-center transition-colors" title="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-900 flex items-center justify-center transition-colors" title="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Clean Form Container */}
      <div className="lg:col-span-7 bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-amber-200/60 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-slate-900 font-serif font-medium text-lg">
              <MessageSquare className="w-4 h-4 text-amber-600" />
              <span>Schedule Consultation</span>
            </div>

            <button
              type="button"
              onClick={() =>
                setFormState((prev) => ({
                  ...prev,
                  service: "Free 30-Min Discovery Session",
                  isFreeSession: true,
                }))
              }
              className="flex items-center gap-1.5 text-[10px] font-semibold text-amber-900 bg-amber-100/70 hover:bg-amber-200/80 border border-amber-200 px-2.5 py-1 rounded-full transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Claim Free Session</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-500 uppercase">Your Name</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="e.g. Liam Sharma"
                className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-500 uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-500 uppercase">Phone Number</label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  placeholder="+977 98XXXXXXXX"
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-500 uppercase">Session Type</label>
              <select
                value={formState.service}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    service: e.target.value,
                    isFreeSession: e.target.value === "Free 30-Min Discovery Session",
                  })
                }
                className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500 cursor-pointer transition-colors"
              >
                <option value="Free 30-Min Discovery Session">🎁 Free 30-Minute Discovery Session</option>
                <option value="Birth Chart Reading">Birth Chart Reading (Jyotish Analysis)</option>
                <option value="Comprehensive Life Guidance">Comprehensive Life & Career Guidance</option>
                <option value="Marriage Compatibility Analysis">Marriage & Synastry Matching</option>
                <option value="Vastu Consultation">Vastu Spatial Consultation</option>
                <option value="Vedic Karmakanda">Vedic Karmakanda & Rituals</option>
                <option value="Academic One-on-One Mentorship">Academic One-on-One Mentorship</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-500 uppercase">Birth Details / Notes</label>
              <textarea
                rows={3}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Include date, time, place of birth or preferred appointment timings..."
                className="w-full bg-slate-50/50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500 resize-none transition-colors"
              />
            </div>

            {status.type && (
              <div
                className={`flex items-center gap-2 p-3 rounded-lg text-xs ${
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 disabled:from-slate-300 disabled:to-slate-300 text-white disabled:text-slate-500 font-semibold text-xs py-3 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <span>
                {isSubmitting
                  ? "Transmitting..."
                  : formState.isFreeSession
                  ? "Book Free 30-Min Session"
                  : "Transmit Message"}
              </span>
              {!isSubmitting && <Send className="w-3.5 h-3.5 stroke-[2]" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 bg-gradient-to-b from-slate-50 via-amber-50/30 to-slate-50 text-slate-900 overflow-hidden border-t border-amber-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-amber-800 text-xs font-semibold tracking-widest uppercase block mb-1.5">
            Initiate Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif text-slate-900">
            Connect & Schedule
          </h2>
        </div>

        <Suspense fallback={<div className="text-center py-8 text-xs text-slate-500">Loading form...</div>}>
          <ContactFormContent />
        </Suspense>
      </div>
    </section>
  );
}
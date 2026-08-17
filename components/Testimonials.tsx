"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  CheckCircle2,
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  X,
  Send,
  Video,
  UserCheck,
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  type: "Zoom Call" | "In-Person Office";
  rating: number;
  date: string;
  review: string;
  initials: string;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rohan & Pooja Shrestha",
    location: "Kathmandu, Nepal",
    service: "Kundali Matching & Marriage",
    type: "In-Person Office",
    rating: 5,
    date: "May 2026",
    initials: "RS",
    highlight: "Clear remedies & family peace of mind",
    review:
      "Suman Uncle provided deep clarity on our Kundali matching. His practical remedies and warm advice put both of our families at ease. Highly recommend his genuine Vedic insight!",
  },
  {
    id: "2",
    name: "Aarav Sharma",
    location: "Sydney, Australia",
    service: "Career & Dasha Analysis",
    type: "Zoom Call",
    rating: 5,
    date: "June 2026",
    initials: "AS",
    highlight: "Astonishingly accurate timing",
    review:
      "I was going through a major career crossroad. The online Zoom consultation was seamless, and the analysis of my Saturn Dasha timing was astonishingly accurate.",
  },
  {
    id: "3",
    name: "Sunita Karki",
    location: "Lalitpur, Nepal",
    service: "Palmistry & Numerology",
    type: "In-Person Office",
    rating: 5,
    date: "July 2026",
    initials: "SK",
    highlight: "Empowering focus on personal growth",
    review:
      "The palmistry session in his Bhaktapur office was eye-opening. Suman Uncle explained line indicators without causing any fear, focusing instead on personal growth.",
  },
  {
    id: "4",
    name: "Bikash Thapa",
    location: "London, UK",
    service: "Vastu & House Blessing",
    type: "Zoom Call",
    rating: 5,
    date: "August 2026",
    initials: "BT",
    highlight: "Practical & easy structural guidance",
    review:
      "Extremely detailed Vastu recommendations for our new home. The structural remedies were practical, easy to execute, and brought peace of mind.",
  },
];

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>(TESTIMONIALS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newReview, setNewReview] = useState({
    name: "",
    location: "",
    service: "Kundali Matching & Marriage",
    type: "Zoom Call" as "Zoom Call" | "In-Person Office",
    rating: 5,
    review: "",
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const initials = newReview.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const created: Testimonial = {
      id: Date.now().toString(),
      name: newReview.name,
      location: newReview.location || "Global Client",
      service: newReview.service,
      type: newReview.type,
      rating: newReview.rating,
      date: "Just now",
      initials: initials || "VS",
      highlight: "Genuine client review",
      review: newReview.review,
    };

    setItems([created, ...items]);
    setCurrentIndex(0);
    setIsModalOpen(false);
    setNewReview({
      name: "",
      location: "",
      service: "Kundali Matching & Marriage",
      type: "Zoom Call",
      rating: 5,
      review: "",
    });
  };

  const activeItem = items[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-[#fffdf9] via-[#fef7eb] to-[#fcefdc] relative overflow-hidden border-b border-amber-200/50">
      {/* Background Ambient Glowing Elements */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-[#b45309] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Verified Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#451a03] font-bold tracking-tight">
              Words From Seeking Souls
            </h2>
            <p className="text-[#78350f]/80 text-xs sm:text-sm leading-relaxed mt-2 max-w-xl">
              Honest experiences and reflections shared by seekers across Nepal and worldwide following their consultations.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-amber-300 text-[#b45309] hover:bg-amber-50 text-xs font-semibold shadow-xs transition-all cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4 text-[#d97706]" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* MAIN INTERACTIVE DISPLAY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Trust Metrics Summary Panel */}
          <div className="lg:col-span-4 bg-white/80 backdrop-blur-xl border-2 border-[#fcdfa6] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="text-center pb-6 border-b border-amber-100">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#451a03]">
                4.9<span className="text-lg text-amber-600 font-sans">/5.0</span>
              </div>
              <div className="flex items-center justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-[#78350f]/70 font-medium">Overall Client Rating</p>
            </div>

            {/* Metric Bars */}
            <div className="space-y-3.5 pt-6">
              {[
                { label: "Kundali & Marriage", val: "99%" },
                { label: "Career & Dasha Analysis", val: "97%" },
                { label: "Palmistry & Remedies", val: "98%" },
              ].map((metric, i) => (
                <div key={i} className="text-xs">
                  <div className="flex justify-between text-[#451a03] font-semibold mb-1">
                    <span>{metric.label}</span>
                    <span className="text-[#b45309]">{metric.val}</span>
                  </div>
                  <div className="w-full h-2 bg-amber-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#d97706] to-[#ea580c] rounded-full"
                      style={{ width: metric.val }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="mt-8 pt-6 border-t border-amber-100 flex items-center justify-around text-center text-xs text-[#78350f]">
              <div>
                <div className="font-bold text-[#451a03] text-sm">500+</div>
                <div className="text-[10px] text-[#78350f]/70">Global Consults</div>
              </div>
              <div className="w-px h-8 bg-amber-200" />
              <div>
                <div className="font-bold text-[#451a03] text-sm">100%</div>
                <div className="text-[10px] text-[#78350f]/70">Confidential</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Featured Spotlight Slider Card */}
          <div className="lg:col-span-8">
            <div className="relative bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-amber-950/5 border-2 border-[#fcdfa6] min-h-[360px] flex flex-col justify-between">
              
              <Quote className="w-14 h-14 text-amber-500/10 absolute top-6 right-8 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Card Header Tag & Rating */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#b45309] text-[11px] font-bold uppercase tracking-wider">
                        {activeItem.service}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold">
                        {activeItem.type === "Zoom Call" ? (
                          <Video className="w-3 h-3 text-amber-600" />
                        ) : (
                          <UserCheck className="w-3 h-3 text-amber-600" />
                        )}
                        <span>{activeItem.type}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(activeItem.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Highlight Heading */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#451a03]">
                    "{activeItem.highlight}"
                  </h3>

                  {/* Review Text */}
                  <p className="text-amber-950/80 text-sm sm:text-base leading-relaxed italic">
                    "{activeItem.review}"
                  </p>

                  {/* Author Meta Info */}
                  <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#d97706] to-[#ea580c] text-white font-serif font-bold text-sm flex items-center justify-center shadow-xs">
                        {activeItem.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#451a03] flex items-center gap-1.5">
                          {activeItem.name}
                          <CheckCircle2 className="w-4 h-4 text-[#d97706]" />
                        </h4>
                        <p className="text-xs text-[#78350f]/70 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-amber-600" />
                          {activeItem.location}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-[#78350f]/50 font-medium">
                      {activeItem.date}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls Bar */}
              <div className="pt-6 mt-6 border-t border-amber-100/80 flex items-center justify-between">
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {items.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx
                          ? "w-6 bg-[#d97706]"
                          : "w-2 bg-amber-200 hover:bg-amber-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full border border-amber-200 text-[#451a03] hover:bg-amber-50 cursor-pointer transition-all"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full border border-amber-200 text-[#451a03] hover:bg-amber-50 cursor-pointer transition-all"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* WRITE A REVIEW MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-amber-200 z-10"
            >
              <div className="flex items-center justify-between pb-4 border-b border-amber-100">
                <h3 className="text-lg font-serif font-bold text-[#451a03]">
                  Share Your Consultation Experience
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-full text-amber-900 hover:bg-amber-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4 mt-4">
                <div>
                  <label className="block text-xs font-semibold text-[#78350f] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suman Karki"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 bg-amber-50/30"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#78350f] mb-1">
                      City / Country
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kathmandu, Nepal"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 bg-amber-50/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#78350f] mb-1">
                      Consultation Format
                    </label>
                    <select
                      value={newReview.type}
                      onChange={(e) => setNewReview({ ...newReview, type: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 bg-amber-50/30"
                    >
                      <option value="Zoom Call">Zoom Video Call</option>
                      <option value="In-Person Office">In-Person Office</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#78350f] mb-1">
                    Service Received
                  </label>
                  <select
                    value={newReview.service}
                    onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 bg-amber-50/30"
                  >
                    <option value="Kundali Matching & Marriage">Kundali Matching & Marriage</option>
                    <option value="Career & Dasha Analysis">Career & Dasha Analysis</option>
                    <option value="Palmistry & Numerology">Palmistry & Numerology</option>
                    <option value="Vastu Consultation">Vastu Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#78350f] mb-1">
                    Your Reflection / Feedback *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share how your session provided clarity..."
                    value={newReview.review}
                    onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 bg-amber-50/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white font-semibold text-xs tracking-wider uppercase shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Feedback</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
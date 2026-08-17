"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What details do I need to provide for a Kundali Reading?",
    a: "You will need your exact date of birth, time of birth (as accurate as possible), and your birthplace location.",
  },
  {
    q: "Can I take consultations online if I am outside Nepal?",
    a: "Yes! Online video consultations via Zoom, Google Meet, or WhatsApp are provided for clients across the globe.",
  },
  {
    q: "How does Vedic Astrology differ from Western Astrology?",
    a: "Vedic Astrology (Jyotish) utilizes the Sidereal Zodiac based on fixed constellations and planetary Dasha systems, offering precise predictive timing.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-2 block">
            Common Questions
          </span>
          <h2 className="text-3xl font-serif text-slate-900 font-light">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-amber-200/80 rounded-2xl overflow-hidden bg-amber-50/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 text-sm font-semibold text-slate-900 flex justify-between items-center cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-amber-600 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-amber-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
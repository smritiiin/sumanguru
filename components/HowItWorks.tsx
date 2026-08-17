"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, Video } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book Your Session",
    desc: "Select your preferred service tier and choose a comfortable date/time for your consultation.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Chart & Details Preparation",
    desc: "Provide your birth date, exact time, and place of birth so your Janma Kundali can be calculated.",
  },
  {
    icon: Video,
    step: "03",
    title: "Live Guidance & Remedies",
    desc: "Connect via In-Person session in Bhaktapur or online (Zoom/Google Meet) for actionable remedies.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white/60 relative border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-700 text-xs font-semibold tracking-widest uppercase mb-2 block">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-light">
            How The Consultation Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-6 rounded-2xl bg-amber-50/50 border border-amber-200/70 text-center"
            >
              <div className="text-xs font-bold text-amber-600 mb-2">STEP {item.step}</div>
              <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-700">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
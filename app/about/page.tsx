import React from "react";
import Link from "next/link";
import { 
  Award, 
  CheckCircle2, 
  Compass, 
  GraduationCap, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Calendar
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Astrologer Suman Adhikari | Vedic Jyotish & Vastu Expert",
  description:
    "Learn about Astrologer Suman Adhikari's 12+ years of experience, formal Vedic qualifications, Sanskrit education, and expertise in Kundali, Vastu, Palmistry, and Remedial Jyotish.",
  keywords: [
    "Vedic Astrologer Nepal",
    "Astrologer Suman Adhikari",
    "Vedic Jyotish Qualification",
    "Vastu Shastra Consultant Bhaktapur",
    "Kundali Matching Expert",
  ],
};

const qualifications = [
  {
    title: "Jyotish Acharya (Master's in Astrology)",
    institution: "Nepal Sanskrit University",
    year: "2014",
    description: "Deep research in classical texts including Brihat Parashara Hora Shastra, Jaimini Sutras, and Saravali.",
  },
  {
    title: "Shastri Degree in Sanskrit Literature",
    institution: "Central Sanskrit University",
    year: "2010",
    description: "Specialized focus on ancient Vedic scriptures, Astronomical Mathematics (Siddhanta Jyotish), and Mantras.",
  },
  {
    title: "Certified Vastu Shastra Consultant",
    institution: "International Institute of Vedic Sciences",
    year: "2016",
    description: "Advanced certification in residential, commercial, and industrial Vastu directional alignment.",
  },
];

const expertiseDomains = [
  {
    title: "Vedic Horoscope & Kundali Analysis",
    description: "Comprehensive Janam Kundali evaluation focusing on Dasha periods, planetary transits (Gochara), and birth chart yogas.",
    icon: Sparkles,
  },
  {
    title: "Vastu Shastra Architectural Guidance",
    description: "Scientific directional audits for homes and businesses to harmonize five natural elements (Pancha Bhootas) without structural demolition.",
    icon: Compass,
  },
  {
    title: "Kundali Milan (Marriage Compatibility)",
    description: "8-fold Ashtakoota and 36-point Guna Milan along with Manglik Dosha and Nadi Kuta analysis for lasting matrimonial harmony.",
    icon: Star,
  },
  {
    title: "Numerology & Planetary Remedies",
    description: "Name spelling optimization based on Chaldean numerology alongside genuine gemstone recommendation and Vedic Pooja rituals.",
    icon: ShieldCheck,
  },
];

const stats = [
  { label: "Years of Active Practice", value: "12+" },
  { label: "Satisfied Clients Worldwide", value: "8,500+" },
  { label: "Kundali Charts Analyzed", value: "15,000+" },
  { label: "Accuracy & Trust Rate", value: "99%" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fdfbf7] text-slate-800 min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-amber-200/80 bg-gradient-to-b from-amber-100/60 via-white to-[#fdfbf7]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-6 shadow-xs">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Certified Vedic Jyotish आचार्य</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-6">
            Rooted in <span className="text-gradient-gold">Vedic Tradition</span>, Guided by Modern Insights
          </h1>
          <p className="text-slate-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            With over 12 years of dedicated practice, Astrologer Suman Adhikari provides authentic, traditional Vedic Horoscope readings, Vastu audits, and remedial guidance tailored to modern life challenges.
          </p>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="bg-white border-b border-amber-200/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 shadow-xs">
              <p className="text-2xl sm:text-4xl font-serif font-bold text-amber-700 mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Profile & Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 p-1 shadow-md shadow-amber-500/10">
              <div className="bg-white rounded-xl p-8 space-y-6">
                <div className="w-20 h-20 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">Suman Adhikari</h3>
                  <p className="text-amber-800 text-sm font-semibold">Vedic Jyotish & Vastu Specialist</p>
                  <p className="text-slate-600 text-xs mt-1 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" /> Bhaktapur, Nepal (Global Consultations Available)
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Primary Discipline:</span>
                    <span className="font-bold text-amber-900">Parashari Vedic Jyotish</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Languages:</span>
                    <span className="font-semibold text-slate-800">Nepali, English, Hindi, Sanskrit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Consultation Modes:</span>
                    <span className="font-semibold text-slate-800">In-Person & Online Video Call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Philosophical Approach: Empowerment Over Fear
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Astrology is not about deterministic fear or passive fate; it is a sacred roadmap for self-awareness and conscious decision-making. My consultations focus on identifying cosmic strengths (Yogas), navigating challenging periods (Ketu/Rahu or Sade Sati Dashas), and implementing practical remedies.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Mathematical precision in calculating exact Lagna, Moon Sign, and Navamsha (D9) charts.",
                "Non-fatalistic counseling that honors human effort (Purushartha) and free will.",
                "Authentic Vedic remedies prioritizing Mantras, Meditation, and Practical Vastu over expensive gemstones.",
                "Complete client confidentiality and professional ethics in every consultation.",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-white border-y border-amber-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Education & Qualifications</h2>
            <p className="text-slate-600 text-sm mt-2 font-medium">
              Rigorous academic and traditional Sanskrit training underpinning over a decade of astrological service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualifications.map((item, idx) => (
              <div key={idx} className="bg-amber-50/50 border border-amber-200/80 rounded-xl p-6 relative hover:shadow-md transition-shadow">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-200/70 text-amber-900 border border-amber-300 mb-4 inline-block">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-amber-800 text-xs font-semibold mb-3">{item.institution}</p>
                <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Domains of Expertise</h2>
          <p className="text-slate-600 text-sm mt-2 font-medium">Specialized services crafted to bring clarity to career, relationships, health, and living spaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseDomains.map((domain, idx) => {
            const IconComponent = domain.icon;
            return (
              <div key={idx} className="bg-white border border-amber-200/80 rounded-xl p-6 flex gap-4 shadow-xs hover:border-amber-400 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{domain.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{domain.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-center shadow-inner">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">Ready to Explore Your Astrological Chart?</h2>
          <p className="text-amber-100 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Book an online or in-person session to receive personal astrological guidance with detailed remedies and timing predictions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-white text-amber-900 hover:bg-amber-50 font-bold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>Schedule A Consultation</span>
            </Link>
            <Link
              href="/services"
              className="border border-white/50 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
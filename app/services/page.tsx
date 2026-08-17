import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Check, 
  Clock, 
  Calendar,
  HelpCircle,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Astrologer Suman Adhikari",
  description:
    "Explore Vedic Astrology consultations, Kundali Matching, Vastu Shastra audits, and pricing plans with Astrologer Suman Adhikari.",
};

const servicePackages = [
  {
    name: "Janma Kundali Analysis",
    price: "NPR 2,500",
    usdPrice: "$35 USD (International)",
    duration: "45 Mins",
    popular: false,
    description: "In-depth birth chart analysis covering career, finances, health, and Dasha period predictions.",
    features: [
      "Complete Lagna & Navamsha Chart Study",
      "Vimshottari Dasha Analysis",
      "Planetary Yogas & Dosha Evaluation",
      "Customized Vedic Remedies & Mantras",
      "Recorded Session & Digital Kundali PDF",
    ],
    cta: "Book Kundali Reading",
    href: "/contact?service=kundali",
  },
  {
    name: "Comprehensive Life & Career Guidance",
    price: "NPR 4,500",
    usdPrice: "$60 USD (International)",
    duration: "75 Mins",
    popular: true,
    description: "Detailed multi-year life forecast with targeted solutions for career transitions, business, and health.",
    features: [
      "Everything in Kundali Analysis",
      "5-Year Planetary Transit Projections",
      "Gemstone & Pooja Consultation",
      "Business / Career Opportunity Timing",
      "Priority Follow-Up Call (15 mins within 30 days)",
    ],
    cta: "Book Comprehensive Guidance",
    href: "/contact?service=comprehensive",
  },
  {
    name: "Kundali Milan (Marriage Compatibility)",
    price: "NPR 3,000",
    usdPrice: "$45 USD (International)",
    duration: "60 Mins",
    popular: false,
    description: "Ashtakoota 36-Guna matching, Manglik Dosha, and emotional/financial synergy evaluation for couples.",
    features: [
      "Detailed 36-Point Guna Match",
      "Manglik & Nadi Kuta Analysis",
      "Navamsha Compatibility Check",
      "Remedial Steps for Matrimonial Harmony",
      "Joint Consultation for Both Partners",
    ],
    cta: "Book Compatibility Session",
    href: "/contact?service=compatibility",
  },
  {
    name: "Vastu Shastra Site Consultation",
    price: "NPR 10,000+",
    usdPrice: "Custom Quote",
    duration: "On-Site / Virtual",
    popular: false,
    description: "Directional audit for homes, offices, or plots to balance energy fields without structural demolition.",
    features: [
      "Pancha Bhoota Directional Audit",
      "Main Entrance & Room Layout Remediation",
      "Brahmasthan Energy Flow Correction",
      "Remedies Using Mirrors, Colors & Yantras",
      "Detailed Written Blueprint & Report",
    ],
    cta: "Request Vastu Audit",
    href: "/contact?service=vastu",
  },
];

const specializedServices = [
  {
    title: "Muhurta Selection",
    desc: "Auspicious timing calculations for weddings, housewarming (Griha Pravesh), business launches, and major purchases.",
    icon: Calendar,
  },
  {
    title: "Chaldean Numerology",
    desc: "Name spelling adjustment for individuals and brand names aligned with personal birth charts for enhanced luck.",
    icon: Sparkles,
  },
  {
    title: "Gemstone Guidance",
    desc: "Unbiased, non-commercial gemstone recommendation based strictly on planet beneficence in your horoscope.",
    icon: ShieldCheck,
  },
  {
    title: "Prashna Kundali (Horary)",
    desc: "Immediate astrological answers for urgent single questions when birth time is unknown or unverified.",
    icon: HelpCircle,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#fdfbf7] text-slate-800 min-h-screen">
      {/* Page Header */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-amber-200/80 bg-gradient-to-b from-amber-100/60 via-white to-[#fdfbf7]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Consultation Services & Transparent Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-6">
            Astrological Guidance <span className="text-amber-700">Tailored to You</span>
          </h1>
          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Clear, ethical, and authentic Vedic astrology services available in-person in Bhaktapur, Nepal, and virtually via video call globally.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Consultation Packages</h2>
          <p className="text-slate-600 text-sm mt-2 font-medium">Select a service to view details or book your appointment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicePackages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl bg-white border ${
                pkg.popular 
                  ? "border-amber-400 shadow-xl ring-2 ring-amber-400/20" 
                  : "border-amber-200/80 shadow-sm hover:shadow-md"
              } p-6 flex flex-col justify-between transition-all`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 min-h-[40px]">{pkg.description}</p>
                
                <div className="border-y border-amber-100 py-4 mb-6 space-y-1">
                  <div className="text-2xl font-serif font-bold text-amber-700">{pkg.price}</div>
                  <div className="text-xs text-slate-500 font-medium">{pkg.usdPrice}</div>
                  <div className="flex items-center gap-1 text-xs text-slate-600 pt-2">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Duration: {pkg.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 text-xs text-slate-700 font-medium">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={pkg.href}
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs text-center transition-all flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? "bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20"
                    : "bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300"
                }`}
              >
                <span>{pkg.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-white border-y border-amber-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">Additional Astrological Services</h2>
            <p className="text-slate-600 text-sm mt-2 font-medium">Specialized offerings tailored to specific life decisions and timing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((spec, idx) => {
              const IconComp = spec.icon;
              return (
                <div key={idx} className="bg-amber-50/50 border border-amber-200/80 rounded-xl p-6 hover:border-amber-400 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{spec.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{spec.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">How It Works</h2>
          <p className="text-slate-600 text-sm mt-2 font-medium">Simple 3-step process to receive your consultation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white border border-amber-200/80 rounded-xl shadow-xs">
            <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-bold text-lg flex items-center justify-center mx-auto mb-4">1</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Submit Your Birth Details</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Provide your date, exact time, and place of birth along with your primary queries via our form.</p>
          </div>
          <div className="p-6 bg-white border border-amber-200/80 rounded-xl shadow-xs">
            <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-bold text-lg flex items-center justify-center mx-auto mb-4">2</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Schedule Your Slot</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Choose an in-person meeting in Bhaktapur or a private Google Meet / WhatsApp video session.</p>
          </div>
          <div className="p-6 bg-white border border-amber-200/80 rounded-xl shadow-xs">
            <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-bold text-lg flex items-center justify-center mx-auto mb-4">3</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Receive Guidance & Remedies</h3>
            <p className="text-slate-600 text-xs leading-relaxed">Get interactive chart analysis, custom Vedic remedies, and audio recording of the consultation.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">Have Specific Questions Before Booking?</h2>
          <p className="text-amber-100 text-sm sm:text-base font-medium">Reach out directly via WhatsApp or phone to confirm availability and chart detail requirements.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-900 hover:bg-amber-50 font-bold text-sm px-8 py-3.5 rounded-full transition-colors shadow-md"
          >
            Contact Astrologer Suman
          </Link>
        </div>
      </section>
    </div>
  );
}
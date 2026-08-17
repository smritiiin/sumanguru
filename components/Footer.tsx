import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Clock, Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-lg leading-tight">
                  Suman Adhikari
                </h3>
                <p className="text-xs font-medium text-amber-400 uppercase tracking-wider">
                  Vedic Astrologer & Vastu Practitioner
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing authentic, non-fatalistic astrological interpretations rooted in traditional Parashari principles to empower your life, career, and personal choices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Suman</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">Services & Fees</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Book Consultation</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Consultation Areas</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                <span>Janma Kundali Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                <span>Career & Wealth Direction</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                <span>Kundali Milan (Matchmaking)</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                <span>Vastu Shastra Consultation</span>
              </li>
            </ul>
          </div>

          {/* Office Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Office Location</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Suryabinayak, Bhaktapur, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+977 9800000000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>contact@astrologersuman.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Sun–Fri: 9:00 AM – 6:00 PM (NPT)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Astrologer Suman Adhikari. All rights reserved.</p>
          <p className="text-slate-600">Bhaktapur, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
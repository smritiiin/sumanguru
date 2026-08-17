import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumanadhikari.com"), // Replace with actual domain
  title: {
    default: "Suman Adhikari | Vedic Astrologer & Spiritual Counselor in Bhaktapur, Nepal",
    template: "%s | Suman Adhikari - Vedic Astrology",
  },
  description:
    "Empowering life guidance through traditional Vedic Astrology (Jyotish), Palmistry, Numerology, Vastu Shastra, and Kundali Matching in Bhaktapur, Nepal and worldwide.",
  keywords: [
    "Vedic Astrologer Nepal",
    "Best Astrologer in Bhaktapur",
    "Jyotish Service Nepal",
    "Kundali Matching",
    "Palmistry Expert Nepal",
    "Numerology Reading",
    "Vastu Shastra Consultant",
    "Online Astrology Consultation",
  ],
  authors: [{ name: "Suman Adhikari" }],
  creator: "Suman Adhikari",
  publisher: "Suman Adhikari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumanadhikari.com",
    title: "Suman Adhikari | Vedic Astrologer & Spiritual Counselor",
    description:
      "Transformative insights using authentic Sanskrit Jyotish formulas, Palmistry, and Numerology.",
    siteName: "Suman Adhikari Vedic Astrology",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suman Adhikari - Vedic Astrologer in Bhaktapur, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Adhikari | Vedic Astrologer",
    description: "Authentic Vedic Astrology & Spiritual Counseling from Nepal.",
    creator: "@suman_astrology",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://sumanadhikari.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
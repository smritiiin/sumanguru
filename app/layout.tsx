import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suman Adhikari | Astrologer & Teacher",
  description:
    "Professional Vedic Astrologer, Numerologist, Palmist and Spiritual Teacher from Bhaktapur, Nepal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
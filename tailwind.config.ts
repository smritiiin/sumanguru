import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Cosmic Navy/Indigo (For dark sections, headers, and contrasts)
        cosmic: {
          950: "#080B1A", // Obsidian Cosmic
          900: "#0F172A", // Deep Space Navy
          800: "#1E1B4B", // Midnight Indigo
          700: "#2E2A72",
          100: "#EEF2FF",
        },
        // Radiant Vedic Gold / Amber (Vibrant Primary Brand Accent)
        amber: {
          50:  "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B", // Bright Solar Gold
          600: "#D97706", // Rich Saffron
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        // Energetic Vermilion / Crimson (High-Conversion CTAs & Badges)
        vermilion: {
          500: "#FF3B00",
          600: "#EA580C", // Solar Flare Orange
          700: "#C2410C",
        },
        // Royal Purple (Spiritual & Wisdom Accents)
        mystic: {
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
      },
      backgroundImage: {
        "solar-gradient": "linear-gradient(135deg, #F59E0B 0%, #EA580C 50%, #C2410C 100%)",
        "cosmic-gradient": "linear-gradient(180deg, #080B1A 0%, #0F172A 50%, #1E1B4B 100%)",
        "gold-glow": "radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(255, 255, 255, 0) 70%)",
        "vibrant-card": "linear-gradient(135deg, rgba(255, 251, 235, 0.9) 0%, rgba(254, 243, 199, 0.5) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-spin": "spin 12s linear infinite",
      },
      boxShadow: {
        "glow-amber": "0 0 25px -5px rgba(245, 158, 11, 0.4)",
        "glow-vermilion": "0 0 25px -5px rgba(234, 88, 12, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-b from-orange-50/30 to-amber-50/60 border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-6 text-center text-xs tracking-wide text-slate-600 font-sans font-medium">
        © {new Date().getFullYear()} Suman Adhikari. All cosmic rights reserved.
      </div>
    </footer>
  );
}
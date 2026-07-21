export default function Footer() {
  return (
    <footer className="py-8 bg-[#07080B] border-t border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 text-center text-xs tracking-wide text-slate-500 font-sans">
        © {new Date().getFullYear()} Suman Adhikari. All cosmic rights reserved.
      </div>
    </footer>
  );
}
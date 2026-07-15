"use client";

const links = [
  "Home",
  "About",
  "Services",
  "Expertise",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="font-bold text-xl">
          Suman Adhikari
        </h2>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-amber-600 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
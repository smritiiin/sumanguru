import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}
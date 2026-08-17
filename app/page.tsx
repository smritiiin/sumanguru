// app/page.tsx
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Services from "../components/Services";
// import Expertise from "../components/Expertise";
// import Contact from "../components/Contact";
// import MiniChartCalculator from "../components/MiniChartCalculator";

// export default function Home() {
//   return (
//     <div className="bg-[#fdfbf7] text-slate-800">
//       <Hero />
//       <About />
//       <Services />
//       <MiniChartCalculator />
//       <Expertise />
//       <Contact />
//     </div>
//   );
// }



import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MiniChartCalculator from "../components/MiniChartCalculator";
import HowItWorks from "../components/HowItWorks";
import FAQSection from "../components/FAQSection";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <MiniChartCalculator />
      <Expertise />
      <FAQSection />
      <Testimonials />
      <Contact />
      
    </main>
  );
}
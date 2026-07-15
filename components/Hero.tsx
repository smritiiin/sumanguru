import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-amber-600 font-medium mb-3">
            Vedic Astrologer & Spiritual Teacher
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Suman Adhikari
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Helping people discover clarity, purpose and direction through
            Vedic Astrology, Numerology, Palmistry and Spiritual Guidance.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="bg-amber-600 text-white px-6 py-3 rounded-full"
            >
              Book Consultation
            </a>

            <a
              href="#services"
              className="border px-6 py-3 rounded-full"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/Suman.png"
            alt="Suman Adhikari"
            width={450}
            height={650}
            className="rounded-3xl object-cover shadow-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}
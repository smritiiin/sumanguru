import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <Image
          src="/images/Suman.png"
          alt="Suman Adhikari"
          width={450}
          height={600}
          className="rounded-3xl object-cover"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-8">
            I am Suman Adhikari, a professional astrologer and teacher based in
            Bhaktapur, Nepal. My work combines traditional Vedic Astrology,
            Numerology, Palmistry and Spiritual Counseling to help individuals
            understand life events, relationships, career paths and personal
            growth.
          </p>

          <p className="text-gray-600 leading-8 mt-6">
            I teach astrology and spiritual disciplines in Nepali, English,
            Hindi and Sanskrit, making ancient wisdom accessible to modern
            learners.
          </p>
        </div>

      </div>
    </section>
  );
}
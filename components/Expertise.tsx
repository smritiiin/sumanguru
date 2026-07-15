const expertise = [
  "Vedic Astrology",
  "Numerology",
  "Palmistry",
  "Horoscope Matching",
  "Career Guidance",
  "Relationship Guidance",
  "Spiritual Counseling",
  "Astrology Teaching",
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Areas of Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {expertise.map((item) => (
            <span
              key={item}
              className="bg-white px-5 py-3 rounded-full shadow"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
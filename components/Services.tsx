const services = [
  "Birth Chart Reading",
  "Marriage Compatibility Analysis",
  "Career Consultation",
  "Relationship Guidance",
  "Palmistry Reading",
  "Numerology Analysis",
  "Spiritual Counseling",
  "One-on-One Mentorship",
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="p-6 rounded-2xl border hover:shadow-lg transition"
            >
              <h3 className="font-semibold">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
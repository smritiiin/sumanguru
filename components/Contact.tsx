export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-600 mb-12">
          Get in touch for consultations, classes or mentorship.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold">
              Phone
            </h3>
            <p>+977 9800000000</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Email
            </h3>
            <p>suman@gmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Address
            </h3>
            <p>Bhaktapur, Nepal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
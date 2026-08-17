export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Suman Adhikari - Vedic Astrology & Counseling",
    "image": "https://sumanadhikari.com/images/og-image.jpg",
    "@id": "https://sumanadhikari.com",
    "url": "https://sumanadhikari.com",
    "telephone": "+977-9800000000", // Replace with actual phone number
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhaktapur Durbar Square Area",
      "addressLocality": "Bhaktapur",
      "addressRegion": "Bagmati",
      "postalCode": "44800",
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.6710,
      "longitude": 85.4298
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://facebook.com/sumanadhikari",
      "https://instagram.com/sumanadhikari",
      "https://linkedin.com/in/sumanadhikari",
      "https://twitter.com/suman_astrology"
    ],
    "knowsAbout": [
      "Vedic Astrology",
      "Jyotish Shastra",
      "Palmistry",
      "Numerology",
      "Kundali Matching",
      "Vastu Shastra"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
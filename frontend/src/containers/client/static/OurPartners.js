import React from "react";

const partners = [
  { name: "Partner 1", logo: "logo1.png", website: "https://partner1.com" },
  { name: "Partner 2", logo: "logo2.png", website: "https://partner2.com" },
  { name: "Partner 3", logo: "logo3.png", website: "https://partner3.com" },
];

const OurPartners = () => {
  return (
    <div className="our-partners p-8">
      <h1 className="text-3xl font-bold mb-8">Our Partners</h1>
      <div className="partners-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="partner-card p-4 border rounded-lg shadow-lg"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="partner-logo w-full h-32 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;

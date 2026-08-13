const services = [
  {
    title: "Financial Services",
    description:
      "Cash withdrawal, deposits, transfers, POS transactions and wallet funding.",
    icon: "💳",
  },
  {
    title: "Digital Payments",
    description:
      "Airtime, data, electricity, cable TV and internet subscription payments.",
    icon: "📱",
  },
  {
    title: "Business Solutions",
    description:
      "Business registration, merchant support, POS deployment and advisory.",
    icon: "🏢",
  },
  {
    title: "Travel & International",
    description:
      "Support for student, business and visitor travel to the UK, Canada, Europe and USA.",
    icon: "✈️",
  },
  {
    title: "UK & Europe Sourcing",
    description:
      "Assistance purchasing goods and services from the UK and European countries.",
    icon: "🌍",
  },
  {
    title: "Digital & Other Solutions",
    description:
      "Logistics, documentation, website development, branding and finance support.",
    icon: "💼",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            What We Offer
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            Solutions for Finance, Business & Opportunity
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            From financial and digital services to travel, international
            sourcing, logistics and business support, Jamestuns brings
            practical solutions together under one trusted partner.
          </p>
        </div>

        {/* Service Preview Cards */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl">
                {service.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Services */}
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition"
          >
            View All Services →
          </a>
        </div>

      </div>
    </section>
  );
}
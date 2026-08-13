import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const serviceCategories = [
  {
    title: "Financial Services",
    description:
      "Reliable everyday financial services for individuals and businesses.",
    icon: "💳",
    items: [
      "Cash Withdrawal",
      "Cash Deposit",
      "Money Transfer",
      "Bank Transfer",
      "POS Transactions",
      "Wallet Funding",
    ],
  },
  {
    title: "Digital Payment Services",
    description:
      "Convenient digital payment solutions for essential everyday services.",
    icon: "📱",
    items: [
      "Airtime Recharge",
      "Data Subscription",
      "Electricity Bills",
      "Cable Television Payments",
      "Internet Subscription Payments",
    ],
  },
  {
    title: "Business Solutions",
    description:
      "Practical services designed to help entrepreneurs and businesses operate and grow.",
    icon: "🏢",
    items: [
      "Business Registration Assistance",
      "Merchant Support",
      "POS Deployment",
      "Business Advisory",
    ],
  },
  {
    title: "Documentation Services",
    description:
      "Convenient documentation and administrative support for individuals and businesses.",
    icon: "📄",
    items: [
      "Printing",
      "Photocopying",
      "Scanning",
      "Lamination",
      "Passport Photographs",
      "Online Applications",
    ],
  },
  {
    title: "Logistics Services",
    description:
      "Flexible support for parcel handling, delivery and e-commerce activities.",
    icon: "🚚",
    items: [
      "Parcel Collection",
      "Delivery Support",
      "E-commerce Assistance",
    ],
  },
  {
    title: "Digital Solutions",
    description:
      "Technology and creative solutions that help businesses establish and grow their digital presence.",
    icon: "💻",
    items: [
      "Website Development",
      "Business Branding",
      "Graphic Design",
      "Social Media Setup",
    ],
  },
  {
    title: "Travel & International Services",
    description:
      "Travel and international assistance for intended students, business travellers and visitors.",
    icon: "✈️",
    items: [
      "UK Travel Assistance",
      "Canada Travel Assistance",
      "Europe Travel Assistance",
      "USA Travel Assistance",
      "Student Travel Support",
      "Business Travel Support",
      "Visitor Travel Support",
    ],
  },
  {
    title: "UK & Europe Sourcing",
    description:
      "Assistance with purchasing goods and services from the UK and European countries.",
    icon: "🌍",
    items: [
      "Goods Purchasing Assistance",
      "Services Purchasing Assistance",
      "UK Sourcing Support",
      "European Sourcing Support",
    ],
  },
  {
    title: "Loan & Finance Support",
    description:
      "Support in exploring suitable financing opportunities through finance houses in Nigeria.",
    icon: "💰",
    items: [
      "Finance House Liaison",
      "Loan Application Support",
      "Financing Options Guidance",
      "Support Identifying Competitive Rates",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="uppercase tracking-widest text-blue-200 font-semibold">
              Our Services
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              Solutions for Finance, Business & Opportunity
            </h1>

            <p className="mt-6 max-w-4xl mx-auto text-lg text-blue-100 leading-8">
              From financial and digital services to business support,
              travel assistance, international sourcing, logistics and
              finance support, Jamestuns Trading Venture brings practical
              solutions together under one trusted partner.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((service) => (
                <article
                  key={service.title}
                  className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-700 to-cyan-500 p-8 text-white">
                    <div className="text-5xl mb-4">{service.icon}</div>

                    <h2 className="text-2xl font-bold">
                      {service.title}
                    </h2>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-600 leading-7">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-0.5 text-green-600 font-bold">
                            ✓
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="text-green-600 font-bold uppercase tracking-widest">
              Need Help Choosing?
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              Let&apos;s Find the Right Solution for You
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
              Tell us what you need and our team will help direct you to
              the appropriate Jamestuns service.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition"
              >
                Contact Us Today →
              </a>

              <a
                href="https://wa.me/2348039100957?text=Hello%20Jamestuns%20Trading%20Venture,%20I%20would%20like%20help%20choosing%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-bold transition"
              >
                Chat on WhatsApp →
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
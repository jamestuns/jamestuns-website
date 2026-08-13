const serviceCategories = [
  {
    title: "Financial Services",
    color: "from-blue-700 to-cyan-500",
    icon: "💳",
    services: [
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
    color: "from-green-600 to-emerald-500",
    icon: "📱",
    services: [
      "Airtime Recharge",
      "Data Subscription",
      "Electricity Bills",
      "Cable Television Payments",
      "Internet Subscription Payments",
    ],
  },
  {
    title: "Business Solutions",
    color: "from-purple-600 to-indigo-500",
    icon: "🏢",
    services: [
      "Business Registration Assistance",
      "Merchant Support",
      "POS Deployment",
      "Business Advisory",
    ],
  },
  {
    title: "Documentation Services",
    color: "from-orange-500 to-amber-400",
    icon: "📄",
    services: [
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
    color: "from-red-500 to-pink-500",
    icon: "🚚",
    services: [
      "Parcel Collection",
      "Delivery Support",
      "E-commerce Assistance",
    ],
  },
  {
    title: "Digital Solutions",
    color: "from-slate-700 to-slate-500",
    icon: "💻",
    services: [
      "Website Development",
      "Business Branding",
      "Graphic Design",
      "Social Media Setup",
    ],
  },
  {
    title: "Travel & International Services",
    color: "from-blue-600 to-violet-500",
    icon: "✈️",
    services: [
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
    color: "from-teal-600 to-blue-500",
    icon: "🌍",
    services: [
      "Goods Purchasing Assistance",
      "Services Purchasing Assistance",
      "UK Sourcing Support",
      "European Sourcing Support",
    ],
  },
  {
    title: "Loan & Finance Support",
    color: "from-emerald-600 to-green-500",
    icon: "💰",
    services: [
      "Finance House Liaison",
      "Loan Application Support",
      "Financing Options Guidance",
      "Support Identifying Competitive Rates",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Our Solutions
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            Solutions That Connect Finance, Business & Opportunity
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-600 leading-8">
            Jamestuns Trading Venture provides financial, digital, business,
            travel, international sourcing, logistics and documentation
            solutions designed to help individuals, entrepreneurs and
            organisations achieve their goals.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {serviceCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl bg-white shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              <div
                className={`bg-gradient-to-r ${category.color} p-8 text-white`}
              >
                <div className="text-5xl mb-4">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="p-8">
                <ul className="space-y-4">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start text-gray-700"
                    >
                      <span className="text-green-500 mr-3 mt-0.5">
                        ✔
                      </span>

                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
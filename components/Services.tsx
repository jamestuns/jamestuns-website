const serviceCategories = [
  {
    title: "Financial Services",
    color: "from-blue-600 to-cyan-500",
    icon: "💳",
    services: [
      "Cash Withdrawal",
      "Cash Deposit",
      "Bank Transfer",
      "POS Transactions",
      "Wallet Funding",
    ],
  },
  {
    title: "Digital Payments",
    color: "from-green-600 to-emerald-500",
    icon: "📱",
    services: [
      "Airtime Recharge",
      "Data Subscription",
      "Electricity Bills",
      "Cable TV Payments",
      "Internet Subscription",
    ],
  },
  {
    title: "Business Solutions",
    color: "from-purple-600 to-indigo-500",
    icon: "🏢",
    services: [
      "Business Registration",
      "Merchant Support",
      "POS Deployment",
      "Business Advisory",
      "Agency Banking",
    ],
  },
  {
    title: "Documentation",
    color: "from-orange-500 to-amber-400",
    icon: "📄",
    services: [
      "Printing",
      "Photocopying",
      "Scanning",
      "Lamination",
      "Passport Photographs",
    ],
  },
  {
    title: "Logistics",
    color: "from-red-500 to-pink-500",
    icon: "🚚",
    services: [
      "Parcel Collection",
      "Delivery Support",
      "E-commerce Assistance",
      "Pickup Services",
      "Business Logistics",
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
      "Digital Support",
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

        <div className="text-center">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Our Solutions
          </span>

          <h2 className="mt-3 text-5xl font-extrabold text-gray-900">
            Everything Your Business Needs
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Jamestuns Trading Venture provides a complete range of
            financial, business and digital solutions designed to
            support individuals, entrepreneurs and organisations.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">

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
                      className="flex items-center text-gray-700"
                    >
                      <span className="text-green-500 mr-3">
                        ✔
                      </span>

                      {service}
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
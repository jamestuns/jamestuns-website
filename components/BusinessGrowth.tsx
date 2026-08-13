export default function BusinessGrowth() {
  const services = [
    {
      title: "Business Registration",
      description:
        "We help you register your business and ensure full compliance.",
      icon: "👥",
    },
    {
      title: "Merchant Support",
      description:
        "We provide ongoing support to help your business operate smoothly.",
      icon: "🏪",
    },
    {
      title: "POS Deployment",
      description:
        "Get reliable POS machines and setup to start transacting instantly.",
      icon: "💳",
    },
    {
      title: "Business Advisory",
      description:
        "Expert advice and strategies to help your business grow and improve.",
      icon: "📈",
    },
    {
      title: "Partnerships",
      description:
        "We collaborate with trusted partners to deliver the best value to you.",
      icon: "🤝",
    },
    {
      title: "Dedicated Support",
      description:
        "Our team is always ready to support your business every step of the way.",
      icon: "🎧",
    },
  ];

  return (
    <section className="bg-blue-50 py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1fr_1.15fr] gap-6 items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center py-4">

            <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-3">
              Grow Your Business
            </p>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight">
              Let&apos;s Build Something
              <span className="block text-blue-600">
                Great Together
              </span>
            </h2>

            <p className="mt-5 text-sm text-gray-600 leading-6 max-w-md">
              We provide the tools, support and solutions your business needs
              to grow, scale and succeed in today&apos;s competitive market.
            </p>

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                End-to-end business support
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                Reliable tools and technology
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                Dedicated customer service
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                Solutions tailored to your needs
              </div>

            </div>

            <div className="mt-7 flex items-center gap-4">

              <a
                href="#contact"
                className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition"
              >
                Contact Us Today →
              </a>

              <div>
                <p className="font-bold text-[#0F172A] text-sm">
                  +234 803 910 0957
                </p>

                <p className="text-[11px] text-gray-500">
                  We&apos;re ready to help your business grow
                </p>
              </div>

            </div>

          </div>

          {/* CENTER IMAGE */}
          <div className="h-full flex items-stretch">

            <img
              src="/hero-business.png"
              alt="Jamestuns business support"
              className="w-full h-full min-h-[390px] rounded-2xl shadow-xl object-cover"
            />

          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
              >

                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-lg mb-3">
                  {service.icon}
                </div>

                <h3 className="text-sm font-bold text-[#0F172A] leading-tight">
                  {service.title}
                </h3>

                <p className="mt-2 text-[11px] text-gray-600 leading-5">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
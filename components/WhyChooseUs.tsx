const features = [
  {
    title: "Trusted Since 2012",
    icon: "🏆",
    description:
      "Providing dependable financial and business solutions with years of proven experience.",
  },
  {
    title: "Fast & Secure Transactions",
    icon: "⚡",
    description:
      "Quick, reliable and secure financial services designed for everyday convenience.",
  },
  {
    title: "Professional Support",
    icon: "🤝",
    description:
      "Our friendly and knowledgeable team is always ready to assist individuals and businesses.",
  },
  {
    title: "Business Growth",
    icon: "📈",
    description:
      "Supporting entrepreneurs and SMEs with solutions that help businesses grow and succeed.",
  },
  {
    title: "Innovative Digital Solutions",
    icon: "💡",
    description:
      "From digital payments to website development, we leverage technology to simplify your business.",
  },
  {
    title: "Customer First",
    icon: "❤️",
    description:
      "Everything we do is centred around delivering exceptional customer satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Why Choose Jamestuns
          </span>

          <h2 className="mt-3 text-5xl font-extrabold text-gray-900">
            A Trusted Partner for Your Financial & Business Needs
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We combine technology, expertise and outstanding customer
            service to provide reliable solutions that make everyday
            transactions easier for individuals and businesses.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-4xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
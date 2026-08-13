const partners = [
  { name: "OPay", logo: "/Partners/opay.png" },
  { name: "remita", logo: "/Partners/remita.png" },
  { name: "PalmPay", logo: "/Partners/palmpay.png" },
  { name: "Flutterwave", logo: "/Partners/flutterwave.png" },
  { name: "nimc", logo: "/Partners/nimc.png" },
  { name: "immigration", logo: "/Partners/immigration.png" },
  { name: "flutterwave", logo: "/Partners/flutterwave.png" },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-sm">
            <span className="h-px w-10 bg-blue-600" />
            Our Partners
            <span className="h-px w-10 bg-blue-600" />
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0F172A]">
            Trusted Partners, Stronger Solutions
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-8">
            We work with trusted payment providers, banks, mobile networks
            and technology partners to deliver reliable and convenient
            services to our customers.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className="h-28 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 flex items-center justify-center p-5"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
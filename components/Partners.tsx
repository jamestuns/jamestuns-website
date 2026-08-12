export default function Partners() {
  const partners = [
    { name: "OPay", logo: "/partners/opay.png" },
    { name: "Moniepoint", logo: "/partners/moniepoint.png" },
    { name: "PalmPay", logo: "/partners/palmpay.png" },
    { name: "flutterwave", logo: "/partners/flutterwave.png" },
    { name: "Airtel", logo: "/partners/airtel.png" },
    { name: "Glo", logo: "/partners/glo.png" },
    { name: "mtn", logo: "/partners/mtn.png" },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Trusted Partners
          </span>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Powering Everyday Financial Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            We collaborate with trusted payment providers, banks,
            mobile networks and technology partners to deliver
            secure, reliable and convenient financial services.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">

          {partners.map((partner) => (

            <div
              key={partner.name}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex items-center justify-center p-6"
            >

              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 object-contain"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
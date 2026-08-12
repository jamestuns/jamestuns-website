export default function About() {
  const values = [
    "Integrity",
    "Trust",
    "Professionalism",
    "Innovation",
    "Customer Focus",
    "Accountability",
    "Excellence",
    "Community Impact",
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            About Jamestuns
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Your Trusted Digital Financial &
            <br />
            Business Solutions Partner
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Established in 2019, Jamestuns Trading Venture has grown into
            a trusted provider of financial services, digital payments,
            business support and technology solutions. We are committed to
            helping individuals, entrepreneurs and organisations access
            reliable services through innovation, professionalism and
            exceptional customer care.
          </p>

        </div>

        {/* Company Story */}

        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold text-blue-700 mb-6">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              To provide reliable, secure and innovative financial and
              business solutions that help individuals and businesses
              succeed through exceptional customer service and modern
              technology.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <h3 className="text-3xl font-bold text-green-600 mb-6">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              To become one of Nigeria's leading digital financial and
              business solutions providers, recognised for trust,
              innovation and customer satisfaction.
            </p>

          </div>

        </div>

        {/* Core Values */}

        <div className="text-center mb-10">

          <h3 className="text-4xl font-bold text-gray-900">
            Our Core Values
          </h3>

          <p className="mt-4 text-gray-600 text-lg">
            The principles that guide everything we do.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {values.map((value) => (

            <div
              key={value}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center hover:-translate-y-2"
            >

              <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4">
                ✓
              </div>

              <h4 className="font-bold text-lg text-gray-800">
                {value}
              </h4>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
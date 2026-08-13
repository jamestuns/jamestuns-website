import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
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
    <>
      <Navbar />

      <main>

        {/* Page Hero */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="uppercase tracking-widest text-blue-200 font-semibold">
              About Jamestuns
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold">
              Your Trusted Partner for Financial & Business Solutions
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100 leading-8">
              We provide financial, business, travel, international sourcing,
              logistics and digital solutions designed to help individuals and
              businesses move forward.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <p className="text-green-600 font-bold uppercase tracking-widest">
                  Who We Are
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
                  Empowering Individuals & Businesses
                </h2>

                <p className="mt-6 text-lg text-gray-600 leading-8">
                  Jamestuns Trading Venture provides reliable financial,
                  business and digital solutions for individuals,
                  entrepreneurs and organisations.
                </p>

                <p className="mt-5 text-lg text-gray-600 leading-8">
                  Our services also extend to travel and international support,
                  UK and Europe sourcing, logistics, documentation and finance
                  support, giving customers access to a broad range of practical
                  solutions through one trusted partner.
                </p>

                <p className="mt-5 text-lg text-gray-600 leading-8">
                  Since 2019, we have remained committed to integrity, trust,
                  professionalism, innovation and exceptional customer service.
                </p>
              </div>

              <div>
                <img
                  src="/hero-business.png"
                  alt="Jamestuns Trading Venture"
                  className="w-full rounded-3xl shadow-2xl object-cover"
                />
              </div>

            </div>

          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white rounded-3xl shadow-lg p-10">
                <p className="text-blue-600 font-bold uppercase tracking-widest">
                  Our Mission
                </p>

                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                  Reliable Solutions. Exceptional Service.
                </h2>

                <p className="mt-5 text-gray-600 leading-8 text-lg">
                  To provide reliable, secure and innovative financial and
                  business solutions that help individuals and businesses
                  succeed through exceptional customer service and modern
                  technology.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-10">
                <p className="text-green-600 font-bold uppercase tracking-widest">
                  Our Vision
                </p>

                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                  Building a Trusted National Brand
                </h2>

                <p className="mt-5 text-gray-600 leading-8 text-lg">
                  To become one of Nigeria's leading digital financial and
                  business solutions providers, recognised for trust,
                  innovation and customer satisfaction.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">
              <p className="text-blue-600 font-bold uppercase tracking-widest">
                Our Core Values
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
                The Principles That Guide Us
              </h2>

              <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
                Our values shape how we serve our customers, partners and
                communities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {values.map((value) => (
                <div
                  key={value}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold mb-4">
                    ✓
                  </div>

                  <h3 className="font-bold text-gray-900">
                    {value}
                  </h3>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-4xl md:text-5xl font-extrabold">
              Let&apos;s Find the Right Solution for You
            </h2>

            <p className="mt-5 text-lg text-blue-100 leading-8">
              Contact us for financial services, business support, travel
              assistance, sourcing, logistics, digital solutions or finance
              support.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Contact Us Today →
            </a>

          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
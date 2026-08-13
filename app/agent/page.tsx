import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AgentPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="uppercase tracking-widest text-blue-200 font-semibold">
              Become a Jamestuns Agent
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Grow Your Business With Jamestuns
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100 leading-8">
              Join our growing network and access opportunities to provide
              trusted financial and business services within your community.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">
              <p className="text-green-600 font-bold uppercase tracking-widest">
                Why Become an Agent?
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
                Build With a Trusted Partner
              </h2>

              <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
                Jamestuns supports agents with dependable services,
                practical business support and access to useful technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                  💳
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Financial Services
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Offer everyday financial and payment services to customers
                  in your community.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                  🤝
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Dedicated Support
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Receive practical support to help you operate your business
                  effectively.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl">
                  📈
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Growth Opportunities
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Grow your customer base by offering multiple services under
                  one trusted business.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                  💻
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Digital Solutions
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Access digital and business solutions that can support
                  your operations.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-2xl">
                  📱
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Convenient Services
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Give customers convenient access to useful services from
                  a single location.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
                  🌍
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Community Impact
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Help individuals and businesses access essential services
                  within their communities.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-14">
              <p className="text-blue-600 font-bold uppercase tracking-widest">
                Getting Started
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
                How It Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  Make an Enquiry
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Contact the Jamestuns team to discuss your interest in
                  becoming an agent.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  Review Requirements
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Our team will explain the applicable requirements and next
                  steps.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  Get Started
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Once approved, we'll guide you through the onboarding
                  process.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-4xl md:text-5xl font-extrabold">
              Ready to Get Started?
            </h2>

            <p className="mt-5 text-lg text-blue-100 leading-8">
              Speak with our team to learn more about becoming a Jamestuns
              agent and the opportunities available to you.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Contact Us →
              </a>

              <a
                href="https://wa.me/2348039100957?text=Hello%20Jamestuns%20Trading%20Venture,%20I%20am%20interested%20in%20becoming%20an%20agent."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
              >
                WhatsApp Us →
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
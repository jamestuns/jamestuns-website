export default function CTA() {
  return (
    <section
      id="agent"
      className="relative overflow-hidden bg-gradient-to-r from-[#0A4DA3] via-blue-700 to-[#00A651] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="uppercase tracking-widest text-blue-100 font-semibold">
              Become a Jamestuns Agent
            </span>

            <h2 className="mt-4 text-5xl font-extrabold leading-tight">
              Grow Your Business
              <br />
              With Us
            </h2>

            <p className="mt-8 text-lg text-blue-100 leading-8">
              Join our growing network of financial service agents and
              enjoy reliable support, trusted payment solutions,
              competitive commissions and modern technology that helps
              your business succeed.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="bg-white/10 rounded-xl p-4">
                ✔ Attractive Commission
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                ✔ Dedicated Support
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                ✔ Reliable POS Services
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                ✔ Business Growth
              </div>

            </div>

            <div className="mt-10">

              <a
                href="#contact"
                className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
              >
                Apply Now
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-3xl p-10 shadow-2xl">

            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Join Jamestuns?
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="text-green-600 text-2xl">✔</div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Trusted Brand
                  </h4>
                  <p className="text-gray-600">
                    Join a business trusted since 2019.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-600 text-2xl">✔</div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Training & Support
                  </h4>
                  <p className="text-gray-600">
                    We help you succeed from day one.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-600 text-2xl">✔</div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Modern Technology
                  </h4>
                  <p className="text-gray-600">
                    Reliable financial and digital solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-600 text-2xl">✔</div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Business Opportunities
                  </h4>
                  <p className="text-gray-600">
                    Expand your income while serving your community.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
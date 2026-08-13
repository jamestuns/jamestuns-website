import Image from "next/image";
export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
  id="home"
  className="relative overflow-hidden bg-white"
>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

          {/* Changed from 50/50 to 40/60 */}
          <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-green-700 font-semibold text-sm mb-6">
                Digital Financial & Business Solutions
              </div>

              <h1 className="text-[30px] lg:text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0F172A]">

                <span className="whitespace-nowrap">
                  Empowering Businesses.
                </span>

                <span className="block text-[#16A34A]">
                  Enriching Lives.
                </span>

              </h1>

              <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
                Your trusted partner for financial services,
                digital payments, business support and
                technology solutions that help individuals
                and businesses grow with confidence.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="#services"
                  className="rounded-xl bg-blue-900 text-white px-8 py-4 font-semibold hover:bg-blue-800 transition"
                >
                  Our Services →
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border-2 border-green-500 text-green-700 px-8 py-4 font-semibold hover:bg-green-500 hover:text-white transition"
                >
                  Become an Agent →
                </a>

              </div>

              <div className="mt-12 flex items-center gap-4">

<div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg flex items-center justify-center">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className="w-8 h-8"
  >
    <path d="M12 2L4 5v6c0 5.25 3.4 10.74 8 12 4.6-1.26 8-6.75 8-12V5l-8-3zm-1.2 13.3l-3-3 1.4-1.4 1.6 1.6 4-4 1.4 1.4-5.4 5.4z"/>
  </svg>

</div>

                <div>
                  <p className="font-bold text-slate-900">
                    Trusted Since 2012
                  </p>

                  <p className="text-gray-500">
                    Reliable. Secure. Professional.
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">

              <img
                src="/hero-team.webp"
                alt="Jamestuns"
                className="relative z-10 w-full max-w-5xl"
              />

            </div>

          </div>

        </div>
      </section>

      {/* ================= STATISTICS ================= */}

      <section className="-mt-6 relative z-30">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-3">👥</div>
              <h2 className="text-4xl font-bold text-blue-900">
                20+
              </h2>
              <p className="mt-2 text-gray-500">
                Business Agents
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-3">🏦</div>
              <h2 className="text-4xl font-bold text-green-600">
                15k+
              </h2>
              <p className="mt-2 text-gray-500">
                Monthly Transactions
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-3">📈</div>
              <h2 className="text-4xl font-bold text-blue-900">
                Since 2012
              </h2>
              <p className="mt-2 text-gray-500">
                Serving Customers
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h2 className="text-4xl font-bold text-green-600">
                100%
              </h2>
              <p className="mt-2 text-gray-500">
                Customer Focus
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Jamestuns Trading Venture
          </h1>

          <p className="text-xl max-w-2xl">
            Empowering Businesses Through Reliable Digital Payment Solutions.
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg">
            Become an Agent
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-xl p-8 border">
              <h3 className="text-xl font-bold mb-3">POS Services</h3>
              <p>
                Fast and secure POS terminals for withdrawals, deposits,
                transfers and bill payments.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-8 border">
              <h3 className="text-xl font-bold mb-3">
                Fintech Partnerships
              </h3>
              <p>
                Partnering with trusted fintech companies to deliver reliable
                financial solutions.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-8 border">
              <h3 className="text-xl font-bold mb-3">
                Agency Banking
              </h3>
              <p>
                Helping communities access convenient banking services close to
                home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          © {new Date().getFullYear()} Jamestuns Trading Venture. All rights
          reserved.
        </div>
      </footer>
    </main>
  );
}
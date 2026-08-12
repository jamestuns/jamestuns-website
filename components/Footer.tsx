export default function Footer() {
  return (
    <footer className="bg-[#071A52] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              Jamestuns
            </h2>

            <p className="text-blue-300 mb-6">
              Trading Venture
            </p>

            <p className="text-gray-300 leading-8">
              A trusted Digital Financial &
              Business Solutions company providing
              secure financial services,
              business support and innovative
              technology solutions across Nigeria.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li><a href="#">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#agent">Become an Agent</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>Financial Services</li>

              <li>Digital Payments</li>

              <li>Business Solutions</li>

              <li>Documentation</li>

              <li>Digital Solutions</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-300">

              <p>
                📍 1 Amusu street, Ilasa, Isolo, Lagos, Nigeria
              </p>

              <p>
                📞 +234 8039100957
              </p>

              <p>
                ✉ admin@jamestuns.com
              </p>

              <p>
                Mon - Sat
                <br />
                8:00 AM - 6:00 PM
              </p>

            </div>

          </div>

        </div>

        <hr className="border-blue-900 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-400 text-center md:text-left">

            © {new Date().getFullYear()} Jamestuns Trading Venture.
            All Rights Reserved.

          </p>

          <div className="flex gap-8 text-gray-400">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
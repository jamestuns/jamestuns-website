export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">

          <img
            src="/jamestuns-shield-logo.png"
            alt="Jamestuns Logo"
            className="w-20 h-20 object-contain border border-red-500"
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-500">
              Jamestuns
            </h1>
            <p className="text-2xl font-bold text-blue-500">
              Trading Venture
            </p>
          </div>

        </a>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-blue-700">Home</a></li>
          <li><a href="#about" className="hover:text-blue-700">About</a></li>
          <li><a href="#services" className="hover:text-blue-700">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
        </ul>

        <a
          href="#agent"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Become an Agent
        </a>

      </nav>
    </header>
  );
}
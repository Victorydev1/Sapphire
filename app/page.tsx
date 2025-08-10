import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <header className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center relative">
          <h1 className="text-xl font-bold text-blue-700">SapphireVirtual</h1>

          <Link href="/station/" className="text-black hover:text-blue-500 md:flex">
            Go to station
          </Link>

          <nav className="space-x-6 hidden md:flex">
            <Link
              href="/contact"
              className="bg-blue-700 text-white text-center py-2 px-4 rounded-2xl"
            >
              Contact Us
            </Link>
          </nav>

          <button className="md:hidden text-blue-600 text-2xl">☰</button>
        </div>
      </header>

      <section className="bg-gray-50 py-16 text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-semibold mb-6">
          All in One Smart, Secure Platform
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
          We make everyday expenses more accessible — from quick cash loans to
          flexible device financing and solar inverter solutions. They are all
          designed to keep you moving forward.
        </p>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="bg-blue-700 text-white text-center py-6 rounded">
            Device Financing
          </div>
          <div className="bg-cyan-500 text-white text-center py-6 rounded">
            Device Protection
          </div>
          <div className="bg-orange-400 text-white text-center py-6 rounded">
            Payday Loans
          </div>
          <div className="bg-blue-800 text-white text-center py-6 rounded">
            Solar Financing
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl text-black font-semibold mb-6">
          Trusted by Industry Leaders
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 px-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="text-gray-500 text-xs sm:text-sm">
              Company {i + 1}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">Careers</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Solutions</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/device-financing" className="hover:underline">
                  Device Financing
                </Link>
              </li>
              <li>
                <Link href="/protection" className="hover:underline">
                  Protection
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/help" className="hover:underline">Help Center</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs sm:text-sm text-gray-400">
          &copy; 2025 Sapphire Virtual. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

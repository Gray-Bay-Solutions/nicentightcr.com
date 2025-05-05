"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Nice&apos;n Tight Sportfishing</h3>
            <p className="mb-2 text-white">Playa Garza, Nosara</p>
            <p className="mb-2 text-white">Guanacaste, Costa Rica</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <p className="mb-2 text-white">Email: info@nicentightsportfishing.com</p>
            <p className="mb-2 text-white">WhatsApp: +506 8888-8888</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-primary-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-primary-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white hover:text-primary-light">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-white hover:text-primary-light">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-white">© {new Date().getFullYear()} Nice&apos;n Tight Sportfishing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
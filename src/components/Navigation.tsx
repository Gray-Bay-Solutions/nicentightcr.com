"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceLinks } from "@/lib/navigation";

const linkClass = "nav-link";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <Link href="/" className="shrink-0" aria-label="Nice'n Tight — home">
          <Image
            src="/images/logo.png"
            alt=""
            width={160}
            height={52}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className={linkClass}>
            Home
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={`nav-link inline-flex items-center gap-1`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((o) => !o)}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div
                className="absolute left-0 top-full z-50 mt-2 w-64 rounded-md border border-gray-200 bg-white py-1 shadow-lg"
                role="menu"
              >
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="block px-4 py-2.5 hover:bg-gray-50"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="block text-[15px] font-medium text-gray-800">{item.label}</span>
                    <span className="block text-sm text-gray-600">{item.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className={linkClass}>
            About
          </Link>
          <Link
            href="/booking"
            className="rounded-md bg-primary px-4 py-2 text-[15px] font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded p-2 text-gray-800 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link href="/" className="block py-2.5 text-gray-900" onClick={closeMobile}>
              Home
            </Link>

            <button
              type="button"
              className="nav-link flex w-full items-center justify-between py-2.5 text-left"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((o) => !o)}
            >
              Services
              <svg
                className={`h-4 w-4 text-gray-500 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="mb-2 border-l-2 border-gray-200 pl-4">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-gray-700"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" className="block py-2.5 text-gray-900" onClick={closeMobile}>
              About
            </Link>
            <Link
              href="/booking"
              className="mt-2 block rounded-md bg-primary py-2.5 text-center font-medium text-white"
              onClick={closeMobile}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

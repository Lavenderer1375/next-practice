"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey: (e: KeyboardEvent) => void = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#6C63FF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0 text-xl font-bold">NextPractice</div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((l: { href: string; label: string }) => (
              <Link key={l.href} href={l.href} className="hover:text-gray-300">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((s: boolean): boolean => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden transition-max-h duration-200 ease-in-out overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          {links.map((l: { href: string; label: string }) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-700"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

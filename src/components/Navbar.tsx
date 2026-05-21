"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#find-us", label: "Find Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-powder/95 backdrop-blur-sm shadow-md border-b border-tan/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/logo.jpg"
            alt="Mama's Donut Bites"
            width={52}
            height={52}
            className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
            priority
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-heading text-lg font-bold text-chocolate">
              Mama&apos;s Donut Bites
            </div>
            <div className="text-xs text-donut font-medium">
              Fresh Hot Mini Donuts
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-chocolate-light px-4 py-2 rounded-full text-sm font-semibold hover:text-raspberry hover:bg-raspberry/10 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-raspberry text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-raspberry-light hover:shadow-md transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-chocolate hover:bg-cream-dark transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1">
            <span
              className={`block h-0.5 bg-chocolate rounded transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-chocolate rounded transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-chocolate rounded transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-powder border-t border-tan/50 shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl font-semibold text-chocolate hover:text-raspberry hover:bg-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 px-4 py-3 rounded-xl font-bold bg-raspberry text-white text-center hover:bg-raspberry-light transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

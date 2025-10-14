"use client";

import React, { useEffect, useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section"); // selects your hero section
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting); // true when hero is out of viewport
      },
      {
        root: null,
        threshold: 0, // trigger as soon as any part of hero leaves
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#FF4820]/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left - Menu */}
          <button
            className="text-[#FF4820] hover:text-[#E63E1C] transition-colors z-50"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center pointer-events-none">
            <span
              className={`font-['Playfair_Display',serif] text-[#FF4820] font-normal transition-all duration-400 ${
                isScrolled
                  ? "opacity-100 translate-y-0 text-4xl"
                  : "opacity-0 -translate-y-4 text-2xl"
              }`}
            >
              re_
            </span>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-6">
            <button
              className="text-[#FF4820] hover:text-[#E63E1C] transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>

            <button
              className="text-[#FF4820] hover:text-[#E63E1C] font-['Playfair_Display',serif] transition-colors"
              aria-label="Order"
            >
              Order
            </button>

            <button
              className="text-[#FF4820] hover:text-[#E63E1C] transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="py-4 border-t border-[#FF4820]/10 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {["Shop", "About", "Blog", "Locations"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-navigation text-[#FF4820] hover:text-[#E63E1C] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import React, { useEffect, useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#FF4820]/10"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 relative">
            {/* Left — Menu button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="text-[#FF4820] hover:text-[#E63E1C] transition-colors z-[60]"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Center — Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center pointer-events-none">
              <span
                className={`font-['Playfair_Display',serif] text-[#FF4820] transition-all duration-500 ${
                  isScrolled
                    ? "opacity-100 translate-y-0 text-4xl"
                    : "opacity-0 -translate-y-3 text-2xl"
                }`}
              >
                re_
              </span>
            </div>

            {/* Right — Icons */}
            <div className="flex items-center space-x-6 z-[60]">
              <button
                className="text-[#FF4820] hover:text-[#E63E1C] transition-colors"
                aria-label="Search"
              >
                <Search className="w-6 h-6" />
              </button>
              <button
                className="text-[#FF4820] hover:text-[#E63E1C] font-['Playfair_Display',serif] text-lg transition-colors"
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
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-[#F9F7F2] text-[#FF4820] overflow-y-auto"
          >
            {/* Foreground content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex justify-between items-center px-8 py-6">
                <p className="text-lg font-medium">Menu</p>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#FF4820] text-lg font-medium hover:underline"
                >
                  Close
                </button>
              </div>

              {/* Menu Grid */}
              <div className="px-8 md:px-16 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8">
                {/* Column 1 */}
                <div className="space-y-2">
                  {[
                    "All 250+",
                    "New Arrivals 143",
                    "Bestsellers 250+",
                    "Staples 46",
                    "SALE 35",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-2xl hover:underline"
                    >
                      {item}
                    </a>
                  ))}
                  <button className="bg-[#FF4820] text-white px-5 py-3 rounded-full text-sm mt-6">
                    Select a Location ⌄
                  </button>
                </div>

                {/* Column 2 */}
                <div className="space-y-2">
                  {[
                    "Snacks 119",
                    "Bath & Body 112",
                    "Household 85",
                    "Reusables 66",
                    "Oils, Vinegars & Honey 23",
                    "Nuts & Seeds 39",
                    "Coffee & Tea 44",
                    "Superfoods 31",
                    "Herbs & Spices 75",
                    "Grains 31",
                    "Candy & Chocolate 48",
                    "Dried Fruit 28",
                    "Flours & Baking 37",
                    "Cereal 21",
                    "Legumes 13",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-2xl hover:underline"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="space-y-2">
                  {[
                    "Bundles 11",
                    "Packaged 51",
                    "In Store Only 23",
                    "Gifts Under $45 50",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-2xl hover:underline"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 4 */}
                <div className="space-y-4">
                  <div>
                    {["club / re_", "Account", "E-Gift Cards"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block hover:underline text-lg"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6">
                    {["Blog: The Scoop", "PopUp Shop", "Snack Rack"].map(
                      (item) => (
                        <a
                          key={item}
                          href="#"
                          className="block hover:underline text-lg"
                        >
                          {item}
                        </a>
                      )
                    )}
                  </div>
                  <div className="mt-6">
                    {["Our Ethos", "FAQs", "Careers"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block hover:underline text-lg"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

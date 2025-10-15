"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";
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

  // Dynamic color scheme
  const textColor = isScrolled ? "text-[#FF4820]" : "text-white";
  const hoverColor = isScrolled ? "hover:text-[#E63E1C]" : "hover:opacity-70";

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
        {/* Added top padding */}
        <div className="relative h-24 pt-3">
          {/* Left — Menu button */}
          <div className="absolute left-6 lg:left-12 flex items-center z-[60]">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className={`${textColor} ${hoverColor} transition-colors`}
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Center — Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center pointer-events-none">
            <span
              className={`font-['Playfair_Display',serif] transition-all duration-500 ${
                isScrolled
                  ? "text-[#FF4820] opacity-100 translate-y-0 text-5xl"
                  : "text-white opacity-0 translate-y-0 text-5xl"
              }`}
            >
              re_
            </span>
          </div>

          {/* Right — Icons */}
          <div className="absolute right-6 lg:right-12 flex items-center space-x-8 z-[60]">
            <button
              className={`${textColor} ${hoverColor} transition-colors`}
              aria-label="Search"
            >
              <Search className="w-7 h-7" />
            </button>

            {/* Order Button */}
            <button
              className={`font-['Playfair_Display',serif] text-xl px-6 py-2.5 rounded-full border transition-all duration-300 ${
                isScrolled
                  ? "bg-[#FF4820] text-white border-[#FF4820] hover:bg-[#E63E1C]"
                  : "bg-white text-[#FF4820] border-white hover:bg-[#f5f5f5]"
              }`}
              aria-label="Order"
            >
              Order
            </button>
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
            <div className="relative z-10">
              {/* Header */}
              <div className="flex justify-between items-center px-8 py-6">
                <p className="text-xl font-medium">Menu</p>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#FF4820] text-xl font-medium hover:underline"
                >
                  Close
                </button>
              </div>

              {/* Menu Grid */}
              <div className="px-8 md:px-16 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10">
                {/* Column 1 */}
                <div className="space-y-3">
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
                  <button className="bg-[#FF4820] text-white px-6 py-3 rounded-full text-base mt-6">
                    Select a Location ⌄
                  </button>
                </div>

                {/* Column 2 */}
                <div className="space-y-3">
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
                <div className="space-y-3">
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
                <div className="space-y-5">
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

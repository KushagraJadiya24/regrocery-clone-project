"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-[#F9F7F2] text-[#FF4528] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-8 py-6">
            <p className="text-lg font-medium">Menu</p>
            <button
              onClick={onClose}
              className="text-[#FF4528] text-lg font-medium hover:underline"
            >
              Close
            </button>
          </div>

          {/* Menu grid */}
          <div className="px-8 md:px-16 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 text-[#FF4528]">
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
              <button className="bg-[#ff4528f1] text-white px-5 py-3 rounded-full text-sm mt-6">
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
                <a href="#" className="block hover:underline text-lg">
                  club / re_
                </a>
                <a href="#" className="block hover:underline text-lg">
                  Account
                </a>
                <a href="#" className="block hover:underline text-lg">
                  E-Gift Cards
                </a>
              </div>
              <div className="mt-6">
                <a href="#" className="block hover:underline text-lg">
                  Blog: The Scoop
                </a>
                <a href="#" className="block hover:underline text-lg">
                  PopUp Shop
                </a>
                <a href="#" className="block hover:underline text-lg">
                  Snack Rack
                </a>
              </div>
              <div className="mt-6">
                <a href="#" className="block hover:underline text-lg">
                  Our Ethos
                </a>
                <a href="#" className="block hover:underline text-lg">
                  FAQs
                </a>
                <a href="#" className="block hover:underline text-lg">
                  Careers
                </a>
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-none">
            <h1 className="font-['Playfair_Display',serif] text-[#FF4528] text-[8rem] leading-none">
              re_
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;

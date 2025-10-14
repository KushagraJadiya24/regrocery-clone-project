"use client";

import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar background and logo after scrolling past hero (roughly 70vh)
      const heroHeight = window.innerHeight * 0.7;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white backdrop-blur-sm border-b border-[#FF4820]/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left - Menu */}
          <div className="flex items-center">
            <button
              className="text-[#FF4820] hover:text-[#E63E1C] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Center - Logo (appears on scroll) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <span 
              className={`font-['Playfair_Display',serif] text-[#FF4820] font-normal transition-all duration-500 ${
                isScrolled ? 'opacity-100 translate-y-0 text-4xl' : 'opacity-0 -translate-y-4 text-2xl'
              }`}
            >
              re_
            </span>
          </div>

          {/* Right - Search, Order, Cart */}
          <div className="flex items-center space-x-6">
            <button 
              className="text-[#FF4820] hover:text-[#E63E1C] transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>
            
            <button 
              className="text-[#FF4820] hover:text-[#E63E1C] transition-colors text-navigation font-['Playfair_Display',serif]"
              aria-label="Order"
            >
              Order
            </button>

            <button 
              className="text-[#FF4820] hover:text-[#E63E1C] transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile/Desktop Menu */}
        {isMobileMenuOpen && (
          <div className="py-4 border-t border-[#FF4820]/10">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-navigation text-[#FF4820] hover:text-[#E63E1C] transition-colors">
                Shop
              </a>
              <a href="#" className="text-navigation text-[#FFCABB] hover:text-[#FF4820] transition-colors">
                About
              </a>
              <a href="#" className="text-navigation text-[#FFCABB] hover:text-[#FF4820] transition-colors">
                Blog
              </a>
              <a href="#" className="text-navigation text-[#FFCABB] hover:text-[#FF4820] transition-colors">
                Locations
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7;
      const progress = Math.min(window.scrollY / heroHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scaling and opacity based on scroll progress
  const scale = 1 - scrollProgress * 0.85; // Shrinks from 1 to 0.15
  const opacity = 1 - scrollProgress * 1.2; // Fades out

  return (
    <section className="relative w-full h-[70vh] md:h-[70vh] lg:h-[100vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/aec75cf562ed3954245a8195f168a6ab396a6153-3840x2560-1.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Large "re_" text that shrinks on scroll */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1
          className="font-['Playfair_Display',serif] text-[#FF4820] font-normal transition-all duration-100"
          style={{
            fontSize: `${12 - scrollProgress * 10}rem`,
            transform: `scale(${scale})`,
            opacity: opacity,
          }}
        >
          re_
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

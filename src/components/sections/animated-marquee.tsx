import React from "react";

const words = ["refill", "rethink", "reuse"];
// Repeat the sequence to ensure it's wide enough for a seamless marquee effect across all screen sizes.
const marqueeContent = Array(20).fill(words).flat();

const MarqueeItems = () => (
  <>
    {marqueeContent.map((word, index) => (
      <span
        key={index}
        className="font-['Playfair_Display',serif] font-normal text-[#FF4528] tracking-[-0.03em] leading-none text-[3rem] md:text-[5rem] lg:text-[8rem] mx-4 lg:mx-6 whitespace-nowrap"
      >
        {word}
      </span>
    ))}
  </>
);

const AnimatedMarquee = () => {
  return (
    <section className="bg-background py-16 overflow-hidden">
      <div className="flex animate-marquee w-[200%]">
        {/* Repeat the content twice for seamless loop */}
        <MarqueeItems />
        <MarqueeItems />
      </div>
    </section>
  );
};

export default AnimatedMarquee;

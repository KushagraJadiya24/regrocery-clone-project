"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Assuming a scrollbar-hide utility class is defined globally.
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

interface Product {
  name: string;
  price: string;
  tags: string[];
  image: string;
  href: string;
}

const products: Product[] = [
  {
    name: "Pretzel Nuggets, Dark Chocolate, Peanut Butter",
    price: "$1.99–9.77",
    tags: ["Non-GMO"],
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/pretzel-nuggets-dark-chocolate-peanut-butter-re--0-25-lb-1192493078_500x-2.png",
    href: "https://regrocery.co/product/pretzel-nuggets-dark-chocolate-peanut-butter",
  },
  {
    name: "Pretzels, Peanut Butter Covered",
    price: "$1.20–14.95",
    tags: ["Non-GMO"],
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/pretzels-peanut-butter-covered-re--0-25-lb-1192493081_500x-3.png",
    href: "https://regrocery.co/product/pretzels-peanut-butter-covered",
  },
  {
    name: "Almond Clusters, Dark Chocolate",
    price: "$2.75–27.04",
    tags: ["Non-GMO"],
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/almond-clusters-dark-chocolate-re--0-25-lb-1192493083_500x-4.png",
    href: "https://regrocery.co/product/almond-clusters-dark-chocolate",
  },
  {
    name: "Nonpareils, Dark Chocolate",
    price: "$2.75–27.04",
    tags: ["Non-GMO", "Vegan"],
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/nonpareils-dark-chocolate-re--0-25-lb-1192493082_500x-5.png",
    href: "https://regrocery.co/product/nonpareils-dark-chocolate",
  },
  {
    name: "Banana Chips, Yogurt Covered",
    price: "$1.81–18.95",
    tags: ["Organic", "Non-GMO"],
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/banana-chips-yogurt-covered-re--0-25-lb-1192493085_500x-6.png",
    href: "https://regrocery.co/product/banana-chips-yogurt-covered",
  },
];
const ProductCard = ({ product }: { product: Product }) => (
  <div
    className="bg-[#F5F1E8] rounded-2xl p-6 flex-shrink-0 flex flex-col"
    style={{ width: "calc(25% - 4px)" }} // 25% minus adjusted gap
  >
    {/* Bigger grey square wrapper */}
    <div className="w-full flex justify-center">
      <div className="w-[400px] h-[420px] bg-gray-180 flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,0.08)]">
        {/* Larger circular image inside */}
        <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px"
          />
        </div>
      </div>
    </div>

    {/* Product info */}
    <div className="mt-6 flex flex-col flex-grow">
      <a
        href={product.href}
        className="text-primary font-semibold text-base leading-[1.4] hover:underline text-[#333333]"
      >
        {product.name}
      </a>
      <p className="text-[#FF4528] font-bold text-lg mt-1">{product.price}</p>
      <div className="mt-auto pt-2">
        <ul className="flex flex-wrap gap-2 mt-2">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="border-[1.5px] border-primary text-primary text-xs font-normal rounded-full px-3 py-1.5"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
const ProductCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector("div");
      if (firstCard) {
        const cardWidth = firstCard.clientWidth;
        const gap = 24; // same as gap-6
        scrollContainerRef.current.scrollBy({
          left: cardWidth + gap,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="bg-background py-16 overflow-hidden">
      <div className="container relative pl-0 pr-0 sm:pl-10 sm:pr-10">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 px-10 sm:px-0"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-4 sm:right-0 -translate-y-[calc(50%+0.75rem)] z-10 bg-[#FF4528] text-white w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Next"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;

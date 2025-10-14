import React from "react";
import Image from "next/image";

const instagramPosts = [
  {
    id: 1,
    alt: "Spotted at @goop HQ: the Snack Rack 🍭 Cut waste at your workplace with a customizable refill rack of organic goodies.",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/1ae6e0ecf6528b1b72b59514ba69e4c7df76222b-1123x2000-14.jpg",
    href: "https://www.instagram.com/p/DIEUiRcJMmw/",
  },
  {
    id: 2,
    alt: "Plastic-free produce 🥬 We have new seasonal fruits and veggies in, fresh for spring and without the plastic stickers. Come see our farmers market picks when you shop in person at all three re_ locations 🫐",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/0942d12864bc6ac510777f3acd16eee6e953dd90-1123x2000-15.jpg",
    href: "https://www.instagram.com/p/DHRD_nwpiMC/",
  },
  {
    id: 3,
    alt: "Eco ecomm 📦 When you shop an online order, you know it’s coming to you packaged sustainably as possible. ",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/588f0cae6bcbae09499a3e76d12a6f6bca8723cf-1123x2000-16.jpg",
    href: "https://www.instagram.com/p/DH0717OJdeR/",
  },
  {
    id: 4,
    alt: "“Should we pack a picnic?”   Shop our stainless steel containers, utensil sets, silicone bags, travel tumblers, and picnic eats at the link in bio → or stop by to add fresh produce to your basket 🍓",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/f5b34683c5c230267da5f01a49392fba6543bd34-1123x2000-17.jpg",
    href: "https://www.instagram.com/p/DHi4p1TpSb_/",
  },
];

const InstagramFeed = () => {
  return (
    <section className="container my-16">
      <div className="mb-8 flex flex-col items-center gap-y-4 md:flex-row md:items-center md:justify-between">
        <h2 className="font-display text-2xl text-primary">
          Follow us on Instagram
        </h2>
        <a
          href="https://www.instagram.com/re_grocery/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-block rounded-full border-2 border-primary bg-transparent px-6 py-2 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
        >
          @re_grocery
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={post.alt}
            className="group relative block aspect-square w-full overflow-hidden"
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;
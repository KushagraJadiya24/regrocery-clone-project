"use client";

import { useState } from 'react';

const linkColumns = [
  {
    links: [
      { text: "Our Ethos", href: "https://regrocery.co/page/about" },
      { text: "FAQs", href: "/page/about#body" },
      { text: "Glossary", href: "/page/glossary" },
      { text: "Press", href: "/page/press" },
      { text: "Careers", href: "/page/careers" },
      { text: "E-Gift Cards", href: "https://giftup.app/place-order/7c06b38e-8e26-403f-8023-c3f62454860b?platform=hosted" },
    ],
  },
  {
    links: [
      { text: "Blog: The Scoop", href: "https://regrocery.co/blog" },
      { text: "PopUp Shop", href: "/page/popup-shop" },
      { text: "Snack Rack", href: "https://regrocery.co/page/snack-rack" },
      { text: "Instagram", href: "https://instagram.com/re_grocery" },
      { text: "TikTok", href: "https://www.tiktok.com/@re_grocery" },
      { text: "Facebook", href: "https://www.facebook.com/regrocery/" },
    ],
  },
  {
    links: [
      { text: "club / re_", href: "https://regrocery.co/page/rewards" },
      { text: "Account", href: "https://regrocery.co/account" },
      { text: "Locations", href: "https://regrocery.co/page/locations" },
      { text: "Returns", href: "https://regrocery.co/page/returns" },
      { text: "Privacy", href: "https://regrocery.co/page/privacy" },
      { text: "Terms", href: "https://regrocery.co/page/terms" },
    ],
  },
];

const GreenBusinessBadge = () => {
  return (
    <span className="text-sm font-normal text-white/80">Green Business Certified</span>
  );
};


export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    // You can add your form submission logic here
  };

  return (
    <footer className="bg-[#FF4528] text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-8 lg:p-16">
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-5">
          {/* Row 1 */}
          <div className="lg:col-span-2">
            <h1 className="font-display text-[8rem] leading-none text-white -ml-2">
              re_
            </h1>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xl leading-[1.6]">
              re_ makes it easier and more affordable to shop sustainably. To do better than recycling. To say no to plastic altogether. Thanks to you, we’ve diverted over 500,000 items of packaging from landfill since opening on Earth Day 2020.
            </p>
          </div>

          {/* Row 2 */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="font-display text-[2.5rem] leading-tight text-white">
                Let's Keep in Touch
              </h3>
              <p className="mt-2 text-lg text-white/90">
                Sign-up for 10% off your first online order
              </p>
              <form
                className="mt-6"
                onSubmit={handleSubscribe}
              >
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-auto w-full border-none bg-white p-4 pr-32 text-lg text-black placeholder:text-gray-500 focus:ring-0"
                    style={{ borderRadius: '0.5rem', padding: '1rem' }}
                    aria-label="Email for newsletter"
                  />
                  <button
                    type="submit"
                    className="absolute right-[4px] top-[4px] bottom-[4px] rounded-[0.4rem] bg-[#FF4528] px-5 text-base font-normal text-white transition-opacity hover:opacity-90"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:col-span-3">
            <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {linkColumns.map((column, i) => (
                <ul key={i} className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.text}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-base leading-loose transition-opacity hover:opacity-80">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 border-t border-white/30 pt-8 sm:mt-24">
          <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-white/80">
              © 2025 re grocery inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <GreenBusinessBadge />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
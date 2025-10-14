"use client";

import React from "react";
import Image from "next/image";

const contentSections = [
  {
    title: "Stay in the Loop",
    description:
      "From sustainable lifestyle guides to zero-waste recipes, we're sharing it all on the blog.",
    cta: "The Scoop",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/e23122cffca38034faa39556722dbe7316418a89-1000x1500-8.jpg",
    imagePosition: "right",
  },
  {
    title: "We Pop Up!",
    description: "Check out where we'll be popping up next and come say hello!",
    cta: "PopUp Shop",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/af2abad99f4de0c8de38b9fa277e4e21d9909906-5368x8048-9.jpg",
    imagePosition: "left",
  },
  {
    title: "Zero-Waste Breakroom",
    description:
      "Bring sustainable snacking to your workplace with our corporate solutions.",
    cta: "Snack Rack",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2a74d097-d6b0-451b-aeec-2ac68614d93f-regrocery-co/assets/images/5625d254bc33debd5dbe07ce4e8bd6c10e58a615-1195x1827-7.jpg",
    imagePosition: "right",
  },
];

const ContentCardLoop = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {contentSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              section.imagePosition === "left"
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            } items-center gap-8 lg:gap-16 mb-24 lg:mb-32 last:mb-0`}
          >
            {/* Text Content */}
            <div className="w-full lg:w-2/5 space-y-6">
              <h2 className="text-section-heading-md text-primary">
                {section.title}
              </h2>
              <p className="text-body text-foreground">{section.description}</p>
              <button className="px-8 py-3 border-2 border-primary rounded-full text-button text-primary hover:bg-primary hover:text-white transition-all duration-300">
                {section.cta}
              </button>
            </div>

            {/* Bean-shaped Image */}
            <div className="w-full lg:w-3/5 flex justify-center">
              <div
                className="relative w-full max-w-[500px] lg:max-w-[700px] aspect-[2/3] overflow-hidden"
                style={{
                  borderRadius: "50% 50%  / 30% 30%",
                }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentCardLoop;

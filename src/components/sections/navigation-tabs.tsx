"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState("New Arrivals");
  const tabs = ["Staples", "New Arrivals", "Bestsellers"];

  return (
    <section className="my-12">
      <div className="overflow-x-auto">
        <nav
          className="flex items-center justify-center gap-x-4 px-4 md:gap-x-8"
          aria-label="Product categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "shrink-0 font-display text-[2rem] leading-none tracking-[-0.02em] transition-all duration-300 ease-in-out hover:scale-[1.02] md:text-[3.5rem]",
                activeTab === tab
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary/70"
              )}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default NavigationTabs;
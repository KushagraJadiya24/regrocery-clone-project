import React from 'react';

const OrderOptions = () => {
  return (
    <section className="bg-background py-24 px-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
          <a
            href="#"
            className="group flex h-auto w-full max-w-[400px] cursor-pointer items-center justify-center border-2 border-primary transition-colors duration-300 ease-in-out hover:bg-primary aspect-square lg:h-[400px] lg:w-[400px] lg:aspect-auto"
          >
            <span className="font-display text-[2rem] leading-none text-primary transition-colors duration-300 ease-in-out group-hover:text-white">
              Order Pickup
            </span>
          </a>

          <a
            href="#"
            className="group flex h-auto w-full max-w-[400px] cursor-pointer items-center justify-center rounded-full border-2 border-primary transition-colors duration-300 ease-in-out hover:bg-primary aspect-square lg:h-[400px] lg:w-[400px] lg:aspect-auto"
          >
            <span className="font-display text-[2rem] leading-none text-primary transition-colors duration-300 ease-in-out group-hover:text-white">
              Order Delivery
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderOptions;
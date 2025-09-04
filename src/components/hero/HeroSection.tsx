"use client";

import React from "react";
import { Button } from "antd";

const HeroSection = () => {
  return (

    <div className="flex flex-col items-center justify-center text-center text-white py-32 px-5 container">
      <p className="uppercase tracking-widest text-primary mb-3">Welcome</p>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
        Elevating <span className="text-primary">Trading.</span> <br />
        Because Every Decision Matters.
      </h1>
      <p className="text-lg text-gray-200 mt-4 max-w-2xl">
        Smarter, autonomous trading systems powered by HALO — our proprietary AI engine.
      </p>
      <div className="flex gap-4 mt-8">
        <Button
          type="primary"
          size="large"
          className="!bg-primary !border-none !px-8 !rounded-full"
        >
          Explore Products
        </Button>
        <Button
          size="large"
          className="!bg-transparent !border !border-white !text-white !px-8 !rounded-full hover:!bg-white hover:!text-black"
        >
          View Pricing
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

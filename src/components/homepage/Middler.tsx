"use client";

import bgImage from "@/assets/middler.png";

import ProductsSection from "./ProductSection";
import TestimonialsSection from "./Testominal";

const Middler = () => {
  return (
    <div 
      className="relative  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <ProductsSection />
        {/* <TestimonialsSection /> */}
        
      </div>
    </div>
  );
};

export default Middler;
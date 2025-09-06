"use client";

import bgImage from "@/assets/bg-other.png";
import Navbar from "../shared/navbar copy/Navbar";
import ProductHeader from "./ProductHeader";




const ProductHero = () => {
  return (
    <div 
      className="relative  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <ProductHeader/>
       
        
        
      </div>
    </div>
  );
};

export default ProductHero;
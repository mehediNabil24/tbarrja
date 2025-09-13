"use client";

import bgImage from "@/assets/bg-other.png";
import Navbar from "../shared/navbar copy/Navbar";
import FaqHeader from "./FaqHeader";



const FaqHero = () => {
  return (
    <div 
      className="relative  bg-cover bg-center bg-no-repeat"
        style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%", // take full width & height
        backgroundPosition: "center", 
        // optional: center the image
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <FaqHeader/>
       
        
        
      </div>
    </div>
  );
};

export default FaqHero;
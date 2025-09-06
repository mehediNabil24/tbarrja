"use client";

import bgImage from "@/assets/bg-other.png";
import Navbar from "../shared/navbar copy/Navbar";
import PrivacyHeader from "./PrivacyHeader";




const PrivacyHero = () => {
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
        <PrivacyHeader/>
       
        
        
      </div>
    </div>
  );
};

export default PrivacyHero;
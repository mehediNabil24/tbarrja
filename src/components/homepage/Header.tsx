"use client";

import bgImage from "@/assets/bg.jpg";
import Navbar from "../shared/navbar copy/Navbar";
import HeroSection from "../hero/HeroSection";

const Header = () => {
  return (
    <div 
      className="relative  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 scroll-smooth">
        <Navbar />
        <HeroSection />

      </div>
    </div>
  );
};

export default Header;
"use client";

import bgImage from "@/assets/bg-faq.png";

import SubscriptionPricing from "./SubscriptionPricing";
import SubscriptionRules from "./SubscriptionRules";

const MainPricing = () => {
  return (
    <div 
      className="relative  bg-cover  bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <SubscriptionPricing></SubscriptionPricing>
        <SubscriptionRules></SubscriptionRules>
        
      </div>
    </div>
  );
};

export default MainPricing;
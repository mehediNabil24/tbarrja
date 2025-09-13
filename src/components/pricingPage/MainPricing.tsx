"use client";

import bgImage from "@/assets/service.png";

import SubscriptionPricing from "./SubscriptionPricing";
import SubscriptionRules from "./SubscriptionRules";

const MainPricing = () => {
  return (
    <div
      className="relative bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%", // take full width & height
        backgroundPosition: "center", 
        // optional: center the image
      }}
    >
      {/* Optional overlay */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}

      {/* Content */}
      <div className="relative z-10">
        <SubscriptionPricing />
        <SubscriptionRules />
      </div>
    </div>
  );
};

export default MainPricing;

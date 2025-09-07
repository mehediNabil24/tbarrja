import FaqSection from "@/components/homepage/Faq";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyPolicy from "@/components/privacy/PrivacyPolicy";
import React from "react";

export default function page() {
  return (
    <div>
      <PrivacyHero />
      <PrivacyPolicy></PrivacyPolicy>
      <div className="block lg:hidden">
        <FaqSection></FaqSection>
      </div>
    </div>
  );
}

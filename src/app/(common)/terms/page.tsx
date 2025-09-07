import FaqSection from "@/components/homepage/Faq";
import TermsHero from "@/components/terms/TermsHero";
import TermsOfService from "@/components/terms/TermsService";
import React from "react";

export default function page() {
  return (
    <div>
      <TermsHero></TermsHero>
      <TermsOfService></TermsOfService>
      <div className="block lg:hidden">
        <FaqSection></FaqSection>
      </div>
    </div>
  );
}

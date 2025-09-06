import ContactSection from "@/components/homepage/ContactUs";
import FaqSection from "@/components/homepage/Faq";
import Header from "@/components/homepage/Header";
import Middler from "@/components/homepage/Middler";
import TradingPlatform from "@/components/homepage/MoreThanNo";
import PricingSection from "@/components/homepage/PrcingPlan";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";


const HompPage = () => {
  return <div >
    <Header></Header>
    <TradingPlatform></TradingPlatform>
    <WhyChooseUs></WhyChooseUs>
    <Middler></Middler>
    <PricingSection></PricingSection>
    <ContactSection></ContactSection>
    <FaqSection></FaqSection>
  </div>;
};

export default HompPage;

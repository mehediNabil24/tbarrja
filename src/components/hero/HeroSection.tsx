import Image from "next/image";

import image1 from "@/assets/logo/dash.png";

export default function HeroSection() {
  return (
    <div id="about" className=" scroll-smooth bg-transparent ">
      {/* Hero Content */}
      <div className="  container mx-auto px-6 pt-10 ">
        {/* Welcome Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent w-16" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">WELCOME</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-16" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-[60px] font-bold text-white leading-tight mb-4">
            Elevating{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Trading
            </span>
            . Because Every
            <br />
            Decision Matters.
          </h1>
          <p className="text-[#C1C1C1] font-medium text-[16px] md:text-lg max-w-3xl mx-auto leading-relaxed">
            Smarter, autonomous trading systems powered by HALO — our proprietary AI engine.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          
          
          <button className="px-6 py-2 bg-gradient-to-b from-[#B3B8BB00] to-[#8AA8B099] text-white font-bold rounded-full hover:from-[#bac8cc99] hover:to-[#B3B8BB00] transition duration-300">
  EXPLORE PRODUCTS
</button>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-900 to-purple-900 text-white border border-white font-bold rounded-full hover:from-purple-800 hover:to-purple-950 transition duration-300">
  VIEW PRICING
</button>
        </div>

        {/* Dashboard Mockup replaced by Image */}
        <div className="max-w-6xl mx-auto broder border-purple-300 border-x-[10px] border-t-[10px] rounded-t-[26px]">
  <Image
    src={image1}
    alt="Dashboard Mockup"
    className="w-full rounded-t-2xl shadow-2xl border-b-0"
  />
</div>

      </div>
    </div>
  );
}

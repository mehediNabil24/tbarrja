'use client';
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import image1 from "@/assets/Rectangle 161124012 (5).png";
import bgImage from "@/assets/pricing-plan.png";
import { useRouter } from "next/navigation";

export default function PricingSection() {
  const router = useRouter();
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-justify"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <section id="pricing" className="relative px-6 py-12 sm:py-16 lg:px-12 lg:py-24 overflow-hidden">
        <div className="relative container mx-auto">
          <div className="grid gap-8 sm:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="space-y-3 sm:space-y-4 text-center lg:text-start  mb-8 lg:mb-0">
                <p className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] text-sm sm:text-base bg-clip-text text-transparent font-medium tracking-wider uppercase">
                  PRICING PLAN
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight lg:leading-tight">
                  Transparent
                  <br />
                  Pricing. No
                  <br />
                  Gatekeeping.
                </h2>
              </div>

               <div className="rounded-xl lg:hidden overflow-hidden">
                  <Image
                    src={image1}
                    alt="Golden bull with digital trading elements and city lights"
                    width={800}
                    height={600}
                    className="w-full h-auto md:h-[450px] lg:h-[850px] object-cover"
                  />
                </div>

              <p className="text-[#C1C1C1] text-base sm:text-lg leading-relaxed sm:leading-relaxed lg:leading-relaxed">
                Why should you need insider access, special connections, or backdoor deals just to get fair pricing? We&apos;ve seen the games other platforms play — offering different prices to different people, hiding costs until the last minute, or rewarding those who know someone.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                At <span className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent font-semibold">The TRADING Hub</span>, we&apos;re doing things differently.
              </p>

              <p className="text-[#C1C1C1] text-base sm:text-lg leading-relaxed">
                Everyone gets the same straightforward pricing, no matter who you are or where you came from. No fine print. No gimmicks. No exclusivity. Just clear, fair, and honest pricing from day one because we believe trust starts with transparency. And in this business, trust is everything.
              </p>

              <div className="bg-gradient-to-tr from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent rounded-lg py-4 sm:py-6">
                <p className="font-medium text-base sm:text-lg leading-relaxed">
                  Click here to view our pricing and discover exactly what you get, no surprises, no pressure, just facts
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">

              <button
                onClick={() => router.push("/pricing")}
                className="relative inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-white tracking-wide 
                           bg-gradient-to-b from-[#223046] to-[#162030] 
                           shadow-[0_0_15px_rgba(50,100,100,0.5)] sm:shadow-[0_0_20px_rgba(50,100,100,0.6)] 
                           border border-white/20 
                           hover:shadow-[0_0_20px_rgba(77,208,255,0.5)] sm:hover:shadow-[0_0_25px_rgba(77,208,255,0.5)] 
                           transition-all duration-300 text-sm sm:text-base"
              >
                PRICING PLAN
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block w-full">
              <div className="relative rounded-2xl overflow-hidden p-1">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={image1}
                    alt="Golden bull with digital trading elements and city lights"
                    width={800}
                    height={600}
                    className="w-full h-auto md:h-[450px] lg:h-[850px] object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

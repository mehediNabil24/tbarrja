'use client';
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import image1 from "@/assets/bull.png"
import bgImage from "@/assets/pricing-plan.png"
import { useRouter } from "next/navigation"

export default function PricingSection() {
  const router = useRouter();
  return (

     <div 
      className="relative  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
    <section id="pricing" className="relative px-6 py-16 lg:px-12 lg:py-24  overflow-hidden">
     

      <div className="relative container">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] text-[20px] bg-clip-text text-transparent font-medium tracking-wider uppercase">PRICING PLAN</p>
              <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight">
                Transparent
                <br />
                Pricing. No
                <br />
                Gatekeeping.
              </h2>
            </div>

            <p className="text-[#C1C1C1] text-lg leading-relaxed">
              Why should you need insider access, special connections, or backdoor deals just to get fair pricing? We&apos;ve
              seen the games other platforms play — offering different prices to different people, hiding costs until
              the last minute, or rewarding those who know someone.
            </p>

            <p className="text-gray-300 leading-relaxed">
              At <span className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent  font-semibold">The TRADING Hub</span>, we&apos;re doing things differently.
            </p>

            <p className="text-[#C1C1C1] leading-relaxed">
              Everyone gets the same straightforward pricing, no matter who you are or where you came from. No fine
              print. No gimmicks. No exclusivity. Just clear, fair, and honest pricing from day one because we believe
              trust starts with transparency. And in this business, trust is everything.
            </p>

            <div className="bg-gradient-to-tr from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent  rounded-lg p-6">
              <p className=" font-medium leading-relaxed">
                Click here to view our pricing and discover exactly what you get, no surprises, no pressure, just facts
              </p>
            </div>

             <button  onClick={() => router.push("/pricing")}
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white tracking-wide 
      bg-gradient-to-b from-[#223046] to-[#162030] 
      shadow-[0_0_20px_rgba(50,100,100,0.6)] 
      border border-white/20 
      hover:shadow-[0_0_25px_rgba(77,208,255,0.5)] 
      transition-all duration-300"
            >
              PRICING PLAN
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden p-1">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={image1}
                  alt="Golden bull with digital trading elements and city lights"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

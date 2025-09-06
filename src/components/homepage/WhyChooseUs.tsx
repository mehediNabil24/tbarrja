import Image from "next/image"
import image1 from "@/assets/bg-4.png"
import image2 from "@/assets/the-trading-hub.png"

export default function WhyChooseUs() {
  return (
   
      <div 
      className="relative  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image1.src})` }}
    >

        <div className="px-6 py-16 lg:px-12 lg:py-24">

       

      <div id="why-us" className="relative scroll-smooth container">
        <div className="flex flex-col lg:flex-row gap-8  lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8 w-full lg:w-[55%] xl:w-[50%]">
            <div className="space-y-2">
              <p className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] text-[20px] bg-clip-text text-transparent  font-bold tracking-wider uppercase">
                WHY CHOOSE US
              </p>
              <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight">
                Why Traders
                <br />
                Choose The
                <br />
                TRADING Hub
              </h2>
            </div>

            <p className="text-[#C1C1C1] text-[20px] leading-relaxed">
              Because we&apos;re not like the others — and that&apos;s by design. After experiencing firsthand how most trading
              platforms overpromise and underdeliver, we set out to build something different. Not just another platform
              with a fancy name only. But a platform that&apos;s truly intelligent, fully automated, and built to perform
              without interruptions, not just backtests.
            </p>

            <p className="text-[#C1C1C1] text-[20px]  leading-relaxed">
              At THE TRADING HUB, our commitment goes beyond automation. We stand for transparency, innovation, and real
              support for our traders. We constantly adapt to the fast-moving financial landscape, leveraging
              cutting-edge AI to keep you ahead of the curve.
            </p>

            <p className="text-[#C1C1C1] text-[20px]  leading-relaxed">
              That&apos;s why traders choose us — for a smarter, safer, and more modern way to trade.
            </p>

            <p className="text-[#C1C1C1] text-[20px]  leading-relaxed">We&apos;re not just keeping up with the market.</p>

            <h3 className="text-2xl font-bold text-white">We&apos;re leading it with:</h3>
          </div>

          {/* Right Logo/Brand */}
          <div className="w-full lg:w-[45%] xl:w-[50%] ">
            <div className="relative">
              <Image
                src={image2}
                alt="THE TRADING HUB Logo"
                width={400}
                height={300}
                className="w-full h-auto lg:h-[850px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
   <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* Feature 1 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">Multiple Battle-Tested Expert Advisors</h4>
              <p className=" text-lg text-[#C1C1C1]">
                Diversified strategies that are time-proven, data-backed, and built to win.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">Consistent Performance, Zero Guesswork</h4>
              <p className="text-lg text-[#C1C1C1]">
                Precision-engineered to perform without emotional interference or manual intervention.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">Live Account Performance Dashboard</h4>
              <p className="text-lg text-[#C1C1C1]">
                Transparency you can trust, track real results from your accounts, 24/7.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">Low Drawdown, High Accuracy, Reliable Results.</h4>
              <p className="text-lg text-[#C1C1C1]">
                Designed for stability, with every trade focused on efficiency and outcome.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">Real-Time Market Intelligence</h4>
              <p className="text-lg text-[#C1C1C1]">
                Powered by HALO — cutting-edge analysis for smarter, faster decisions.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">Safety-First Execution</h4>
              <p className="text-lg text-[#C1C1C1]">
                Our tech prioritizes account protection and trade quality over hype or volume.
              </p>
            </div>
          </div>

          {/* Feature 7 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">100% Hands-Free Trading</h4>
              <p className="text-lg text-[#C1C1C1]">
                Set it, forget it. Our fully autonomous system does the heavy lifting while you stay in control.
              </p>
            </div>
          </div>

          {/* Feature 8 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">White Glove Onboarding</h4>
              <p className="text-lg text-[#C1C1C1]">
                Get started fast with our expert-led setup, no stress, no confusion, just results.
              </p>
            </div>
          </div>

          {/* Feature 9 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">Built-in Risk Protection</h4>
              <p className="text-lg text-[#C1C1C1]">
                Smart safeguards are always active, your capital stays defended, no matter the market.
              </p>
            </div>
          </div>

          {/* Feature 10 */}
          <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-lg font-bold">Keep What You Earn</h4>
              <p className="text-lg text-[#C1C1C1]">
                No hidden fees, no performance cuts. 100% of your profits are yours to keep.
              </p>
            </div>
          </div>
        </div>
      </div>
       </div>
      </div>

  )
}

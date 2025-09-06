import Image from "next/image";
import image1 from "@/assets/bg-4.png";
import image2 from "@/assets/Rectangle 161124012 (3).png";

export default function WhyChooseUs() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image1.src})` }}
    >
      <div className="px-6 py-12 sm:py-16 lg:px-12 lg:py-24">
        <div id="why-us" className="relative scroll-smooth container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 w-full lg:w-[55%] xl:w-[50%]">
              <div className="space-y-1 sm:space-y-2">
                <p className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent font-bold tracking-wider uppercase text-sm sm:text-base">
                  WHY CHOOSE US
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight lg:leading-tight">
                  Why Traders
                  <br />
                  Choose The
                  <br />
                  TRADING Hub
                </h2>
              </div>

              <p className="text-gray-300 text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-relaxed lg:leading-relaxed">
                Because we&apos;re not like the others — and that&apos;s by design. After experiencing firsthand how most trading platforms overpromise and underdeliver, we set out to build something different. Not just another platform with a fancy name only. But a platform that&apos;s truly intelligent, fully automated, and built to perform without interruptions, not just backtests.
              </p>

              <p className="text-gray-300 text-base sm:text-lg lg:text-[20px] leading-relaxed">
                At THE TRADING HUB, our commitment goes beyond automation. We stand for transparency, innovation, and real support for our traders. We constantly adapt to the fast-moving financial landscape, leveraging cutting-edge AI to keep you ahead of the curve.
              </p>

              <p className="text-gray-300 text-base sm:text-lg lg:text-[20px] leading-relaxed">
                That&apos;s why traders choose us — for a smarter, safer, and more modern way to trade.
              </p>

              <p className="text-gray-300 text-base sm:text-lg lg:text-[20px] leading-relaxed">
                We&apos;re not just keeping up with the market.
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                We&apos;re leading it with:
              </h3>
            </div>

            {/* Right Logo/Brand */}
            <div className="w-full lg:w-[45%] xl:w-[50%]">
              <div className="relative">
                <Image
                  src={image2}
                  alt="THE TRADING HUB Logo"
                  width={800}
                  height={600}
                  className="w-full h-auto lg:h-[850px] rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
            {[
              {
                title: "Multiple Battle-Tested Expert Advisors",
                description:
                  "Diversified strategies that are time-proven, data-backed, and built to win.",
              },
              {
                title: "Consistent Performance, Zero Guesswork",
                description:
                  "Precision-engineered to perform without emotional interference or manual intervention.",
              },
              {
                title: "Live Account Performance Dashboard",
                description:
                  "Transparency you can trust, track real results from your accounts, 24/7.",
              },
              {
                title: "Low Drawdown, High Accuracy, Reliable Results.",
                description:
                  "Designed for stability, with every trade focused on efficiency and outcome.",
              },
              {
                title: "Real-Time Market Intelligence",
                description:
                  "Powered by HALO — cutting-edge analysis for smarter, faster decisions.",
              },
              {
                title: "Safety-First Execution",
                description:
                  "Our tech prioritizes account protection and trade quality over hype or volume.",
              },
              {
                title: "100% Hands-Free Trading",
                description:
                  "Set it, forget it. Our fully autonomous system does the heavy lifting while you stay in control.",
              },
              {
                title: "White Glove Onboarding",
                description:
                  "Get started fast with our expert-led setup, no stress, no confusion, just results.",
              },
              {
                title: "Built-in Risk Protection",
                description:
                  "Smart safeguards are always active, your capital stays defended, no matter the market.",
              },
              {
                title: "Keep What You Earn",
                description:
                  "No hidden fees, no performance cuts. 100% of your profits are yours to keep.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-base sm:text-lg">C</span>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h4 className="text-white text-base sm:text-lg lg:text-lg font-bold">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-[20px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

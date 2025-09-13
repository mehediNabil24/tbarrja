import Image from "next/image";
import image1 from "@/assets/Rectangle 161124012 (1).png";
import image2 from "@/assets/Rectangle 161124012 (2).png";

export default function TradingPlatform() {
  return (
    <div id="about" className="bg-slate-900 text-justify">
      {/* First Section - More Than Numbers */}
      <section className="relative px-6 py-12 sm:py-16 lg:px-12 lg:py-24 ">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row lg:gap-16 gap-8 items-center">
            {/* Left Image (now below text on mobile) */}
            <div className="w-full hidden lg:block lg:w-[55%]">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={image1}
                  alt="Trading monitors displaying charts and market data"
                  width={800}
                  height={600}
                  className="w-full h-auto lg:h-[850px] object-cover"
                />
              </div>
            </div>

            {/* Right Content (now appears first on mobile) */}
            <div className="w-full lg:w-[45%] space-y-4 sm:space-y-4 ">
              <div className="space-y-2 text-center lg:text-start sm:space-y-4 mb-8 lg:mb-0">
                <p className="bg-gradient-to-t  from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent font-bold tracking-wider uppercase text-sm sm:text-base">
                  ABOUT US
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight lg:leading-tight">
                  More Than Numbers
                  <br />A Mission With
                  <br />
                  Purpose
                </h2>
              </div>
               <div className="relative lg:hidden rounded-2xl overflow-hidden">
                <Image
                  src={image1}
                  alt="Trading monitors displaying charts and market data"
                  width={800}
                  height={600}
                  className="w-full h-auto lg:h-[850px] object-cover"
                />
              </div>

              <p className="text-gray-300 text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-relaxed lg:leading-relaxed">
                At THE TRADING HUB, we believe trading is more than charts and technicalities. It&apos;s a mission.
              </p>

             <div className="space-y-3 sm:space-y-3">
  <div className="flex items-start gap-3">
    <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
    <p className="text-white font-medium text-base sm:text-lg lg:text-[20px]">
      A Mission to&nbsp;
      <span className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent">
        empower
      </span>
    </p>
  </div>

  <div className="flex items-start gap-3">
    <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
    <p className="text-white font-medium text-base sm:text-lg lg:text-[20px]">
      A Mission to&nbsp;
      <span className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent">
        evolve
      </span>
    </p>
  </div>

  <div className="flex items-start gap-3">
    <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
    <p className="text-white font-medium text-base sm:text-lg lg:text-[20px]">
      A Mission to&nbsp;
      <span className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent">
        guide and grow
      </span>, the capital that matters most to you.
    </p>
  </div>
</div>


              <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-[20px]">
                We’re here to level the playing field. By democratizing access to intelligent, self-directed trading systems, The TRADING Hub is making the future of finance more inclusive, and far more powerful.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-[20px]">
                This isn’t just about automation. It’s about equipping you with the edge to win, confidently, consistently, and intelligently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - AI That Understands */}
      <section className="relative px-6 py-12 sm:py-16 lg:px-10 lg:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-16 gap-8 items-center">
            {/* Left Content (always first on mobile) */}
            <div className="w-full lg:w-[45%] space-y-4 sm:space-y-4">
              <div className="space-y-2 sm:space-y-4 text-center lg:text-start mb-8 lg:mb-0">
                <p className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent text-sm sm:text-base font-medium tracking-wider uppercase">
                  INTRODUCING HALO
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight lg:leading-tight">
                  AI That Understands
                  <br />
                  the Markets — and
                  <br />
                  You
                </h2>
              </div>

              <div className="relative lg:hidden rounded-2xl overflow-hidden">
                <Image
                  src={image2}
                  alt="Hand interacting with tablet showing trading interface"
                  width={800}
                  height={600}
                  className="w-full h-auto lg:h-[850px] object-cover"
                />
              </div>

              <p className="text-gray-300 text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-relaxed lg:leading-relaxed">
                Meet HALO, our groundbreaking, context-aware AI trading engine. HALO isn&apos;t just software. It&apos;s the culmination of years of research, innovation, and testing built to deliver a truly autonomous, high-performance trading experience.
              </p>

              <p className="text-gray-300 text-base sm:text-lg lg:text-[20px] leading-relaxed">
                HALO combines cutting-edge machine learning, real-time data pipelines, and intelligent execution logic to deliver trades that are:
              </p>

              <div className="space-y-2 sm:space-y-3">
                {["Faster", "Smarter", "Adaptable", "Unbiased"].map((trait, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-white rounded-full flex-shrink-0"></div>
                    <p className="text-white text-base sm:text-lg lg:text-[20px] font-medium">{trait}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 text-base sm:text-lg lg:text-[20px] leading-relaxed">
                Unlike conventional trading bots, HALO learns as it trades, constantly refining its strategies based on real-world conditions. It analyzes live market data, identifies patterns, and executes trades with extreme precision, so you can trade smarter without lifting a finger.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full hidden lg:block lg:w-[55%]">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={image2}
                  alt="Hand interacting with tablet showing trading interface"
                  width={800}
                  height={600}
                  className="w-full h-auto lg:h-[850px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

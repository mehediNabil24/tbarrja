import Image from "next/image";
import { ArrowRight } from "lucide-react";
import image1 from "@/assets/Rectangle 161124012 (4).png";
import { useRouter } from "next/navigation";

export default function ProductsSection() {
  const router = useRouter();

  return (
    <section id="product" className="relative px-6 py-12 sm:py-16 lg:px-12 lg:py-24 bg-transparent">
      <div className="mx-auto container">
        <div className="grid gap-8 sm:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Image */}
          <div className="relative w-full">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={image1}
                alt="Professional businessman holding smartphone with trading charts in city background"
                width={800}
                height={600}
                className="w-full h-auto md:h-[450px] lg:h-[850px] object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-3 sm:space-y-4">
              <p className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent text-sm sm:text-base font-medium tracking-wider uppercase">
                PRODUCTS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight lg:leading-tight">
                Explore our portfolio
                <br />
                of Expert Advisors
              </h2>
            </div>

            <p className="text-[#C1C1C1] text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-relaxed lg:leading-relaxed">
              Explore our portfolio of Expert Advisors, each carefully engineered to align with different levels of investor risk tolerance and performance goals. From conservative strategies to aggressive growth systems, each Expert Advisor system is backed by real-time AI, live performance data, and seamless risk management, giving you the power to choose what fits you best.
            </p>

            <p className="text-[#C1C1C1] text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Prefer a fully personalized experience? Discover our curated EA&M, which blends our top performing strategies into one high-efficiency solution — optimized, diversified, and built for consistent results.
            </p>

            <p className="text-[#C1C1C1] text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Click below to view sample performance for each Expert Advisor and EA&M — giving you a clear preview of how each strategy operates, so you can make an informed decision before going live. Full performance results for all possible combinations are available to subscribers to help you choose the setup that best fits your goals.
            </p>

            <button
              onClick={() => router.push("/products")}
              className="relative inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-white tracking-wide 
                         bg-gradient-to-b from-[#223046] to-[#162030] 
                         shadow-[0_0_15px_rgba(50,100,100,0.5)] sm:shadow-[0_0_20px_rgba(50,100,100,0.6)] 
                         border border-white/20 
                         hover:shadow-[0_0_20px_rgba(77,208,255,0.5)] sm:hover:shadow-[0_0_25px_rgba(77,208,255,0.5)] 
                         transition-all duration-300 text-sm sm:text-base"
            >
              PRODUCTS
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

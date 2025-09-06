import Image from "next/image";
import { ArrowRight } from "lucide-react";
import image1 from "@/assets/product.png";
import { useRouter } from "next/navigation";

export default function ProductsSection() {
  const router = useRouter();
  return (
    <section id="product" className="relative px-6 py-16 lg:px-12 lg:py-24 bg-transparent">
      <div className="mx-auto container">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={image1}
                alt="Professional businessman holding smartphone with trading charts in city background"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] bg-clip-text text-transparent   text-[20px] font-medium tracking-wider uppercase">
                PRODUCTS
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Explore our portfolio
                <br />
                of Expert Advisors
              </h2>
            </div>

            <p className="text-[#C1C1C1] text-[20px] leading-relaxed">
              Explore our portfolio of Expert Advisors, each carefully
              engineered to align with different levels of investor risk
              tolerance and performance goals. From conservative strategies to
              aggressive growth systems, each Expert Advisor system is backed by
              real-time AI, live performance data, and seamless risk management,
              giving you the power to choose what fits you best.
            </p>

            <p className="text-[#C1C1C1] text-[20px] leading-relaxed">
              Prefer a fully personalized experience? Discover our curated EA&M,
              which blends our top performing strategies into one
              high-efficiency solution — optimized, diversified, and built for
              consistent results.
            </p>

            <p className="text-[#C1C1C1] text-[20px] leading-relaxed">
              Click below to view sample performance for each Expert Advisor and
              EA&M — giving you a clear preview of how each strategy operates,
              so you can make an informed decision before going live. Full
              performance results for all possible combinations are available to
              subscribers to help you choose the setup that best fits your
              goals.
            </p>

            <button  onClick={() => router.push("/products")}
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white tracking-wide 
      bg-gradient-to-b from-[#223046] to-[#162030] 
      shadow-[0_0_20px_rgba(50,100,100,0.6)] 
      border border-white/20 
      hover:shadow-[0_0_25px_rgba(77,208,255,0.5)] 
      transition-all duration-300"
            >
              PRODUCTS
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { ArrowRight } from "lucide-react";
import Image1 from "@/assets/faq.png";
import { useRouter } from "next/navigation";

export default function FaqSection() {
  const router = useRouter();

  return (
    <div id="faq" className="bg-slate-900">
      <section className="relative px-6 py-12 sm:py-16 lg:px-12 lg:py-24 rounded-2xl overflow-hidden">
        
        {/* Background Image */}
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-2xl"
          style={{ backgroundImage: `url(${Image1.src})` }}
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

          {/* Content */}
          <div className="relative p-6 sm:p-8 md:p-12 mx-auto max-w-4xl text-center">
            <div className="space-y-6 sm:space-y-8">
              
              {/* Section Label */}
              <p className="text-purple-600 text-sm sm:text-base font-medium tracking-wider uppercase">
                FAQ
              </p>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight lg:leading-tight">
                Looking For Answers?
                <br />
                Start Here.
              </h2>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg lg:text-lg leading-relaxed max-w-3xl mx-auto">
                We understand that clarity is key when making important decisions. That&apos;s why we&apos;ve compiled a comprehensive
                FAQ section to address the most common questions and provide detailed, transparent information. We encourage
                you to explore this resource; we&apos;ve done our best to anticipate what you might need to know.
              </p>

              {/* Button */}
              <div className="pt-4">
                <button
                  onClick={() => router.push("/faq")}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-purple-600 bg-white hover:bg-white/90 transition-colors text-sm sm:text-base"
                >
                  FAQ
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

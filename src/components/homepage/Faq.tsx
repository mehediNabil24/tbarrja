'use client';
import { ArrowRight } from "lucide-react"

import Image1 from "@/assets/faq.png"
import { useRouter } from "next/navigation"

export default function FaqSection() {
    const router = useRouter();
  return (
    <div id="faq" className="bg-slate-900">
    <section className="relative px-6 py-16 lg:px-12 rounded-2xl  lg:py-24">
      {/* Background Image */}
      <div 
        className="relative   bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Image1.src})` }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative p-8  mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <p className="text-purple-600 text-[20px] font-medium tracking-wider uppercase">FAQ</p>

            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Looking For Answers?
              <br />
              Start Here.
            </h2>

            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
              We understand that clarity is key when making important decisions. That's why we've compiled a comprehensive
              FAQ section to address the most common questions and provide detailed, transparent information. We encourage
              you to explore this resource; we've done our best to anticipate what you might need to know.
            </p>

            <div className="pt-4">
              <button  onClick={() => router.push("/faq")} className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
                FAQ
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

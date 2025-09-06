"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import bgImage from "@/assets/bg-faq.png"

const faqData = [
  {
    id: "01",
    question: "Do You Provide Financial Advice?",
    answer:
      "No, we do not. THE TRADING HUB is not a financial advisor, asset manager, or investment advisor. All investment decisions are made by you, based on your own goals, financial profile, and risk tolerance. We provide powerful trading systems; you remain fully in control.",
  },
  {
    id: "02",
    question: "Do I Have to Sit Through a Sales Call or Zoom Meeting?",
    answer:
      "No sales calls required. Our platform is designed for self-service onboarding with comprehensive documentation and support resources available 24/7.",
  },
  {
    id: "03",
    question: "Is Your Pricing Hidden or Only Shared If I Ask?",
    answer:
      "All our pricing is transparent and publicly available. No hidden fees, no surprise charges - everything is clearly outlined on our pricing page.",
  },
  {
    id: "04",
    question: "Do I Have to Send You My Investment Capital?",
    answer:
      "No, you maintain full control of your capital. Your funds stay in your own brokerage account - we never handle or hold your money.",
  },
  {
    id: "05",
    question: "Why Are You Asking for My Account Number and Password?",
    answer:
      "We use secure API connections to your broker. We never ask for passwords - only API keys that you can revoke at any time while maintaining full account security.",
  },
  {
    id: "06",
    question: "Why Do I Have to Use a Broker From Your List?",
    answer:
      "We work with regulated, reputable brokers that support our API integrations. This ensures reliable execution and proper risk management for all trades.",
  },
  {
    id: "07",
    question: "Is This Just a Copy Trading Service or a Simple Bot?",
    answer:
      "Neither. HALO is an advanced AI system that makes independent trading decisions based on real-time market analysis, not copying other traders or following simple rules.",
  },
  {
    id: "08",
    question: "What's the Minimum Starting Investment?",
    answer:
      "The minimum varies by broker and account type, typically starting from $1,000. However, we recommend starting with at least $5,000 for optimal performance and risk management.",
  },
]

export default function FaqAccordion() {
  const [openItem, setOpenItem] = useState<string>("01")

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? "" : id)
  }

  return (

     <div 
      className="relative bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    <section
      className="relative px-6 py-16 lg:px-12 lg:py-24 bg-cover bg-center bg-no-repeat"
     
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Looking for Answers?</h2>
          <p className="text-gray-400 text-lg">
            Our FAQ covers the most common concerns about AI trading, pricing, and safety.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-700/30 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="text-gray-400 font-mono text-lg font-medium">{item.id}</span>
                  <h3 className={`text-lg font-semibold ${openItem === item.id ? "text-pink-400" : "text-white"}`}>
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openItem === item.id ? (
                    <Minus className="w-6 h-6 text-pink-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-white" />
                  )}
                </div>
              </button>

              {openItem === item.id && (
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

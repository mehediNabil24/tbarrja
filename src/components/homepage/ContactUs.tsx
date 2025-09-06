"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="relative px-6 py-16 lg:px-12 lg:py-24 bg-slate-900">
      <div className="mx-auto container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="bg-gradient-to-t from-[#4DD0FF] to-[#FF00A8] text-[20px] bg-clip-text text-transparent  font-medium tracking-wider uppercase">CONTACT US</p>
              <h2 className="text-4xl lg:text-[60px] font-bold text-white leading-tight">
                Let's Talk
                <br />
                Trading
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">Have questions or ready to get started? We're here.</p>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white text-sm font-medium">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white text-sm font-medium">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                  <p className="text-gray-400 text-xs">
                    Note: Email providers can be picky—be sure to check your Spam/Junk folder just in case we ended up
                    there. We promise we're worth finding!
                  </p>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-white text-sm font-medium">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                  <p className="text-gray-400 text-xs">
                    Whether you're ready to move forward, have questions, or simply want to learn more—we're here and
                    ready to connect.
                  </p>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white text-sm font-medium">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
              <button
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white tracking-wide 
      bg-gradient-to-b from-[#223046] to-[#162030] 
      shadow-[0_0_20px_rgba(50,100,100,0.6)] 
      border border-white/20 
      hover:shadow-[0_0_25px_rgba(77,208,255,0.5)] 
      transition-all duration-300"
            >
              CONTACT US
              <ArrowRight className="w-5 h-5" />
            </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

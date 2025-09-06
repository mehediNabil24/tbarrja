import { Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from "lucide-react"
import Image from "next/image"
import logo from "@/assets/logo/Asset 3 1.png"

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 px-6 py-16 lg:px-12">
      <div className="mx-auto container">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-16">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-6">
            <Image
              src={logo}
              alt="THE TRADING HUB Logo"
              className="h-12 w-auto"
            />

            <p className="text-gray-300 text-sm leading-relaxed">
              Smarter, autonomous trading systems powered by HALO — our proprietary AI engine.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-500 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-gray-300" />
              </div>
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-500 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-gray-300" />
              </div>
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-500 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-300" />
              </div>
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-500 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5 text-gray-300" />
              </div>
              <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-500 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Company</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Why us
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Products
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Useful Links</h4>
            <div className="space-y-3">
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="/terms" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Services
              </a>
              <a href="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Investor Login Button */}
          <div className="">
            <button
              className="relative inline-flex items-center gap-3 px-10 py-3 rounded-full font-bold text-white tracking-wide 
      bg-gradient-to-b from-[#223046] to-[#162030] 
      shadow-[0_0_20px_rgba(50,100,100,0.6)] 
      border border-white/20 
      hover:shadow-[0_0_25px_rgba(77,208,255,0.5)] 
      transition-all duration-300"
            >
              INVESTOR LOGIN
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-600">
          <p className="text-gray-400 text-base">
            © 2025 <span className="bg-gradient-to-tr from-[#4DD0FF] to-[#FF00A8] text-[20px] bg-clip-text text-transparent font-semibold">THE TRADING HUB</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

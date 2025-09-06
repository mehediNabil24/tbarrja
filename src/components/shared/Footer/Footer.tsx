'use client';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo/Asset 3 1.png";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 px-6 py-12 sm:py-16 lg:px-12">
      <div className="mx-auto container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">

          {/* Logo and Description */}
          <div className="space-y-6">
            <Image
              src={logo}
              alt="THE TRADING HUB Logo"
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Smarter, autonomous trading systems powered by HALO — our proprietary AI engine.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-500 transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-gray-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Company</h4>
            <div className="space-y-2 sm:space-y-3">
              {["Home", "About", "Why us", "Product", "Pricing", "Testimonials", "FAQ", "Contact"].map((link, idx) => (
                <a
                  key={idx}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Useful Links</h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                { name: "Contact", href: "#contact" },
                { name: "FAQ", href: "#faq" },
                { name: "Terms of Services", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Investor Login Button */}
          <div className="flex justify-start sm:justify-center lg:justify-end items-start ">
            <button
              className="relative inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-white tracking-wide 
                bg-gradient-to-b from-[#223046] to-[#162030] 
                shadow-[0_0_20px_rgba(50,100,100,0.6)] 
                border border-white/20 
                hover:shadow-[0_0_25px_rgba(77,208,255,0.5)] 
                transition-all duration-300 text-sm sm:text-base"
            >
              INVESTOR LOGIN
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-600 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 <span className="bg-gradient-to-tr from-[#4DD0FF] to-[#FF00A8] text-[18px] sm:text-[20px] bg-clip-text text-transparent font-semibold">THE TRADING HUB</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

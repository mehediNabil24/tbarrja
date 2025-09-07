"use client";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo/Asset 3 1.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 px-6 py-12 sm:py-16 lg:px-12">
      <div className="mx-auto container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Logo and Description */}
          <div className="space-y-6 flex flex-col items-start sm:items-start">
            <Image
              src={logo}
              alt="THE TRADING HUB Logo"
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Smarter, autonomous trading systems powered by HALO — our
              proprietary AI engine.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-500 transition-colors cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-gray-300" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Company Links */}
           <div className="space-y-6">
  <h4 className="text-white font-semibold text-lg">Company</h4>
  <div className="space-y-2 sm:space-y-3">
    <Link
      href="/"
      className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
    >
      Home
    </Link>
    <a href="#about" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
      About
    </a>
    <a href="#why-us" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
      Why us
    </a>
    <a href="/products" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
      Product
    </a>
    <a href="/pricing" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
      Pricing
    </a>
    <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
      Testimonials
    </a>
    <a href="/faq" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
      FAQ
    </a>
    <a href="#contact" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
      Contact
    </a>
  </div>
</div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Useful Links</h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                { name: "Contact", href: "#contact" },
                { name: "FAQ", href: "/faq" },
                { name: "Terms of Services", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
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
          <div className="flex justify-start sm:justify-start lg:justify-end items-start mt-4 sm:mt-0">
            <button className="text-[12px] sm:text-[14px] tracking-wide font-semibold text-white px-4 sm:px-6 py-2 rounded-full overflow-hidden bg-gradient-to-b from-[#B3B8BB00] to-[#8AA8B099] shadow-[inset_0_1px_8px_rgba(255,255,255,0.4),0_0_10px_rgba(0,0,0,0.5)] border border-white/20 hover:brightness-110 transition-all flex items-center gap-2 w-full sm:w-auto justify-center whitespace-nowrap">
              INVESTOR LOGIN
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-600 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025{" "}
            <span className="bg-gradient-to-tr from-[#4DD0FF] to-[#FF00A8] text-[18px] sm:text-[20px] bg-clip-text text-transparent font-semibold">
              THE TRADING HUB
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

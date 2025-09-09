"use client";

import logo from "@/assets/logo/Asset 3 1.png";
import { DownOutlined, MenuOutlined, GlobalOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // 👈 import
import DrawerPage from "./Drawer";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname(); // 👈 get current path

  const navItems = [
    { key: "home", label: "Home", href: "/" },
    { key: "about", label: "About", href: "/#about" },
    { key: "why-us", label: "Why us", href: "/#why-us" },
    { key: "products", label: "Products", href: "/products" },
    { key: "pricing", label: "Pricing", href: "/pricing" },
    { key: "testimonials", label: "Testimonials", href: "/#testimonials" },
    { key: "faq", label: "FAQ", href: "/faq" },
    { key: "contact", label: "Contact", href: "/#contact" },
  ];

  const languageMenu = (
      <Menu>
    <Menu.Item key="en">English</Menu.Item>
    <Menu.Item key="fil">Filipino</Menu.Item>
    <Menu.Item key="jp">Japanese</Menu.Item>
    <Menu.Item key="man">Mandarin</Menu.Item>
    <Menu.Item key="ch">Chinese</Menu.Item>
    <Menu.Item key="kr">Korean</Menu.Item>
    <Menu.Item key="pt">Portuguese</Menu.Item>
    <Menu.Item key="hi">Hindi</Menu.Item>
  </Menu>
  );

  return (
    <div className="w-full bg-transparent text-white py-5 md:py-6 lg:py-7 top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="
              w-[240px] sm:w-[240px] md:w-[240px] 
              lg:w-[140px] xl:w-[240px] 2xl:w-[240px]
            "
            width={240}
            height={200}
            priority
          />
        </Link>

        {/* Menu links */}
        <div className="hidden lg:flex gap-4 xl:gap-6 text-[13px] xl:text-[14px] font-medium">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname === item.href.replace("/#", "");
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`duration-300 ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "text-white hover:text-purple-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right buttons */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <Dropdown overlay={languageMenu}>
            <div className="flex items-center gap-1 cursor-pointer hover:text-purple-300 duration-300 text-[13px] xl:text-[14px]">
              <GlobalOutlined /> English{" "}
              <DownOutlined style={{ fontSize: 12 }} />
            </div>
          </Dropdown>
          <button className="relative text-[12px] xl:text-[14px] tracking-wide font-semibold text-white px-4 xl:px-6 py-2 rounded-full overflow-hidden bg-gradient-to-b from-[#B3B8BB00] to-[#8AA8B099] shadow-[inset_0_1px_8px_rgba(255,255,255,0.4),0_0_10px_rgba(0,0,0,0.5)] border border-white/20 hover:brightness-110 transition-all flex items-center gap-2">
            INVESTOR LOGIN
          </button>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden flex items-center">
          <div
            onClick={() => setOpen(true)}
            className="p-2 border rounded-md hover:bg-purple-800 cursor-pointer"
          >
            <MenuOutlined className="text-[14px]" />
          </div>
        </div>
      </div>
      <DrawerPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;

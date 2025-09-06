"use client";

import logo from "@/assets/logo/Asset 3 1.png";
import { DownOutlined, MenuOutlined, GlobalOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DrawerPage from "./Drawer";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navItems = [
    { key: "home", label: "Home", href: "/" },
    { key: "about", label: "About", href: "#about" },
    { key: "why-us", label: "Why us", href: "#why-us" },
    { key: "products", label: "Products", href: "#product" },
    { key: "pricing", label: "Pricing", href: "#pricing" },
    { key: "testimonials", label: "Testimonials", href: "#testimonials" },
    { key: "faq", label: "FAQ", href: "#faq" },
    { key: "contact", label: "Contact", href: "#contact" },
  ];

  const languageMenu = (
    <Menu>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="es">Spanish</Menu.Item>
    </Menu>
  );

  return (
    <div className="w-full bg-transparent text-white py-7  top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-[240px]"
            width={300}
            height={200}
          />
        </Link>

        {/* Menu links */}
        <div className="hidden lg:flex gap-6 text-[14px] font-medium text-white">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="hover:text-purple-300 duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Dropdown overlay={languageMenu}>
            <div className="flex items-center gap-1 cursor-pointer hover:text-purple-300 duration-300">
              <GlobalOutlined /> English{" "}
              <DownOutlined style={{ fontSize: 12 }} />
            </div>
          </Dropdown>
         <button className="relative text-[14px] tracking-wide font-semibold text-white px-6 py-2 rounded-full overflow-hidden bg-gradient-to-b from-[#B3B8BB00]  to-[#8AA8B099] shadow-[inset_0_1px_8px_rgba(255,255,255,0.4),0_0_10px_rgba(0,0,0,0.5)] border border-white/20 hover:brightness-110 transition-all flex items-center gap-2">
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

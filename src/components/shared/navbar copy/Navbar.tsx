"use client";

import logo from "@/assets/logo/logo.png";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import DrawerPage from "./Drawer";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const navItems = [
    {
      key: "events",
      label: "Events",
      children: [
        { key: "upcomint-events", label: "Upcoming Events", href: "/upcomming-events" },
        { key: "past-events", label: "Past Events", href: "/past-events" },
      ],
    },
    {
      key: "exhibitions",
      label: "Exhibitions",
      children: [
        { key: "upcomint-exhibitions", label: "Upcoming Exhibitions", href: "/exhibition/upcomming-exhibitions" },
        { key: "past-exhibitions", label: "Past Exhibitions", href: "/exhibition/past-exhibitions" },
      ],
    },
    { key: "galleries", label: "Galleries", href: "/galleries" },
    { key: "workshops-&-course", label: "Workshops & Courses", href: "/workshops&courses" },
    { key: "blogs", label: "Blogs", href: "/blog" },
    { key: "shop", label: "Shop", href: "/shop" },
    { key: "about", label: "About", href: "/about" },
  ];

  const eventsMenu = (
    <Menu>
      {navItems.find((item) => item.key === "events")?.children?.map((child) => (
        <Menu.Item key={child.key}>
          <Link href={child.href}>{child.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const exhibitionMenu = (
    <Menu>
      {navItems.find((item) => item.key === "exhibitions")?.children?.map((child) => (
        <Menu.Item key={child.key}>
          <Link href={child.href}>{child.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="relative py-5 bg-transparent container">
      <div
        className="container flex justify-between items-center"
        style={{ fontFamily: "sans-serif", fontSize: "16px", height: "64px", gap: "20px" }}
      >
        <Link href="/" className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold">
          <Image src={logo} className="w-[120px]" width={300} height={200} alt="logo" />
        </Link>

        {/* Links */}
        <div className="hidden lg:flex gap-5 text-white">
          {navItems.map((item) => {
            if (item.key === "events") {
              return (
                <Dropdown key={item.key} overlay={eventsMenu}>
                  <Link href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-1 hover:text-primary duration-300">
                    {item.label} <DownOutlined style={{ fontSize: "12px" }} />
                  </Link>
                </Dropdown>
              );
            }
            if (item.key === "exhibitions") {
              return (
                <Dropdown key={item.key} overlay={exhibitionMenu}>
                  <Link href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-1 hover:text-primary duration-300">
                    {item.label} <DownOutlined style={{ fontSize: "12px" }} />
                  </Link>
                </Dropdown>
              );
            }
            return (
              <Link
                key={item.key}
                href={item.href || ""}
                className="hover:text-primary duration-300"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-2 text-white">
          <div
            onClick={() => setSearchOpen(!searchOpen)}
            className="mr-5 hover:bg-gray-300/30 duration-300 p-2 rounded-full cursor-pointer"
          >
            <FaSearch size={20} />
          </div>
          <Link href={"/signup"} className="hover:text-primary duration-300">
            Sign Up
          </Link>
          |
          <Button className="!p-5 !border-none hover:!bg-primary/80 hover:!text-white">
            List with us
          </Button>
        </div>

        {/* Menu icon */}
        <div className="lg:hidden flex items-center text-white">
          <div
            onClick={() => setSearchOpen(!searchOpen)}
            className="mr-5 hover:bg-gray-300/30 duration-300 p-2 rounded-full cursor-pointer"
          >
            <FaSearch size={20} />
          </div>
          <div
            onClick={() => setOpen(true)}
            className="border p-3 py-2 hover:bg-primary hover:text-white"
          >
            <MenuOutlined className="text-xl mt-1" />
          </div>
        </div>
      </div>
      <DrawerPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;

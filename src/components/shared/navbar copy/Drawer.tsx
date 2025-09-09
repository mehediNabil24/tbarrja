"use client";

import { CloseOutlined, GlobalOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer, Dropdown, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DrawerProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const DrawerPage = ({ open, setOpen }: DrawerProps) => {
  const pathname = usePathname();

  const onClose = () => {
    setOpen(false);
  };

  const linkClasses = (href: string) =>
    `duration-300 ${
      pathname === href ? "text-purple-400 font-semibold" : "text-white hover:text-purple-300"
    }`;

  // Language menu
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
    <Drawer
      title=""
      placement="right"
      onClose={onClose}
      open={open}
      className="!bg-gray-900 !text-white !p-6"
      closeIcon={<CloseOutlined className="text-2xl !text-white" />}
    >
      {/* Navigation Links */}
      <div className="flex flex-col gap-4 text-lg font-medium">
        <Link href="/" onClick={onClose} className={linkClasses("/")}>
          Home
        </Link>
        <Link href="#about" onClick={onClose} className={linkClasses("/about")}>
          About
        </Link>
        <Link href="#why-us" onClick={onClose} className={linkClasses("/why-us")}>
          Why us
        </Link>
        <Link href="/products" onClick={onClose} className={linkClasses("/products")}>
          Products
        </Link>
        <Link href="/pricing" onClick={onClose} className={linkClasses("/pricing")}>
          Pricing
        </Link>
        <Link href="#testimonials" onClick={onClose} className={linkClasses("/testimonials")}>
          Testimonials
        </Link>
        <Link href="/faq" onClick={onClose} className={linkClasses("/faq")}>
          FAQ
        </Link>
        <Link href="#contact" onClick={onClose} className={linkClasses("/contact")}>
          Contact
        </Link>
      </div>

      <Divider className="border-gray-700 my-6" />

      {/* Language Dropdown */}
      <div className="mb-4">
        <Dropdown overlay={languageMenu} trigger={['click']}>
          <Button className="w-full flex items-center justify-between text-white font-semibold py-3 rounded-full bg-transparent border border-white/20 hover:bg-purple-700 hover:text-white transition-all">
            <span className="flex items-center gap-2">
              <GlobalOutlined /> English
            </span>
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <Button
          className="w-full text-white font-semibold py-3 rounded-full bg-transparent border border-white/20 hover:bg-purple-700 hover:text-white transition-all"
        >
          INVESTOR LOGIN
        </Button>
      </div>
    </Drawer>
  );
};

export default DrawerPage;

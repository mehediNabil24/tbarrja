/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ReactNode, useState } from "react";
import {  useRouter } from "next/navigation";

import logo from "@/assets/logo/Asset 3 1.png";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

import { MdLogout } from "react-icons/md";

const { Header, Content, Sider } = Layout;

export type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface AdminLayoutProps {
  children: ReactNode;
  menu: MenuItem[];
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, menu }) => {
  const [open, setOpen] = useState<boolean>(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  // const pathname = usePathname();
  const router = useRouter();

  const [selectedKey, setSelectedKey] = useState("/dashboard");

  const handleClick = ({ key }: any) => {
    setSelectedKey(key);
  };

  const handleLogout = () => {
    // Clear session or tokens
    localStorage.removeItem("token");
    // Redirect to login page
    router.push("/login");
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={220}
        className={`!bg-[#121826] !overflow-y-auto !fixed lg:!static h-full !text-white z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        theme="dark"
        collapsed={false}
      >
        <Link
          href={"/"}
          className="flex justify-center items-center py-3 border-b border-[#ffffff1a]"
        >
          <Image className="w-[150px]" src={logo} alt="logo" />
        </Link>

        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={handleClick}
          items={menu}
          style={{
            backgroundColor: "#121826",
            fontWeight: "500",
            color: "white",
          }}
          inlineIndent={16}
          rootClassName="custom-sidebar"
        />
      </Sider>

      <Layout>
        {/* Header */}
        <Header
          style={{
            padding: 0,
            background: "#121826",
            color: "#ffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "24px",
            paddingLeft: "24px",
          }}
        >
          {/* Welcome text */}
          <h2 className="text-xl hidden text-white lg:block sm:text-2xl lg:text-3xl font-semibold w-full">
            Welcome back!
          </h2>

          {/* Mobile menu toggle */}
          <MenuOutlined
            onClick={() => setOpen(!open)}
            className="lg:!hidden text-2xl"
          />

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2  ml-4"
          >
            <MdLogout size={30} />
            Logout
          </button>
        </Header>

        {/* Content */}
        <Content
          className="!overflow-y-auto !overflow-x-hidden"
          onClick={() => setOpen(false)}
          style={{ padding: "24px", height: "100%" }}
        >
          {children}
        </Content>

        {/* Footer (optional) */}
        {/* <Footer
          style={{
            textAlign: "start",
            background: "white",
            padding: "16px 24px",
          }}
        >
          @the trading hub all rights reserved.
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

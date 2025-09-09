"use client";

import AdminLayout from "@/components/shared/layout/Layout";

import Link from "next/link";
import { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { getItem, MenuItem } from "../Layout";

const navItems: MenuItem[] = [
  getItem(
    <Link href="/dashboard">Dashboard</Link>,
    "/dashboard",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/addProduct">Add Product</Link>,
    "/dashboard/addProduct",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/productList">Product List</Link>,
    "/dashboard/productList",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/addPricing">Add Pricing</Link>,
    "/dashboard/addPricing",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/pricingList">Pricing List </Link>,
    "/dashboard/pricingList",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/addRules">Add Subscription Rules </Link>,
    "/dashboard/addRules",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/allRules">All Subscription Rules </Link>,
    "/dashboard/allRules",
    <LuLayoutDashboard />
  ),
];

const SuperAdminLayout = ({ children }: { children: ReactNode }) => {
  return <AdminLayout menu={navItems}>{children}</AdminLayout>;
};

export default SuperAdminLayout;

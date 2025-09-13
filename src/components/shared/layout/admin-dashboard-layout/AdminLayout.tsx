"use client";

import AdminLayout from "@/components/shared/layout/Layout";

import Link from "next/link";
import { ReactNode } from "react";
import { LuBookOpen, LuDollarSign, LuFacebook, LuFile, LuList, LuLogIn, LuMessageCircle, LuPen, LuPlus, LuScroll, LuShield, LuShoppingCart, LuStar, LuUser } from "react-icons/lu";
import { getItem, MenuItem } from "../Layout";

const navItems: MenuItem[] = [
  getItem(
    <Link href="/dashboard">Profile</Link>,
    "/dashboard",
    <LuUser />
  ),
  getItem(
    <Link href="/dashboard/addProduct">Add Product</Link>,
    "/dashboard/addProduct",
    <LuPlus />
  ),
  getItem(
    <Link href="/dashboard/productList ">Product List</Link>,
    "/dashboard/productList",
    <LuShoppingCart />
  ),
  getItem(
    <Link href="/dashboard/addPricing">Add Pricing</Link>,
    "/dashboard/addPricing",
    <LuPen />
  ),
  getItem(
    <Link href="/dashboard/pricingList">Pricing List </Link>,
    "/dashboard/pricingList",
    <LuDollarSign />
  ),
  getItem(
    <Link href="/dashboard/addRules">Add Subscription Rules </Link>,
    "/dashboard/addRules",
    <LuFile />
  ),
  getItem(
    <Link href="/dashboard/allRules">All Subscription Rules </Link>,
    "/dashboard/allRules",
    <LuList />
  ),
  getItem(
    <Link href="/dashboard/addReview">Add Testimonial </Link>,
    "/dashboard/addReview",
    <LuPen />
  ),
  getItem(
    <Link href="/dashboard/reviewList">Testimonial List </Link>,
    "/dashboard/reviewList",
    <LuStar />
  ),
  getItem(
    <Link href="/dashboard/addFaq">Add FAQ </Link>,
    "/dashboard/addFaq",
    <LuBookOpen />
  ),
  getItem(
    <Link href="/dashboard/faqList">FAQ List </Link>,
    "/dashboard/faqList",
    <LuMessageCircle />
  ),
  getItem(
    <Link href="/dashboard/term">Terms and Conditions </Link>,
    "/dashboard/term",
    <LuScroll />
  ),
  getItem(
    <Link href="/dashboard/privacy">Privacy Policy </Link>,
    "/dashboard/privacy",
    <LuShield />
  ),
  getItem(
    <Link href="/dashboard/social">Social Addresses </Link>,
    "/dashboard/social",
    <LuFacebook />
  ),
  getItem(
    <Link href="/dashboard/investor">Investor login </Link>,
    "/dashboard/investor",
    <LuLogIn />
  ),
];

const SuperAdminLayout = ({ children }: { children: ReactNode }) => {
  return <AdminLayout menu={navItems}>{children}</AdminLayout>;
};

export default SuperAdminLayout;

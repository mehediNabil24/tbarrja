"use client";
import logo from "@/assets/logo/logo.png";
import MyButton from "@/components/ui/MyButton/MyButton";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import image1 from "@/assets/bg (5).png"

const ForPc = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image1} // 🔹 replace with your background image path
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Transparent Navbar */}
      <div className="container hidden lg:flex py-3 items-center justify-between bg-black/40 backdrop-blur-sm rounded-xl mx-auto mt-2">
        <Link href={"/"}>
          <div className="flex items-center gap-2 h-full -ml-4 w-28">
            <Image
              src={logo}
              alt="Booksy.buzz"
              width={400}
              height={400}
              className="rounded object-contain"
            />
          </div>
        </Link>

        <div className="flex items-center gap-5 text-base text-white">
          <NavMenu />
        </div>

        <div>
          <Link href={"/login"}>
            <MyButton title="Login" className="rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForPc;

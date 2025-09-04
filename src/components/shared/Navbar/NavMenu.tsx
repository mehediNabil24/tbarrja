"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({
  className,
}: {
  className?: string;
  isShowBorder?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div className={cn("flex  gap-6  font-normal ps-3", className)}>
      <Link href={"/"}>
        <div
          // className="cursor-pointer hover:text-primary transition duration-200"
          className={cn(
            "cursor-pointer hover:text-primary transition duration-200",
            pathname === "/" && "text-primary font-semibold"
          )}
        >
          Home
        </div>
      </Link>
      <Link href={"/about"}>
        <div
          // className="cursor-pointer hover:text-primary transition duration-200"
          className={cn(
            "cursor-pointer hover:text-primary transition duration-200",
            pathname === "/about" && "text-primary font-semibold"
          )}
        >
          About Us
        </div>
      </Link>
      <Link href={"/contact"}>
        <div
          // className="cursor-pointer hover:text-primary transition duration-200"
          className={cn(
            "cursor-pointer hover:text-primary transition duration-200",
            pathname === "/contact" && "text-primary font-semibold"
          )}
        >
          Contact Us
        </div>
      </Link>
    </div>
  );
};

export default NavMenu;

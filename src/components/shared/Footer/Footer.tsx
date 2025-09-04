"use client";
import logo from "@/assets/logo/logo.png";
import { cn } from "@/lib/utils";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdMailOutline, MdOutlineCall } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { RiHomeOfficeLine, RiLinkedinFill } from "react-icons/ri";
import NavMenu from "../Navbar/NavMenu";
import { usePathname } from "next/navigation";

const thirdRow = [
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Blog",
    link: "/blogs",
  },
  {
    title: "Reviews",
    link: "/reviews",
  },
  // {
  //   title: "Certification",
  //   link: "/certification",
  // },
  {
    title: "Careers",
    link: "/career",
  },
  {
    title: "Financing",
    link: "/finance",
  },
  {
    title: "Service Area",
    link: "/service-area",
  },
];
const forthRow = [
  {
    title: (
      <a
        href="https://www.google.com/maps/search/?api=1&query=16555+South+Oak+Park+Ave,+Tinley+Park,+IL+60477"
        target="_blank"
      >
        16555 South Oak Park Ave, Tinley Park, IL 60477
      </a>
    ),
    icon: <PiBuildingOffice />,
  },
  {
    title: "8200 Beckett Park Dr West Chester Township OH 45069",
    icon: <RiHomeOfficeLine />,
  },

  {
    title: <a href="tel:708-949-4553">708-949-4553</a>,
    icon: <MdOutlineCall />,
  },
  {
    title: <a href="mailto:info@arcroofs.com">info@arcroofs.com</a>,
    icon: <MdMailOutline />,
  },
];
const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="bg-black py-20">
      <div className="container">
        <div className=" grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-6">
            <div className="h-24 w-56 ">
              <Image
                src={logo}
                className="object-contain"
                height={400}
                width={400}
                alt="image"
              />
            </div>
            <p className="text-gray-light text-base font-medium">
              Business description goes here. It should be concise and
              informative, providing an overview of the services offered.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-[#36607b] p-2 rounded-md text-white">
                <FaFacebookF size={18} />
              </div>
              <div className="bg-[#36607b] p-2 rounded-md text-white">
                <RiLinkedinFill size={20} />
              </div>
              <div className="bg-[#36607b] p-2 rounded-md text-white">
                <IoLogoWhatsapp size={20} />
              </div>
            </div>
          </div>
          <div>
            <div className=" w-full text-base text-white">
              <NavMenu className="flex-col mb-4" />
              <div
                className={cn("flex flex-col  gap-6  font-normal ps-3 mb-3")}
              >
                <Link href={"/gutters"}>
                  <div
                    className={cn(
                      "cursor-pointer hover:text-primary transition duration-200",
                      pathname === "/gutters" && "text-primary font-semibold"
                    )}
                  >
                    Gutters
                  </div>
                </Link>
                <Link href={"/window"}>
                  <div
                    className={cn(
                      "cursor-pointer hover:text-primary transition duration-200",
                      pathname === "/window" && "text-primary font-semibold"
                    )}
                  >
                    Windows
                  </div>
                </Link>
                <Link href={"/commercial"}>
                  <div
                    className={cn(
                      "cursor-pointer hover:text-primary transition duration-200",
                      pathname === "/commercial" && "text-primary font-semibold"
                    )}
                  >
                    Commercial
                  </div>
                </Link>
              </div>
              <div className="ps-1  w-full max-w-44">
                <Accordion isCompact className="">
                  <AccordionItem
                    key="1"
                    aria-label="Other Service"
                    title={<span className="text-white">Pricing</span>}
                  >
                    <div className=" ps-1">
                      <Link href={"/pricing-cost-calculator/roofing"}>
                        <div
                          // className="cursor-pointer hover:text-primary hover:bg-slate-100 p-2 mb-2 rounded"
                          className={cn(
                            "cursor-pointer hover:text-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200"
                          )}
                        >
                          Roof Cost Calculator
                        </div>
                      </Link>
                      <Link href={"/pricing-cost-calculator/siding"}>
                        <div
                          // className="cursor-pointer hover:text-primary hover:bg-slate-100 p-2 rounded"
                          className={cn(
                            "cursor-pointer hover:text-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200"
                          )}
                        >
                          Siding Cost Calculator
                        </div>
                      </Link>
                      <Link href={"/pricing-cost-calculator/window"}>
                        <div
                          // className="cursor-pointer hover:text-primary hover:bg-slate-100 p-2 rounded"
                          className={cn(
                            "cursor-pointer hover:text-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200"
                          )}
                        >
                          Window Cost Calculator
                        </div>
                      </Link>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div>
            {thirdRow?.map((item, i) => (
              <Link href={item?.link} key={i}>
                <div className="cursor-pointer text-white hover:text-primary pb-5 rounded">
                  {item?.title}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-6">
              Get In Touch With us Today
            </h3>

            {forthRow?.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer text-gray-light hover:text-primary p-3 rounded flex items-start gap-2"
              >
                <div>{item?.icon}</div>
                <p className="w-full -mt-1"> {item?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

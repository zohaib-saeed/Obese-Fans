import React from "react";
import Image from "next/image";
import { ImArrowUpRight2 as ArrowUpRight } from "react-icons/im";
import Hamburger from "hamburger-react";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Navabr = ({ openDrawer, setOpenDrawer }) => {
  const navLinks = [
    { item: "Home", href: "home" },
    { item: "About", href: "about-us" },
    { item: "Win 100k", href: "win" },
    { item: "Invest in us", href: "invest-in-us" },
    { item: "Our team", href: "our-team" },
    { item: "Contact us", href: "contact-us" },
  ];

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <React.Fragment>
      <div className="w-full flex items-center justify-between py-1 md:py-2 lg:py-4 ">
        {/*Left => Logo  */}
        <div className="w-[170px] lg:w-[200px] h-[50px] relative flex items-center justify-center ">
          <Image
            src="/images/logo-blue.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        {/* Right => Desktop Nav Links  */}
        <div className="hidden lg:flex items-center justify-end gap-5">
          {navLinks.map((item, index) => (
            <Link href={`#${item.href}`}>
              <div
                key={index}
                className="text-white hover:opacity-70 text-base font-medium text-center cursor-pointer transition-all duration-300"
              >
                {item.item}
              </div>
            </Link>
          ))}
          <button className="flex items-center  justify-center gap-1 border-main border-solid border-2 rounded px-6 py-2 bg-transparent cursor-pointer hover:bg-main hover:bg-opacity-30  transition-all text-base text-main duration-300 uppercase font-medium">
            $CLRS Presale
          </button>
        </div>
        <div className="inline lg:hidden">
          <Hamburger
            onClick={toggleDrawer}
            duration={0.3}
            color="white"
            size={24}
            className="cursor-pointer"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navabr;

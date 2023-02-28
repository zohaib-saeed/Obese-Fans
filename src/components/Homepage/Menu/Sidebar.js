import React from "react";
import Image from "next/image";
import { MdOutlineClose as CloseIcon } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full block lg:hidden">
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="!w-full xs:!w-[98.3%] "
      >
        <div className="w-full h-full flex flex-col items-center justify-start gap-12 px-1 xs:px-2 py-1 bg-main">
          {/* Logo + Close button  */}
          <div className="w-full flex justify-between items-center">
            <div className="w-[150px] h-[50px] flex items-center justify-center relative">
              <Image
                src="/images/logo-white.png"
                alt=""
                fill
                priority
                className="object-contain"
              />
            </div>
            <CloseIcon
              color="black"
              size={27}
              className="cursor-pointer font-bold"
              onClick={toggleDrawer}
            />
          </div>
          {/* Nav Links  */}
          <div className="flex items-center justify-start flex-col gap-4">
            {navLinks.map((item, index) => (
              <Link key={index} href={`#${item.href}`} onClick={toggleDrawer}>
                <div className="text-white hover:opacity-70 text-lg font-medium text-center cursor-pointer transition-all duration-300">
                  {item.item}
                </div>
              </Link>
            ))}
            <button
              onClick={toggleDrawer}
              className="flex items-center  mt-6 justify-center gap-1 border-black border-solid border-2 rounded px-6 py-2 cursor-pointer bg-black  transition-all text-base text-white duration-300 uppercase font-medium"
            >
              $CLRS Presale
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;

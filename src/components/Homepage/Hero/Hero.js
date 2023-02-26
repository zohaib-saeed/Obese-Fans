import React, { useState } from "react";
import Image from "next/image";

import Container from "@/components/Commons/Container/Container";
import Navabr from "../Menu/Navabr";
import Sidebar from "../Menu/Sidebar";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <Container height="h-screen">
      <div className="w-full h-full min-h-[500px] xs:min-h-[600px] md:min-h-[500px] lg:min-h-[700px]  flex items-center justify-center md:justify-start flex-col ">
        <Navabr openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mdl:gap-12 lg:gap-7 py-8 md:py-6">
          {/* Col 1  */}
          <div className="order-last lg:order-first w-full h-full md:h-auto flex items-center md:items-start justify-center flex-col gap-4 md:gap-2 lg:gap-4">
            <h1 className="text-white text-center md:text-left uppercase text-4xl xs:text-5xl md:text-4xl lg:text-7xl font-semibold ">
              We are the <br className="" />{" "}
              {/* <span className="text-main text-4xl xs:text-5xl lg:text-8xl">
                future
              </span> */}
              <TypewriterText />
            </h1>
            <p className="w-[85%] xs:w-[80%] md:w-full lg:w-[75%] text-center md:text-left text-white text-lg xs:text-xl font-medium">
              We are the generation that is going to change the world!
            </p>
            <p className="w-[95%] xs:w-[80%] md:w-full lg:w-[80%] text-center md:text-left text-white text-base font-medium">
              Obesefans is a brand new initiative, built on the blockchain, that
              is striving to make a change and influence people’s lives by
              helping them improve their lifestyle, become healthier, and
              achieve their goals.
            </p>
            <button className="flex items-center  justify-center gap-1 border-main border-solid border-2 rounded px-6 py-2 bg-transparent cursor-pointer hover:bg-main hover:bg-opacity-30  transition-all text-base text-main duration-300 uppercase font-medium">
              Download Our whitepaper
            </button>
          </div>
          {/* Col 2 */}
          <div className="w-full hidden md:flex items-center justify-center h-full">
            <div className="w-full mdl:w-[90%] lg:w-full h-full mdl:h-[90%] lg:h-[80%] flex items-center justify-center relative">
              <Image
                src="/images/joggin.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

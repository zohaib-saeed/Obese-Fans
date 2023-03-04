import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import Container from "@/components/Commons/Container/Container";
import TypewriterText from "./TypewriterText";
import Navabr from "../Menu/Navabr";
import SlideInFromLeft from "@/components/Commons/Animations/SlieInFromLeft";
import SlideInFromRight from "@/components/Commons/Animations/SlideInFromRight";

const Hero = ({ isOpen, setIsOpen }) => {
  return (
    <div className="w-full lg:h-screen flex items-center justify-start flex-col hero-section">
      <Container height="lg:h-screen" id="home">
        <div className="w-full h-full lg:min-h-[650px]   flex items-center justify-center md:justify-start flex-col ">
          {/* Navbar  */}
          <Navabr isOpen={isOpen} setIsOpen={setIsOpen} />
          {/* Hero  */}
          <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-7 py-12 xs:py-20 md:py-12 lg:py-6">
            {/* Col 1  */}
            <div className="w-full h-full flex items-center justify-center">
              <Fade direction="left" triggerOnce>
                <div className=" order-last md:order-first  w-full h-full flex items-center justify-center">
                  <div className="w-full h-full md:h-auto flex items-center md:items-start justify-center flex-col gap-4 md:gap-2 lg:gap-4">
                    <h1 className="text-white text-center md:text-left uppercase text-4xl xs:text-5xl md:text-4xl lg:text-7xl font-semibold ">
                      We are the <br className="" /> <TypewriterText />
                    </h1>
                    <Fade direction="up" triggerOnce>
                      <p className="w-[85%] xs:w-[80%] md:w-full lg:w-[75%] text-center md:text-left text-white text-lg xs:text-xl font-medium">
                        We are the generation that is going to change the world!
                      </p>
                    </Fade>
                    <Fade direction="up" triggerOnce>
                      <p className="w-[95%] xs:w-[80%] md:w-full lg:w-[80%] text-center md:text-left text-white text-base font-medium">
                        Obesefans is a brand new initiative, built on the
                        blockchain, that is striving to make a change and
                        influence people’s lives by helping them improve their
                        lifestyle, become healthier, and achieve their goals.
                      </p>
                    </Fade>
                    <Link href="https://drive.google.com/file/d/1Z3-qokKIyd9sQ1HlZp5_h_-jgFWlaaPf/view">
                      <button className="flex items-center  justify-center gap-1 border-main border-solid border-2 rounded px-6 py-2 bg-transparent cursor-pointer  bg-black   transition-all text-base text-main duration-300 uppercase font-medium">
                        Download Our whitepaper
                      </button>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
            {/* Col 2 */}
            <Fade direction="right" triggerOnce>
              <div className="w-full flex items-center justify-center h-full">
                <div className="w-[85%] xs:w-[70%] md:w-full h-[230px] xs:h-[250px] md:h-[400px] flex items-center justify-center relative">
                  <Image
                    // src="/images/hero-left.svg"
                    src="/images/jogging.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

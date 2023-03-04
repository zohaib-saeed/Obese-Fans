import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";
import { ecosystem } from "@/data/ecosystem";
import SlideInFromBottom from "@/components/Commons/Animations/SlideInFromBottom";

const Ecosystem = () => {
  return (
    <Container id="ecosystem">
      <div className="w-full flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        <ResponsiveHeading text="Ecosystem" />
        <SlideInFromBottom>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 mdl:grid-cols-3  gap-3 mdl:gap-2 lg:gap-4">
            {ecosystem.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-start gap-4 border-main border-solid border-2 p-4 py-7 rounded bg-main bg-opacity-20  lg:cursor-pointer lg:hover:scale-105 transition-all duration-300"
              >
                <div className="w-[130px] h-[130px] flex items-center justify-center relative ">
                  <Image
                    src={`/images/invest-in-us/${index + 1}.svg`}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <SlideInFromBottom>
                  <h4 className="text-2xl font-semibold text-main text-center w-full capitalize">
                    {item.title}
                  </h4>
                </SlideInFromBottom>
                <SlideInFromBottom>
                  <p className="text-white font-medium text-base w-full text-center">
                    {item.description}
                  </p>
                </SlideInFromBottom>
              </div>
            ))}
          </div>
        </SlideInFromBottom>
      </div>
    </Container>
  );
};

export default Ecosystem;

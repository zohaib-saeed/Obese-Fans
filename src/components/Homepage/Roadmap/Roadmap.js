import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { RxDotFilled as Dot } from "react-icons/rx";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";
import { roadmap } from "@/data/roadmap";

const Roadmap = () => {
  return (
    <Container id="roadmap">
      <div className="w-full  flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        <ResponsiveHeading text="Roadmap" />
        {/* Roadmap data  */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 md:gap-3 mdl:gap-5 lg:gap-12">
          {roadmap.data.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-start gap-5 p-2 mdl:p-3 lg:py-7 border-main border-solid border-2 bg-main bg-opacity-20"
            >
              <h2 className="text-main text-2xl font-bold ">{item.title}</h2>
              <div className="w-full flex flex-col items-start justify-start gap-[7px]">
                {item.points.map((item, index) => (
                  <Fade
                    key={index}
                    className="w-full"
                    direction="up"
                    triggerOnce
                  >
                    <div className="w-full flex items-start lg:items-center justify-start gap-1">
                      <Dot
                        color="#00A6CB"
                        className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]"
                      />
                      <p className="text-left text-white text-sm font-medium">
                        {item}
                      </p>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Roadmap;

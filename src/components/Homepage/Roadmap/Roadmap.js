import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";
import { roadmap } from "@/data/roadmap";

const Roadmap = () => {
  return (
    <Container id="roadmap">
      <div className="w-full  flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        <ResponsiveHeading text="Roadmap" />

        <div className="w-full flex items-center justify-start flex-col gap-6 sm:gap-10">
          <Fade direction="up" triggerOnce>
            <p className="w-full text-white text-base sm:text-lg text-center font-medium">
              {roadmap.mainLabel}
            </p>
          </Fade>
          {roadmap.data.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[800px] flex flex-col items-center justify-start gap-2 sm:gap-3"
            >
              <h2 className="w-full text-center text-xl text-main font-semibold  ">
                {item.title}
              </h2>
              <div className="w-full flex flex-col items-center justify-start gap-1">
                <Fade
                  direction="up"
                  cascade={0.1}
                  triggerOnce
                  className="w-full"
                >
                  {item.points.map((item, index) => (
                    <div
                      key={index}
                      className="w-full border-2 border-main border-solid flex items-center justify-start gap-[10px] py-[7px] px-[10px] rounded sm:rounded-full bg-main bg-opacity-20"
                    >
                      <div className="w-[40px] h-[40px] flex items-center justify-center rounded sm:rounded-full border-solid border-main border-2  font-semibold text-lg leading-[0px] bg-main bg-opacity-40 text-white">
                        {index + 1}
                      </div>
                      <p className="w-full text-left font-medium text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Roadmap;

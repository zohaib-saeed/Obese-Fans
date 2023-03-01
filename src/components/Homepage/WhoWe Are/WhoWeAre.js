import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";

const WhoWeAre = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        {/* <ResponsiveHeading text="Who we are?" /> */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-10">
          {/* Col 1 => Our Vision  */}
          <Fade direction="left" triggerOnce>
            <div className="w-full flex items-center justify-start flex-col gap-3 lg:hover:scale-105 cursor-pointer transition-all duration-300 border-solid border-main border-2 rounded p-5 bg-main bg-opacity-20">
              <h2 className="w-full text-main text-2xl lg:text-3xl  text-center font-bold uppercase">
                Our Vision
              </h2>
              <div className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] flex items-center justify-center relative">
                <Image
                  src="/images/vision.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full flex items-start justify-center flex-col gap-2">
                <Fade direction="up" triggerOnce>
                  <p className="w-full text-white font-medium text-base text-center">
                    We are a community of peers helping and motivating each
                    other to exercise, lose weight, eat healthier, and live more
                    vibrant, confident lives. We literally want to change the
                    world.
                  </p>
                </Fade>
                <Fade direction="up" triggerOnce>
                  <p className="w-full text-white font-medium text-base text-center ">
                    We are here to build an all-inclusive community that
                    supports and encourages each other to better their lives,
                    achieve their goals, and make their dreams a reality.
                  </p>
                </Fade>
              </div>
            </div>
          </Fade>
          {/* Col 2 => Our Mission  */}
          <Fade direction="right" triggerOnce>
            <div className="w-full flex items-center justify-start flex-col gap-3 lg:hover:scale-105 cursor-pointer transition-all duration-300 border-solid border-main border-2 rounded p-5 bg-main bg-opacity-20">
              <h2 className="w-full text-main text-2xl lg:text-3xl  text-center font-bold uppercase">
                Our Mission
              </h2>
              <div className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] flex items-center justify-center relative">
                <Image
                  src="/images/mission.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-full flex items-start justify-center flex-col gap-2">
                <Fade direction="up" triggerOnce>
                  <p className="w-full text-white font-medium text-base text-center">
                    We offer a social-media platform where anyone can become a
                    content creator. Post videos to inspire others on your
                    weight-loss journey.Build your following.
                  </p>
                </Fade>
                <Fade direction="up" triggerOnce>
                  <p className="w-full text-white font-medium text-base text-center ">
                    Invest in our NFTs and build passive income while receiving
                    a unique piece of art. Play our healthy-living RPG game,
                    create a character that tells your story, and add NFTs to
                    customize your digital life.
                  </p>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Container>
  );
};

export default WhoWeAre;

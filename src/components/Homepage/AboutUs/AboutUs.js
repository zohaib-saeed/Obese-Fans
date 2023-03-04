import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";
import SlideInFromLeft from "@/components/Commons/Animations/SlieInFromLeft";
import SlideInFromRight from "@/components/Commons/Animations/SlideInFromRight";

const AboutUs = () => {
  return (
    <Container id="about-us">
      <div className="w-full flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        <ResponsiveHeading text="About Us" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-7">
          {/* Col 1  */}
          <SlideInFromLeft>
            <div className="w-full flex items-center justify-center md:justify-start">
              <div className="w-[85%] md:w-full h-[230px] xs:h-[270px] md:h-[400px]  flex items-center justify-center relative">
                <Image
                  src="/images/about2.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </SlideInFromLeft>
          {/* Col 2  */}
          <SlideInFromRight>
            <div className="w-full flex items-start justify-center flex-col gap-3 lg:gap-4">
              <p className="text-white font-medium text-base lg:text-lg text-center md:text-left">
                Start your journey here with the help of like-minded people and
                professionals; or even become a foundation member of ObeseFans
                and inspire others with your story.
              </p>
              <div className="w-full flex flex-col xs:flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center justify-center md:justify-start gap-3 lg:gap-5">
                {/* Box 1 */}
                <div className="border-solid border-2 border-main rounded p-2 bg-main bg-opacity-20">
                  <h3 className="text-center w-full text-2xl font-medium text-main">
                    1.1 Billion People <br />{" "}
                    <span className="font-normal text-white text-base">
                      or more are overweight
                    </span>
                  </h3>
                </div>
                {/* Box 2  */}
                <div className="border-solid border-2 border-main rounded p-2 bg-main bg-opacity-20">
                  <h3 className="text-center w-full text-2xl font-medium text-main">
                    350 Million kids <br />{" "}
                    <span className="font-normal text-white text-base">
                      were overweight in 2020
                    </span>
                  </h3>
                </div>
              </div>
              <p className="text-white font-medium text-base lg:text-lg text-center md:text-left">
                Help us kickstart this project. Purchase NFTs containing our
                $CLRS tokens before they are sold out. This purchase allows you
                to obtain our tokens at a discounted price of $0.0010 and also
                provides you with &quot;access to&quot; multiple other features
                on our platform!
              </p>
            </div>
          </SlideInFromRight>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;

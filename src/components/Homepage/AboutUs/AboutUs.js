import React from "react";
import Image from "next/image";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";

const AboutUs = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-16">
        <ResponsiveHeading text="About Us" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-10">
          {/* Col 1  */}
          <div className="w-full flex items-center justify-center md:justify-start">
            <div className="w-[90%] xs:w-[400px] md:w-full h-[300px] md:h-[400px] flex items-center justify-center relative">
              <Image
                src="/images/about2.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Col 2  */}
          <div className="w-full flex items-start justify-center flex-col gap-3 lg:gap-4">
            <p className="text-white font-medium text-base lg:text-lg text-center md:text-left">
              Start your journey here with the help of like-minded people and
              professionals; or even become a foundation member of ObeseFans and
              inspire others with your story.
            </p>
            <div className="w-full flex flex-col xs:flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center justify-center md:justify-start gap-3 lg:gap-5">
              <div className="border-solid border-2 border-main rounded p-2 ">
                <h3 className="text-center w-full text-2xl font-medium text-main">
                  1.1 Billion People <br />{" "}
                  <span className="font-normal text-white text-base">
                    or more are overweight
                  </span>
                </h3>
              </div>
              <div className="border-solid border-2 border-main rounded p-2 ">
                <h3 className="text-center w-full text-2xl font-medium text-main">
                  350 Million kids <br />{" "}
                  <span className="font-normal text-white text-base">
                    were overweight in 2020
                  </span>
                </h3>
              </div>
            </div>
            <p className="text-white font-medium text-base lg:text-lg text-center md:text-left">
              Help us kickstart this project. Purchase NFTs containing our $CLRS
              tokens before they are sold out. This purchase allows you to
              obtain our tokens at a discounted price of $0.0010 and also
              provides you with &quot;access to&quot; multiple other features on
              our platform!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;

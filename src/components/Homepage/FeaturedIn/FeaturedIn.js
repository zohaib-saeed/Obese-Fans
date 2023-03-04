import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const FeaturedIn = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        <ResponsiveHeading text="Featured IN" />

        <div className="w-full flex items-center justify-center bg-main bg-opacity-20 p-4 xs:p-6 rounded-lg">
          <div className="w-full flex items-center justify-between gap-5 flex-wrap">
            {/* Logo 1  */}
            <Fade direction="up" triggerOnce>
              <div className="w-[130px] xs:w-[150px] h-[50px] relative flex items-center justify-center ">
                <Image
                  src="/images/logoipsum.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Fade>
            {/* Logo 2  */}
            <Fade direction="up" triggerOnce>
              <div className="w-[130px] xs:w-[150px] h-[50px] relative flex items-center justify-center ">
                <Image
                  src="/images/logoipsum.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Fade>
            {/* Logo 3 */}
            <Fade direction="up" triggerOnce>
              <div className="w-[130px] xs:w-[150px] h-[50px] relative flex items-center justify-center ">
                <Image
                  src="/images/logoipsum.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Fade>
            {/* Logo 4  */}
            <Fade direction="up" triggerOnce>
              <div className="w-[130px] xs:w-[150px] h-[50px] relative flex items-center justify-center ">
                <Image
                  src="/images/logoipsum.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Fade>
            {/* Logo 5  */}
            <Fade direction="up" triggerOnce>
              <div className="w-[130px] xs:w-[150px] h-[50px] relative flex items-center justify-center ">
                <Image
                  src="/images/logoipsum.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedIn;

import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";

const TokenDetails = () => {
  return (
    <Container id="token-details">
      <div className="w-full max-w-[800px] flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        <ResponsiveHeading text="Token Details" />
        {/* Detaisl Table  */}
        <Fade direction="up" triggerOnce className="w-full">
          <div className="w-full max-w-[800px] flex flex-col items-center justify-start border-2 border-solid border-main bg-main bg-opacity-20">
            <div className="w-full grid grid-cols-[1fr_1.5fr] sm:grid-cols-[1fr_2.5fr] border-solid border-b-2 border-main">
              <div className="w-full flex items-center justify-start px-3 py-[6px] text-main font-medium text-lg text-left border-solid border-r-2 border-main">
                NFT Symbol
              </div>
              <div className="w-full flex items-center justify-start px-3 py-[6px] text-white font-medium text-md text-left">
                $CLRS - Calories Token
              </div>
            </div>
            <div className="w-full grid grid-cols-[1fr_1.5fr] sm:grid-cols-[1fr_2.5fr] border-solid border-b-2 border-main">
              <div className="w-full flex items-center justify-start px-3 py-[6px] text-main font-medium text-lg text-left border-solid border-r-2 border-main">
                Standard:
              </div>
              <div className="w-full flex items-center justify-start px-3 py-[6px] text-white font-medium text-base text-left">
                BEP-20
              </div>
            </div>
            <div className="w-full grid grid-cols-[1fr_1.5fr] sm:grid-cols-[1fr_2.5fr] border-solid border-b-2 border-main">
              <div className="w-full flex items-center justify-start px-3 py-[6px] text-main font-medium text-lg text-left border-solid border-r-2 border-main ">
                Network:
              </div>
              <div className="w-full flex items-center justify-start px-3 py-[6px] text-white font-medium text-base text-left">
                BSC
              </div>
            </div>
            <div className="w-full grid grid-cols-[1fr_1.5fr] sm:grid-cols-[1fr_2.5fr] ">
              <div className="w-full flex items-center justify-start px-3 py-[6px] text-main font-medium text-lg text-left border-solid border-r-2 border-main">
                Total Supply:
              </div>
              <div className="w-full flex items-center justify-start px-3 py-[6px] text-white font-medium text-base text-left">
                10,000,000,000
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default TokenDetails;

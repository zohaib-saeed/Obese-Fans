import React from "react";
import Image from "next/image";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";
import { showoff } from "@/data/showcase";
import SlideInFromBottom from "@/components/Commons/Animations/SlideInFromBottom";

const NFTShowcase = () => {
  return (
    <Container id="showcase">
      <div className="w-full  flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        <ResponsiveHeading text="FLEX AND SHOWOFF YOUR NFT's" capitalize />

        <div className="w-full flex items-center justify-start flex-col gap-6 sm:gap-10">
          <SlideInFromBottom>
            <p className="w-full text-white text-base sm:text-lg text-center font-medium">
              {showoff.mainLabel}
            </p>
          </SlideInFromBottom>
          <SlideInFromBottom>
            <div className="w-[250px] sm:w-[300px] h-[280px] sm:h-[330px] flex items-center justify-center relative rounded overflow-hidden">
              <Image
                src={showoff.data.imgUrl}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </SlideInFromBottom>
          <div className="w-full">
            <SlideInFromBottom>
              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 border-main border-solid border-2 bg-main bg-opacity-20 py-6 px-6 rounded">
                {/* Total Supply  */}
                <div className="flex flex-col items-center justify-center gap-[2px]">
                  <p className="text-center text-2xl text-white font-bold">
                    {showoff.data.totalSupply}
                  </p>
                  <p className="text-center text-lg text-main font-bold">
                    Total Supply
                  </p>
                </div>
                {/* NFTs Available  */}
                <div className="flex flex-col items-center justify-center gap-[2px]">
                  <p className="text-center text-2xl text-white font-bold">
                    {showoff.data.availableNFTs}
                  </p>
                  <p className="text-center text-lg text-main font-bold">
                    Available NFT&apaos;s
                  </p>
                </div>
                {/* Price  */}
                <div className="flex flex-col items-center justify-center gap-[2px]">
                  <p className="text-center text-2xl text-white font-bold">
                    {showoff.data.price}
                  </p>
                  <p className="text-center text-lg text-main font-bold">
                    Price
                  </p>
                </div>
              </div>
            </SlideInFromBottom>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NFTShowcase;

import React from "react";
import Image from "next/image";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";

const AboutUs = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-start gap-28 py-16">
        <ResponsiveHeading text="About Us" />
        <div className="w-full grid grid-cols-2 gap-10">
          {/* Col 1  */}
          <div className="w-full flex items-center justify-start">
            <div className="w-full h-[400px] flex items-center justify-center relative">
              <Image
                src="/images/about2.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Col 2  */}
          <div className="w-full flex items-start justify-center flex-col gap-4">
            <p className="text-white font-medium text-lg text-left">
              Start your journey here with the help of like-minded people and
              professionals; or even become a foundation member of ObeseFans and
              inspire others with your story.
            </p>
            <p className="text-white font-medium text-lg text-left">
              Help us kickstart this project. Purchase NFTs containing our $CLRS
              tokens before they are sold out. This purchase allows you to
              obtain our tokens at a discounted price of $0.0010 and also
              provides you with "access to" multiple other features on our
              platform!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;

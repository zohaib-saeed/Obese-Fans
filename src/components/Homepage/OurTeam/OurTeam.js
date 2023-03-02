import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper";
import { Fade } from "react-awesome-reveal";
import { BsLinkedin as LinkedIn } from "react-icons/bs";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Container from "@/components/Commons/Container/Container";
import ResponsiveHeading from "@/components/Commons/ResponsiveHeading/ResponsiveHeading";
import ourTeam from "@/data/ourTeam";

const OurTeam = () => {
  if (typeof document !== "undefined") {
    var slides = document.querySelectorAll(".swiper-slide");
    var maxHeight = Math.max(
      ...Array.from(slides).map((slide) => slide.offsetHeight)
    );

    Array.from(slides).forEach((slide) => {
      slide.style.height = `${maxHeight}px`;
    });
  }

  return (
    <Container id="our-team">
      <div className="w-full flex flex-col items-center justify-start gap-10 md:gap-12 lg:gap-16 py-10 md:py-12 lg:py-16">
        <ResponsiveHeading text="Our team" />
        {/* Slider  */}
        <div className="w-full flex items-center justify-start flex-col ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {ourTeam.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full min-h-[350px] flex flex-col items-center justify-between  px-5 py-6 rounded bg-main bg-opacity-20 border-main border-solid border-2">
                  <div className="w-full h-[100%]  flex flex-col items-center justify-start gap-3 ">
                    <div className="max-w-[120px] min-w-[120px] max-h-[120px] min-h-[120px] rounded-full overflow-hidden flex items-center justify-center relative ">
                      <Image
                        src="/images/user.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h5 className="w-full text-center text-main text-2xl sm:text-3xl font-semibold">
                      {item.name}
                    </h5>
                    <p className="text-white font-medium text-lg  text-center capitalize">
                      {item.position}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-end">
                    <Link href={item.linkedInUrl}>
                      <LinkedIn
                        className="cursor-pointer"
                        color="#00A6CB"
                        size={27}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default OurTeam;

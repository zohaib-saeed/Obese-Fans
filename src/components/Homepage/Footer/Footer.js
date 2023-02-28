import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter as Twitter } from "react-icons/fa";
import { FaDiscord as Discord } from "react-icons/fa";
import { FaTelegramPlane as Telegram } from "react-icons/fa";
import { FaTiktok as Tiktok } from "react-icons/fa";
import { FiArrowUpRight as ArrowUpRight } from "react-icons/fi";

import Container from "@/components/Commons/Container/Container";

const Footer = () => {
  return (
    <Container id="contact-us">
      <div className="w-full py-2 sm:py-3 md:py-4  mdl:py-5 bg-main bg-opacity-20 border-solid border-main border-2 mb-4 px-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-[2fr_0.45fr] gap-10 sm:gap-5">
          {/* Col 1  */}
          <div className="w-full flex flex-col items-center sm:items-start justify-between gap-3">
            <div className="w-[200px] h-[50px] flex items-center justify-center relative">
              <Image
                priority
                src="/images/logo-white-transparent.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <p className="w-full text-center sm:text-left text-sm text-white font-medium">
              Copyright <span className="text-base">©</span> 2023. All rights
              reserved.
            </p>
          </div>
          {/* Col 2  */}
          <div className="w-full flex flex-col items-center sm:items-end justify-between gap-10">
            {/* Social Links  */}
            <div className="w-full flex flex-col items-start justify-start gap-1">
              <p className="w-full text-center sm:text-left text-sm text-white font-medium">
                Join us at
              </p>
              <div className="w-full flex flex-col items-center sm:items-start justify-start ">
                {/* => Twitter  */}
                <Link
                  href="https://twitter.com/obesefans"
                  className="cursor-pointer"
                >
                  <div className=" flex items-center justify-start gap-2 ">
                    <Twitter color="#00A6CB" size={24} />
                    <p className="w-full text-left text-[13px] text-white font-medium">
                      Twitter
                    </p>
                  </div>
                </Link>
                {/* => Tiktok  */}
                <Link
                  href="https://www.tiktok.com/@obesefans"
                  className="cursor-pointer"
                >
                  <div className=" flex items-center justify-start gap-2 ">
                    <Tiktok color="#00A6CB" size={24} />
                    <p className="w-full text-left text-[13px] text-white font-medium">
                      Tiktok
                    </p>
                  </div>
                </Link>
                {/* => Discord  */}
                <Link
                  href="https://discord.com/invite/rWmY22sEfN"
                  className="cursor-pointer"
                >
                  <div className=" flex items-center justify-start gap-2 ">
                    <Discord color="#00A6CB" size={26} />
                    <p className="w-full text-left text-[13px] text-white font-medium">
                      Discord
                    </p>
                  </div>
                </Link>
                {/* => Telegram */}
                <Link href="https://t.me/obesefans" className="cursor-pointer">
                  <div className=" flex items-center justify-start gap-2 ">
                    <Telegram color="#00A6CB" size={24} />
                    <p className="w-full text-left text-[13px] text-white font-medium">
                      Telegram
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            {/* Email Link  */}
            <div className="w-full flex flex-col items-center sm:items-start justify-start gap-1">
              <p className="w-full text-center sm:text-left text-sm text-white font-medium">
                Click to Email us
              </p>
              <button className="flex items-center  justify-between gap-2 border-main border-solid border-2 rounded px-3 py-1 bg-transparent cursor-pointer hover:bg-main hover:bg-opacity-30  transition-all text-base text-main duration-300  font-medium">
                <p>info@obesefans.com</p>
                <ArrowUpRight color="#00A6CB" size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

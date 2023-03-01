import React, { useEffect } from "react";
import { BsFillCheckCircleFill as CheckIcon } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

import Container from "@/components/Commons/Container/Container";
import { win100k } from "@/data/win100k";

const Win100k = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sweepwidget.com/w/j/w_init.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container id="win-100k">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-7 py-10 md:py-12 lg:py-16 win100k">
        {/* Col 1 */}
        <div className="w-full flex flex-col items-start justify-center gap-3 xs:gap-5">
          <Fade direction="up" triggerOnce>
            <h2 className="w-full text-left text-4xl xs:text-5xl lg:text-6xl text-white font-semibold lg:font-bold">
              Win Free <span className="text-main">$CLRS</span>
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce>
            <p className=" w-full lg:w-[85%] text-left text-white text-lg xs:text-xl font-medium">
              We&apos;re thrilled to launch our new website & celebrate with a
              $10k sweepstakes! Don&apos;t miss your chance to win. To earn
              multiple entries, you can complete the following tasks:
            </p>
          </Fade>
          <div className="w-full flex flex-col items-start justify-start gap-1">
            <Fade direction="up" triggerOnce cascade>
              {win100k.map((item, index) => (
                <div
                  key={index}
                  className=" flex flex-row items-start xs:items-center justify-start gap-2 "
                >
                  <CheckIcon color="#00A6CB" size={22} />
                  <p className="text-white font-medium text-base lg:text-lg text-left">
                    {item}
                  </p>
                </div>
              ))}
            </Fade>
          </div>
        </div>
        {/* Col 2  */}
        <div className="w-full h-[650px] overflow-y-scroll rounded">
          <div id="67257-09f6smk5" className="sw_container w-full h-full"></div>
        </div>
      </div>
    </Container>
  );
};

export default Win100k;

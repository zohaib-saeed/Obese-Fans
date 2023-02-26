import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="text-main text-4xl xs:text-5xl lg:text-8xl">
      <Typewriter
        loop={true}
        onInit={(typewriter) => {
          typewriter
            .typeString("FUTURE")
            .pauseFor(500)
            // .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterText;

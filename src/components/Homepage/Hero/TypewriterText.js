import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="text-main text-4xl xs:text-5xl lg:text-8xl">
      <Typewriter
        options={{
          strings: ["FUTURE"],
          autoStart: true,
          loop: true,
          delay: 200,
          pauseFor: 300,
        }}
      />
    </div>
  );
};

export default TypewriterText;

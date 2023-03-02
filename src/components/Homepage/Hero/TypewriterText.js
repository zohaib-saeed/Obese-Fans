import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  const [typewriterTypedout, setTypewriterTypedout] = useState(false);
  return (
    <div className="text-main text-4xl xs:text-5xl lg:text-8xl">
      {/* {typewriterTypedout ? (
        <p>FUTURE|</p>
      ) : (
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("FUTURE").callFunction(() => {
              console.log("String typed out!");
              setTypewriterTypedout(true);
            });
            // .pauseFor(2500)
            // .deleteAll()
            // .callFunction(() => {
            //   console.log("All strings were deleted");
            // })
            // .start();
          }}
        />
      )} */}
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

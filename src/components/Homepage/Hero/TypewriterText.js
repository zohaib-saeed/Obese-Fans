import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  const [typewriterTypedout, setTypewriterTypedout] = useState(false);

  const textString = "FUTURE";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charsTyped, setCharTyped] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (text.length < 6) {
        setText((prevText) => prevText + "FUTURE"[prevText.length]);
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className=" text-main text-4xl xs:text-5xl lg:text-8xl">
      <span>{text}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypewriterText;

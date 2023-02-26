import React from "react";

const ResponsiveHeading = ({ text }) => {
  return (
    <h2 className="text-main text-3xl md:text-4xl lg:text-5xl text-center font-bold uppercase">
      {text}
    </h2>
  );
};

export default ResponsiveHeading;

import React, { useEffect } from "react";

function SweepWidget() {
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
    <div className="w-[500px] h-[700px] overflow-y-scroll">
      <div id="67257-09f6smk5" className="sw_container w-full h-full"></div>
    </div>
  );
}

export default SweepWidget;

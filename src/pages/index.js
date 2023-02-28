import React, { useState } from "react";
import Hero from "@/components/Homepage/Hero/Hero";
import AboutUs from "@/components/Homepage/AboutUs/AboutUs";
import WhoWeAre from "@/components/Homepage/WhoWe Are/WhoWeAre";
import WhyInvestInUs from "@/components/Homepage/WhyInvestInUs/WhyInvestInUs";
import OurTeam from "@/components/Homepage/OurTeam/OurTeam";
import Faqs from "@/components/Homepage/Faqs/Faqs";
import SweepWidget from "@/components/Homepage/Sweepwidget/SweepWidget";
import Sidebar from "@/components/Homepage/Menu/Sidebar";

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero isOpen={openDrawer} setIsOpen={setOpenDrawer} />
      <Sidebar isOpen={openDrawer} setIsOpen={setOpenDrawer} />
      <AboutUs />
      <WhoWeAre />
      <WhyInvestInUs />
      <OurTeam />
      <Faqs />
      {/* <SweepWidget /> */}
    </div>
  );
}

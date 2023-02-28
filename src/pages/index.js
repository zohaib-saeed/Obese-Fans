import React, { useState } from "react";
import Hero from "@/components/Homepage/Hero/Hero";
import AboutUs from "@/components/Homepage/AboutUs/AboutUs";
import WhoWeAre from "@/components/Homepage/WhoWe Are/WhoWeAre";
import WhyInvestInUs from "@/components/Homepage/WhyInvestInUs/WhyInvestInUs";
import OurTeam from "@/components/Homepage/OurTeam/OurTeam";
import Faqs from "@/components/Homepage/Faqs/Faqs";
import Sidebar from "@/components/Homepage/Menu/Sidebar";
import Win100k from "@/components/Homepage/Win100k/Win100k";

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero isOpen={openDrawer} setIsOpen={setOpenDrawer} />
      <Sidebar isOpen={openDrawer} setIsOpen={setOpenDrawer} />
      <AboutUs />
      <WhoWeAre />
      <Win100k />
      <WhyInvestInUs />
      <OurTeam />
      <Faqs />
    </div>
  );
}

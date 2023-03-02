import React, { useState } from "react";
import Hero from "@/components/Homepage/Hero/Hero";
import AboutUs from "@/components/Homepage/AboutUs/AboutUs";
import WhoWeAre from "@/components/Homepage/WhoWe Are/WhoWeAre";
import Ecosystem from "@/components/Homepage/Ecosystem/Ecosystem";
import OurTeam from "@/components/Homepage/OurTeam/OurTeam";
import Faqs from "@/components/Homepage/Faqs/Faqs";
import Sidebar from "@/components/Homepage/Menu/Sidebar";
import Win100k from "@/components/Homepage/Win100k/Win100k";
import Footer from "@/components/Homepage/Footer/Footer";
import TokenDetails from "@/components/Homepage/TokenDetails/TokenDetails";

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero isOpen={openDrawer} setIsOpen={setOpenDrawer} />
      <Sidebar isOpen={openDrawer} setIsOpen={setOpenDrawer} />
      <WhoWeAre />
      <AboutUs />
      <TokenDetails />
      <Win100k />
      <Ecosystem />
      <OurTeam />
      <Faqs />
      <Footer />
    </div>
  );
}

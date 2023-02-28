import React from "react";
import AboutUs from "@/components/Homepage/AboutUs/AboutUs";
import Hero from "@/components/Homepage/Hero/Hero";
import WhoWeAre from "@/components/Homepage/WhoWe Are/WhoWeAre";
import WhyInvestInUs from "@/components/Homepage/WhyInvestInUs/WhyInvestInUs";
import OurTeam from "@/components/Homepage/OurTeam/OurTeam";
import Faqs from "@/components/Homepage/Faqs/Faqs";
import SweepWidget from "@/components/Homepage/Sweepwidget/SweepWidget";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero />
      <AboutUs />
      <WhoWeAre />
      <WhyInvestInUs />
      <OurTeam />
      <Faqs />
      <SweepWidget />
    </div>
  );
}

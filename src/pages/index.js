import React from "react";
import AboutUs from "@/components/Homepage/AboutUs/AboutUs";
import Hero from "@/components/Homepage/Hero/Hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <Hero />
      <AboutUs />
    </div>
  );
}

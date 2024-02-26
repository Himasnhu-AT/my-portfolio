"use client";

import { Spotlight } from "@/components/spotlight";
import React from "react";

const AboutMe = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          About Me
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Passionate software engineer with a track record of crafting impactful
          products. I thrive on collaborative projects and enjoy working with
          talented individuals. Let's connect and explore opportunities to
          create something remarkable together. copy.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

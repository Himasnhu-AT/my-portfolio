"use client";
import { StickyScroll } from "@/components/stickyScroll";
import { Scroll } from "lucide-react";
import React from "react";

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Programming Languages</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className=" ">JavaScript</div>
        <div className=" ">TypeScript</div>
        <div className=" ">Rust</div>
        <div className=" ">Python</div>
        <div className=" ">Kotlin</div>
      </div>

      <h2 className="text-3xl font-bold my-4">Frameworks & Libraries</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className=" ">React</div>
        <div className=" ">Next.js</div>
        <div className=" ">Node.js</div>
        <div className=" ">Nest.js</div>
        <div className=" ">Prisma</div>
        <div className=" ">Jest</div>
        <div className=" ">TailwindCSS</div>
        <div className=" ">Tensorflow</div>
      </div>

      <h2 className="text-3xl font-bold my-4">Developer Tools</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className=" ">Git</div>
        <div className=" ">Docker</div>
        <div className=" ">VS Code</div>
        <div className=" ">Google Cloud</div>
        <div className=" ">Azure</div>
        <div className=" ">Linux Server</div>
        <div className=" ">SSH</div>
      </div>

      <h2 className="text-3xl font-bold my-4">Libraries</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className=" ">SciKit-learn</div>
        <div className=" ">Numpy</div>
        <div className=" ">Pandas</div>
        <div className=" ">Matplotlib</div>
      </div>
    </div>
  );
};

const content = [
  {
    title: "About Me",
    description:
      "Passionate software engineer with a track record of crafting impactful products. I thrive on collaborative projects and enjoy working with talented individuals. Let's connect and explore opportunities to create something remarkable together.",
    image: "/profileImage.png",
  },
  {
    title: "Open Source Contributions",
    description:
      "I'm a strong advocate for open source and regularly contribute to various projects. Check out some of my contributions. I'm always looking for new projects to contribute to. If you have a project that you think I might be interested in, feel free to reach out.",
  },
  {
    title: "Skills",
    description: <Skills />,
  },
];

const AboutMe = () => {
  return (
    <div className="w-full min-h-screen bg-none flex justify-center items-center">
      <StickyScroll content={content} />
    </div>
  );
};

export default AboutMe;

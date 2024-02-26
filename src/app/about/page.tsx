"use client";
import { StickyScroll } from "@/components/stickyScroll";
import { Scroll } from "lucide-react";
import React from "react";

const content = [
  {
    title: "About Me",
    description:
      "Hi there! I'm a software engineer and this is my portfolio. I'm passionate about building products that make a difference. I'm always looking for opportunities to work on exciting projects with amazing people. If you're interested in collaborating, feel free to reach out to me.",
    image: "/profileImage.png",
  },
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
  {
    title: "My Skills",
    description: <Scroll size={30} />,
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

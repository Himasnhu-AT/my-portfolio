"use client";

import { ProjectParallax } from "@/components/projectsParallax";

const Page = () => {
  return (
    <div>
      <ProjectParallax products={projects} />
    </div>
  );
};

const projects = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
];

export default Page;

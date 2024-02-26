"use client";
import { PinContainer } from "@/components/3DPing";
import { SparklesCore } from "@/components/sparkles";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Projects = [
  {
    title: "RusCode (VSCode like Editor)",
    description:
      "Leading the development of RusCode, which is similar to VS Code but made using Rust for speed and efficiency.",
    link: "https://github.com/Himasnhu-AT/rusCode",
  },
  {
    title: "Ruschain (Experimental 2-layered blockchain)",
    description:
      "Leading the development of a minimal blockchain from scratch using Rust, showcasing expertise in blockchain architecture and development. Adapting the blockchain to construct a two-layer experimental blockchain based on insights from research papers, demonstrating innovation and research application.",
    link: "https://github.com/Himasnhu-AT/rusChain",
  },
  {
    title: "RustyExplorer (File Explorer)",
    description:
      "Developed a File Explorer using Rust and TypeScript for an interactive UI. Achieved an 80% improvement in file search speed compared to Windows Explorer.",
    link: "https://github.com/Himasnhu-AT/rusty-explorer",
  },
  {
    title: "DigiHippo",
    description:
      "Developed a comprehensive full-stack online shopping application for purchasing digital assets, including images, icons, and code snippets. Implemented an advanced code architecture, ensuring production-level code quality. Integrated Stripe for secure and efficient payment processing and MongoDB for robust data storage. Implemented secure authentication measures to prevent data leaks and unauthorized access.",
    link: "https://digihippo.vercel.app/",
  },
  {
    title: "OneAI",
    description:
      "Engineered a Full Stack SaaS application with integrated payment functionality. Leveraged technologies such as Next.js, OpenAI-API, Shadcn-UI, Tailwind, Clerk-Auth, and Stripe for seamless payment processing.",
    link: "https://one-ai-vert.vercel.app/",
  },
  {
    title: "FinTracker",
    description:
      "Developed a mobile application using Flutter to track monthly expenses, utilizing a local SQLite database for data storage. Implemented features for organizing tasks into different accounts and categories, including setting limits for categories.",
    link: "https://github.com/Himanshu-AT/fintracker",
  },
];

const ExperiencePage = () => {
  return (
    <div className="">
      <div className=" w-full bg-black flex flex-col items-center justify-center rounded-md pt-24 sm:pt-24 md:pt-28 lg:pt-32">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Projects
        </h1>
        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={2}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center">
          {Projects.map((items, index) => (
            <div className="m-5" key={index}>
              <AnimatedPin
                items={{
                  title: items.title,
                  description: items.description,
                  link: items.link,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface AnimatedPinProps {
  items: {
    title: string;
    description: string;
    link: string;
  };
}
const AnimatedPin: React.FC<AnimatedPinProps> = ({ items }) => {
  return (
    <Card className=" min-w-full min-h-full">
      <CardTitle>{items.title}</CardTitle>
      <CardDescription>{items.description}</CardDescription>
    </Card>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export default ExperiencePage;

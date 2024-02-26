import { ProjectsPage } from "@/components/experience";

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

const Page = () => {
  return (
    <div className="pt-12 px-9">
      <ProjectsPage items={Projects} />
    </div>
  );
};

export default Page;

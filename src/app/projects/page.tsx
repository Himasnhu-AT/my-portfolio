import { ProjectsPage } from "@/components/experience";

const Projects = [
  {
    title: "Project 1",
    description: "Project 1 description",
    link: "https://example.com",
  },
];

const Page = () => {
  return <ProjectsPage items={Projects} />;
};

export default Page;

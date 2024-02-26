import { ProjectsPage } from "@/components/experience";

interface experienceProps {
  title: string;
  description: string;
  link: string;
  name: string;
}

const Experiences: experienceProps[] = [
  {
    title: "Founding Software Engineer - CTO",
    description:
      "Recieved funding of 325k USD in azure credits, allocated dynamically. Designed and implemented a robust REST API, integrating MongoDB, PostgreSQL, and Redis, while managing an SMTP server for streamlined mailing operations. Led system design, and conducted unit and integration tests, ensuring reliability, scalability, and optimal performance. Implemented payment processing with Stripe, enhancing financial capabilities and user experience. Improved the performance of Web App, decreasing loading time by over 80% (200ms).",
    link: "",
    name: "OpenEdu",
  },
  {
    title: "Open Source Collaborator | Project Mentor",
    description:
      "Actively contributing to various Open Source Projects, mentoring students, fostering collaborative development and community engagement. Collaborating with the Tublian team to develop DevDocGenie, an innovative RAG-based AI-chatbot that facilitates user interaction with documentation, enhancing accessibility and understanding. Reverse Engineering Github Copilot, able to reverse engineer samsung's live translation on call and trying to replicate it.",
    link: "",
    name: "Tublian",
  },
  {
    title: "Collaborator | Core-Technical Team",
    description:
      "Contributed to the OpenSource DGP(in collaboration with Tibil, actively enhancing features and functionality within the project. Provided mentorship to students, guiding them on the intricacies of open-source contributions and fostering their growth within the community.",
    link: "",
    name: "Tibil | C4GT",
  },
  {
    title: "Project Manager - Excelerate",
    description:
      "Successfully managed a team of 6 to plan and conduct a Global Educational event by Saint Louis University with a budget of USD 30,000. Prepared RACI Matrix, Risk Register, Budget Planning, and Allotment. Consistently met and exceeded project deadlines.",
    link: "",
    name: "Saint Louis University | Excelerate",
  },
];

const Page = () => {
  return (
    <div className="pt-12 px-9">
      <ProjectsPage items={Experiences} />
    </div>
  );
};

export default Page;

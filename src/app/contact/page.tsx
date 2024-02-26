import { ProjectsPage } from "@/components/experience";
import Image from "next/image";

interface ContactProps {
  title: string;
  description: string;
  link: string;
}
const contact: ContactProps[] = [
  {
    title: "Email",
    description:
      "Want to chat, I'd love to hear about your projects. Please get in touch by emailing me at hyattherate2005@gmail.com",
    link: "mailto:hyattherate2005@gmail.com",
  },
];

const Page = () => {
  return (
    <div className="flex w-screen justify-center items-center h-screen">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
        <Image
          src={"/contactMe.png"}
          alt={"Contact Me"}
          width={300}
          height={500}
        />
        <ProjectsPage items={contact} />
      </div>
    </div>
  );
};

export default Page;

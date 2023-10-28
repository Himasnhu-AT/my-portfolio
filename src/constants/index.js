import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  flutter,
  python,
  Java,
  C,
  Cpp,
  tensorflow,
  sklearn,
  pandas,
  numpy,
  Excelerate,
  LearnTrinity,
  CodeingHive,
  seniorconnect,
  fintracker,
  sih,
  linuxfirewall,
  MedicalGPT,
  OSKernalDemo,
  COX3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "sklearn",
    icon: sklearn,
  },
  {
    name: "pandas",
    icon: pandas,
  },


];

const experiences = [
  {
    title: "Project Manager",
    company_name: "Excelerate",
    icon: Excelerate,
    iconBg: "#383E56",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Managed a team of 6 to successfully plan and conduct a Global Educational event by Saint Louis University with a budget of $30,000.",
"Prepared RACI Matrix, Risk Register, Budget Planning, and Allotment.",
"Metproject deadlines.",
    ],
  },
  {
    title: "Open Source Mintainer",
    company_name: "LearnTrinity",
    icon: LearnTrinity,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - ongoing",
    points: [
      "A community-driven non-profit organization aimed at empowering developers and fostering an inclusive developer community.",
"npm package available for easy template integration.",
" Github LINK: https://github.com/LearnTrinity",
"Deployment LINK: https://learntrinity.vercel.app/"
    ],
  },
  {
    title: "Open Source Mintainer",
    company_name: "Codeing Hive",
    icon: CodeingHive,
    iconBg: "#383E56",
    date: "Sep 2023 - Ongoing",
    points: [
      "An open-source platform similar to CodePen.io with multi-language support.",
      "Github LINK: https://github.com/CodeingHive",
      "Deployment LINK: https://codeinghive.vercel.app/"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was the Team Lead of Himanshu in Excelerate Project Management Internship. He is an excellent individual driven by his passion to learn, explore and innovate. He accomplishes the tasks assigned to him in perfect manner and well before designated time. His ethics and values are a cherry on top of his personality. I wish him success for future endeavours.",
    name: "Ashar Javid",
    designation: "Team Lead",
    company: "Excelerate",
    image: "https://media.licdn.com/dms/image/D4D03AQH-ncY0BJSAZg/profile-displayphoto-shrink_800_800/0/1680796169902?e=2147483647&v=beta&t=39OWnGbyU7SYqp8MFMrYFdIyIdDGFhUtYbAQXgc9mhc",
  },
];

const projects = [
   {
    name: "FinTracker", 
    description: "Created a mobile application using Flutter to track monthly expenses and stored data in a local SQLite database. Implemented features to organize tasks in different accounts and categories, and set limits to categories.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "SQLLite",
        color: "green-text-gradient",
      },
    ],
    image: fintracker,
    source_code_link: "https://github.com/Himasnhu-AT/fintracker",
    deployment_link: "https://github.com/Himasnhu-AT/fintracker/releases/tag/1.0.0",
   },

  {
    name: "SeniorConnect",
    description:
      "Developed a mobile application to facilitate connections between seniors and juniors, allowing them to share projects and discuss ideas. Future plans include adding a community tab, message tab, and improving backend connectivity.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: seniorconnect,
    source_code_link: "https://github.com/Himasnhu-AT/seniorconnect",
    deployment_link: "https://github.com/Himasnhu-AT/seniorconnect/releases/tag/beta",
  },

  {
    name: "E-Waste Facility Locator",
    description:
      "Working on a project for Smart India Hackathon, aimed at locating E-waste facilities, scheduling E-waste pickups, and rewarding users based on precious metal content. \n\n NEXT: Update site to new tech stack",
    tags: [
      {
        name: "html, css, js",
        color: "blue-text-gradient",
      },
      {
        name: "node js, express js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "yellow-text-gradient",
      },
      {
        name: "rust",
        color: "yellow-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "yellow-text-gradient",
      }
  
    ],
    image: sih,
    source_code_link: "https://github.com/Himasnhu-AT/SIH",
    deployment_link: "https://e-waste-facilitylocator.netlify.app/",
  },
  
  {
    name: "Medical GPT",
    description:
      "Developed LLM Models to provide accurate medical advice based on trained data from medical books. Most of the code is closed source due to NDA.",
    tags: [
      {
        name: "PYTHON",
        color: "blue-text-gradient",
      },
      {
        name: "Sentense Transformers",
        color: "green-text-gradient",
      },
      {
        name: "lang Chain",
        color: "pink-text-gradient",
      },
      {
        name: "Falcon LLM, LLAMA2",
        color: "yellow-text-gradient",
      },
    ],
    image: MedicalGPT,
    source_code_link: "https://github.com/Himasnhu-AT/MedicalGPT",
    deployment_link: "https://github.com/Himasnhu-AT/MedicalGPT",
  },

  {
    name: "COX3 ML Model",
    description:
      "ML Model designed on 200K images, to detect the presence of COVID-19 in a patients, from lung scans. Overall accuracy of 81% from training time of 8 hours, EXPECTED to be: 36 for best efficiency.",
    tags: [
      {
        name: "PYTHON",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Sklearn",
        color: "pink-text-gradient",
      },
      {
        name: "pandas",
        color: "yellow-text-gradient",
      },
    ],
    image: COX3,
    source_code_link: "https://github.com/Himasnhu-AT/COX3-ML-Model/",
    deployment_link: "https://github.com/Himasnhu-AT/COX3-ML-Model/",
  },
  {
    name: "Mini Linux Firewall",
    description:
      "This is a mini firewall application implemented in C, uses Package Filtering. It allows users to add, delete, and print firewall rules based on specific criteria such as source IP, destination IP, source port, and more.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Networking",
        color: "green-text-gradient",
      },
    ],
    image: linuxfirewall,
    source_code_link: "https://github.com/Himasnhu-AT/Linux_mini-Firewall",
    deployment_link: "https://github.com/Himasnhu-AT/Linux_mini-Firewall"
  },
  {
    name: "OS Kernel Demo",
    description:
      "Demo kenel Build be me while learning OS Working.",
    tags: [
      {
        name: "Assembly",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "OS Working",
        color: "pink-text-gradient",
      },
    ],
    image: OSKernalDemo,
    source_code_link: "https://github.com/Himasnhu-AT/OS-kernal-demo",
    deployment_link: "https://github.com/Himasnhu-AT/OS-kernal-demo"
  },
];

export { services, technologies, experiences, testimonials, projects };

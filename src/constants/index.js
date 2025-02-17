import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Cloud Computing Enthusiast",
    icon: mobile,
  },
  {
    title: "DSA Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Sumago Infotech",
    company_website: "https://www.sumagoinfotech.com/",
    icon: web,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jul 2023",
    points: [
      "Developed web applications using the MERN stack and integrated REST APIs.",
      "Collaborated with cross-functional teams to ensure the delivery of high-quality solutions.",
      "Gained hands-on experience with responsive design and performance optimization.",
    ],
  },
  {
    title: "Data Science Master Virtual Intern",
    company_name: "Altair and EduSkills",
    company_website: "https://www.altair.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Completed a 10-week Data Science Master Virtual Internship supported by Altair and EduSkills.",
      "Certified by key officials, including Ramesha B.S. (Altair), Shri Buddha Chandrasekhar (AICTE), and Dr. Satya Ranjan Biswal (EduSkills).",
      "Achieved a grade of 'P' (Pass), with a performance range of 30-39%.",
    ],
  },
  {
    title: "Bootcamp Trainee",
    company_name: "Coditude",
    company_website: "https://www.coditude.in/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Participating in an intensive coding bootcamp focusing on advanced web development and software engineering concepts.",
      "Gaining hands-on experience with modern technologies, best practices, and industry-level project implementations.",
      "Collaborating with peers on real-world projects to enhance technical skills and problem-solving abilities.",
    ],
  },

];

const projects = [
  {
    name: "Student Marks and Rank Analysis",
    description:
      "Developed a full-stack web application for analyzing and ranking student marks using the MERN stack. Enabled real-time data input, performance visualization, and insights into student rankings. Built RESTful APIs for seamless data processing and utilized React for an interactive user interface.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: "studentMarksAnalysisImage", // Replace with the appropriate image variable or link
    hosted_link: "https://your-hosted-link.com", // Replace with your project's hosted link if available
  },
  {
    name: "Real Estate Price Prediction",
    description:
      "Built a web application to predict real estate prices using Python and Machine Learning. Utilized a linear regression model trained on a Bangalore home prices dataset. Integrated the model with a Flask server for backend processing and developed a frontend with HTML, CSS, and JavaScript for user interaction.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "sklearn",
        color: "pink-text-gradient",
      },
      {
        name: "html-css-js",
        color: "yellow-text-gradient",
      },
    ],
    image: "realEstatePricePredictionImage", // Replace with the appropriate image variable or link
    hosted_link: "https://your-hosted-link.com", // Replace with your project's hosted link if available
  },
  {
    name: "Simple .NET MVC5 Shopping Cart",
    description:
      "Developed an experimental online shopping cart project using C# .NET MVC5. Features include product display, user authentication, admin CRUD operations, and stock visualization using Chart.js. Designed with MSSQL, HTML5, CSS3, and JavaScript for efficient e-commerce workflows.",
    tags: [
      {
        name: "dotnet-mvc5",
        color: "blue-text-gradient",
      },
      {
        name: "csharp",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
      {
        name: "mssql",
        color: "yellow-text-gradient",
      },
    ],
    image: "shoppingCartImage", // Replace with the appropriate image variable or link
    hosted_link: "https://your-hosted-link.com", // Replace with your project's hosted link if available
  },
];

const personalInfo = {
  name: "Vishal",
  fullName: "Vishal Hiralal Ukade",
  email: "vishalukade@gmail.com",
  role: "Software Developer",
  about: `I am a dedicated and enthusiastic software developer with a strong academic background in Computer Engineering and professional experience in web development. I have expertise in C, C++, Java, and the MERN stack, along with certifications in Machine Learning and Azure Fundamentals. I thrive in solving complex problems, designing scalable solutions, and creating interactive applications. With a keen interest in innovation and emerging technologies, I am always eager to learn and apply my knowledge to real-world challenges.`,
  projectsIntro: `The following projects provide a glimpse into my technical expertise, creativity, and ability to solve practical problems. These projects showcase my skills in full-stack development, machine learning, and cloud computing. Each project reflects my passion for coding, collaboration, and delivering high-quality solutions that meet user needs.`,
};


const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1G8BS5Z9RFqHYuNKvv1_y6nKcSy13ihgc/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/vishal-ukade-23915724b/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/vishal-56",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};

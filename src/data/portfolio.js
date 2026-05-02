import { Code2, Briefcase, GraduationCap, Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const personalInfo = {
  name: "Deepak Kushwaha",
  role: "Software Engineer",
  tagline: "Delivering enterprise and product-grade applications.",
  about: "Software Engineer with 3+ years of experience building enterprise-grade applications. Proficient in C#, .NET Core, React, and Azure. Specialized in backend development, secure REST APIs, and cloud-native services. Proven track record of designing scalable, high-performance systems using Entity Framework, Redis, and RabbitMQ.",
  avatarUrl: "/portfolioImage.jpg", // Replace with actual image URL or local path like '/profile.jpg'
  resumeUrl: "/resume.pdf", // Add link to your resume PDF
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Deepakkushwaha01",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/deepak-kushwaha-48b352275",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:deepakkushwaha95820@gmail.com",
    icon: Mail,
  },
  {
    name: "Phone",
    url: "tel:+919582083811",
    icon: Phone,
  }
];

export const skills = [
  {
    category: "Programming",
    items: ["C#", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: [".NET Core", "Entity Framework Core", "SQL Server", "Redis", "RabbitMQ", "NodeJS", "ExpressJS"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "Redux", "Tailwind CSS"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure Functions", "Application Insights", "Docker", "Git", "GitHub"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "MongoDB"],
  },
  {
    category: "Tools & Collaboration",
    items: ["Visual Studio Code", "Visual Studio", "Postman", "Jira", "Trello"],
  }
];

export const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Codinova Technologies, Noida",
    duration: "DEC 2023 – PRESENT",
    description: "Led scalable full-stack integrations for platforms like Zenegy, Iknow, and Holibob. Architected monorepo-based systems and microservices using Next.js, and built high-performance data synchronization pipelines leveraging .NET Core, Azure Functions, RabbitMQ, and Redis.",
    icon: Briefcase,
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Phratry Technology, Noida",
    duration: "JAN 2023 – DEC 2023",
    description: "Developed end-to-end web applications using React.js, Node.js, and Express.js. Built secure RESTful APIs, optimized MongoDB databases for high performance, and crafted responsive UIs with modern styling libraries like Tailwind CSS.",
    icon: Briefcase,
  },
  {
    id: 3,
    role: "Trainee",
    company: "codeNinja",
    duration: "3 Months",
    description: "Gained hands-on experience in software development by working on real-world projects, understanding industry best practices, and collaborating with cross-functional teams.",
    icon: Briefcase,
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Maharshi Dayanand University, IN",
    duration: "AUG 2019 – MAY 2023",
    description: "Comprehensive study of computer science principles, software engineering, and modern technology frameworks.",
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: "Class 12th, CBSE Board",
    institution: "Holy Convent Sr. Sec. School, IN",
    duration: "Graduated High School",
    description: "Completed secondary education with a strong foundation in core subjects.",
    icon: GraduationCap,
  }
];

"use client";

import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaMobileAlt, FaJira, FaTrello, FaBitbucket, FaRegLightbulb } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiRedux, SiReactquery, SiBootstrap, SiChakraui, SiTailwindcss, SiJest, SiGitlab, SiApple, SiAndroid, SiTestinglibrary, SiAxios } from "react-icons/si";

export const skillsData = [
  {
    category: "Programming & Frameworks",
    items: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={22} /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" size={22} /> },
      { name: "React", icon: <FaReact className="text-cyan-400" size={22} /> },
      { name: "React Native", icon: <FaMobileAlt className="text-green-500" size={22} /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={22} /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={22} /> }
    ]
  },
  {
    category: "State & Data Management",
    items: [
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" size={22} /> },
      { name: "Redux", icon: <SiRedux className="text-purple-400" size={22} /> },
      { name: "React Query", icon: <SiReactquery className="text-pink-500" size={22} /> },
      { name: "Axios", icon: <SiAxios className="text-blue-400" size={22} /> },
      { name: "Fetch API", icon: <FaRegLightbulb className="text-yellow-400" size={22} /> },
      { name: "RESTful APIs", icon: <FaRegLightbulb className="text-yellow-400" size={22} /> }
    ]
  },
  {
    category: "UI/UX & Styling",
    items: [
      { name: "Design Systems", icon: <FaFigma className="text-pink-500" size={22} /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" size={22} /> },
      { name: "Chakra UI", icon: <SiChakraui className="text-teal-400" size={22} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" size={22} /> },
      { name: "Responsive Design", icon: <FaMobileAlt className="text-green-500" size={22} /> },
      { name: "Cross-platform Development", icon: <FaMobileAlt className="text-green-500" size={22} /> }
    ]
  },
  {
    category: "Testing & Quality",
    items: [
      { name: "Jest", icon: <SiJest className="text-pink-600" size={22} /> },
      { name: "Unit Testing", icon: <SiTestinglibrary className="text-red-400" size={22} /> },
      { name: "Test-Driven Development", icon: <SiTestinglibrary className="text-red-400" size={22} /> }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" size={22} /> },
      { name: "Bitbucket", icon: <FaBitbucket className="text-blue-700" size={22} /> },
      { name: "GitLab", icon: <SiGitlab className="text-orange-400" size={22} /> },
      { name: "CI/CD", icon: <FaRegLightbulb className="text-yellow-400" size={22} /> },
      { name: "Jira", icon: <FaJira className="text-blue-500" size={22} /> },
      { name: "Trello", icon: <FaTrello className="text-blue-400" size={22} /> }
    ]
  },
  {
    category: "Mobile Platforms",
    items: [
      { name: "iOS Development", icon: <SiApple className="text-gray-700" size={22} /> },
      { name: "Android Development", icon: <SiAndroid className="text-green-600" size={22} /> },
      { name: "React Native", icon: <FaMobileAlt className="text-green-500" size={22} /> }
    ]
  }
];

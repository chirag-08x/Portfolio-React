import {
  FaLinkedin,
  FaEnvelope,
  FaTelegram,
  FaGithub,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";

import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    name: "home",
    path: "/",
  },
  {
    id: uuidv4(),
    name: "about",
    path: "/about",
  },
  {
    id: uuidv4(),
    name: "projects",
    path: "/projects",
  },
  {
    id: uuidv4(),
    name: "contact",
    path: "/contact",
  },
];

export default data;

export const externalLinks = [
  {
    id: uuidv4(),
    icon: <FaLinkedin />,
    navigate: "https://www.linkedin.com/in/chirag-agrawal-306811205/",
  },
  {
    id: uuidv4(),
    icon: <FaEnvelope />,
    navigate: "mailto:cagrawal081200@gmail.com?subject=Portfolio Enquiry.",
  },
  {
    id: uuidv4(),
    icon: <FaTelegram />,
    navigate: "https://t.me/chirag08x",
  },
  {
    id: uuidv4(),
    icon: <FaGithub />,
    navigate: "https://github.com/chirag-08x",
  },
];

export const projects = [
  {
    id: uuidv4(),
    image: "./images/project-1.jpeg",
    title: "Sorting Visualizer",
    path: "#",
  },
  {
    id: uuidv4(),
    image: "./images/project-2.jpeg",
    title: "Pathfinding Visualizer",
    path: "#",
  },
  {
    id: uuidv4(),
    image: "./images/project-3.jpeg",
    title: "E-commerce Site",
    path: "#",
  },
  {
    id: uuidv4(),
    image: "./images/project-4.jpeg",
    title: "Chat App",
    path: "#",
  },
];

export const frontend = [
  {
    id: uuidv4(),
    title: "HTML/CSS",
    percent: "75%",
  },
  {
    id: uuidv4(),
    title: "javascipt",
    percent: "70%",
  },
  {
    id: uuidv4(),
    title: "React",
    percent: "80%",
  },
];

export const otherskills = [
  {
    id: uuidv4(),
    title: "Python",
    percent: "80%",
  },
];

export const timeline = [
  {
    id: uuidv4(),
    year: 2017,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
  },
  {
    id: uuidv4(),
    year: 2018,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
  },
  {
    id: uuidv4(),
    year: 2019,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
  },
  {
    id: uuidv4(),
    year: 2020,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
  },
  {
    id: uuidv4(),
    year: 2021,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
  },
  {
    id: uuidv4(),
    year: 2022,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi autem, ea excepturi.",
  },
];

export const personalInfo = [
  {
    id: uuidv4(),
    title: "address",
    text: ["Revell Orchid, Pune 411047, Maharastra"],
    icon: <FaLocationArrow />,
    redirect: "https://goo.gl/maps/poPCRJirhyycTEPG7",
  },
  {
    id: uuidv4(),
    title: "email",
    text: ["cagrawal081200@gmail.com"],
    icon: <FaEnvelope />,
    redirect: "mailto:cagrawal081200@gmail.com?subject=Portfolio Enquiry.",
  },
  {
    id: uuidv4(),
    title: "telephone",
    text: ["+91 9045743168, +91 7385262784"],
    icon: <FaEnvelope />,
    redirect: "javascript:void(0)",
  },
];

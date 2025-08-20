import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

export const LINKS = [
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hi Everyone!👋",
  introduction:
    "I’m Himanshu Ahirwar, a full-stack developer passionate about crafting user-friendly and visually appealing web applications.",
  description:
    "I'm open to job offers and eager to start my professional journey, bringing fresh ideas and innovative solutions to your team.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Streamerzz",
    description: "Live stream management tool for content creators",
    image: projects1,
    link: "https://github.com/hiimanshu028",
  },
  {
    name: "NutriTrack",
    description: "Track your meals and calories with smart AI suggestions",
    image: projects2,
    link: "https://github.com/your-github/nutritrack",
  },
  {
    name: "HairRevive",
    description: "A platform for hair regrowth solutions powered by science",
    image: projects3,
    link: "https://github.com/your-github/hairrevive",
  },
  {
    name: "DevDeck",
    description:
      "Interactive dashboard for developers to track coding activity",
    image: projects4,
    link: "https://github.com/your-github/devdeck",
  },
  {
    name: "FitConnect",
    description: "Fitness social network to connect athletes and trainers",
    image: projects5,
    link: "https://github.com/your-github/fitconnect",
  },
  {
    name: "WellNest",
    description: "A wellness app for mental and physical health improvement",
    image: projects6,
    link: "https://github.com/your-github/wellnest",
  },
];


export const EDUCATION = [
  {
    yearRange: "2020 — 2024",
    title: "B.E. in Computer Science, Jabalpur Engineering College",
    location: "Jabalpur, M.P.",
    description: ["Graduated with 68.5% marks."],
  },
  {
    yearRange: "Jun 2022",
    title: "Vocational Training, Jabalpur Smart City Ltd.",
    location: "Jabalpur, M.P.",
    description: [
      "Worked on RFID system, ICCC operations, and Smart Traffic Management.",
    ],
  },
  {
    yearRange: "2019 — 2020",
    title: "Class 12th, Wisdom Valley Hr. Sec. School",
    location: "Jabalpur, M.P.",
    description: ["Secured 57.8% marks."],
  },
  {
    yearRange: "2017 — 2018",
    title: "Class 10th, Wisdom Valley Hr. Sec. School",
    location: "Jabalpur, M.P.",
    description: ["Secured 72% marks."],
  }
];



export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "hiimanshu028@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/hiimanshu028",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/hiimanshu028",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/hiimanshu028",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Himanshu Ahirwar. All rights reserved.`,
};

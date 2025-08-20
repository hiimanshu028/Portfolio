"use client";
import { motion } from "framer-motion";

// Remix Icons
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiBootstrapFill,
  RiTailwindCssFill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNextjsFill,
  RiDatabase2Fill,
  RiGitBranchFill,
  RiGithubFill,
  RiCodeBoxFill,
  RiGlobalFill,
  RiCloudFill,
} from "@remixicon/react";

// Major stacks (core workflow essentials)
const majorSkills = [
  { name: "HTML", icon: <RiHtml5Fill className="w-16 h-16 text-orange-500" /> },
  { name: "CSS", icon: <RiCss3Fill className="w-16 h-16 text-blue-500" /> },
  { name: "JavaScript", icon: <RiJavascriptFill className="w-16 h-16 text-yellow-400" /> },
  { name: "React.js", icon: <RiReactjsFill className="w-16 h-16 text-cyan-400" /> },
  { name: "Next.js", icon: <RiNextjsFill className="w-16 h-16 text-black dark:text-white" /> },
  { name: "MongoDB", icon: <RiDatabase2Fill className="w-16 h-16 text-green-600" /> },
  { name: "SQL", icon: <RiDatabase2Fill className="w-16 h-16 text-gray-700 dark:text-gray-300" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-16 h-16 text-sky-500" /> },
];

// Minor / supporting tools
const minorSkills = [
  { name: "Bootstrap", icon: <RiBootstrapFill className="w-14 h-14 text-purple-600" /> },
  { name: "jQuery", icon: <RiGlobalFill className="w-14 h-14 text-blue-400" /> },
  { name: "Web Sockets", icon: <RiGlobalFill className="w-14 h-14 text-green-500" /> },
  { name: "REST APIs", icon: <RiGlobalFill className="w-14 h-14 text-indigo-500" /> },
  { name: "Git", icon: <RiGitBranchFill className="w-14 h-14 text-red-500" /> },
  { name: "GitHub", icon: <RiGithubFill className="w-14 h-14 text-black dark:text-white" /> },
  { name: "VS Code", icon: <RiCodeBoxFill className="w-14 h-14 text-blue-600" /> },
  { name: "Leaflet.js", icon: <RiGlobalFill className="w-14 h-14 text-green-700" /> },
  { name: "MapTiler", icon: <RiGlobalFill className="w-14 h-14 text-teal-500" /> },
  { name: "GCP", icon: <RiCloudFill className="w-14 h-14 text-orange-600" /> },
  { name: "AWS", icon: <RiCloudFill className="w-14 h-14 text-yellow-500" /> },
];

const Stack = () => {
  return (
    <div className="max-h-full relative flex flex-col items-center min-h-screen justify-center px-3"id="stack">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 text-center">
        Toolkit | My Workflow Essentials
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center">
        A collection of technologies I use to build modern, efficient, and scalable web applications.
      </p>

      {/* Major Skills Row */}
      <div className="overflow-hidden mt-14 w-full p-2">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {majorSkills.concat(majorSkills).map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center space-y-2 min-w-[120px] "
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill.icon}
              <p className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Minor Skills Row */}
      <div className="overflow-hidden mt-16 w-full p-2">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["-100%", "100%"] }} // opposite direction
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {minorSkills.concat(minorSkills).map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center space-y-2 min-w-[120px]"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill.icon}
              <p className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stack;

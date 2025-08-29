import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiPowers, SiSpringboot } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-6">
      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaJava className="text-2xl text-red-500" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">Java</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <SiSpringboot className="text-2xl text-green-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">
          Spring Boot
        </span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaReact className="text-2xl text-blue-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">React</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaJs className="text-2xl text-yellow-500" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">
          JavaScript
        </span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <RiTailwindCssFill className="text-2xl text-blue-700" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">Tailwind</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaDatabase className="text-2xl text-blue-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">SQL</span>
      </div>
    </div>
  );
};

export default Skills;

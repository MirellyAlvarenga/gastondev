import React from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiSpringboot, SiPowers, SiAngular } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-6">
      <a
        href="https://docs.oracle.com/javase/8/docs/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800 hover:scale-105 transition"
      >
        <FaJava className="text-2xl text-red-500" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">Java</span>
      </a>

      <a
        href="https://spring.io/projects/spring-boot"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800 hover:scale-105 transition"
      >
        <SiSpringboot className="text-2xl text-green-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">
          Spring Boot
        </span>
      </a>

      <a
        href="https://angular.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800 hover:scale-105 transition"
      >
        <SiAngular className="text-2xl text-red-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">
          Angular
        </span>
      </a>

      <a
        href="https://learn.microsoft.com/power-bi/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800 hover:scale-105 transition"
      >
        <SiPowers className="text-2xl text-yellow-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">
          Power BI
        </span>
      </a>

      <a
        href="https://www.w3schools.com/sql/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800 hover:scale-105 transition"
      >
        <FaDatabase className="text-2xl text-blue-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">SQL</span>
      </a>
    </div>
  );
};

export default Skills;

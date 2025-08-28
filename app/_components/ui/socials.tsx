import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-4 my-2 p-2">
      <a
        href="https://www.linkedin.com/in/matheus-gaston"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/gastonzinhow"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/gastonzinhow"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-pink-600 dark:text-white dark:hover:text-pink-300 text-2xl"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Socials;

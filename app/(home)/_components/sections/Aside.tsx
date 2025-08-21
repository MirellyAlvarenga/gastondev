import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Aside = () => {
  const { theme, setTheme } = useTheme();
  const { translations, language, toggleLanguage } = useLanguage();
  return (
    <aside className="flex flex-col items-center lg:sticky lg:top-[var(--navbar-height)] lg:h-[calc(100vh-var(--navbar-height))] lg:py-10 bg-white text-black m-1 p-1 dark:bg-black dark:text-slate-50 transition-colors duration-200">
      <img
        src="/images/Gaston.jpg"
        alt="Matheus Gaston"
        className="rounded-full outline-1 outline-offset-4 drop-shadow-lg drop-shadow-black w-2/3"
      />
      <h1 className="text-lg font-bold p-2 text-center">Matheus Gaston</h1>
      <h2 className="text-sm text-center">{translations.softwareEngineer}</h2>
      <div className="flex flex-col items-center p-2 w-full">
        <Link
          href="#about"
          className="border-2 border-solid w-full bg-white text-black m-1 p-1 hover:bg-gray-200 dark:bg-black dark:text-slate-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center"
        >
          {translations.about}
        </Link>
        <Link
          href="#education"
          className="border-2 border-solid w-full bg-white text-black m-1 p-1 hover:bg-gray-200 dark:bg-black dark:text-slate-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center"
        >
          {translations.education}
        </Link>
        <Link
          href="#experience"
          className="border-2 border-solid w-full bg-white text-black m-1 p-1 hover:bg-gray-200 dark:bg-black dark:text-slate-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center"
        >
          {translations.experience}
        </Link>
        <Link
          href="/contact"
          className="border-2 border-solid w-full bg-white text-black m-1 p-1 hover:bg-gray-200 dark:bg-black dark:text-slate-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center"
        >
          {translations.contact}
        </Link>
      </div>
      <div className="flex gap-4 my-2 p-2">
        <a
          href="https://www.linkedin.com/in/mirelly-pego-cordeiro-de-alvarenga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500 dark:text-white dark:hover:text-blue-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MirellyAlvarenga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/mirelly.alvarengaa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-600 dark:text-white dark:hover:text-pink-300 text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
    </aside>
  );
};

export default Aside;

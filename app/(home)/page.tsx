"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaJava,
  FaAngular,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { SiSpringboot, SiPowers } from "react-icons/si";
import { useTheme } from "next-themes";
import { useLanguage } from "@/app/context/LanguageContext";
import Aside from "./_components/sections/Aside";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { translations, language, toggleLanguage } = useLanguage();

  return (
    <div className="flex mt-8 bg-white dark:bg-black">
      <Aside />
      <div
        id="main"
        className="flex-1 py-16 pl-10 w-full bg-white dark:bg-black text-black dark:text-gray-100 space-y-20"
      >
        <section id="about" className="max-w-3xl">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4">
            {translations.aboutMeTitle}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {translations.aboutMeDescription}
          </p>
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
              <FaJava className="text-2xl text-red-500" />
              <span className="text-gray-800 dark:text-gray-300 text-sm">
                Java
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
              <FaAngular className="text-2xl text-red-600" />
              <span className="text-gray-800 dark:text-gray-300 text-sm">
                Angular
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
              <FaJs className="text-2xl text-yellow-600" />
              <span className="text-gray-800 dark:text-gray-300 text-sm">
                JavaScript
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
              <SiSpringboot className="text-2xl text-green-600" />
              <span className="text-gray-800 dark:text-gray-300 text-sm">
                Spring Boot
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
              <FaDatabase className="text-2xl text-blue-600" />
              <span className="text-gray-800 dark:text-gray-300 text-sm">
                SQL
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
              <SiPowers className="text-2xl text-yellow-700" />
              <span className="text-gray-800 dark:text-gray-300 text-sm">
                Power BI
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
              <FaHtml5 className="text-2xl text-orange-600" />
              <span className="text-gray-800 dark:text-gray-300 text-sm">
                HTML
              </span>
            </div>

            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
              <FaCss3Alt className="text-2xl text-blue-700" />
              <span className="text-gray-800 dark:text-gray-300 text-sm">
                CSS
              </span>
            </div>
          </div>
        </section>

        <section id="education" className="max-w-3xl">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4">
            {translations.educationTitle}
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {translations.pucMinasTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {translations.pucMinasDegree}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {translations.pucMinasDescription}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {translations.ifmgTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {translations.ifmgDegree}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {translations.ifmgDescription}
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="max-w-3xl">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4">
            {translations.experienceTitle}
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {translations.dtiDigitalTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {translations.dtiDigitalPeriod}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {translations.dtiDigitalDescription}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

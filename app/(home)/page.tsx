"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/app/context/LanguageContext";
import Aside from "./_components/sections/Aside";
import Skills from "../_components/skills";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { translations, language, toggleLanguage } = useLanguage();

  return (
    <div className="flex mt-8 bg-white dark:bg-black transition-colors duration-200">
      <Aside />
      <div
        id="main"
        className="flex-1 py-16 pl-10 w-full bg-white dark:bg-black text-black dark:text-gray-100 space-y-20 transition-colors duration-200"
      >
        <section id="about" className="max-w-3xl">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4">
            {translations.aboutMeTitle}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {translations.aboutMeDescription}
          </p>
          <Skills />
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

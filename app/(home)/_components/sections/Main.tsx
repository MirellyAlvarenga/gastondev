import Skills from "@/app/_components/ui/skills";
import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "next-themes";
import React from "react";

const Main = () => {
  const { theme, setTheme } = useTheme();
  const { translations, language, toggleLanguage } = useLanguage();
  return (
    <div className="pb-10 px-10 lg:pt-10">
      <section id="about" className="max-w-3xl">
        <h2 className="text-3xl font-bold border-b-2 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 pb-2 mb-4">
          {translations.aboutMeTitle}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {translations.aboutMeDescription}
        </p>
        <Skills />
      </section>

      <section id="education" className="max-w-3xl pt-10">
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

      <section id="experience" className="max-w-3xl pt-10">
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
  );
};

export default Main;

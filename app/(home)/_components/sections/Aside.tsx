import Socials from "@/app/_components/ui/socials";
import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const Aside = ({ className = "" }) => {
  const { theme, setTheme } = useTheme();
  const { translations } = useLanguage();
  
  return (
    <aside
      className={`flex flex-col items-center lg:sticky lg:top-[var(--navbar-height)] 
                  lg:h-[calc(100vh-var(--navbar-height))] pt-10 
                  bg-white text-black m-2 p-4 rounded-xl 
                  dark:bg-black dark:text-slate-50 transition-colors duration-200 
                  ${className}`}
    >

      <img
        src="/images/Mirelly.jpeg"
        alt="Mirelly Alvarenga"
        className="rounded-full outline outline-1 outline-offset-4 
                   drop-shadow-lg w-32 h-32 object-cover" 
      />
      
      <h1 className="text-lg font-bold mt-3 text-center">Mirelly Alvarenga</h1>
      <h2 className="text-sm text-center mt-1">{translations.softwareEngineer}</h2>

      <div className="flex flex-col items-center p-3 w-full max-lg:hidden">
        <Link
          href="#about"
          className="border rounded-xl w-full text-base m-1 p-2 text-center 
                     hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {translations.about}
        </Link>
        <Link
          href="#education"
          className="border rounded-xl w-full text-base m-1 p-2 text-center 
                     hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {translations.education}
        </Link>
        <Link
          href="#experience"
          className="border rounded-xl w-full text-base m-1 p-2 text-center 
                     hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {translations.experience}
        </Link>
        <Link
          href="/contact"
          className="border rounded-xl w-full text-base m-1 p-2 text-center 
                     hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {translations.contact}
        </Link>
      </div>

      <Socials />
    </aside>
  );
};

export default Aside;

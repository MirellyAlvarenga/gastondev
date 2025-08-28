"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "@/app/context/LanguageContext";
import Aside from "./_components/sections/Aside";
import Skills from "../_components/ui/skills";
import Main from "./_components/sections/Main";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { translations, language, toggleLanguage } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row mt-8 bg-white dark:bg-black transition-colors duration-200">
        <Aside />
        <Main />
    </div>
  );
}

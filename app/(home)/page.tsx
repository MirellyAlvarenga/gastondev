"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaJava, FaAngular, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaSun, FaMoon } from "react-icons/fa";
import { SiSpringboot, SiPowers } from "react-icons/si"; 
import { useTheme } from "next-themes";
import { useLanguage } from "@/app/context/LanguageContext"; 

export default function Home() {
const { theme, setTheme } = useTheme();
const { translations, language, toggleLanguage } = useLanguage();

return (
<div className='flex justify-center items-center py-2 mt-8'> 
<div className="fixed top-2 right-4 flex gap-4 z-50"> 
  <button
    onClick={toggleLanguage}
    className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
    title={language === 'pt' ? 'Mudar para Inglês' : 'Change to Portuguese'}
  >
    {language === 'pt' ? 'EN' : 'PT'}
  </button>

  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
    title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Change to Dark Mode'}
  >
    {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
  </button>
</div>

<aside className="fixed top-14 left-0 w-56 h-[calc(100vh-64px)] flex flex-col items-center p-4 bg-white dark:bg-black text-black dark:text-gray-200 shadow-lg">
  <img src="/images/Mirelly.jpeg" alt="Mirelly Alvarenga" className='rounded-full outline-1 outline-offset-4 drop-shadow-lg drop-shadow-black w-2/3'/> 
  <h1 className='text-lg font-bold p-2 text-center'>Mirelly Alvarenga</h1> 
  <h2 className='text-sm text-center'>{translations.softwareEngineer}</h2> 
  <div className='flex flex-col items-center p-2 w-full'> 
    <Link href="#about" className='border-2 border-solid w-full bg-white text-black m-1 p-1 hover:bg-gray-200 dark:bg-black dark:text-slate-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center'>{translations.about}</Link>
    <Link href="#education" className='border-2 border-solid w-full bg-white text-black m-1 p-1 hover:bg-gray-200 dark:bg-black dark:text-slate-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center'>{translations.education}</Link>
    <Link href="#experience" className='border-2 border-solid w-full bg-white text-black m-1 p-1 hover:bg-gray-200 dark:bg-black dark:text-slate-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center'>{translations.experience}</Link>
    <Link href="/contact" className='border-2 border-solid w-full bg-white text-black m-1 p-1 hover:bg-gray-200 dark:bg-black dark:text-slate-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center'>{translations.contact}</Link>
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

<div id='main'className="flex-1 py-16 w-full bg-white dark:bg-black pl-64 text-black dark:text-gray-100 space-y-20">
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
        <span className="text-gray-800 dark:text-gray-300 text-sm">Java</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaAngular className="text-2xl text-red-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">Angular</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaJs className="text-2xl text-yellow-600" /> 
        <span className="text-gray-800 dark:text-gray-300 text-sm">JavaScript</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <SiSpringboot className="text-2xl text-green-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">Spring Boot</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaDatabase className="text-2xl text-blue-600" /> 
        <span className="text-gray-800 dark:text-gray-300 text-sm">SQL</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <SiPowers className="text-2xl text-yellow-700" /> 
        <span className="text-gray-800 dark:text-gray-300 text-sm">Power BI</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaHtml5 className="text-2xl text-orange-600" /> 
        <span className="text-gray-800 dark:text-gray-300 text-sm">HTML</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaCss3Alt className="text-2xl text-blue-700" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">CSS</span>
      </div>
    </div>
  </section>

  <section id="education" className="max-w-3xl">
    <h2 className="text-3xl font-bold border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4">
      {translations.educationTitle}
    </h2>
    <div className="space-y-3">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{translations.pucMinasTitle}</h3>
        <p className="text-gray-600 dark:text-gray-400">
          {translations.pucMinasDegree}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {translations.pucMinasDescription}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{translations.ifmgTitle}</h3>
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
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{translations.dtiDigitalTitle}</h3>
        <p className="text-gray-600 dark:text-gray-400">{translations.dtiDigitalPeriod}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          {translations.dtiDigitalDescription}
        </p>
      </div>
    </div>
  </section>
</div>
</div>
)
}
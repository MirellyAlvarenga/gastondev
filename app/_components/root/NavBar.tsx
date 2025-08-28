"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { useTheme } from "next-themes";
import { FaAlignJustify, FaSun, FaMoon } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useLanguage } from "../../context/LanguageContext";

const NavBar = () => {
  const currentPath = usePathname();
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const { theme, setTheme } = useTheme();
  const { translations, language, toggleLanguage } = useLanguage();
  const handleResize = () => {
    if (window.innerWidth >= 968) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const links = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Projects", href: "/projects" },
    { label: "Experiences", href: "/experiences" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav
      className={classnames(
        "fixed w-full flex space-x-6 px-5 h-14 items-center justify-between z-40",
        {
          "bg-black border-b border-white text-white": theme === "dark",
          "bg-white border-b border-gray-200 text-black": theme === "light",
        }
      )}
    >
      <Link
        href="/"
        className={classnames("font-bold text-lg", {
          "text-white": theme === "dark",
          "text-black": theme === "light",
        })}
      >
        Matheus Gaston
      </Link>
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-white": link.href === currentPath && theme === "dark",
              "text-black": link.href === currentPath && theme === "light",
              "text-gray-400": link.href !== currentPath && theme === "dark",
              "text-gray-600": link.href !== currentPath && theme === "light",
              "hover:text-gray-200 dark:hover:text-gray-200 transition-colors":
                theme === "dark",
              "hover:text-gray-800 transition-colors": theme === "light",
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="top-2 right-4 flex gap-4 z-50">
        <button
          onClick={toggleLanguage}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
          title={
            language === "pt" ? "Mudar para Inglês" : "Change to Portuguese"
          }
        >
          {language === "pt" ? "EN" : "PT"}
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
          title={
            theme === "dark" ? "Mudar para Modo Claro" : "Change to Dark Mode"
          }
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-blue-400" />
          )}
        </button>
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          {nav ? <IoCloseSharp size={24} /> : <FaAlignJustify size={24} />}
        </button>
        {nav && (
          <div
            className={classnames(
              "absolute top-14 left-0 w-full flex flex-col items-center py-4 space-y-4 md:hidden border-b",
              {
                "bg-black border-white text-white": theme === "dark",
                "bg-white border-gray-200 text-black": theme === "light",
              }
            )}
          >
            {links.map((link: any) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setNav(false)}
                className={classnames("transition-colors", {
                  "text-white": link.href === currentPath && theme === "dark",
                  "text-black": link.href === currentPath && theme === "light",
                  "text-gray-400":
                    link.href !== currentPath && theme === "dark",
                  "text-gray-600":
                    link.href !== currentPath && theme === "light",
                  "hover:text-gray-200": theme === "dark",
                  "hover:text-gray-800": theme === "light",
                })}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

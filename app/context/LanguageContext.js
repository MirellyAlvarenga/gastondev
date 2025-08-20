"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import pt from "@/app/locales/pt";
import en from "@/app/locales/en";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
const [language, setLanguage] = useState('pt'); 
const [translations, setTranslations] = useState(pt);

useEffect(() => {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    setLanguage(savedLanguage);
    setTranslations(savedLanguage === 'en' ? en : pt);
  }
}, []);

const toggleLanguage = () => {
  const newLanguage = language === 'pt' ? 'en' : 'pt';
  setLanguage(newLanguage);
  setTranslations(newLanguage === 'en' ? en : pt);
  localStorage.setItem('language', newLanguage);
};

return (
  <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
    {children}
  </LanguageContext.Provider>
);
};

export const useLanguage = () => useContext(LanguageContext);
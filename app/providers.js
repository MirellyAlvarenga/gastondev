"use client"; 

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/app/context/LanguageContext"; 

export function Providers({ children }) {
return (
  <ThemeProvider attribute="class" defaultTheme="dark"> 
    <LanguageProvider>
      {children}
    </LanguageProvider>
  </ThemeProvider>
);
}
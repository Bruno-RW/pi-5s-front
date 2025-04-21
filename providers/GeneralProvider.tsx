"use client";

import { HeroUIProvider } from "@heroui/system";

// import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

import ThemeContextProvider from "@/context/ThemeContext";

const GeneralProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    // <SessionProvider>
      <ThemeContextProvider>
        <HeroUIProvider>
          <Toaster position="top-center" toastOptions={{duration: 3000}} />
          {children}
        </HeroUIProvider>
      </ThemeContextProvider>
    // </SessionProvider>
  );
};

export default GeneralProvider;
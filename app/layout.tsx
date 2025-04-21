import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "@/app/globals.css";

import { cn } from "@/lib/utils";
import GeneralProvider from "@/providers/GeneralProvider";

export const metadata: Metadata = {
  title: "Hospy: Chatbot Hospitalar",
  description: "Chat bot para hospitais utilizando dados personalizados",
};

const font = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          font.className,
          "flex flex-col w-full bg-gray-50 dark:bg-neutral-900"
        )}
        suppressHydrationWarning={true}
      >
        <GeneralProvider>
          {children}
        </GeneralProvider>
      </body>
    </html>
  );
};

export default RootLayout;

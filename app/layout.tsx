import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Chatbot Hospitalar",
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
      <body className={font.className} suppressHydrationWarning={true}>
        <div className="flex relative">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from "next";

import "./globals.scss";
import { inter } from "./fonts";
import Header from "./components/Header";


export const metadata: Metadata = {
  title: "Serch github users",
  description: "Serch github users",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="flex min-h-[80vh] flex-col p-6">
          {children}
        </main>
      </body>
    </html>
  );
}

import Header from "@/components/Header";
import { DataContextProvider } from "../contexts/dataContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dollarcostaverage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DataContextProvider>
      <html lang="en">
        <body>
          <Header />
          <NavBar />
          {children}
        </body>
      </html>
    </DataContextProvider>
  );
}

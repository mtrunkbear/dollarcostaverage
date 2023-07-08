import Header from "@/components/Header";
import Script from "next/script";
/* import { DataContextProvider } from "../contexts/dataContext"; */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import dynamic from "next/dynamic";
import Head from "next/head";
const DataContextProvider = dynamic(() => import("../contexts/dataContext"), {
  ssr: false,
});

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
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css"
        />
        <Script
          src="https://kit.fontawesome.com/78485b5ada.js"
          crossOrigin="anonymous"
        ></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></Script>
      </Head>
      <body>
        <DataContextProvider>
          <Header />
          <NavBar />
          {children}
        </DataContextProvider>
      </body>
    </html>
  );
}

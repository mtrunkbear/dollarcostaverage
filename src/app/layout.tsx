import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
const FormDataContextProvider = dynamic(() => import("../contexts/formDataContext"), {
  ssr: false,
});
const NavBar = dynamic(() => import("../components/NavBar"), {
  ssr: false,
});

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
      </Head>

      <body>
        <FormDataContextProvider>
          <Header />
          <NavBar />
          {children}
        </FormDataContextProvider>
      </body>
    </html>
  );
}

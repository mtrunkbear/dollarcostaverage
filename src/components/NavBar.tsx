"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const navLinks = [
    { name: "Dolar Cost Average", href: "/" },
    { name: "Sharp Ratio", href: "/sharpe-ratio" },
    { name: " Prices", href: "/prices" },
    { name: "Price Returns", href: "/price-returns" },
  ];
  return (
    <nav className="w-full h-20 bg-[#001400] z-50">
      <div className="max-w-screen-xl flex flex-row-reverse flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#00aa00] rounded-lg md:hidden hover:bg-[#002e00] focus:outline-none focus:ring-2 focus:ring-[#00aa00]  "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block  md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col bg-[#001400] p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  border-black">
            {navLinks.map(({ name, href }) => (
              <NavLink name={name} href={href} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
const NavLink = ({ name, href }: any) => {
  const pathname  = usePathname();
  const text = pathname == href ? " text-[#00dc00]" : " text-[#00aa00]";
  return (
    <li>
      <Link
        href={href}
        key={href+name}
        className={
          "block py-2 pl-3 pr-4  hover:text-[#00d200] bg-[#001e00] rounded md:bg-transparent  md:p-0 m-1 md:m-0 " +
          text
        }
        aria-current="page"
      >
        {name}
      </Link>
    </li>
  );
};

export default NavBar;

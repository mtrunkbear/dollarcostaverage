'use client'
import { useState,useEffect } from "react";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
const NavBar = () => {
  const [isMenu, setIsMenu] = useState(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 700) {
      setIsMenu(true);
    } else {
      setIsMenu(false);
    }
  }, [windowSize.width]);

  const navBarContainerStyle =
    windowSize.width < 700
      ? isMenu
        ? {
            display: "absolute",
            zIndex: "1",
            marginBottom: "-15%",
            opacity: "0.95",
          }
        : { height: "5%" }
      : {};
  const xmarkStyle =
    windowSize.width < 700
      ? isMenu
        ? {}
        : { display: "none" }
      : { display: "none" };
  const barsSyle =
    windowSize.width < 700
      ? isMenu
        ? { display: "none" }
        : {}
      : { display: "none" };
  const navBarUlStyle =
    windowSize.width < 700 ? (isMenu ? {} : { display: "none" }) : {};

  return (
    <nav className="navbar" style={navBarContainerStyle}>
      <i
        className="fa-solid fa-xmark"
        style={xmarkStyle}
        onClick={() => setIsMenu(false)}
      />
      <i
        className="fa-solid fa-bars"
        style={barsSyle}
        onClick={() => setIsMenu(true)}
      ></i>
      <ul style={navBarUlStyle}>
        <li>
          <Link href="/" onClick={() => setIsMenu(false)}>
            Dolar Cost Average
          </Link>
        </li>
        <li>
          <Link href="/SharpeRatio" onClick={() => setIsMenu(false)}>
            Sharp Ratio
          </Link>
        </li>
        <li>
          <Link href="/Prices" onClick={() => setIsMenu(false)}>
            Prices
          </Link>
        </li>
        <li>
          <Link href="/PriceReturns" onClick={() => setIsMenu(false)}>
            Price Returns
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

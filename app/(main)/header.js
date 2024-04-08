"use client";
import React, { useEffect, useState } from "react";
import lightLogo from "@/public/areaLogo.svg";
import Image from "next/image";
import darkLogo from "@/public/areaLogoWhite.svg";
import Link from "next/link";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(prefersDarkMode);
  }, []);
  return (
    <div className="container flex flex-row justify-between items-center pt-6 pb-3 h-20">
      {isDarkMode ? (
        <Image src={darkLogo} alt="dark logo" />
      ) : (
        <Image src={lightLogo} alt="light logo" />
      )}

      <Link
        href="/"
        className="text-[#557FF2] font-semibold uppercase hover:text-primaryBlue"
      >
        Login
      </Link>
    </div>
  );
}

export default Header;

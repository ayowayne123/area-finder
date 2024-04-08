"use client";
import React, { useEffect, useState, useRef } from "react";
import lightLogo from "@/public/areaLogo.svg";
import Image from "next/image";
import darkLogo from "@/public/areaLogoWhite.svg";
import Link from "next/link";
import image from "@/public/card_image.png";
import { FaRegBookmark } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function SearchHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const amenitiesContainerRef = useRef(null);
  const [scrollable, setScrollable] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const amenities = [
    "schools",
    "Hospitals",
    "Resort Parks",
    "shopping Malls",
    "Airports",
    "Train stations",
    "Night Life",
    "public wifi",
    "parking lot",
    "security",
    "public transport",
    "quiet",
    "pet store",
    "bus station",
    "gym",
  ];

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    const container = amenitiesContainerRef.current;
    if (container) {
      const { scrollWidth, clientWidth, scrollLeft } = container;
      setScrollable(scrollWidth > clientWidth);
      setScrollPosition(scrollLeft);
    }
  }, [amenitiesContainerRef.current?.scrollLeft]);

  const handleScrollLeft = () => {
    amenitiesContainerRef.current.scrollLeft -= 100; // Change the scroll value as needed
  };

  const handleScrollRight = () => {
    amenitiesContainerRef.current.scrollLeft += 100; // Change the scroll value as needed
  };
  return (
    <div className="w-full h-[195px] bg-[#F2F6FD] dark:bg-[#171717]">
      <div className="container flex flex-col h-full">
        <div className=" flex flex-row justify-between items-center h-20">
          {isDarkMode ? (
            <Image src={darkLogo} alt="dark logo" />
          ) : (
            <Image src={lightLogo} alt="light logo" />
          )}
          <div></div>

          <div>Welcome!</div>
        </div>
        <div className="flex flex-col justify-between pb-4 grow">
          <div className=" flex flex-row justify-between items-center ">
            <span className="flex flex-col">
              <span className="lg:text-2xl font-medium">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </span>
              <span>
                &quot;450&quot; Reviews (People are raving about the selected
                location)
              </span>
            </span>
            <div className="flex flex-row gap-4 items-center">
              <button className="buttonPrimary lg:py-4">Leave a review</button>
              <span className="flex items-center justify-center w-[56px] h-[50px] border-primaryBlue text-primaryBlue hover:text-[#243360] hover:border-[#243360] border cursor-pointer rounded-md">
                <FaRegBookmark size={14} />
              </span>
              <span className="flex items-center justify-center w-[56px] h-[50px] border-primaryBlue text-primaryBlue hover:text-[#243360] hover:border-[#243360] border cursor-pointer rounded-md ">
                <BsShare size={14} />
              </span>
            </div>
          </div>
          <div className="flex flex-row  gap-2  overflow-x-scroll relative">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-[#fafcfd] dark:bg-[#242428] dark:border-[#fafcfd] border-[#242428] text-[#171717] px-2  py-1 rounded-md text-sm border capitalize block text-nowrap items-center justify-center w-fit "
              >
                {amenity}
              </div>
            ))}
            {scrollable && scrollPosition > 0 && (
              <button
                className="absolute top-0 bottom-0 left-0 flex items-center justify-center text-xl bg-red-500 bg-opacity-50 rounded-full z-20"
                onClick={handleScrollLeft}
              >
                <BsArrowLeft />
              </button>
            )}
            {scrollable &&
              scrollPosition <
                amenitiesContainerRef.current?.scrollWidth -
                  amenitiesContainerRef.current?.clientWidth && (
                <button
                  className="absolute top-0 bottom-0 right-0 flex items-center justify-center text-xl bg-red-500 bg-opacity-50 rounded-full z-20"
                  onClick={handleScrollRight}
                >
                  <BsArrowRight />
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;

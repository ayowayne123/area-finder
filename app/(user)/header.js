"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link'
import lightLogo from "@/public/areaLogo.svg";
import Image from "next/image";
import personal from '@/public/card_image.png'
import darkLogo from "@/public/areaLogoWhite.svg";
import { FaRegBookmark } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';

function SearchHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const amenitiesContainerRef = useRef(null);
  const [scrollable, setScrollable] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const amenities = [
    "Schools",
    "Hospitals",
    "Resort Parks",
    "Shopping Malls",
    "Airports",
    "Train Stations",
    "Night Life",
    "Public WiFi",
    "Parking Lot",
    "Security",
    "Public Transport",
    "Quiet",
    "Pet Store",
    "Bus Station",
    "Gym",
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

  useEffect(() => {
    // Check if all fields are filled
    const allFilled =
      selectedAmenities.length > 0 &&
      rating > 0 &&
      reviewText.trim() !== "";
    setAllFieldsFilled(allFilled);
  }, [selectedAmenities, rating, reviewText]);

  const handleScrollLeft = () => {
    amenitiesContainerRef.current.scrollLeft -= 100;
  };

  const handleScrollRight = () => {
    amenitiesContainerRef.current.scrollLeft += 100;
  };

  const toggleReviewPopup = () => {
    setShowReviewPopup((prev) => !prev);
  };

  const handleAmenitySelection = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((item) => item !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const toggleAnonymous = () => {
    setIsAnonymous((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSubmit = () => {
    // Send data to console
    console.log("Selected Amenities:", selectedAmenities);
    console.log("Rating:", rating);
    console.log("Review Text:", reviewText);
    console.log("Anonymous:", isAnonymous);
    
    // Show alert for message sent
    toast.success("Review Submitted!");

    // Reset form fields and close popup
    setSelectedAmenities([]);
    setRating(0);
    setReviewText("");
    setIsAnonymous(false);
    setShowReviewPopup(false);
  };

  const [searchQuery, setSearchQuery] = useState("Bonny and Clyde Street, Ajao Estate, Lagos");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <div className="w-full h-[375px] md:h-[195px] bg-[#F2F6FD] dark:bg-[#171717] fixed z-20">
      <Toaster/>
      <div className="container flex flex-col h-full">
        <div className=" flex flex-row justify-between items-center h-20 gap-6">
          {isDarkMode ? (
            <Link href="/">
               <Image src={darkLogo} alt="light logo" priority />
              </Link>
           
          ) : (
            <Link href="/">
               <Image src={lightLogo} alt="light logo" priority />
              </Link>
          )}
 <div className=" w-[778px]  hidden md:block ">
      <div className="relative ">
        <div className="flex items-center">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <AiOutlineSearch className="text-[#1e1e1e] dark:text-[#fafbfc]" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-12 py-3 w-full px-4 rounded-md outline-none  dark:bg-[#242428] "
            value={searchQuery}
            onChange={handleInputChange}
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-4 flex items-center pr-3 text-[#1e1e1e] dark:text-[#fafbfc]"
              onClick={clearSearchQuery}
            >
              <AiOutlineClose />
            </button>
          )}
        </div>
      </div>
    </div>

          <div className="flex flex-row gap-2">
            <span>Welcome! </span>
            <Image
            src={personal}
            width={25}
            height={25}
            className="object-contain "
            alt="image of reviewer"
          /></div>
        </div>
        <div className="w-full max-w-[778px] justify-start md:hidden my-2 ">
      <div className="relative ">
        <div className="flex items-center">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <AiOutlineSearch className="text-[#1e1e1e] dark:text-[#fafbfc]" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-12 py-3 w-full px-4 rounded-md outline-none  dark:bg-[#242428] "
            value={searchQuery}
            onChange={handleInputChange}
          />
          {searchQuery && (
            <button
              className="absolute inset-y-0 right-4 flex items-center pr-3 text-[#1e1e1e] dark:text-[#fafbfc]"
              onClick={clearSearchQuery}
            >
              <AiOutlineClose />
            </button>
          )}
        </div>
      </div>
    </div>
        <div className="flex flex-col justify-between pb-4 grow">
          <div className=" flex flex-row justify-between items-center ">
            <span className="flex flex-col">
              <span className="lg:text-2xl font-medium py-2 md:py-0">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </span>
              <span >
                &quot;450&quot; Reviews (People are raving about the selected
                location)
              </span>
            </span>
            <div className="md:flex flex-row gap-4 items-center hidden ">
              <button
                onClick={toggleReviewPopup}
                className="buttonPrimary lg:py-4"
              >
                Leave a review
              </button>
              <span className="flex items-center justify-center w-[56px] h-[50px] border-primaryBlue text-primaryBlue hover:text-[#243360] hover:border-[#243360] border cursor-pointer rounded-md">
                <FaRegBookmark size={14} />
              </span>
              <span className="flex items-center justify-center w-[56px] h-[50px] border-primaryBlue text-primaryBlue hover:text-[#243360] hover:border-[#243360] border cursor-pointer rounded-md ">
                <BsShare size={14} />
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2 overflow-x-scroll relative no-scrollbar">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-[#fafcfd] dark:bg-[#242428] dark:border-[#fafcfd] border-[#242428] text-[#171717] dark:text-[#fafcfd] px-2  py-1 rounded-md text-sm border capitalize block text-nowrap items-center justify-center w-fit "
              >
                {amenity}
              </div>
            ))}
           
          </div>
          <div className="flex flex-row gap-4 items-center md:hidden ">
              <button
                onClick={toggleReviewPopup}
                className="buttonPrimary py-3"
              >
                Leave a review
              </button>
              <span className="flex items-center justify-center w-[56px] h-[40px] border-primaryBlue text-primaryBlue hover:text-[#243360] hover:border-[#243360] border cursor-pointer rounded-md">
                <FaRegBookmark size={14} />
              </span>
              <span className="flex items-center justify-center w-[56px] h-[40px] border-primaryBlue text-primaryBlue hover:text-[#243360] hover:border-[#243360] border cursor-pointer rounded-md ">
                <BsShare size={14} />
              </span>
            </div>
        </div>
      </div>
      {showReviewPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[#1D3045] opacity-[98%] dark:opacity-[99%]  z-50 dark:bg-[#171717]"
          onClick={toggleReviewPopup}
        >
          <div
            className="bg-white dark:bg-[#171717] p-4 lg:h-[587px] lg:w-[730px] container rounded-lg flex flex-col gap-4 border"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="lg:text-lg font-medium uppercase mb-4 text-center">
              Review Location
            </h2>
            <p className="lg:text-xl  font-medium">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </p>
            <div>
             
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="w-full bg-[#F3F7FE] dark:bg-[#242428]   p-[17px] rounded-md text-sm flex justify-between items-center"
                >
                  Select Amenities
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10  w-full bg-[#F3F7FE]  dark:bg-[#242428] dark:border-none  border border-[#D4DCF1]  rounded-b-md text-sm">
                    <div className="grid lg:grid-cols-5 gap-y-2 md:grid-cols-3 lg:gap-y-4 py-4 px-4 max-h-[300px] overflow-y-scroll no-scrollbar">
                    {amenities.map((amenity, index) => (
                      
                        
                          <label
                        key={index}
                        className="flex gap-1  cursor-pointer flex-row items-center justify-start"
                      ><input
                          type="checkbox"
                          checked={selectedAmenities.includes(amenity)}
                          onChange={() => handleAmenitySelection(amenity)}
                          className="checked:accent-primaryBlue"
                        />
                        {amenity}
                      </label>
                        
                        
                    ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-sm py-4">Rate Location</h3>
              <div className="flex gap-1 items-center">
                {[1, 2, 3, 4, 5].map((value, index) => (
                  <IoIosStar
                    key={index}
                    className={`${
                      value <= rating ? "text-yellow-400" : "text-gray-300"
                    } cursor-pointer`}
                    size={24}
                    onClick={() => handleStarClick(value)}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg py-2">Write Review</h3>
              <textarea
                className="border p-2 rounded-md resize-none w-full bg-transparent "
                rows='5'
                placeholder="Placeholder"
                value={reviewText}
                onChange={handleReviewTextChange}
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={toggleAnonymous}
                className="mr-2  checked:accent-primaryBlue"
              />
              <label className="font-medium">Post as Anonymous</label>
            </div>
            <div className="flex flex-row gap-6 w-full">
            <button
                className="bg-[#5378F6] w-1/2 text-[#fafbfc] font-bold py-2 px-4 rounded uppercase disabled:bg-[#E4E9FB]"
                onClick={handleSubmit}
                disabled={!allFieldsFilled} // Disable button if not all fields are filled
              >
                Submit
              </button>
            <button
              className="border border-[#5378F6] w-1/2  text-[#3366FF] font-bold py-2 px-4 rounded uppercase"
              onClick={toggleReviewPopup}
            >
              Cancel
            </button>
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchHeader;


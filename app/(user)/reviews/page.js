import React from "react";
import { cardData } from "@/utils/cardData";
import Image from "next/image";
import { HiHandThumbUp } from "react-icons/hi2";
import { HiHandThumbDown } from "react-icons/hi2";
import { FaCommentAlt } from "react-icons/fa";
import image from "@/public/card_image.png";
import image1 from "@/public/image1.png";
import image2 from "@/public/image2.png";
import image3 from "@/public/image3.png";
import image4 from "@/public/image4.jpeg";

export const metadata = {
  title: "All Reviews | Area Finder",
};
function AllReviewsPage() {
  return <div className="container flex flex-col md:flex-row py-4 gap-4 justify-between md:pt-[195px] pt-[375px]">
    <div className="md:items-end pt-8 md:hidden ">
      <div className="grid grid-cols-2 gap-4 ">
        <Image placeholder="blur" src={image1} alt="Grid image" className="object-cover w-[236px] h-[223px] rounded-lg overflow-hidden"/>
        <Image placeholder="blur" src={image2} alt="Grid image" className="object-cover w-[236px] h-[223px] rounded-lg overflow-hidden"/>
        <Image placeholder="blur" src={image3} alt="Grid image" className="object-cover w-[236px] h-[223px] rounded-lg overflow-hidden"/>
       <div className="relative">
        <div className="flex uppercase font-medium absolute inset-0 w-full h-full cursor-pointer text-white bg-[#1e1e1e75] justify-center items-center z-10">
          View more 
        </div>
       <Image placeholder="blur" src={image4} alt="Grid image" className="object-cover w-[236px] h-[223px] rounded-lg overflow-hidden"/>
        </div> 

      </div>

    </div>
    <div className="lg:w-[600px] xl:w-[700px] w-full   divide-y divide-[#D9D9D9] dark:divide-[#D9D9D9] gap-4 flex flex-col shrink-0">
    {cardData.map((card, index) => (
              <Card key={card.id} {...card} index={index} />
            ))}
    </div>
    <div className=" pt-8 hidden md:flex ">
      <div className="grid grid-cols-2 gap-4 ">
        <Image placeholder="blur" src={image1} alt="Grid image" className="object-cover w-[236px] h-[223px] rounded-lg overflow-hidden"/>
        <Image placeholder="blur" src={image2} alt="Grid image" className="object-cover w-[236px] h-[223px] rounded-lg overflow-hidden"/>
        <Image placeholder="blur" src={image3} alt="Grid image" className="object-cover w-[236px] h-[223px] rounded-lg overflow-hidden"/>
       <div className="relative">
        <div className="flex uppercase font-medium absolute inset-0 w-full h-full cursor-pointer text-white bg-[#1e1e1e75] justify-center items-center z-10">
          View more 
        </div>
       <Image placeholder="blur" src={image4} alt="Grid image" className="object-cover w-[236px] h-[223px] rounded-lg overflow-hidden"/>
        </div> 

      </div>

    </div>
  </div>;
}

export default AllReviewsPage;

const Card = ({
  reviewerName,
  reviewDate,
  location,
  rating,
  review,
  likes,
  dislikes,
  comments,
  
  
}) => {
  const categoryColors = {
    traffic: "bg-traffic text-traffic-border border-traffic-border",
    power: "bg-power-border text-power  border-power-border",
    road: "bg-road text-road-border border-road-border",
    water: "bg-water text-water-border border-water-border",
  };

  return (
    <div
      className={`w-full  pt-6 pb-2 flex flex-col gap-2 justify-between `}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1">
          <Image
            src={image}
            width={25}
            height={25}
            className="object-contain "
            alt="image of reviewer"
          />
          <div className="flex flex-row gap-1">
            <span className="capitalize text-sm font-medium">
              {reviewerName}
            </span>
            <span className="text-sm font-light">{reviewDate}</span>
          </div>
        </div>
        <div className="flex flex-row gap-1 text-sm">
        <span  className="text-[#FABB07] ">
            ★
          </span>
          <span>{rating}.0</span>
        </div>
      </div>
      {/* Review */}
      <p className="text-sm">{review}</p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex-row flex  gap-2">
          <span className="text-[#8F95B2] flex flex-row gap-1">
            <HiHandThumbUp size={18} />
            <span className="text-sm">{likes}</span>
          </span>
          <span className="text-[#8F95B2] flex flex-row gap-1">
            <HiHandThumbDown size={18} />
            <span className="text-sm">{dislikes}</span>
          </span>
          <span className="text-[#8F95B2] flex flex-row gap-1">
            <FaCommentAlt size={18} />
            <span className="text-sm">{comments}</span>
          </span>
        </div>
       
      </div>
    </div>
  );
};

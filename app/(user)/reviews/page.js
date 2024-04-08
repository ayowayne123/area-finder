import React from "react";
import { cardData } from "@/utils/cardData";
import Image from "next/image";
import { HiHandThumbUp } from "react-icons/hi2";
import { HiHandThumbDown } from "react-icons/hi2";
import { FaCommentAlt } from "react-icons/fa";

export const metadata = {
  title: "All Reviews | Area Finder",
};
function AllReviewsPage() {
  return <div className="container"></div>;
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
  category,
  index,
  scrollDirection,
}) => {
  const categoryColors = {
    traffic: "bg-traffic text-traffic-border border-traffic-border",
    power: "bg-power-border text-power  border-power-border",
    road: "bg-road text-road-border border-road-border",
    water: "bg-water text-water-border border-water-border",
  };

  return (
    <div
      className={`w-[239px] h-[239px] rounded-[15px] bg-[#FAFCFD] dark:bg-[#18181B] flex flex-col p-4 gap-2 justify-between `}
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
          <div className="flex flex-col">
            <span className="capitalize text-xs font-medium">
              {reviewerName}
            </span>
            <span className="text-[8px] font-light">{reviewDate}</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <span className="text-[11px] font-medium">{location}</span>
          <span>{renderStars()}</span>
        </div>
      </div>
      {/* Review */}
      <p className="text-sm">{review}</p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex-row flex  gap-2">
          <span className="text-[#8F95B2] flex flex-row gap-1">
            <HiHandThumbUp size={14} />
            <span className="text-[10px]">{likes}</span>
          </span>
          <span className="text-[#8F95B2] flex flex-row gap-1">
            <HiHandThumbDown size={14} />
            <span className="text-[10px]">{dislikes}</span>
          </span>
          <span className="text-[#8F95B2] flex flex-row gap-1">
            <FaCommentAlt size={14} />
            <span className="text-[10px]">{comments}</span>
          </span>
        </div>
        <div
          className={`px-2 py-[2px] rounded-md border-[0.5px]  ${
            categoryColors[category.toLowerCase()] || "bg-lightGrey text-white"
          } text-[9px] capitalize font-medium`}
        >
          {category}
        </div>
      </div>
    </div>
  );
};

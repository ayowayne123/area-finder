import Image from "next/image";
import { HiHandThumbUp } from "react-icons/hi2";
import { HiHandThumbDown } from "react-icons/hi2";
import { FaCommentAlt } from "react-icons/fa";
import image from "@/public/card_image.png";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { cardData } from "@/utils/cardData";

export const metadata = {
  title: "Home | Area Finder",
};

export default function Home() {
  const displayedCards = cardData.slice(0, 10);
  const firstColumn = displayedCards.slice(0, 5);
  const secondColumn = displayedCards.slice(5, 10); 

  return (
    <main className="lg:flex flex-row items-center justify-between container lg:min-h-[750px] overflow-hidden lg:max-h-screen lg:h-auto h-screen">
      {/* Left Hero Items with search form */}
      <div className="xl:w-[507px] lg:w-[480px] flex flex-col xl:gap-10 lg:gap-8 md:gap-6 gap-4 h-full items-center justify-center ">
        <h1 className="xl:text-[64px] text-4xl md:text-5xl lg:text-6xl xl:leading-[77.5px] font-bold">
          Find a place you will love to live!
        </h1>
        <div className="lg:text-2xl lg:leading-[29.05px]">
          See through the lenses of people who have lived or visited the
          neighbourhood you might have in mind.
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <AiOutlineSearch className="text-[#1e1e1e] dark:text-[#fafbfc]" />
          </span> 
          <input
            type="search"
            placeholder="Enter Address"
            className="w-full pl-6 pr-3 py-3  rounded-md bg-[#F3F7FE] border-[#D4DCF1] border dark:bg-[#242428] dark:border-[#242428] outline-none"
          />
          </div>
          
          <button className="buttonPrimary py-[10px]">search</button>
        </div>
      </div>

      {/* Right hero card scroll */}
      <div className="lg:flex flex-row lg:gap-3 xl:gap-6 w-[507px] justify-end overflow-y-hidden relative  overflow-hidden h-[800px] hidden">
        <div className="absolute flex h-full w-full z-10 lightgradient dark:darkgradient"></div>
        {/* First column */}
        <div className=" gap-6 ">
          <ul className="flex flex-col gap-6 animation-down">
            {firstColumn.map((card, index) => (
              <Card key={card.id} {...card} index={index} />
            ))}
          </ul>
          <ul className="flex flex-col gap-6 animation-down" aria-hidden>
            {firstColumn.map((card, index) => (
              <Card key={card.id} {...card} index={index} />
            ))}
          </ul>
        </div>
        {/* Second column */}
        <div className=" gap-6 ">
          <ul className="flex flex-col gap-6 animation-down" aria-hidden>
            {secondColumn.map((card, index) => (
              <Card key={card.id} {...card} index={index} />
            ))}
          </ul>
          <ul className="flex flex-col gap-6 animation-down">
            {secondColumn.map((card, index) => (
              <Card key={card.id} {...card} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

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
  const renderStars = () => {
    const stars = [];
    // Render 5 stars
    for (let i = 1; i <= 5; i++) {
      // If rating is greater than or equal to current star, color it yellow
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-[#FABB07] text-xs">
            ★
          </span>
        );
      } else {
        // Otherwise, keep it empty (not colored)
        stars.push(
          <span key={i} className="text-[#d1d1d1] text-xs">
            ★
          </span>
        );
      }
    }
    return stars;
  };

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

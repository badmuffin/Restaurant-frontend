import React from "react";
import { ReviewData } from "../types/ReviewData";

const TestimonialCard: React.FC<ReviewData> = ({
  img,
  review,
  name,
  title,
}) => {

  // console.log("Api url-> ",import.meta.env.VITE_API_URL);  
  return (
    <div className="relative max-w-[400px] md:max-w-[700px] mx-auto my-20">
      <div className="absolute -top-10 left-[40%] md:-top-14 md:left-[280px]">
        <img
          src={`${import.meta.env.VITE_API_URL}/${img}`}
          className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-cover rounded-full"
        />
      </div>
      <div className="bg-white shadow-lg text-center p-20 z-10 border rounded-tl-[60px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[60px]">
        <p className="tracking-wider">{review}</p>
        <div className="pt-10">
          <p className="font-bold text-lg">{name}</p>
          <p className="text-base">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

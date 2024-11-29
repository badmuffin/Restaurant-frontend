import React from "react";
import priceImg from "../assets/icons/price.png";
import { FoodData } from "../types/FoodData";

const FoodCard: React.FC<FoodData> = ({ img, title, desc }) => {
  return (
    <div className="w-[17rem] min-h-[400px] py-10 md:pt-32 md:pb-20">
      <div className=" relative">
        <img
          src={`${import.meta.env.VITE_API_URL}/${img}`}
          className="absolute -top-[100px] left-[22px]"
        />
        <img src={priceImg} className="absolute -top-[60px] left-[160px]" />
      </div>
      <div className="hover:bg-white duration-300 text-center border-2 border-white rounded-tl-[40px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[40px] pt-20 pb-10 shadow-lg">
        <h1 className="pt-16 pb-6 text-lg font-bold">{title}</h1>
        <p className="px-4 pt-0 pb-4 tracking-wider">{desc}</p>
      </div>
    </div>
  );
};

export default FoodCard;

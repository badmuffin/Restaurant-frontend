import FoodCard from "./FoodCard";
import { FoodData } from "../types/FoodData";
// import { foodData } from "../constants/foodData";  // for testing

import imgLeft from "../assets/bg-img/bg-img-2.png";
import imgRight from "../assets/bg-img/bg-img-3.png";
import bgImg4 from "../assets/bg-img/bg-img-4.png";
import bgImg5 from "../assets/bg-img/bg-img-5.png";
import bgImg6 from "../assets/bg-img/bg-img-6.png";
import useMenuApi from "../hooks/api/useMenuApi";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// import isLoggedIn from "../utils/isLogin";   // NO AUTH0



const SpecialDishes: React.FC = () => {
  const { fetchMenu } = useMenuApi();
  const [menus, setMenus] = useState<FoodData[]>([]);

  const fetchData = async () => {
    const menuResponse = await fetchMenu();
    if (menuResponse.success) {
      setMenus(menuResponse.response as FoodData[]);
      console.log(menuResponse);
    }
    else console.log("Error fetching Menus: ", menuResponse.errorMsg);

    // console.log("Menu Data: ", menuResponse);
  };

  // const isLogged = isLoggedIn(); // NO AUTH0
  const { isAuthenticated} = useAuth0();

  useEffect(() => {
    fetchData();
  }, [isAuthenticated]);

  return (
    <section className="relative min-h-screen bg-gray-100 px-10 lg:px-20 xl:px-44 pt-32">
      {/* background images bottom */}
      <div className="flex ">
        <div className="absolute bottom-[5rem] left-[24rem]">
          <img src={bgImg4} />
        </div>
        <div className="flex gap-20 absolute bottom-[5rem] right-[8rem]">
          <img src={bgImg5} className=" w-[100px] rotate-[20deg]" />
          <img src={bgImg6} />
        </div>
      </div>

      <div className=" flex flex-col justify-between items-center mx-auto text-center">
        {/* background image title */}
        <div className="absolute top-20 md:top-14 flex gap-x-36 md:gap-96 overflow-hidden">
          <img
            className="w-[120px] md:w-[240px] h-[105px] md:h-[210px]"
            src={imgLeft}
          />
          <img
            className="w-[90px] md:w-[180px] h-[125px] md:h-[250px] -rotate-[10deg]"
            src={imgRight}
          />
        </div>
        {/* title and subtitles */}
        <p className="text-4xl text-center lg:text-6xl font-bold">
          Our <span className="text-[#EA6D27]">Special</span> Dishes
        </p>
        <p className="w-[80%] md:w-[500px] text-lg tracking-wider py-10 ">
          Discover the Unique Flavors of Our Special Dishes. Each dish is a
          perfect blend of tradition and innovation, crafted to delight your
          taste buds."
        </p>
      </div>
      <div className="flex justify-center items-center">
        {/* {isLogged &&  */}          {/* NO AUTH0 */}
        { isAuthenticated &&
          (menus.length) ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-[100px] py-10 z-10">
              {/* all the four cards */}
              { menus.length ? (
              menus.map((data, idx) => (
                <FoodCard
                  key={idx}
                  img={data.img}
                  title={data.title}
                  desc={data.desc}
                />
              )) ) : (
                <div className="text-red-600 text-center text-5xl">
                  Error fetching data
                </div>
              )
            }
            </div>
          ) : (
            <div className="text-red-600 text-center text-5xl">
              No Data, try again
            </div>
          )
        }
      </div>
    </section>
  );
};

export default SpecialDishes;

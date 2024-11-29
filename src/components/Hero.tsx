import heroImg1 from "../assets/image/hero-img.png";
import heroImg2 from "../assets/image/hero-img-small.png";

import facebook from "../assets/icons/Facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";

import bgImg1 from "../assets/bg-img/bg-img-1.png";
import bgImg2 from "../assets/bg-img/bg-img-2.png";
import bgImg3 from "../assets/bg-img/bg-img-3.png";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className=" w-full min-h-screen">
      <Navbar />

      {/* circle designs */}
      <div className="relative -z-10">
        <div className="absolute -top-[260px] lg:-top-[360px] -left-[140px] lg:-left-[160px] border border-gray-500 rounded-full h-[400px] w-[400px] lg:h-[620px] lg:w-[620px]"></div>
        <div className="absolute -top-[280px] lg:-top-[300px] -left-[108px] lg:-left-[208px] border border-gray-500 rounded-full h-[400px] w-[400px] lg:h-[640px] lg:w-[640px]"></div>
        <div className="absolute -top-[320px] -left-[90px] lg:-left-[144px] border border-gray-500 rounded-full h-[400px] w-[400px] lg:h-[630px] lg:w-[630px]"></div>
      </div>

      {/* content */}
      <div className="flex flex-col gap-12 md:gap-20 lg:flex-row justify-between px-6 lg:px-20 xl:px-44 py-40 overflow-hidden ">
        {/* text-content */}
        <div className="w-full lg:w-[46%] flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center lg:text-6xl font-bold z-10">
            <h1>We Serve the</h1>
            <h1>
              <span className="text-[#EA6D27]">finest flavors</span> for
            </h1>
            <h1>your taste buds</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-[80%] tracking-wider text-lg text-center">
              Discover fresh, delicious meals cooked with quality ingredients
              and delivered straight to your table for a satisfying dining
              experience
            </p>
            <div className="py-8">
              <button className="bg-[#101A24] px-6 py-3 mr-3 border rounded-tl-xl rounded-br-xl text-white text-lg">
                Menu
              </button>
              <button className="bg-[#EA6D27] px-6 py-3 ml-3 border border-transparent rounded-tl-xl rounded-br-xl text-white text-lg">
                Book a table
              </button>
            </div>
          </div>
          {/* social media icons */}
          <div className="flex justify-between w-1/2 md:w-[34%]">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
          </div>
        </div>
        {/* image-content */}
        <div className="relative ">
          <img
            src={heroImg1}
            alt="hero-image"
            className="relative mx-auto w-[300px] lg:w-[400px] z-10 "
          />
          <img
            src={heroImg2}
            alt="hero-image-small"
            className="max-sm:hidden w-[350px] absolute z-10 bottom-0 -left-60"
          />
          {/* background images */}
          <div className="">
            <img src={bgImg1} className="absolute -top-20 -left-40 w-[300px] md:w-[400px]" />
            <img
              src={bgImg2}
              className="absolute -top-20 -right-10 md:-right-36 w-[160px] md:w-[260px]"
            />
            <img
              src={bgImg3}
              className="absolute bottom-0 -right-10 md:-right-40 w-[140px] md:w-[240px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import chefImg from "../assets/image/hero-chef.png";
import check from "../assets/icons/checkIcon.png";
import bgImg6 from "../assets/bg-img/bg-img-6.png";

const Chef = () => {
  return (
    <section className="px-4 md:px-20 xl:px-44 py-40 min-h-screen">
      <div className="relative flex flex-col md:flex-row justify-center items-center">
        {/* background image */}
        <img
          src={bgImg6}
          className="absolute -top-20 -left-20 w-[200px] md:w-[300px]"
        />
        <div className="w-[90%] md:w-1/2 pr-4 text-center">
          <p className="text-4xl md:text-6xl font-bold">
            Our <span className="text-[#EA6D27]">Expert</span> Chef
          </p>
          <p className="w-[80%] md:w-[500px] text-center mx-auto text-lg text-gray-700 tracking-wider py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est
            deserunt quidem dolores sed, quod quam maiores fugit ipsum nobis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:gap-8 text-gray-700">
            <p className="flex">
              <img src={check} className="w-[18px] h-[18px] mr-1" /> Lorem ipsum
              dolor sit amet consectetur.
            </p>
            <p className="flex">
              <img src={check} className="w-[18px] h-[18px] mr-1" />
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="flex">
              <img src={check} className="w-[18px] h-[18px] mr-1" />
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="flex">
              <img src={check} className="w-[18px] h-[18px] mr-1" />
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="flex">
              <img src={check} className="w-[18px] h-[18px] mr-1" />
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="flex">
              <img src={check} className="w-[18px] h-[18px] mr-1" />
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="py-8">
            <button className="bg-[#101A24] px-6 py-3 mr-3 border rounded-tl-xl rounded-br-xl text-white text-lg">
              Menu
            </button>
            <button className="bg-[#EA6D27] px-6 py-3 ml-3 border border-transparent rounded-tl-xl rounded-br-xl text-white text-lg">
              Book a table
            </button>
          </div>
        </div>
        <div className=" w-[80%] md:w-1/2 flex justify-center items-center">
          <img src={chefImg} />
        </div>
      </div>
    </section>
  );
};

export default Chef;

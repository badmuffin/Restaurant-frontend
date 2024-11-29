import logo from "../assets/logo/logo.png";
import facebook from "../assets/icons/Facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";
import mag from "../assets/bg-img/footer-bg.png";

const Footer = () => {
  const navigations = ["Menu", "About Us", "Contact Us", "Main dishes"];
  const dishes = [
    "Fish & Veggies",
    "Tofu Chili",
    "Egg & Cocumber",
    "Lumpia w/Sauce",
  ];

  return (
    <footer className="relative min-h-[100vh] bg-green-50 lg:px-20 xl:px-44 py-40">

      <div className="">
        <img
          src={mag}
          alt="footer-background-img"
          className=" absolute bottom-0 left-0"
        />
      </div>
      <div className="px-6 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-between items-start w-[80%] lg:w-[420px]">
          <img src={logo} width={200} />
          <p className="py-4 text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            laudantium at aliquid eaque corporis asperiores facilis debitis
            itaque tempora quis.
            <span className=" underline">Learn More</span>
          </p>
          <div>
            <p className="pt-8 pb-4 font-bold">Opening Hours</p>
            <div className="flex gap-2 flex-col md:flex-row">
              <p className="md:pr-2">
                <h1 className="font-medium">Monday - Friday</h1>
                <h1>8:00 am to 8:00 pm</h1>
              </p>
              <p className="md:px-3">
                <h1 className="font-medium">Saturday</h1>
                <h1>9:00 am to 9:00 pm</h1>
              </p>
              <p className="md:pl-2">
                <h1 className="font-medium">Sunday</h1>
                <h1>CLOSED</h1>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold mt-4 ">Navigation</p>
          {navigations.map((navigation, idx) => (
            <p key={idx} className="py-1">
              {navigation}
            </p>
          ))}
        </div>
        <div>
          <p className="font-bold mt-2">Dishes</p>
          {dishes.map((dish, idx) => (
            <p key={idx} className="py-1">
              {dish}
            </p>
          ))}
        </div>
        <div>
          <p className="font-bold mt-2">Follow Us</p>
          <div className="flex justify-start md:justify-evenly">
            <img src={facebook} className="mr-2" />
            <img src={instagram} className="mr-2" />
            <img src={twitter} />
          </div>
        </div>
      </div>
      <div className="border border-t-gray-500 my-4"></div>
      <div className="flex gap-2 flex-col md:flex-row justify-between py-4 px-2">
        <div>
          © 2022 Restaurants.{" "}
          <span className="block">All Right Reserved. Designed by Isaac</span>
        </div>
        <div className="flex">
          <p className="pr-4">Terms of service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import eggImg from "../assets/image/egg.png";
import fishImg from "../assets/image/fish.png";
import lumpiaImg from "../assets/image/lumpia.png";
import tofuImg from "../assets/image/tofu.png";

interface FoodData {
  img: string;
  title: string;
  desc: string;
}

export const foodData:FoodData[] = [
  {
    img: lumpiaImg,
    title: "Lumpia with Sauce",
    desc: "Delicious Lumpia, crispy and golden, served with a savory dipping sauce.",
  },
  {
    img: fishImg,
    title: "Fish and Veggie",
    desc: "Fresh fish and vibrant veggies, perfectly seasoned for a delightful meal.",
  },
  {
    img: tofuImg,
    title: "Tofu Chili",
    desc: "Spicy Tofu Chili, packed with flavor and perfect for a hearty meal",
  },
  {
    img: eggImg,
    title: "Egg and Cocumber",
    desc: "Refreshing egg and cucumber dish, light and flavorful for you.",
  },
];
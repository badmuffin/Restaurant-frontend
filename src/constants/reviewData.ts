import profile1 from "../assets/image/profile1.png";
import profile2 from "../assets/image/profile2.png";
import profile3 from "../assets/image/profile3.png";

interface ReviewData {
  img: string;
  review: string;
  name: string;
  title: string;
}

export const reviewData: ReviewData[] = [
  {
    img: profile1,
    review: "This restaurant exceeded all my expectations! The food was incredibly fresh and bursting with flavor, and the staff was so attentive and welcoming. It iss a place I will recommend to friends and definitely visit again.",
    name: "Mark Wood",
    title: "Software Developer",
  },
  {
    img: profile2,
    review: "An absolute gem! The atmosphere is cozy, the staff is friendly, and the food is simply outstanding. Every dish felt thoughtfully crafted, with flavors that left a lasting impression. I can’t wait to come back soon!",
    name: "Alex Smith",
    title: "Student",
  },
  {
    img: profile3,
    review: "From the warm welcome to the final bite, everything was perfect. The menu offers a great variety, and each dish tasted fresh and delicious. Truly a wonderful dining experience that I would recommend to anyone!",
    name: "Jessica Olsen",
    title: "Researcher",
  }
]
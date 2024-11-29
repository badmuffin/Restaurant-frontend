import { useEffect, useState } from "react";
import mag from "../assets/bg-img/footer-bg.png";
// import { reviewData } from "../constants/reviewData";
import useReviewApi from "../hooks/api/useReviewApi";
import TestimonialCard from "./TestimonialCard";

import { useAuth0 } from "@auth0/auth0-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ReviewData } from "../types/ReviewData";

const Testimonials: React.FC = () => {
  const { fetchReview } = useReviewApi();
  const [reviews, setReviews] = useState<ReviewData[]>([]);

  const fetchData = async () => {
    const reviewResponse = await fetchReview();
    if (reviewResponse.success) {
      setReviews(reviewResponse.response as ReviewData[]);
      console.log("Review Data fetched successfully");
    } else {
      console.log("Error fetching reviews: ", reviewResponse.errorMsg);
    }
  };

  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    fetchData();
  }, [isAuthenticated]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="relative min-h-[120vh] bg-[#F3F4F4] px-6 md:px-10 lg:px-20 xl:px-44 pt-32">
      <img src={mag} className="absolute top-32 -left-60 rotate-90" />
      <div className=" flex flex-col justify-between items-center mx-auto text-center">
        {/* title and subtitles */}
        <p className="text-4xl md:text-6xl font-bold">
          Our <span className="text-[#EA6D27]">Happy</span> Customers
        </p>
        <p className="w-[80%] md:w-[500px] text-lg tracking-wider py-10 ">
          Hear from our delighted guests! Discover how our dedication to flavor,
          quality, and service has created memorable experiences for each
          visitor.
        </p>
      </div>
      <div className="w-full pb-40">
        {isAuthenticated ? (
          reviews.length ? (
          <Carousel
            responsive={responsive}
            infinite={true}
            showDots={true}
            autoPlay={true}
            swipeable={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            transitionDuration={2000}
          >
            {reviews.map((data, idx) => (
              <TestimonialCard
                key={idx}
                img={data.img}
                review={data.review}
                name={data.name}
                title={data.title}
              />
            ))}
          </Carousel> ) : (
            <div className="text-red-600 text-center text-5xl ">
              Error Fetching data
            </div>
          )
        ) : (
          <div className="text-5xl text-red-600 text-center">
            No Data, Try again
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

// for reference purpose

import Chef from "../components/Chef";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import SpecialDishes from "../components/SpecialDishes";
import Testimonials from "../components/Testimonials";
import Welcome from "../components/Welcome";

// import envConfig from "../config/env.config";

const HomePage = () => {
  return (
    <>
      <Hero />
      <SpecialDishes />
      <Welcome />
      <Chef />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomePage;

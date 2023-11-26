/* eslint-disable no-unused-vars */
import HeroSection from "../components/HomePage/HeroSection";
import InfoSection from "../components/HomePage/InfoSection";
import HomeInfo2 from "../components/HomePage/HomeInfo2";
import HomeInfoSection3 from "../components/HomePage/HomeInfoSection3";
import BlogShowcase from "../components/HomePage/BlogShowcase/BlogShowcase";
import Testimonial from "../components/HomePage/Testimonial";
import CTA from "../components/HomePage/CTA";

const HomePage = () => {
  return (
    <div className="bg-ubg">
      <HeroSection />
      {/* <InfoSection /> */}
      <HomeInfo2 />
      <HomeInfoSection3 />
      <BlogShowcase />
      <Testimonial />
      <CTA />
    </div>
  );
};

export default HomePage;

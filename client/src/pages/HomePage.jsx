import HeroSection from "../components/HomePage/HeroSection";
import HomeInfo2 from "../components/HomePage/HomeInfo2";
import HomeInfoSection3 from "../components/HomePage/HomeInfoSection3";
import BlogShowcase from "../components/HomePage/BlogShowcase/BlogShowcase";
import CTA from "../components/HomePage/CTA";

const HomePage = () => {
  return (
    <div className="bg-ubg">
      <HeroSection />
      <HomeInfo2 />
      <HomeInfoSection3 />
      <BlogShowcase />
      <CTA />
    </div>
  );
};

export default HomePage;

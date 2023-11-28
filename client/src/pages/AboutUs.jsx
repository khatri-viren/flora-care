import Header from "../components/AboutUs/Header";
import Team from "../components/AboutUs/Team/Team";
import ctaImg from "../assets/product_8.png";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="md:mx-5 lg:mx-16 md:grid md:grid-cols-2 text-udark pb-10 my-20">
        <div className="leftSide flex flex-col mb-10 md:my-auto mx-10 space-y-5 ">
          <h3 className="text-4xl font-bold">
            Revolutionize plant care with our IoT-based monitoring devices for
            optimized growth.
          </h3>
          <p className="font-light text-sm">
            At BotanicBalance Systems, we are on a mission to transform plant
            care by leveraging the power of IoT-based monitoring devices. Our
            innovative technology optimizes plant growth while minimizing water
            waste, making it easier than ever for users to achieve thriving and
            sustainable gardens.
          </p>
        </div>
        <div className="rightSide mx-auto">
          <img
            src={ctaImg}
            alt=""
            className="mx-auto h-[300px] md:h-3/4 lg:h-[500px] max-h-[500px]"
          />
        </div>
      </section>
      <Team />
    </>
  );
};

export default AboutUs;

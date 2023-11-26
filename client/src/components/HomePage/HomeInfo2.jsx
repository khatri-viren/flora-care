/* eslint-disable react/prop-types */
import img from "../../assets/product_7.jpeg";

const HomeInfo2 = () => {
  return (
    <section className="md:mx-5 lg:mx-16 md:grid md:grid-cols-2 text-udark pb-10 my-20">
      <div className="leftSide flex flex-col mb-10 md:my-auto mx-10 space-y-5 ">
        <h3 className="text-4xl font-bold">
          Revolutionize plant care with our IoT-based monitoring devices for
          optimized growth.
        </h3>
        <p className="font-light text-sm">
          Our advanced data collection and machine learning models enable easy
          monitoring and reduced water waste.
        </p>
        <div className="lg:grid lg:grid-cols-2 text-center md:text-left">
          <div className="space-y-2 sm:mb-5">
            <span className="font-bold text-4xl">50% Faster</span>
            <p className="font-light text-sm">
              Achieve optimal plant growth with our innovative monitoring
              solutions.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-bold text-4xl">50% Less</span>
            <p className="font-light text-sm">
              Reduce water waste and conserve resources with our smart devices.
            </p>
          </div>
        </div>
      </div>
      <div className="rightSide mx-auto">
        <img
          src={img}
          alt=""
          className="mx-auto h-[300px] md:h-3/4 lg:h-[500px] max-h-[500px]"
        />
      </div>
    </section>
  );
};

export default HomeInfo2;

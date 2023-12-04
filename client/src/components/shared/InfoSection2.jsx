/* eslint-disable react/prop-types */
import heroimg from "../../assets/heroSection.jpeg";
import { motion } from "framer-motion";

const InfoSection2 = ({ img, desc }) => {
  return (
    <motion.section
      className="md:mx-5 lg:mx-16 md:grid md:grid-cols-2 text-udark pb-10 my-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
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
          src={heroimg}
          alt=""
          className="mx-auto h-[300px] md:h-3/4 lg:h-[500px] max-h-[500px]"
        />
      </div>
    </motion.section>
  );
};

export default InfoSection2;

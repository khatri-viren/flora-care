/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
const InfoSection3 = ({ image, desc }) => {
  const cloudFrontUrl = "https://d3mrhlrrrul5h2.cloudfront.net/";
  return (
    <motion.section
      className="mx-16 lg:grid lg:grid-cols-2 text-udark  my-32 py-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="leftSide mx-auto hidden lg:block">
        <img
          src={cloudFrontUrl + image}
          alt=""
          className="max-h-[500px]"
        />
      </div>
      <div className="rightSide flex flex-col my-auto mx-5 space-y-5">
        <div className="whitespace-pre-line">{desc}</div>
      </div>
    </motion.section>
  );
};

export default InfoSection3;

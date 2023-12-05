import { Link } from "react-router-dom";
import FillButton from "../shared/Buttons/FillButton";
import { useUser } from "../../store/UserContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { isLoggedIn } = useUser();
  return (
    <section className="heroSection bg-heroSection w-100 bg-no-repeat bg-center h-screen bg-cover">
      <div className="backdrop bg-[rgba(0,0,0,0.4)] w-100 h-full flex">
        <div className="heroContent flex flex-col w-1/2 my-auto space-y-10 mx-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-ubg"
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            Revolutionizing plant care with IoT-based monitoring
          </motion.h2>
          <motion.p
            className="text-ubg text-sm md:text-lg w-3/4"
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            Flora Care utilizes advanced data collection and machine learning
            models to optimize plant growth and reduce water waste. Experience
            the future of plant care today.
          </motion.p>
          <motion.div
            className="buttonContainer flex space-x-10"
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <Link to="/aboutus">
              <FillButton title="Learn More" />
            </Link>
            {!isLoggedIn && (
              <Link to="/signup">
                <button className="p-2 w-32 h-12 text-ubg border-ubg border ">
                  Sign Up
                </button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Link } from "react-router-dom";
import FillButton from "../shared/Buttons/FillButton";

const HeroSection = () => {
  return (
    <section className="heroSection bg-heroSection w-100 bg-no-repeat bg-center h-screen bg-cover">
      <div className="backdrop bg-[rgba(0,0,0,0.4)] w-100 h-full flex">
        <div className="heroContent flex flex-col w-1/2 my-auto space-y-10 mx-12">
          <h2 className="text-5xl font-bold text-ubg">
            Revolutionizing plant care with IoT-based monitoring
          </h2>
          <p className="text-ubg text-lg w-3/4">
            BotanicBalance Systems utilizes advanced data collection and machine
            learning models to optimize plant growth and reduce water waste.
            Experience the future of plant care today.
          </p>
          <div className="buttonContainer flex space-x-10">
            <Link to="/aboutus">
              <FillButton title="Learn More" />
            </Link>
            <Link to="/signup">
              <button className="p-2 w-32 h-12 text-ubg border-ubg border ">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

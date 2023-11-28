import FillButton from "../shared/Buttons/FillButton";
import BorderButton from "../shared/Buttons/BorderButton";
import ctaImg from "../../assets/CTA3.jpeg";

const CTA2 = () => {
  return (
    <section className="grid lg:grid-cols-2 mx-5 lg:mx-24 text-udark my-24">
      <div className="leftSide mx-auto space-y-4 my-auto w-3/4">
        <div className="text-4xl font-bold">
          Stay Updated with BotanicBalance
        </div>
        <div className="text-sm font-light">
          Subscribe to our newsletter for the latest updates and news on
          IoT-based monitoring devices and the plant care industry.
        </div>
        <div className="space-x-4">
          <FillButton title="Subscribe" />
          <BorderButton title="Learn More" />
        </div>
      </div>
      <div className="hidden lg:block rightSide mx-auto">
        <img src={ctaImg} alt="" className="" />
      </div>
    </section>
  );
};

export default CTA2;

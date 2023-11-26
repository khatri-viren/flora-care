/* eslint-disable react/no-unescaped-entities */
import BorderButton from "../shared/Buttons/BorderButton";

const InfoSection4 = () => {
  return (
    <section className="grid md:grid-cols-3 space-y-8 md:space-y-0 md:mx-5 lg:mx-20 my-12">
      <div className="card flex flex-col mx-10 text-center my-auto">
        <div className="text-2xl font-bold">
          Step by Step Installation and Usage Guide
        </div>
        <div className="font-light text-sm my-5">
          Follow these simple instructions to install and use our IoT-based
          monitoring device.
        </div>
        <div className="mx-auto">
          <BorderButton title="See More" />
        </div>
      </div>
      <div className="card flex flex-col mx-10 text-center my-auto">
        <div className="text-2xl font-bold">Monitor Your Plants with Ease</div>
        <div className="font-light text-sm my-5">
          Stay informed about your plants' health and growth progress with our
          user-friendly monitoring device.
        </div>
        <div className="mx-auto">
          <BorderButton title="See More" />
        </div>
      </div>
      <div className="card flex flex-col mx-10 text-center my-auto">
        <div className="text-2xl font-bold">
          Optimize Plant Growth and Water Usage
        </div>
        <div className="font-light text-sm my-5">
          Unlock the full potential of your plants by using our IoT-based
          monitoring device to optimize growth and reduce water waste.
        </div>
        <div className="mx-auto">
          <BorderButton title="See More" />
        </div>
      </div>
    </section>
  );
};

export default InfoSection4;

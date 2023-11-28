import starfilled from "../../assets/starFilled.svg";

const Testimonial = () => {
  return (
    <section className="testimonal flex justify-center text-udark my-24">
      <div className="container mx-auto flex flex-col">
        <div className="stars mx-auto space-x-2 flex">
          <img src={starfilled} alt="" />
          <img src={starfilled} alt="" />
          <img src={starfilled} alt="" />
          <img src={starfilled} alt="" />
          <img src={starfilled} alt="" />
        </div>
        <p className="review w-3/4 md:w-1/2 mx-auto text-center font-semibold my-5 text-lg">
          BotanicBalance Systems has completely transformed the way I care for
          my plants. The IoT-based monitoring devices provide real-time data
          that helps me optimize growth and minimize water waste.
        </p>
        <div className="container my-5 pb-10 flex space-x-5 mx-auto w-fit">
          <img
            className="w-14 h-14 rounded-full"
            src="https://via.placeholder.com/56x56"
            alt=""
          />
          <div className="my-auto">
            <div className="font-semibold">John Doe</div>
            <div className="text-sm font-light">Plant Scientist, GreenTech</div>
          </div>
          <div className="w-16 h-px my-auto rotate-90 border border-udark" />
          <div className="my-auto text-2xl font-bold">WebFlow</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

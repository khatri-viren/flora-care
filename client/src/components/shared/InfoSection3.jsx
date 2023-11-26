/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const InfoSection3 = ({ image, desc }) => {
  return (
    <section className="mx-16 lg:grid lg:grid-cols-2 text-udark  my-32 py-5">
      <div className="leftSide mx-auto hidden lg:block">
        <img
          src={"http://localhost:4000/" + image}
          alt=""
          className="max-h-[500px]"
        />
      </div>
      <div className="rightSide flex flex-col my-auto mx-5 space-y-5">
        <div className="whitespace-pre-line">{desc}</div>
      </div>
    </section>
  );
};

export default InfoSection3;

import TeamCard from "./TeamCard/TeamCard";

const Team = () => {
  return (
    <section className="mx-5 lg:mx-20 text-udark my-20">
      <div className="headingsContainer flex flex-col space-y-2 my-10 text-udark">
        <span className="mx-auto text-xs">Innovative</span>
        <h2 className="mx-auto text-center text-3xl font-bold">
          Meet Our Team
        </h2>
        <p className="w-1/2 mx-auto text-center text-sm">
          Our team members are experts in IoT, plant care, and data analytics.
        </p>
      </div>
      <div className="cardContainer grid lg:grid-cols-3 grid-cols-2 gap-5">
        <TeamCard name="Viren Khatri" position="Co-Founder" />
        <TeamCard name="Parimal Kolhe" position="Co-Founder" />
        <TeamCard name="Mitheelesh Katyarmal" position="Co-Founder" />
      </div>
    </section>
  );
};

export default Team;

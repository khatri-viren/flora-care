/* eslint-disable react/prop-types */
const Contributor = ({ contributor }) => {
  return (
    <div className="contributor flex my-4">
      {/* <img
        src="https://placehold.co/12x12"
        className="w-12 rounded-full"
        alt=""
      /> */}
      <div className="container my-auto">
        <div className="text-sm font-semibold">
          {contributor && contributor.name !== undefined
            ? contributor.name
            : "John Doe"}
        </div>
        <div className="text-sm">
          {contributor && contributor.position !== undefined
            ? contributor.position
            : "Author"}
          , BotanicBalance Systems
        </div>
      </div>
    </div>
  );
};

export default Contributor;

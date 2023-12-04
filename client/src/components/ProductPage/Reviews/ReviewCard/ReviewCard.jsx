/* eslint-disable react/prop-types */
import starFilled from "../../../../assets/starFilled.svg";

const ReviewCard = ({ stars, reviewText, firstname, lastname }) => {
  // console.log("ReviewCard Props:", { stars, reviewText, firstname, lastname });

  return (
    <div className="card my-10 mx-5 flex flex-col">
      <div className="starContainer flex space-x-1">
        {Array.from({ length: stars }, (_, index) => (
          <img key={index} src={starFilled} className="h-4" alt="" />
        ))}
      </div>
      <p className="font-semibold my-4">{reviewText}</p>

      <div className="my-3">
        <div className="text-sm font-semibold">{`${firstname} ${lastname}`}</div>
      </div>
    </div>
  );
};

export default ReviewCard;

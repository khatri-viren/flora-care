import React from "react";
import ReviewCard from "./ReviewCard/ReviewCard";

const Reviews = ({ reviews }) => {
  console.log("Product Reviews Received:", reviews);

  return (
    <section className="mx-5 lg:mx-20 my-12 pt-12">
      <h3 className="font-bold text-4xl">Customer Reviews</h3>
      <p className="font-light text-sm mt-4">
        Read what our customers have to say about our IoT-based monitoring
        device.
      </p>
      <div className="cardContainer grid grid-cols-3 py-10">
        {reviews?.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;

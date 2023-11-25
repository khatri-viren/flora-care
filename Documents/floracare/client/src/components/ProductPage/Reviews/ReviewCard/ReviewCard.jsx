import React from 'react'
import starFilled from "../../../../assets/starFilled.svg";

const ReviewCard = () => {
  return (
    <div className="card my-10 mx-5 flex flex-col">
    <div className="starContainer flex space-x-1">
      <img src={starFilled} className="h-4" alt="" />
      <img src={starFilled} className="h-4" alt="" />
      <img src={starFilled} className="h-4" alt="" />
      <img src={starFilled} className="h-4" alt="" />
      <img src={starFilled} className="h-4" alt="" />
    </div>
    <p className="font-semibold my-4">
      Our monitoring device has completely transformed the way I care for
      my plants.
    </p>

    <img
      className="lg:w-12 lg:h-12 w-10 h-10 rounded-full"
      src="https://via.placeholder.com/56x56"
      alt=""
    />
    <div className="my-3">
      <div className="text-sm font-semibold">John Doe</div>
      <div className="text-sm font-light">Plant Scientist, GreenTech</div>
    </div>
  </div>
  )
}

export default ReviewCard
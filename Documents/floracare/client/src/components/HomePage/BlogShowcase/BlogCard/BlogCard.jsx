import React from "react";
import heroimg from "../../../../assets/heroSection.jpeg";

const BlogCard = () => {
  return (
    <div className="flex mx-5 text-udark my-5">
      <div className="leftSide">
        <img src={heroimg} alt="" className="w-[200px] md:w-[300px]" />
      </div>
      <div className="rightSide px-8 flex flex-col justify-evenly">
        <div className="container space-y-1">
        <div className="text-xs">IoT</div>
        <div className="text-lg font-bold">How IoT is Revolutionizing Plant Care</div>
        <p className="font-light text-sm">
        Learn how IoT-based monitoring devices optimize plant growth.
        </p>
        </div>
        <div className="userInfo flex">
            <div className="leftSide">
                <img src={heroimg} alt="" className="w-14 rounded-full" />
            </div>
            <div className="rightSide my-auto mx-3">
                <div className="name font-semibold text-sm">John Doe</div>
                <div className="infoContainer space-x-2">
                    <span className="date font-light text-xs">11 Jan 2022</span>
                    <span className="font-light text-xs">5 min Read</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

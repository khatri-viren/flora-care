import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className=" flex flex-col">
      <Link to="/blogpage" className="">
      <img src="https://via.placeholder.com/400x200" alt="" />
      </Link>
      <div className="my-4 mx-2">
        <div className="mb-3">
          <span className="w-fit px-2 py-1 text-xs font-semibold bg-ulight mb-2">
            Category
          </span>
          <span className="w-fit text-xs font-semibold mx-3">5 min read</span>
        </div>
        <div className="font-bold text-lg lg:text-xl">
          The Benefits of IoT in Plant Care
        </div>
        <p className="font-light text-sm lg:text-base my-2">
          Discover how IoT technology is revolutionizing plant care.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

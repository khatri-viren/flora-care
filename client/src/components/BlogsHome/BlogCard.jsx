// BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="w-fit space-y-1 mx-auto my-5">
      <Link to={`/blogpage/${blog._id}`}>
        <img
          src={`http://localhost:4000/uploads/${blog.images[0]}`}
          alt={blog.title}
          className="w-full h-auto"
        />
      </Link>
      <div className="content flex justify-between px-1">
        <Link to={`/blogpage/${blog._id}`}>
          <span className="text-lg font-semibold">{blog.title}</span>
        </Link>
        {/* Add additional details here if needed */}
      </div>
      <div className="text-sm font-light px-1">{blog.intro}</div>
      {/* Add additional buttons or actions here if needed */}
    </div>
  );
};

export default BlogCard;

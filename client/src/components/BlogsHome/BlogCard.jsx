/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const maxChars = 150;

  const truncatedText = isTruncated
    ? blog.intro.slice(0, maxChars) + "..."
    : blog.intro;

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
      <div
        className="text-sm font-light px-1"
        onClick={() => setIsTruncated(!isTruncated)}
      >
        {truncatedText}
      </div>
      {/* Add additional buttons or actions here if needed */}
    </div>
  );
};

export default BlogCard;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex mx-5 text-udark my-5 hover:cursor-pointer">
      <div className="leftSide"></div>
      <div className="rightSide text-center px-8 flex flex-col justify-evenly">
        <div className="container space-y-1">
          <div className="text-xs">IoT</div>
          <Link to={`/blogpage/${blog._id}`}>
            <span className="text-xl font-bold">{blog.title}</span>
          </Link>
          <p className="font-light text-sm">{blog.intro}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

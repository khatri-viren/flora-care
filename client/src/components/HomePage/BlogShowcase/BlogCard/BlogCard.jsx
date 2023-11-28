/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex mx-5 text-udark my-5">
      <div className="leftSide">
        {/* <img
          src={`http://localhost:4000/uploads/${blog.images[0]}`}
          alt={blog.title}
          className=""
        /> */}
      </div>
      <div className="rightSide text-center px-8 flex flex-col justify-evenly">
        <div className="container space-y-1">
          <div className="text-xs">IoT</div>
          <Link to={`/blogpage/${blog._id}`}>
            <span className="text-xl font-bold">{blog.title}</span>
          </Link>
          <p className="font-light text-sm">{blog.intro}</p>
        </div>
        {/* <div className="userInfo flex">
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
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;

// BlogsHome.jsx
import axios from "axios";
import BlogCard from "../components/BlogsHome/BlogCard";
import CTA2 from "../components/BlogsHome/CTA2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ring } from "ldrs";

const BlogsHome = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  ring.register();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/blogshome");
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-udark pt-5">
      <section className="header mx-5 lg:mx-20 my-12">
        <h1 className="text-4xl font-bold">Our Blogs</h1>
        <p className="text-sm font-light my-3">
          A center for all our resources and insights
        </p>
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <l-ring
              size="40"
              stroke="5"
              bg-opacity="0"
              speed="2"
              color="black"
            ></l-ring>
          </div>
        ) : (
          <>
            <div className="heroSection grid lg:grid-cols-2 my-10 gap-10">
              <div className="img mx-auto hover:cursor-pointer">
                {blogs.length > 0 && blogs[0].images.length > 0 ? (
                  <Link to={"/blogpage/" + blogs[0]._id}>
                    <img
                      src={`http://localhost:4000/uploads/${blogs[0].images[0]}`}
                      alt={blogs[0].title}
                    />
                  </Link>
                ) : (
                  <img src="https://placehold.co/600x300" alt="Placeholder" />
                )}
              </div>
              <div className="rightSide mx-5 my-auto">
                {blogs.length > 0 && blogs[0].category && (
                  <span className="w-fit px-2 py-2 bg-ulight text-xs font-semibold my-3">
                    {blogs[0].category}
                  </span>
                )}
                <h4 className="font-bold text-2xl lg:text-4xl tracking-wide my-3">
                  {blogs.length > 0 ? blogs[0].title : "Blog Title Placeholder"}
                </h4>
                <p className="font-light my-3">
                  {blogs.length > 0
                    ? blogs[0].intro
                    : "Introduction Placeholder"}
                </p>
              </div>
            </div>
            <div className="cardsContainer grid grid-cols-3 gap-12">
              {blogs.slice(0, 3).map((blog) => (
                <Link to={`/blogpage/${blog._id}`} key={blog._id}>
                  <BlogCard blog={blog} />
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
      <section className="posts mx-5 lg:mx-20 my-12">
        <h2 className="text-3xl font-bold my-5">All Posts</h2>
        <hr className="border border-solid border-umedium mb-6" />
        <div className="cardsContainer grid grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <Link to={`/blogpage/${blog._id}`} key={blog._id}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
      </section>
      <CTA2 />
    </div>
  );
};

export default BlogsHome;

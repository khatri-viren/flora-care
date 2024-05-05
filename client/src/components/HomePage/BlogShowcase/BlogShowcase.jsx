import { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogShowcase = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER_URL + "blogshome"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="infoSection w-100 flex flex-col my-12 pb-16">
      <div className="headingsContainer flex flex-col space-y-2 my-10 text-udark">
        <span className="mx-auto text-xs">Insights</span>
        <h2 className="mx-auto text-center text-3xl font-bold">
          Discover the Latest Trends
        </h2>
        <p className="w-1/2 mx-auto text-center text-sm">
          Stay informed with our informative and engaging blog posts.
        </p>
      </div>
      <div className="cardContainer md:grid md:grid-cols-2 md:mx-12 lg:mx-24">
        {blogs.slice(0, 2).map((blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </section>
  );
};

export default BlogShowcase;

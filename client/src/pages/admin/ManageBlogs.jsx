/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ring } from "ldrs";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const cloudFrontUrl = "https://d3mrhlrrrul5h2.cloudfront.net/";
  ring.register();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_SERVER_URL + "admin/manageblogs"
        );
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mx-5 pt-8 lg:mx-20 my-12 text-udark mb-40">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">Manage Blogs</h2>
        <Link to="/admin/addblog">
          <button className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold">
            Add Blog
          </button>
        </Link>
      </div>
      <hr className="border border-solid border-udark my-5" />
      <div className="container">
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
          blogs.map((blog) => (
            <div key={blog._id} className="product flex my-4">
              <img
                src={cloudFrontUrl + blog.images[0]}
                alt={blog.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="details mx-10 space-y-1">
                <div className="text-lg font-bold">{blog.title}</div>
                <Link to={`/admin/blogedit/${blog._id}`}>
                  <button className="py-1 px-5 font-semibold border border-solid border-udark">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageBlogs;

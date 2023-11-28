import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Contributor from "../components/BlogPage/Contributor";
import copyLinksvg from "../assets/copyLink.svg";
import linkedinsvg from "../assets/linkedin.svg";
import facebooksvg from "../assets/facebook.svg";
import twittersvg from "../assets/twitter.svg";
import axios from "axios";

const BlogPage = () => {
  const { id } = useParams(); // Extract blog ID from URL
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/blogpage/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="text-udark pt-5">
      <div
        className="heroSection bg-cover flex w-full h-96"
        style={{
          backgroundImage: `url(http://localhost:4000/uploads/${
            blog.images && blog.images.length > 0
              ? blog.images[0]
              : "placeholder-image.jpg"
          })`,
        }}
      >
        <div className="backdrop bg-[rgba(0,0,0,0.5)] w-full h-full flex">
          <div className="heroContent flex flex-col w-full my-auto mx-12 text-center">
            <h1 className="text-5xl font-bold text-ubg mx-auto mt-3 mb-10">
              {blog.title || "Blog Title Placeholder"}
            </h1>
            <div className="space-y-4">
              {/* Placeholder image */}
              <img
                src="https://placehold.co/14x14"
                className="rounded-full w-14 mx-auto"
                alt=""
              />
              <h2 className="text-sm text-ubg font-semibold">
                {blog.contributors && blog.contributors.length > 0
                  ? blog.contributors[0].name
                  : "John Doe"}
              </h2>
              <span className="text-sm text-ubg font-light">
                {blog.dateUploaded
                  ? new Date(blog.dateUploaded).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "January 11, 2023"}
              </span>
              {/* <span className="text-sm text-ubg font-light mx-3">
                {blog.readTime || "5 min read"}
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="contentConatiner flex mx-5 lg:mx-20 my-12">
        <aside className="leftSide hidden lg:block w-fit mr-3 min-w-fit">
          <div className="font-bold text-lg">Contributor</div>
          <div>
            {blog.contributors && blog.contributors.length > 0 ? (
              blog.contributors.map((contributor) => (
                <Contributor key={contributor._id} contributor={contributor} />
              ))
            ) : (
              <>
                <Contributor placeholder />
              </>
            )}
          </div>
          <hr className="border border-solid border-umedium my-8" />
          <div className="newsletter">
            <div className="text-lg font-bold">Subscribe to newsletter</div>
            <input
              type="text"
              name="newsEmail"
              id=""
              placeholder="Your Email"
              className="border border-solid border-udark w-full bg-ubg py-2 my-2 px-2"
            />
            <button className="w-full py-2 my-2 bg-udark text-ubg">
              Subscribe
            </button>
          </div>

          <hr className="border border-solid border-umedium my-8" />
          <div className="socials space-x-2">
            <div className="text-lg font-bold mb-2">Share</div>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={copyLinksvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={linkedinsvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={facebooksvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={twittersvg} alt="" />
            </button>
          </div>
        </aside>
        <div className="rightSide lg:ml-16 space-y-5">
          <div className="text-3xl font-bold">Introduction</div>
          <p>{blog.intro || "Introduction Placeholder"}</p>

          <div className="text-2xl font-bold whitespace-pre-line">Content</div>
          {/* Adjust the rendering based on whether content is a string or an array */}
          {Array.isArray(blog.content) ? (
            blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{blog.content || "Content Placeholder"}</p>
          )}

          <div className="text-2xl font-bold">Conclusion</div>
          <p>{blog.conclusion || "Conclusion Placeholder"}</p>
        </div>
      </div>
      <div className="lg:hidden w-3/4 mx-auto flex space-x-4">
        <div>
          <div className="font-bold text-lg">Contributor</div>
          <div>
            {blog.contributors && blog.contributors.length > 0 ? (
              blog.contributors.map((contributor) => (
                <Contributor key={contributor._id} contributor={contributor} />
              ))
            ) : (
              <>
                <Contributor placeholder /> {/* Placeholder contributor */}
                <Contributor placeholder /> {/* Placeholder contributor */}
                <Contributor placeholder /> {/* Placeholder contributor */}
              </>
            )}
          </div>
        </div>
        <div>
          <div className="newsletter">
            <div className="text-lg font-bold">Subscribe to newsletter</div>
            <input
              type="text"
              name="newsEmail"
              id=""
              placeholder="Your Email"
              className="border border-solid border-udark w-full bg-ubg py-2 my-2 px-2"
            />
            <button className="w-full py-2 my-2 bg-udark text-ubg">
              Subscribe
            </button>
          </div>
          <div className="socials space-x-2">
            <div className="text-lg font-bold mb-2">Share</div>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={copyLinksvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={linkedinsvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={facebooksvg} alt="" />
            </button>
            <button className="rounded-full bg-ulight p-2 w-9 h-9">
              <img className="mx-auto my-auto" src={twittersvg} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

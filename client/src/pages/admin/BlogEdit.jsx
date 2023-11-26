import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    intro: "",
    content: "",
    conclusion: "",
    images: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        if (!id) {
          throw new Error("Product ID is undefined");
        }
        const response = await fetch(`http://localhost:4000/blogpage/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  const handleDelete = async (blogid) => {
    try {
      // Delete the blog
      const blogResponse = await fetch(
        `http://localhost:4000/admin/deleteblog/${blogid}`,
        {
          method: "DELETE",
        }
      );
  
      if (blogResponse.ok) {
        console.log("Blog deleted successfully");
  
        // Get the list of images associated with the blog
        const blogImagesResponse = await fetch(
          `http://localhost:4000/admin/getblogimages/${blogid}`
        );
  
        if (blogImagesResponse.ok) {
          const images = await blogImagesResponse.json();
  
          // Delete each image associated with the blog
          for (const image of images) {
            await fetch(`http://localhost:4000/admin/deleteblogimage/${image}`, {
              method: "DELETE",
            });
          }
  
          console.log("Blog images deleted successfully");
        } else {
          console.error("Failed to fetch blog images");
        }
  
        // Redirect to the blog management page or perform any other action.
        navigate("/admin/manageblogs");
      } else {
        console.error("Failed to delete Blog");
      }
    } catch (error) {
      console.error("Error deleting Blog:", error);
    }
  };  

  const handleUpdate = async (blogid) => {
    try {
      const response = await fetch(
        `http://localhost:4000/admin/blogedit/${blogid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blog),
        }
      );

      if (response.ok) {
        console.log("Blog updated successfully");
        navigate("/admin/manageblogs");
      } else {
        console.error("Failed to update Blog");
      }
    } catch (error) {
      console.error("Error updating Blog:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-5 pt-8 lg:mx-20 my-12 text-udark">
      <h2 className="text-4xl font-bold">Edit Product</h2>
      <div className="imageContainer grid grid-cols-4 gap-10 my-5">
        {blog.images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:4000/uploads/${image}`}
            alt={`Blog ${index + 1}`}
            className="mx-auto max-h-56"
          />
        ))}
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-16">
        <div className="leftSide">
          <div className="flex flex-col">
            <label htmlFor="title" className="ulabel">
              Title
            </label>
            <input
              type="text"
              className="uinput"
              name="title"
              id="title"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="intro" className="ulabel">
              Introduction
            </label>
            <textarea
              type="text"
              name="intro"
              id=""
              className="uinput"
              cols="30"
              rows="3"
              onChange={(e) => setBlog({ ...blog, intro: e.target.value })}
              value={blog.intro}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="desc" className="ulabel">
              Content
            </label>
            <textarea
              name="desc"
              className="uinput"
              id="desc"
              cols="30"
              rows="10"
              value={blog.content}
              onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="rightSide">
          <div className="flex flex-col mb-5">
            <label htmlFor="desc" className="ulabel">
              Conclusion
            </label>
            <textarea
              name="desc"
              className="uinput"
              id="desc"
              cols="30"
              rows="10"
              value={blog.conclusion}
              onChange={(e) => setBlog({ ...blog, conclusion: e.target.value })}
            ></textarea>
          </div>
          <div className="flex flex-col my-2">
            <button
              className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold mb-5"
              onClick={() => handleDelete(id)}
            >
              Delete Blog
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold"
              onClick={() => handleUpdate(id)}
            >
              Update Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  const [newImages, setNewImages] = useState([]);
  const [selectedImageCount, setSelectedImageCount] = useState(0);
  const [areImagesSelected, setAreImagesSelected] = useState(false);

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
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    setNewImages([...newImages, ...files]);
    setSelectedImageCount(files.length);
    setAreImagesSelected(true);
  };

  const handleAddImages = async () => {
    try {
      // Check if new images are selected
      if (areImagesSelected) {
        const formData = new FormData();
        newImages.forEach((image) => {
          formData.append("images", image);
        });

        const response = await fetch(
          `http://localhost:4000/admin/blogedit/addimage/${id}`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          console.log("Blog images added successfully");

          // Fetch the updated blog data after adding images
          fetchBlogData();
          setNewImages([]); // Clear the selected images
          setAreImagesSelected(false); // Reset to false after successful upload
        } else {
          console.error("Failed to add blog images");
        }
      } else {
        console.warn("No new images selected");
      }
    } catch (error) {
      console.error("Error adding blog images:", error);
    }
  };

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
            await fetch(
              `http://localhost:4000/admin/deleteblogimage/${image}`,
              {
                method: "DELETE",
              }
            );
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

  const handleImageDelete = async (imageName) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:4000/admin/deleteblogimage/${id}/${imageName}`,
        {
          method: "DELETE",
        }
      );

      if (deleteResponse.ok) {
        console.log("Blog image deleted successfully");

        // Update the blog in the state by removing the deleted image name
        const updatedBlog = {
          ...blog,
          images: blog.images.filter((img) => img !== imageName),
        };

        // Send a request to update the product in the database
        const updateResponse = await fetch(
          `http://localhost:4000/admin/blogedit/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedBlog),
          }
        );

        if (updateResponse.ok) {
          console.log("Product updated successfully");
          // Reload the page after updating the product
          window.location.reload();
        }else {
          console.error("Failed to update Blog");
        }
      } else {
        console.error("Failed to delete blog image");
      }
    } catch (error) {
      console.error("Error deleting blog image:", error);
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
          <div key={index} className="relative group">
            <img
              src={`http://localhost:4000/uploads/${image}`}
              alt={`Blog ${index + 1}`}
              className="mx-auto max-h-56 cursor-pointer"
              onClick={() => handleImageDelete(image)}
            />
            <button
              className="absolute top-0 right-1 text-red-600 p-1 rounded-full opacity-0 group-hover:opacity-100"
              onClick={() => handleImageDelete(image)}
            >
              ⓧ
            </button>
          </div>
        ))}
      </div>
      <div className="relative group">
        <div className="flex flex-col">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
            id="addImageInput"
          />
          <label htmlFor="addImageInput" className="cursor-pointer">
            <div className="bg-gray-200 border-black text-center p-4 rounded-md">
              + Add Image
            </div>
          </label>
          {selectedImageCount > 0 && (
            <p className="text-sm text-gray-500 mt-2">
              {selectedImageCount} image(s) selected
            </p>
          )}
        </div>
        <button
          type="button"
          className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold"
          onClick={handleAddImages}
        >
          Upload
        </button>
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

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    intro: "",
    content: "",
    conclusion: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("admin/addblog", formData);
      toast.success("Successfully Added Blog");
      window.location.href = "/admin/manageproducts";
    } catch (error) {
      console.error("Error adding blog: ", error);
      toast.error("Error Adding Blog");
    }
  };
  return (
    <div className="mx-5 lg:mx-20 pt-8 my-12 text-udark">
      <h2 className="text-4xl font-bold my-5">Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="images" className="ulabel">
            Upload Images
          </label>
          <input
            type="file"
            className="uinput"
            multiple
            name="images"
            id=""
            onChange={handleFileChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="ulabel">
            Blog Title
          </label>
          <input
            type="text"
            className="uinput"
            name="title"
            id=""
            onChange={handleChange}
            value={formData.title}
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
            onChange={handleChange}
            value={formData.intro}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="desc" className="ulabel">
            Content
          </label>
          <textarea
            name="desc"
            className="uinput"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formData.content}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="conclusion" className="ulabel">
            Conclusion
          </label>
          <textarea
            type="text"
            name="conclusion"
            id=""
            className="uinput"
            cols="30"
            rows="5"
            onChange={handleChange}
            value={formData.conclusion}
          />
        </div>

        <div className="flex flex-col my-2">
          <button
            type="submit"
            className="py-2 px-4 w-40 bg-ubg border border-solid border-udark font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;

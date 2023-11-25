import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    intro: "",
    desc: "",
    images: [],
    price: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files); // Convert FileList to array
    setFormData({ ...formData, images: imagesArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.title);
      for (let i = 0; i < formData.images.length; i++) {
        formDataToSend.append("images", formData.images[i]);
      }

      formDataToSend.append("price", Number(formData.price));
      formDataToSend.append("shortIntroduction", formData.intro);
      formDataToSend.append("description", formData.desc);
      formDataToSend.append("quantity", Number(formData.quantity));

      await axios.post(
        "http://localhost:4000/admin/addproduct",
        formDataToSend
      );
      toast.success("Successfully Added Product");
      window.location.href = "/admin/manageproducts";
    } catch (error) {
      console.error("Error adding product: ", error);
      toast.error("Error Adding Product");
    }
  };

  return (
    <div className="mx-5 pt-8 lg:mx-20 my-12 text-udark">
      <h2 className="text-4xl font-bold my-5">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 lg:gap-16">
          <div className="leftSide">
            <div className="flex flex-col">
              <label htmlFor="title" className="ulabel">
                Product Name
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
            <div className="flex flex-col mb-5">
              <label htmlFor="desc" className="ulabel">
                Description
              </label>
              <textarea
                name="desc"
                className="uinput lg:mb-32"
                id=""
                cols="30"
                rows="10"
                onChange={handleChange}
                value={formData.desc}
              ></textarea>
            </div>
          </div>
          <div className="rightSide">
            <div className="flex flex-col">
              <label htmlFor="imageUpload" className="ulabel">
                Upload Images
              </label>
              <input
                type="file"
                className="uinput"
                multiple
                name="imageUpload"
                id=""
                onChange={handleFileChange}
              />
            </div>
            <div className="flex justify-evenly">
              <div className="flex flex-col">
                <label htmlFor="price" className="ulabel">
                  Price
                </label>
                <input
                  type="number"
                  className="uinput w-28"
                  name="price"
                  onChange={handleChange}
                  value={formData.price}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="quantity" className="ulabel">
                  Quantity
                </label>
                <input
                  type="number"
                  className="uinput w-28"
                  name="quantity"
                  onChange={handleChange}
                  value={formData.quantity}
                />
              </div>
            </div>
            <div className="flex flex-col my-2">
              <button
                type="submit"
                className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

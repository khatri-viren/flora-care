import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortIntroduction: "",
    description: "",
    images: [],
    price: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("shortIntroduction", formData.shortIntroduction);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("quantity", formData.quantity);

      for (let i = 0; i < formData.images.length; i++) {
        formDataToSend.append("images", formData.images[i]);
      }

      await axios.post(
        import.meta.env.VITE_SERVER_URL + "admin/addproduct",
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
              <label htmlFor="name" className="ulabel">
                Product Name
              </label>
              <input
                type="text"
                className="uinput"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="shortIntroduction" className="ulabel">
                Introduction
              </label>
              <textarea
                type="text"
                name="shortIntroduction"
                className="uinput"
                cols="30"
                rows="3"
                onChange={handleChange}
                value={formData.shortIntroduction}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="description" className="ulabel">
                Description
              </label>
              <textarea
                name="description"
                className="uinput lg:mb-32"
                cols="30"
                rows="10"
                onChange={handleChange}
                value={formData.description}
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

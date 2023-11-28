import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    intro: "",
    description: "",
    images: [],
    quantity: 0,
    price: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newImages, setNewImages] = useState([]);
  const [selectedImageCount, setSelectedImageCount] = useState(0);
  const [areImagesSelected, setAreImagesSelected] = useState(false);

  const fetchProductData = async () => {
    try {
      if (!id) {
        throw new Error("Product ID is undefined");
      }
      const response = await fetch(`http://localhost:4000/productpage/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/admin/deleteproduct/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Product deleted successfully");
        // Redirect to the product management page or perform any other action.
        navigate("/admin/manageproducts");
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleImageDelete = async (imageName) => {
    try {
      // Send a request to delete the image from the server
      const deleteResponse = await fetch(
        `http://localhost:4000/admin/deleteimage/${id}/${imageName}`,
        {
          method: "DELETE",
        }
      );

      if (deleteResponse.ok) {
        console.log("Image deleted successfully");

        // Update the product in the database by removing the deleted image name
        const updatedProduct = {
          ...product,
          images: product.images.filter((img) => img !== imageName),
        };

        // Send a request to update the product in the database
        const updateResponse = await fetch(
          `http://localhost:4000/admin/productedit/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
          }
        );

        if (updateResponse.ok) {
          console.log("Product updated successfully");
          // Reload the page after updating the product
          window.location.reload();
        } else {
          console.error("Failed to update product");
        }
      } else {
        console.error("Failed to delete image");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleUpdate = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/admin/productedit/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (response.ok) {
        console.log("Product updated successfully");
        navigate("/admin/manageproducts");
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

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
          `http://localhost:4000/admin/productedit/addimage/${id}`,
          {
            method: "POST",
            body: formData,
          }
        );
  
        if (response.ok) {
          console.log("Images added successfully");
  
          // Fetch the updated product data after adding images
          fetchProductData();
          setNewImages([]); // Clear the selected images
          setAreImagesSelected(false); // Reset to false after successful upload
  
          // Reload the page after updating the product
          window.location.reload();
        } else {
          console.error("Failed to add images");
        }
      } else {
        console.warn("No new images selected");
      }
    } catch (error) {
      console.error("Error adding images:", error);
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
        {product.images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={`http://localhost:4000/uploads/${image}`}
              alt={`Product ${index + 1}`}
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
        {" "}
        
        <div className="flex flex-col">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
          id="addImageInput"
        />{" "}
        <label htmlFor="addImageInput" className="cursor-pointer">
          {" "}
          <div className="bg-gray-200 border-black text-center p-4 rounded-md">
            {" "}
            + Add Image{" "}
          </div>{" "}
        </label>{" "}
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
          {" "}
          Upload{" "}
        </button>
      </div>
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
              id="title"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
              onChange={(e) =>
                setProduct({ ...product, shortIntroduction: e.target.value })
              }
              value={product.shortIntroduction}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="desc" className="ulabel">
              Description
            </label>
            <textarea
              name="desc"
              className="uinput"
              id="desc"
              cols="30"
              rows="10"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <div className="rightSide">
          <div className="flex flex-col">
            <label htmlFor="price" className="ulabel">
              Price
            </label>
            <input
              type="number"
              className="uinput w-28"
              name="price"
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              value={product.price}
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
              id="quantity"
              value={product.quantity}
              onChange={(e) =>
                setProduct({ ...product, quantity: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col my-2">
            <button
              className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold mb-5"
              onClick={() => handleDelete(id)}
            >
              Delete Product
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold"
              onClick={() => handleUpdate(id)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;

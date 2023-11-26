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

  useEffect(() => {
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
          <img
            key={index}
            src={`http://localhost:4000/${image}`}
            alt={`Product ${index + 1}`}
            className="mx-auto max-h-56"
          />
        ))}
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
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
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

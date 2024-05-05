import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ring } from "ldrs";

const ManageProducts = () => {
  const cloudFrontUrl = "https://d3mrhlrrrul5h2.cloudfront.net/";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  ring.register();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_SERVER_URL + "admin/manageproducts"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return (
    <div className="mx-5 pt-8 lg:mx-20 my-12 text-udark mb-40">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">Manage Products</h2>
        <Link to="/admin/addproduct">
          <button className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold">
            Add Product
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
          products.map((product, index) => (
            <div key={index} className="product flex my-4">
              <img
                src={cloudFrontUrl + product.images[0]}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="details mx-10 space-y-1">
                <div className="text-lg font-bold">{product.name}</div>
                <div className="font-semibold">${product.price}</div>
                <Link to={`/admin/productedit/${product._id}`}>
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

export default ManageProducts;

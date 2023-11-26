import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/admin/manageproducts"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
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
        {products.map((product) => (
          <div key={product.id} className="product flex my-4">
            <img
              src={`http://localhost:4000/${product.images[0]}`}
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
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;

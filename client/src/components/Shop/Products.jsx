import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { ring } from "ldrs";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("default");
  ring.register();

  useEffect(() => {
    // Fetch products from your server
    axios
      .get("http://localhost:4000/shop")
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Function to perform sorting based on the selected option
  const sortProducts = (products) => {
    switch (sortOption) {
      case "price-lowtohigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-hightolow":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products);

  return (
    <section className="mx-5 md:mx-20 py-10">
      <div className="headingsContainer flex justify-between space-y-2 my-10 text-udark">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold">Our Products</h2>
          <p className="text-sm">
            Explore our wide range of innovative plant care products.
          </p>
        </div>
        <div>
          <select
            name="sort"
            id=""
            className="bg-ubg px-2 py-1 border border-solid border-udark focus:outline-none "
            onChange={handleSortChange}
          >
            <option value="default">Default</option>
            <option value="price-lowtohigh">Price: Low to High</option>
            <option value="price-hightolow">Price: High to Low</option>
          </select>
        </div>
      </div>
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
        <div className="cardContainer grid grid-cols-2 gap-8 lg:grid-cols-3 mb-24">
          {sortedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;

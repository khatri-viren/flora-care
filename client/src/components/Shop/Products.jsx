import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your server
    axios
      .get("http://localhost:4000/shop")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="mx-5 md:mx-20 py-10">
      <div className="headingsContainer flex flex-col space-y-2 my-10 text-udark">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <p className="text-sm">
          Explore our wide range of innovative plant care products.
        </p>
      </div>
      <div className="cardContainer grid grid-cols-2 gap-8 lg:grid-cols-3 mb-24">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;

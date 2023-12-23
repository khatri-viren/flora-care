/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCart } from "../../store/CartContext";
import { useState } from "react";
// import { useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  const [isTruncated, setIsTruncated] = useState(true);
  const [inStock, setInStock] = useState(true);
  const maxChars = 100;

  const cloudFrontUrl = "https://d3mrhlrrrul5h2.cloudfront.net/";

  if (product.quantity === 0) return setInStock(false);

  // useEffect(() => {
  //   console.log("Updated Cart:", cart);
  // }, [cart]);

  const handleAddToCart = () => {
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      // If the product is already in the cart, increment the quantity
      addToCart({ ...existingProduct, quantity: existingProduct.quantity + 1 });
      toast.success("Product added successfully", { className: "toast" });
    } else {
      // If the product is not in the cart, add it with quantity 1
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        images: product.images,
        quantity: 1,
      });
      toast.success("Product added successfully", { className: "toast" });
    }
  };

  const truncatedText = isTruncated
    ? product.shortIntroduction.slice(0, maxChars) + "..."
    : product.shortIntroduction;

  return (
    <motion.div
      className="w-fit space-y-1 mx-auto my-5"
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Link to={`/productpage/${product._id}`}>
        <img
          src={cloudFrontUrl + product.images[0]}
          alt={product.name}
          className="w-full  aspect-square shadow-md "
        />
      </Link>
      <div className="content flex justify-between px-1">
        <Link to={`/productpage/${product._id}`}>
          <span className="text-lg font-semibold">{product.name}</span>
        </Link>
        <span className="text-lg font-semibold">₹{product.price}</span>
      </div>
      <div
        className="text-sm font-light px-1"
        onClick={() => setIsTruncated(!isTruncated)}
      >
        {truncatedText}
      </div>
      <button
        className="border border-udark p-2 w-full"
        onClick={handleAddToCart}
        disabled={!inStock}
      >
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </motion.div>
  );
};

export default ProductCard;

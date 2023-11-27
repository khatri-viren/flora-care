/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCart } from "../../store/CartContext";
// import { useEffect } from "react";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  // useEffect(() => {
  //   console.log("Updated Cart:", cart);
  // }, [cart]);

  const handleAddToCart = () => {
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      // If the product is already in the cart, increment the quantity
      addToCart({ ...existingProduct, quantity: existingProduct.quantity + 1 });
    } else {
      // If the product is not in the cart, add it with quantity 1
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        images: product.images,
        quantity: 1,
      });
    }
  };

  return (
    <div className="w-fit space-y-1 mx-auto my-5">
      <Link to={`/productpage/${product._id}`}>
        <img
          src={"http://localhost:4000/uploads/" + product.images[0]}
          alt={product.name}
          className="w-full  aspect-square shadow-md "
        />
      </Link>
      <div className="content flex justify-between px-1">
        <Link to={`/productpage/${product._id}`}>
          <span className="text-lg font-semibold">{product.name}</span>
        </Link>
        <span className="text-lg font-semibold">${product.price}</span>
      </div>
      <div className="text-sm font-light px-1">{product.shortIntroduction}</div>
      <button
        className="border border-udark p-2 w-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

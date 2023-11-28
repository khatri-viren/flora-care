/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import FillButton from "../shared/Buttons/FillButton";
import { useEffect, useState } from "react";
import { useCart } from "../../store/CartContext.jsx";

const ProductHeader = ({
  id,
  name,
  images,
  price,
  shortIntro,
  reviews,
  quantity,
}) => {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [inStock, setInStock] = useState(true);

  if (quantity === 0) return setInStock(false);

  const handleThumbnailClick = (img) => {
    setSelectedImg(img);
  };

  const { addToCart, cart } = useCart();
  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  const handleAddToCart = () => {
    const existingProduct = cart.find((item) => item._id === id);

    if (existingProduct) {
      // If the product is already in the cart, increment the quantity
      addToCart({ ...existingProduct, quantity: existingProduct.quantity + 1 });
    } else {
      // If the product is not in the cart, add it with quantity 1
      addToCart({ id, name, price, images, quantity: 1 });
    }
  };

  return (
    <section className="mx-5 md:mx-20 my-12">
      <div className="breadcrumbs flex space-x-1 text-sm pt-5">
        <span>Home</span>
        <svg
          className="my-auto"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 3.5L11 8.5L6 13.5" stroke="black" strokeWidth="1.5" />
        </svg>
        <span>Shop</span>
        <svg
          className="my-auto"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 3.5L11 8.5L6 13.5" stroke="black" strokeWidth="1.5" />
        </svg>
        <span>{name}</span>
      </div>
      <div className="main my-5 grid md:grid-cols-2">
        <div className="leftSide flex space-x-2 mx-auto mb-5">
          <div className="w-32 h-96 flex-col space-y-3">
            {images.map((img, index) => (
              <img
                key={index}
                className="h-20 hover:cursor-pointer"
                src={"http://localhost:4000/uploads/" + img}
                alt={`Product ${index + 1}`}
                onClick={() => handleThumbnailClick(img)}
              />
            ))}
          </div>
          <div className="h-fit">
            <img
              className="w-3/4 md:w-11/12"
              src={"http://localhost:4000/uploads/" + selectedImg}
              alt={name}
            />
          </div>
        </div>
        <div className="rightSide">
          <h1 className="productName text-4xl font-bold my-1">{name}</h1>
          <h2 className="productName text-2xl font-bold my-4">₹{price}</h2>
          <div className="stars flex space-x-2 my-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="my-auto"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z"
                  fill="#343829"
                />
              </svg>
            ))}
            <div>
              ({reviews.average} stars) • {reviews.count} reviews
            </div>
          </div>
          <p className="shortDesc my-4">{shortIntro}</p>
          <button
            className="p-2 bg-udark w-32 h-12 text-ubg"
            onClick={handleAddToCart}
            disabled={!inStock}
          >
            {inStock ? "Add to Cart" : "Out of Stock"}
          </button>
          <hr className="border border-solid border-umedium mt-8 mb-3" />
          <div className="shipping font-semibold ">Shipping</div>
          <p className="font-light text-sm my-2">
            We offer free shipping on all orders
          </p>
          <hr className="border border-solid border-umedium mt-8 mb-3" />
          <div className="returns font-semibold ">Returns</div>
          <p className="font-light text-sm my-2">
            If you're not satisfied with your purchase, we offer hassle-free
            returns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHeader;

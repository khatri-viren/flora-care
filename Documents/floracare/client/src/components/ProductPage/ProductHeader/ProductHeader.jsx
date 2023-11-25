import React, { useState, useEffect } from 'react';
import FillButton from "../../shared/Buttons/FillButton";
import { useParams } from 'react-router-dom';

const ProductHeader = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/productpage/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Add proper loading state or error handling
  }

  const { name, images, price, shortIntroduction, description, reviews, quantity } = product;

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
          <div className="w-20 h-96 flex-col space-y-3">
            {images.map((img, index) => (
              <img key={index} className="h-20" src={'http://localhost:4000/'+img} alt={`Product ${index + 1}`} />
            ))}
          </div>
          <div className="h-fit">
            <img
              className="w-3/4 md:w-11/12"
              src={'http://localhost:4000/'+images[0]}
              alt={name}
            />
          </div>
        </div>
        <div className="rightSide">
          <h1 className="productName text-4xl font-bold my-1">{name}</h1>
          <h2 className="productName text-2xl font-bold my-4">${price}</h2>
          <div className="stars flex space-x-2 my-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="my-auto"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Path for filled star ... */}
              </svg>
            ))}
            <div>({reviews.average} stars) • {reviews.count} reviews</div>
          </div>
          <p className="shortDesc my-4">{shortIntroduction}</p>
          <FillButton title="Add to Cart" />
          <hr className="border border-solid border-umedium mt-8 mb-3" />
          <div className="shipping font-semibold">Shipping</div>
          <p className="font-light text-sm my-2">We offer free shipping on all orders</p>
          <hr className="border border-solid border-umedium mt-8 mb-3" />
          <div className="returns font-semibold">Returns</div>
          <p className="font-light text-sm my-2">If you're not satisfied with your purchase, we offer hassle-free returns.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductHeader;

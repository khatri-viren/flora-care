import React from "react";
import ProductCard from "../components/Cart/ProductCard";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="text-udark lg:mx-20 mx-5 my-12 pt-8 ">
      <h1 className="text-4xl font-bold">Your Cart</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="leftSide col-span-2">
          <hr className="border border-solid border-umedium my-3" />
          <div className="productsContainer">
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </div>
        </div>
        <div className="rightSide lg:mx-5 mx-auto lg:mb-48">
          <div className="container border-[3px] border-solid border-ulight">
            <div className="flex flex-col p-3 my-3">
            <h2 className="text-3xl font-semibold mx-auto">Subtotal</h2>
            <div className="text-2xl  mx-auto my-4">$1200</div>
          <hr className="border-[0.5px] border-solid border-umedium my-3" />
                <label htmlFor="addComments" className="mb-2">Additional Comments:</label>
                <textarea name="addComments" id="addComments" cols="30" rows="5" className="bg-ubg border border-solid border-umedium"></textarea>
                <button className="px-3 py-2 bg-ulight mt-5"><Link to="/payship" className="font-semibold">Proceed</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

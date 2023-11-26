/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="w-fit space-y-1 mx-auto my-5">
      <Link to={`/productpage/${product._id}`}>
        <img
          src={"http://localhost:4000/" + product.images[0]}
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
      <button className="border border-udark p-2 w-full">Add to Cart</button>
    </div>
  );
};

export default ProductCard;

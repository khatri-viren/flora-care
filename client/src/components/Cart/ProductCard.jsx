/* eslint-disable react/prop-types */
const ProductCard = ({ key, name, price, quantity, image }) => {
  return (
    <div className="product flex my-4" key={key}>
      <img
        src={import.meta.env.VITE_SERVER_URL + image}
        alt=""
        className="w-24 h-24"
      />
      <div className="details mx-5 space-y-1">
        <div className="text-lg font-bold">{name}</div>
        <div className="font-semibold">${price * quantity}</div>
        <div>Quantity: {quantity}</div>
      </div>
    </div>
  );
};

export default ProductCard;

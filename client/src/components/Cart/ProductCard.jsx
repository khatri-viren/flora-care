/* eslint-disable react/prop-types */
const ProductCard = ({ key, name, price, quantity, image }) => {
  return (
    <div className="product flex my-4" key={key}>
      <img
        src={"https://flora-care-server.vercel.app/" + image}
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

// import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext.jsx";
import axios from "axios";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleClick = async () => {
    console.log(cart);
    let user = {};
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.log("Token not found");
        return;
      }
      // Attach the token to the request headers
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const response = await axios.get(
        "http://localhost:4000/auth/local/getuser"
      );
      // Assuming the server sends the user details in the response data
      user = response.data;
      // Update the user context with the fetched data
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle the error (e.g., redirect to login page)
    }
    console.log(user._id);

    axios
      .post("http://localhost:4000/api/stripe/create-checkout-session", {
        cart,
        userID: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          localStorage.removeItem("cart");
          clearCart();
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="text-udark lg:mx-20 mx-5 my-12 pt-8 ">
      <h1 className="text-4xl font-bold">Your Cart</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="leftSide col-span-2">
          <hr className="border border-solid border-umedium my-3" />
          <div className="productsContainer">
            {cart.length === 0 ? (
              <p className="text-center">No Products Added</p>
            ) : (
              cart.map((item) => (
                <div
                  className="product flex justify-between my-4"
                  key={item.id}
                >
                  <div className="flex">
                    <img
                      src={"http://localhost:4000/uploads/" + item.images[1]}
                      alt=""
                      className="w-24 h-24"
                    />
                    <div className="details mx-5 space-y-1">
                      <div className="text-lg font-bold">{item.name}</div>
                      <div className="font-semibold">
                        ₹{item.price * item.quantity}
                      </div>
                      <div>Quantity: {item.quantity}</div>
                    </div>
                  </div>
                  <button
                    className="p-2 border border-solid h-fit my-auto border-udark"
                    onClick={removeFromCart}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="rightSide lg:mx-5 mx-auto lg:mb-48">
          <div className="container border-[3px] border-solid border-ulight">
            <div className="flex flex-col p-3 my-3">
              <h2 className="text-3xl font-semibold mx-auto">Subtotal</h2>
              <div className="text-2xl  mx-auto my-4">₹{subtotal}</div>
              <hr className="border-[0.5px] border-solid border-umedium my-3" />
              <label htmlFor="addComments" className="mb-2">
                Additional Comments:
              </label>
              <textarea
                name="addComments"
                id="addComments"
                cols="30"
                rows="5"
                className="bg-ubg border border-solid border-umedium"
              ></textarea>
              <button
                className="px-3 py-2 bg-ulight mt-5"
                onClick={handleClick}
              >
                {/* <Link to="/payship" className="font-semibold"> */}
                Proceed
                {/* </Link> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import axios from "axios";

import { useEffect, useState } from "react";
import { useUser } from "../store/UserContext";
import { ring } from "ldrs";
import axios from "axios";
import { toast } from "react-toastify";

const PaymentShipping = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    // Check if all input fields have values
    const allInputsFilled = Array.from(
      document.querySelectorAll(".uinput")
    ).every((input) => input.value.trim() !== "");

    // Update the state based on the check
    setIsFormValid(allInputsFilled);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic goes here
    // Only proceed if the form is valid
    if (isFormValid) {
      // Your form submission logic
      console.log("Form submitted");
    } else {
      console.log("Please fill in all the required fields.");
    }
  };

  const { user, updateUser } = useUser();
  const [loading, setLoading] = useState(true);
  ring.register();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          toast.error("Token not found");
          return;
        }
        // Attach the token to the request headers
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await axios.get(
          "http://localhost:4000/auth/local/getuser"
        );
        // Assuming the server sends the user details in the response data
        const userData = response.data;
        // Update the user context with the fetched data
        updateUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Error fetching user data", { className: "toast" });
        // Handle the error (e.g., redirect to login page)
      } finally {
        // Set loading to false, indicating that the data has been fetched
        setLoading(false);
        handleInputChange();
      }
    };
    // Call the fetchUserData function
    fetchUserData();
  }, [updateUser]); // Only re-run the effect if updateUser changes

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <l-ring
          size="40"
          stroke="5"
          bg-opacity="0"
          speed="2"
          color="black"
        ></l-ring>
      </div>
    );
  }

  return (
    <div className="mx-5 pt-8 lg:mx-20 my-12 text-udark flex flex-col">
      <h2 className="text-3xl font-semibold mb-8">Your Shipping Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="addressContainer grid grid-cols-2">
          <div className="inputContainer flex flex-col mx-5 ">
            <label className="ulabel" htmlFor="firstName">
              First Name
            </label>
            <input
              value={user.firstname}
              onChange={handleInputChange}
              className="uinput"
              type="text"
              name="firstName"
              id=""
            />
          </div>
          <div className="inputContainer flex flex-col mx-5">
            <label className="ulabel" htmlFor="lastName">
              Last Name
            </label>
            <input
              value={user.lastname}
              onChange={handleInputChange}
              className="uinput"
              type="text"
              name="lastName"
              id=""
            />
          </div>
          <div className="inputContainer flex flex-col mx-5">
            <label className="ulabel" htmlFor="email">
              Email
            </label>
            <input
              value={user.email}
              onChange={handleInputChange}
              className="uinput"
              type="email"
              name="email"
              id=""
            />
          </div>
          <div className="inputContainer flex flex-col mx-5">
            <label className="ulabel" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              value={user.profile.phoneno}
              onChange={handleInputChange}
              className="uinput"
              type="number"
              name="phoneNumber"
              id=""
            />
          </div>
          <div className="inputContainer flex flex-col mx-5 col-span-2">
            <label className="ulabel" htmlFor="address1">
              Address Line 1
            </label>
            <input
              value={user.address.addressline1}
              onChange={handleInputChange}
              className="uinput"
              type="text"
              name="address1"
              id=""
            />
          </div>
          <div className="inputContainer flex flex-col mx-5 col-span-2">
            <label className="ulabel" htmlFor="address2">
              Address Line 2
            </label>
            <input
              value={user.address.addressline2}
              onChange={handleInputChange}
              className="uinput"
              type="text"
              name="address2"
              id=""
            />
          </div>
          <div className="inputContainer flex flex-col mx-5">
            <label className="ulabel" htmlFor="city">
              City
            </label>
            <input
              value={user.address.city}
              onChange={handleInputChange}
              className="uinput"
              type="text"
              name="city"
              id=""
            />
          </div>
          <div className="inputContainer flex flex-col mx-5">
            <label className="ulabel" htmlFor="pincode">
              Pincode
            </label>
            <input
              value={user.address.pincode}
              onChange={handleInputChange}
              className="uinput"
              type="number"
              name="pincode"
              id=""
            />
          </div>
        </div>
        {/* <h2 className="text-3xl font-semibold my-8">Payment Method</h2> */}
        <div className="flex">
          <button
            type="submit"
            className="py-3 px-10 mt-12 border border-solid border-udark mx-auto font-semibold disabled:line-through"
            disabled={!isFormValid}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentShipping;

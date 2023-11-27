import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { useUser } from "../../store/UserContext.jsx";

export default function EditProfile() {
  const { user, updateUser } = useUser();
  const [loading, setLoading] = useState(true);

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
      }
    };
    // Call the fetchUserData function
    fetchUserData();
  }, [updateUser]); // Only re-run the effect if updateUser changes

  if (loading) {
    return <p>Loading user data...</p>;
  }

  return (
    <section className="text-udark">
      <hr className="border border-solid border-umedium my-3" />
      <h2 className="text-2xl font-semibold">Edit Profile</h2>
      <div className="grid grid-cols-3 gap-x-8 gap-y-2 my-5">
        <div className="flex flex-col">
          <label htmlFor="title" className="ulabel">
            First Name
          </label>
          <input
            type="text"
            className="uinput"
            name="firstname"
            id=""
            value={user.firstname}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="ulabel">
            Last Name
          </label>
          <input
            type="text"
            className="uinput"
            name="lastname"
            id=""
            value={user.lastname}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="ulabel">
            Email
          </label>
          <input
            type="text"
            className="uinput"
            name="email"
            id=""
            disabled
            value={user.email}
          />
        </div>
        <div className=" flex flex-col col-span-2">
          <label className="ulabel" htmlFor="address1">
            Address Line 1
          </label>
          <input className="uinput" type="text" name="address1" id="" />
        </div>
        <div className=" flex flex-col">
          <label className="ulabel" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input className="uinput" type="number" name="phoneNumber" id="" />
        </div>
        <div className=" flex flex-col col-span-2">
          <label className="ulabel" htmlFor="address2">
            Address Line 2
          </label>
          <input className="uinput" type="text" name="address2" id="" />
        </div>
        <div className=" flex flex-col">
          <label className="ulabel" htmlFor="city">
            City
          </label>
          <input className="uinput" type="text" name="city" id="" />
        </div>
        <div className=" flex flex-col">
          <label className="ulabel" htmlFor="pincode">
            Pincode
          </label>
          <input className="uinput" type="number" name="pincode" id="" />
        </div>
      </div>
      <button className="py-2 px-6 w-fit h-12 text-udark border-udark border-2 hover:text-umedium ">
        Update
      </button>
    </section>
  );
}

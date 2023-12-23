/* eslint-disable react/prop-types */
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import EditProfile from "../components/UserDashboard/EditProfile";
import UserInfo from "../components/UserDashboard/UserInfo.jsx";
import UserOrders from "../components/UserDashboard/UserOrders";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../store/UserContext.jsx";
import { ring } from "ldrs";

const UserDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("edit");
  const { user, updateUser, setIsLoggedIn } = useUser();
  const [loading, setLoading] = useState(true);
  ring.register();

  const navigate = useNavigate();

  const handleLogout = () => {
    updateUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("authToken");
    delete axios.defaults.headers.common["Authorization"];
    navigate("/");
  };

  const handleSectionSelection = (section) => {
    setSelectedSection(section);
  };

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
          "https://flora-care-server.vercel.app/auth/local/getuser"
        );
        // Assuming the server sends the user details in the response data
        const userData = response.data;
        // Update the user context with the fetched data
        updateUser(userData);
        setIsLoggedIn(true);
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
  }, []); // Only re-run the effect if updateUser changes

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
    <div className="bg-ubg text-udark lg:mx-20 mx-5 pb-12 pt-20">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <hr className="border border-solid border-umedium my-3" />
      <div className="userInfo grid grid-cols-1 md:grid-cols-2 my-auto font-medium m-5">
        <div className="flex">
          <div className="leftSide col-span-1">
            {/* <img
              src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="  "
              className="profileImage rounded-full p-5 w-40"
            /> */}
          </div>
          <div className="rightSide flex flex-col col-span-1 my-auto space-y-2">
            <div className="text-lg font-semibold">
              Name:{"  "}
              <span className="font-normal">
                {user.firstname + " " + user.lastname}
              </span>
            </div>
            <div className="text-lg font-semibold">
              Email: <span className="font-normal">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="rightSide my-auto w-full flex flex-col md:flex-row space-y-2 md:space-y-0 justify-evenly">
          {user.role === "admin" && (
            <Link to="/admin/dashboard">
              <button className="py-2 px-6 w-fit h-12  text-udark border-udark border-2 hover:text-umedium hover:cursor-pointer ">
                Admin
              </button>
            </Link>
          )}
          <button
            onClick={() => handleSectionSelection("data")}
            className="py-2 px-6 w-fit h-12  text-udark border-udark border-2 hover:text-umedium hover:cursor-pointer "
          >
            Device Data
          </button>
          <button
            onClick={() => handleSectionSelection("orders")}
            className="py-2 px-6 w-fit h-12  text-udark border-udark border-2 hover:text-umedium hover:cursor-pointer "
          >
            Your Orders
          </button>
          <button
            onClick={() => handleSectionSelection("edit")}
            className="py-2 px-6 w-fit h-12  text-udark border-udark border-2 hover:text-umedium hover:cursor-pointer "
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="py-2 px-6 w-fit h-12  text-udark border-udark border-2 hover:text-umedium hover:cursor-pointer "
          >
            Logout
          </button>
        </div>
      </div>
      {selectedSection === "edit" && <EditProfile user={user} />}
      {selectedSection === "orders" && <UserOrders userId={user._id} />}
      {selectedSection === "data" && <UserInfo />}
    </div>
  );
};

export default UserDashboard;

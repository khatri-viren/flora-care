import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditProfile from "../components/UserDashboard/EditProfile";
import { useState } from "react";
import UserOrders from "../components/UserDashboard/UserOrders";

const UserDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("edit");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    delete axios.defaults.headers.common["Authorization"];
    navigate("/");
  };

  const handleSectionSelection = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="bg-ubg text-udark lg:mx-20 mx-5 pb-12 pt-20">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <hr className="border border-solid border-umedium my-3" />
      <div className="userInfo grid grid-cols-2 my-auto font-medium m-5">
        <div className="flex">
          <div className="leftSide col-span-1">
            <img
              src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="  "
              className="profileImage rounded-full p-5 w-40"
            />
          </div>
          <div className="rightSide flex flex-col col-span-1 my-auto space-y-2">
            <span className="text-lg">Viren Khatri</span>
            <span className="text-lg">vk102002@gmail.com</span>
            <span>+911234567890</span>
          </div>
        </div>
        <div className="rightSide my-auto w-full flex justify-evenly">
          <button
            onClick={() => handleSectionSelection("data")}
            className="py-2 px-6 w-fit h-12  text-udark border-udark border-2 hover:text-umedium "
          >
            Device Data
          </button>
          <button
            onClick={() => handleSectionSelection("orders")}
            className="py-2 px-6 w-fit h-12  text-udark border-udark border-2 hover:text-umedium "
          >
            Your Orders
          </button>
          <button
            onClick={() => handleSectionSelection("edit")}
            className="py-2 px-6 w-fit h-12  text-udark border-udark border-2 hover:text-umedium "
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="py-2 px-6 w-fit h-12  text-udark border-udark border-2 hover:text-umedium "
          >
            Logout
          </button>
        </div>
      </div>
      {selectedSection === "edit" && <EditProfile />}
      {selectedSection === "orders" && <UserOrders />}
      {selectedSection === "data" && <EditProfile />}
    </div>
  );
};

export default UserDashboard;

/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import DashboardOrders from "../../components/admin/DashboardOrders";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../store/UserContext";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user, isLoggedIn } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://flora-care-server.vercel.app/admin/orders`
        );
        setOrders(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, []);

  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(
          `https://flora-care-server.vercel.app/admin/usercount`
        );
        setUserCount(response.data.userCount);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchUserCount();
  }, []);

  const totalSales = orders.reduce(
    (total, order) => total + order.total / 100,
    0
  );

  // Calculate today's sales
  const today = new Date().toLocaleDateString();
  const todaysSales = orders
    .filter((order) => new Date(order.createdAt).toLocaleDateString() === today)
    .reduce((total, order) => total + order.total / 100, 0);

  return (
    <div className="mx-5 lg:mx-20 pt-8 my-12 text-udark mb-96">
      <h2 className="text-4xl font-bold my-5">Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Link
          className="p-10 border-[2px] border-solid border-udark text-center font-bold text-xl"
          to="/admin/manageproducts"
        >
          Manage Products
        </Link>
        <Link
          className="p-10 border-[2px] border-solid border-udark text-center font-bold text-xl"
          to="/admin/manageblogs"
        >
          Manage Blog
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-5 ">
        <DashboardOrders orders={orders} />
        <div className="grid grid-cols-2 gap-5 grid-rows-2 h-fit ">
          <div className="w-full h-fit py-5 flex px-5 justify-center space-x-3 border-2 border-solid border-udark col-span-2">
            <h4 className="text-2xl font-bold ">Today's Sales:</h4>
            <div className="text-xl my-auto">₹{todaysSales}</div>
          </div>
          <div className="w-full h-fit py-2 px-5 space-y-2 border-2 border-solid border-udark">
            <h4 className="text-2xl font-bold ">Total Sales</h4>
            <div className="text-xl ">₹{totalSales}</div>
          </div>
          <div className="w-full h-fit py-2 px-5 space-y-2 border-2 border-solid border-udark">
            <h4 className="text-2xl font-bold ">Total Customers</h4>
            <div className="text-xl ">{userCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

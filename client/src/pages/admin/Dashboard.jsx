import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mx-5 lg:mx-20 pt-8 my-12 text-udark mb-96">
      <h2 className="text-4xl font-bold my-5">Dashboard</h2>
      <div className="grid grid-cols-2 gap-10">
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
    </div>
  );
};

export default Dashboard;

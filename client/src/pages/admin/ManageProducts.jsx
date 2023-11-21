import React from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  return (
    <div className="mx-5 pt-8 lg:mx-20 my-12 text-udark mb-40">
      <div className="flex justify-between">
      <h2 className="text-4xl font-bold">Manage Products</h2>
      <Link to="/admin/addproduct" ><button className="py-2 px-4 bg-ubg border border-solid border-udark font-semibold">Add Product</button></Link>
      </div>
      <hr className="border border-solid border-udark my-5" />
      <div className="container">
        <div className="product flex my-4">
          <img src="https://placehold.co/100x100" alt="" />
          <div className="details mx-10 space-y-1">
            <div className="text-lg font-bold">Product Name</div>
            <div className="font-semibold">$55</div>
            <Link to="/admin/productedit/1">
              <button className="py-1 px-5 font-semibold border border-solid border-udark">
                Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="product flex my-4">
          <img src="https://placehold.co/100x100" alt="" />
          <div className="details mx-10 space-y-1">
            <div className="text-lg font-bold">Product Name</div>
            <div className="font-semibold">$55</div>
            <Link to="/admin/productedit/1">
              <button className="py-1 px-5 font-semibold border border-solid border-udark">
                Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="product flex my-4">
          <img src="https://placehold.co/100x100" alt="" />
          <div className="details mx-10 space-y-1">
            <div className="text-lg font-bold">Product Name</div>
            <div className="font-semibold">$55</div>
            <Link to="/admin/productedit/1">
              <button className="py-1 px-5 font-semibold border border-solid border-udark">
                Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="product flex my-4">
          <img src="https://placehold.co/100x100" alt="" />
          <div className="details mx-10 space-y-1">
            <div className="text-lg font-bold">Product Name</div>
            <div className="font-semibold">$55</div>
            <Link to="/admin/productedit/1">
              <button className="py-1 px-5 font-semibold border border-solid border-udark">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;

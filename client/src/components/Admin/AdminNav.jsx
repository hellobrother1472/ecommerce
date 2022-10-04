import React from "react";
import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <div className="flex justify-between p-3 px-6 items-center bg-gradient-to-r from-black to-blue-900 shadow-lg">

      <div className="">
        <h1 className="text-2xl font-semibold text-white p-1">Admin Panel</h1>
      </div>

      <div>
        <ul className="flex space-x-5 items-center">
          <li className="p-2 text-white cursor-pointer hover:text-red-500 hover:scale-110 transition delay-75">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 text-white cursor-pointer hover:text-red-500 hover:scale-110 transition delay-75">
            <Link to="/admin/addadmin">Add Admin</Link>
          </li>
          <li className="p-2 text-white cursor-pointer hover:text-red-500 hover:scale-110 transition delay-75">
          <Link to="/admin/addproduct">Add Product</Link>
          </li>
          <li className="p-2 text-white cursor-pointer hover:text-red-500 hover:scale-110 transition delay-75">
          <Link to="/admin">Show Products</Link>
          </li>
          <li className="p-1">
            <input
              type="text"
              className="border border-gray-400 rounded-lg p-1 outline-none"
              placeholder="Search"
            />
          </li>
        </ul>
      </div>

    </div>
  );
};

export default AdminNav;

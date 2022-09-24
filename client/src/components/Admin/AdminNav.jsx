import React from "react";

const AdminNav = () => {
  return (
    <div className="flex justify-between p-3 px-6 items-center bg-red-200">

      <div className="">
        <h1 className="text-2xl p-1">Admin Panel</h1>
      </div>

      <div>
        <ul className="flex space-x-5 items-center">
          <li className="p-2 cursor-pointer hover:text-red-500 hover:scale-110 transition delay-75">
            Add Admin
          </li>
          <li className="p-2 cursor-pointer hover:text-red-500 hover:scale-110 transition delay-75">
            Add Product
          </li>
          <li className="p-2 cursor-pointer hover:text-red-500 hover:scale-110 transition delay-75">
            Show Products
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

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const searchClick = () => {
    setSearch((prev) => {
      return !prev;
    });
  };
  return (
    <div className="flex justify-between p-3">
      {/* This is for logo */}
      <div className="logo self-center ml-8">
        <h1 className="text-4xl font-extrabold">Logo</h1>
      </div>

      {/* This is for navbar options */}
      <div className="options self-center mt-2">
        <ul className="flex space-x-10 px-5 py-3">
          <li className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110">
            Home
          </li>
          <li className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110">
            Categories
          </li>
          <li className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110">
            SignUp
          </li>
          <li className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110">
            SignIn
          </li>
          <li className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110">
            Contact
          </li>
          <li>
            <input
              type="text"
              className={
                search
                  ? "transition duration-700 border rounded-lg px-2 border-black"
                  : "w-0"
              }
              translate
              placeholder="Search"
            />
          </li>
          <li
            className="transition duration-200 my-1 hover:text-red-600 hover:cursor-pointer hover:scale-110"
            onClick={searchClick}
          >
            <BsSearch />
          </li>
          <li className="transition duration-200 my-1 hover:text-red-600 hover:cursor-pointer hover:scale-110">
            <BsFillCartFill />
          </li>
        </ul>
      </div>

      {/* Hidden info which shows itself after login */}
      <div className="info self-center hidden">
        <div className="bg-black rounded-full h-10 w-10"></div>
      </div>
    </div>
  );
};

export default Navbar;

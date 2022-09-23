import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const SignUp = () => {
  return (
    <div
      className="h-[91vh] pt-2 bg-cover bg-top"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/fashion-industry-clothing-design-new-apparel-collection-selection-bright-clothes-hanging-rack_279525-6727.jpg?w=1060")`,
      }}
    >
      <div className=" mx-auto mdm:w-3/4 mdtlg:w-1/2 lg:w-[35%]">
        {/* Logo */}
        <div className="logo">
          <h1 className="font-extrabold text-5xl text-center">Logo</h1>
        </div>

        {/* Box */}
        <div className="box bg-white mt-8 shadow-2xl mx-5 rounded-2xl">
          {/* Top Sentence */}
          <div className="text-center px-5 py-2 pt-3 space-y-2 mb-2">
            <h1 className="font-extrabold text-3xl">Sign Up</h1>
            <h2>
              Already have an account?{" "}
              <a href="https://google.com" className="text-blue-500">
                Sign In
              </a>
            </h2>
          </div>
          <div className="mx-auto rounded-lg h-1 bg-red-500 w-1/2"></div>

          {/* Form */}
          <div className="p-5 vsmm:px-2">
            <form className="flex flex-col p-4 space-y-5 items-center smm:p-0">
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <FaUserAlt className="text-red-500" />
                <input
                  type="text"
                  className="w-full focus:outline-none"
                  placeholder="Name"
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <MdEmail className="text-red-500" />
                <input
                  type="email"
                  className="w-full focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <BsFillTelephoneFill className="text-red-500" />
                <input
                  type="phone"
                  className="w-full focus:outline-none"
                  placeholder="Number"
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <RiLockPasswordFill className="text-red-500" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <RiLockPasswordFill className="text-red-500" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Confirm Password"
                />
              </div>
              <button
                className="bg-red-500 rounded-md h-12 w-2/3 text-xl text-white hover:bg-red-600 font-bold drop-shadow-lg hover:drop-shadow-2xl"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";

const AdminLogin = () => {
  return (
    <div
      className="mt-0 0 h-[100vh] pt-14 bg-cover"
      style={{
        backgroundImage: `url("http://www.cgpbrasil.com/viverbem/wp-content/plugins/admin-custom-login/images/3d-background.jpg")`,
      }}
    >
      <div className="mx-auto mdm:w-3/4 mdtlg:w-1/2 lg:w-[30%] ">
        
        {/* Box */}
        <div className="box mt-8 mx-5 rounded-2xl">
          {/* Top Sentence */}
          <div className="text-center px-5 py-2 pt-8 space-y-3">
            <h1 className="font-extrabold text-3xl text-white">Admin's Login</h1>
          </div>
          <div className="mx-auto rounded-lg h-1 bg-red-500 w-1/2"></div>
          {/* Form */}
          <div className="p-5 vsmm:px-2">
            <form className="flex flex-col p-4 space-y-7 items-center smm:p-0" autoComplete="off">
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 bg-white">
                <MdEmail className="text-red-500" />
                <input
                  type="email"
                  className="w-full focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2  bg-white">
                <RiLockPasswordFill className="text-red-500" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2  bg-white">
                <FaUserSecret className="text-red-500" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Admin's Secret Code"
                />
              </div>
              <button
                className="bg-red-500 rounded-md h-12 w-2/3 text-xl text-white hover:bg-red-600 font-bold drop-shadow-lg hover:drop-shadow-2xl"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

import React from "react";

const SignUp = () => {
  return (
    <div className="my-10">
      <div className="mx-auto mdm:w-3/4 mdtlg:w-1/2 lg:w-[30%]">
        {/* Logo */}
        <div className="logo">
          <h1 className="font-extrabold text-5xl text-center">Logo</h1>
        </div>

        {/* Box */}
        <div className="box mt-8 shadow-2xl mx-5 rounded-md">
          {/* Top Sentence */}
          <div className="text-center px-5 py-2 pt-3 space-y-3">
            <h1 className="font-extrabold text-3xl">Sign Up</h1>
            <h2>
              Already have an account?{" "}
              <a href="https://google.com" className="text-blue-500">
                Sign In
              </a>
            </h2>
          </div>

          {/* Form */}
          <div className="p-5 vsmm:px-2">
            <form className="flex flex-col p-4 space-y-7 items-center smm:p-0">
              <input
                type="text"
                className="w-full h-8 p-2 py-5 border border-black rounded-md focus:outline-none focus:ring ring-red-400 ring-offset"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full h-8 p-2 py-5 border border-black rounded-md focus:outline-none focus:ring ring-red-400 ring-offset"
                placeholder="Email"
              />
              <input
                type="phone"
                className="w-full h-8 p-2 py-5 border border-black rounded-md focus:outline-none focus:ring ring-red-400 ring-offset"
                placeholder="Number"
              />
              <input
                type="password"
                className="w-full h-8 p-2 py-5 border border-black rounded-md focus:outline-none focus:ring ring-red-400 ring-offset"
                placeholder="Password"
              />
              <input
                type="password"
                className="w-full h-8 p-2 py-5 border border-black rounded-md focus:outline-none focus:ring ring-red-400 ring-offset"
                placeholder="Confirm Password"
              />
              <button
                className="bg-green-500 rounded-md h-12 w-2/3 text-xl text-white hover:bg-green-600 font-bold drop-shadow-lg hover:drop-shadow-2xl"
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

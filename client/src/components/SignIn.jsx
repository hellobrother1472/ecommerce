import React from "react";

const SignIn = () => {
  return (
    <div className="mt-14">
      <div className="w-1/3 mx-auto">
        {/* Logo */}
        <div className="logo">
          <h1 className="font-extrabold text-5xl text-center">Logo</h1>
        </div>

        {/* Box */}
        <div className="box mt-8 shadow-2xl mx-5 rounded-md">
          {/* Top Sentence */}
          <div className="text-center px-5 py-2 pt-8 space-y-3">
            <h1 className="font-extrabold text-3xl">Sign In</h1>
            <h2>
              Don't have an account?{" "}
              <a href="https://google.com" className="text-blue-500">
                Sign Up
              </a>
            </h2>
          </div>

          {/* Form */}
          <div className="p-5">
            <form className="flex flex-col p-4 space-y-7 items-center">
              <input
                type="email"
                className="w-full h-8 p-4 py-5 border border-black rounded-md focus:outline-none focus:ring ring-red-400 ring-offset"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full h-8 p-4 py-5 border border-black rounded-md focus:outline-none focus:ring ring-red-400 ring-offset"
                placeholder="Password"
              />
              <button
                className="bg-green-500 rounded-md h-12 w-2/3 text-xl text-white hover:bg-green-600 font-bold drop-shadow-lg hover:drop-shadow-2xl"
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

export default SignIn;

import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", number: "", password: "", confirmPassword: "" });
  const handleChange = (e) => {
    const event = e.target.id;
    const value = e.target.value;
    setFormData({ ...formData, [event]: value });
  }

  const options = {
    position: "top-right",
    autoClose: 10000,
    pauseOnHover: true,
    draggable: false,
    theme: 'dark'
  };

  const handleValidation = () => {
    const { name, email, number, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error('Password and confirm password should be same', options);
      return false;
    }
    else if (name.length < 3) {
      toast.error('Name should be of atleast 3 in length', options);
      return false;
    }
    else if(email === ""){
      toast.error('Email cannot be blank', options);
      return false;
    }
    else if(number.length < 10 || number.length > 10){
      toast.error('Number should be of 10 digits', options);
      return false;
    }
    else if (password.length < 8) {
      toast.error('Password should be of atleast 8 in length', options);
      return false;
    }

    return true;
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if(handleValidation()){
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: formData.name, email: formData.email, number: formData.number, password: formData.password, cpassword: formData.confirmPassword })
      })
  
      const data = await response.json();
      if (response.status === 200) {
        navigate("/signin");
      }
      else {
        toast.success(data.result);
      }
    }

  }
  return (
    <div
      className="h-[90.8vh] pt-2 bg-cover bg-top"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dysuxhyd3/image/upload/v1667226415/combpro/images/fashion-industry-clothing-design-new-apparel-collection-selection-bright-clothes-hanging-rack_279525-6727_swqoig.webp")`,
      }}
    >
      <div className=" mx-auto mdm:w-full mdtlg:w-1/2 lg:w-[35%]">
        {/* Logo */}
        <div className="logo flex justify-center">
          <img
              src={
                "https://res.cloudinary.com/dysuxhyd3/image/upload/v1666791864/combpro/images/logo_kwd8c3.webp"
              }
              alt="logo"
              className="h-7 smm:h-7 smm:w-20"
            />
        </div>

        {/* Box */}
        <div className="box bg-white mt-8 shadow-2xl mx-5 rounded-2xl">
          {/* Top Sentence */}
          <div className="text-center px-5 py-2 pt-3 space-y-2 mb-2">
            <h1 className="font-extrabold text-3xl">Sign Up</h1>
            <h2>
              Already have an account?{" "}
              <Link to="/signin">
                <span className="text-blue-500"> Sign In </span>
              </Link>
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
                  onChange={handleChange}
                  id="name"
                  value={formData.name}
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <MdEmail className="text-red-500" />
                <input
                  type="email"
                  className="w-full focus:outline-none"
                  placeholder="Email"
                  onChange={handleChange}
                  id="email"
                  value={formData.email}
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <BsFillTelephoneFill className="text-red-500" />
                <input
                  type="phone"
                  className="w-full focus:outline-none"
                  placeholder="Number"
                  onChange={handleChange}
                  id="number"
                  value={formData.number}
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <RiLockPasswordFill className="text-red-500" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Password"
                  onChange={handleChange}
                  id="password"
                  value={formData.password}
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <RiLockPasswordFill className="text-red-500" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                />
              </div>
              <button
                className="bg-red-500 rounded-md h-12 w-2/3 text-xl text-white hover:bg-red-600 font-bold drop-shadow-lg hover:drop-shadow-2xl"
                type="submit"
                onClick={handleClick}
              >
                Sign Up
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

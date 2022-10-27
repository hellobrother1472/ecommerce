import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import {BsFillTelephoneFill} from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Contact = () => {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const options = {
    position: "top-right",
    autoClose: 10000,
    pauseOnHover: true,
    draggable: false,
    theme: 'dark'
  };
  let userInfo = useSelector((state) => {return state.userLoginStatusReducer.user});  
  useEffect(() => {
    if(userInfo){
      setUserData(userInfo);
    }
  }, [userInfo])

  const handleValidation = () => {
    const {name, email, message} = userData;

    if (name.length < 3) {
      toast.error('Name should be of atleast 3 in length', options);
      return false;
    }
    else if(email === ""){
      toast.error('Email cannot be blank', options);
      return false;
    }
    else if (message.length < 4) {
      toast.error('Message should be of atleast 4 in length', options);
      return false;
    }

    return true;
  }

  const onChangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.id;
    setUserData({ ...userData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    if(handleValidation()){
      const response = await fetch('http://localhost:5000/admin/contact', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const data = await response.json();
    }
  };

  return (
    <div className="bg-gray-100 p-4 h-[92vh]  overflow-y-scroll">
        <div className="container mx-auto my-auto justify-between flex w-10/12 smm:w-full p-2 pt-5">
          {/* This is for the contact details */}
          <div className="contactDetail flex justify-between w-full space-x-6 smm:flex-col smm:space-x-0">
            <div className="pPhone flex items-center p-3 px-3 bg-white shadow-md w-1/3 smm:w-full smtmd:p-2 smtmd:px-1">
              <div className="font-bold ml-3 smtmd:ml-2">
                <BsFillTelephoneFill className="text-red-500"/>
              </div>
              <div className="px-7 w-full smtmd:px-4">
                <h1 className="text-lg font-bold ">Phone</h1>
                <h1 className="text-sm">+91 123 456 7890</h1>
              </div>
            </div>
            <div className="pEmail flex items-center p-3 px-3 bg-white shadow-md w-1/3 smm:w-full smtmd:p-2 smtmd:px-1">
              <div className="font-bold ml-3 smtmd:ml-2">
                <MdEmail className="text-red-500"/>
              </div>
              <div className="px-7 w-full smtmd:px-4">
                <h1 className="text-lg font-bold">Email</h1>
                <h1 className="text-sm">combpro1@gmail.com</h1>
              </div>
            </div>
            <div className="pAddress flex items-center p-3 px-3 bg-white shadow-md w-1/3 smm:w-full smtmd:p-2 smtmd:px-1">
              <div className="font-bold ml-3 smtmd:ml-2">
                <FaAddressCard className="text-red-500"/>
              </div>
              <div className="px-7 w-full smtmd:px-4">
                <h1 className="text-lg font-bold">Address</h1>
                <h1 className="text-sm">Delhi, India</h1>
              </div>
            </div>
          </div>
        </div>

        {/* This is for the message taken from the user */}
        <div className="getMessage bg-white container w-1/2 flex flex-col mx-auto p-8 pb-10 mt-8 mb-8 space-y-3 shadow-2xl lgm:w-full smm:shadow-none rounded-md">
          <div className="p-3 mdm:items-center mdm:justify-center">
            <h1 className="text-3xl font-extrabold mdm:w-fit mdm:mx-auto">
              Get in Touch
            </h1>
          </div>
          <form action="" method="post">
            <div className="flex justify-between w-full space-x-6 p-2 px-4 mdm:flex-col mdm:space-x-0 mdm:space-y-4">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="placeholder:text-lg w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none mdm:w-full"
                value={userData.name}
                onChange={onChangeHandler}
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="placeholder:text-lg w-1/2 border border-gray-300 rounded-md p-3 focus:outline-none mdm:w-full"
                value={userData.email}
                onChange={onChangeHandler}
              />
            </div>
            <div className="p-3">
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Message"
                className="w-full p-3 placeholder:text-lg border border-gray-300 rounded-md focus:outline-none"
                onChange={onChangeHandler}
                value={userData.message}
              ></textarea>
            </div>

            <div className="p-2 px-4 flex">
              <button
                className="bg-red-500 rounded-md h-12 text-xl text-white hover:bg-red-600 font-bold drop-shadow-lg hover:drop-shadow-2xl w-1/3 mdm:p-1 mdm:mx-auto lgm:mx-auto mdm:w-2/3"
                onClick={postData}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
    </div>
  );
};

export default Contact;

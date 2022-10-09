import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import {BsFillTelephoneFill} from 'react-icons/bs';

const Contact = () => {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.id;
    setUserData({ ...userData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    alert("Message Sent Successfully");
    setUserData({ ...userData, message: "" });
  };

  return (
    <div className="bg-gray-300 h-[91vh]">
        <div className="container mx-auto my-auto justify-between flex w-10/12 p-2 pt-5">
          {/* This is for the contact details */}
          <div className="contactDetail flex justify-between w-full space-x-6 smm:flex-col smm:space-x-0">
            <div className="pPhone flex items-center p-3 px-3 bg-white shadow-md w-1/3 smm:w-full smtmd:p-2 smtmd:px-1">
              <div className="font-bold ml-3 smtmd:ml-2">
                <BsFillTelephoneFill className="text-red-500"/>
              </div>
              <div className="px-7 w-full smtmd:px-4">
                <h1 className="text-lg font-bold ">Phone</h1>
                <h1 className="text-sm">123456789</h1>
              </div>
            </div>
            <div className="pEmail flex items-center p-3 px-3 bg-white shadow-md w-1/3 smm:w-full smtmd:p-2 smtmd:px-1">
              <div className="font-bold ml-3 smtmd:ml-2">
                <MdEmail className="text-red-500"/>
              </div>
              <div className="px-7 w-full smtmd:px-4">
                <h1 className="text-lg font-bold">Email</h1>
                <h1 className="text-sm">abc@gmail.com</h1>
              </div>
            </div>
            <div className="pAddress flex items-center p-3 px-3 bg-white shadow-md w-1/3 smm:w-full smtmd:p-2 smtmd:px-1">
              <div className="font-bold ml-3 smtmd:ml-2">
                <FaAddressCard className="text-red-500"/>
              </div>
              <div className="px-7 w-full smtmd:px-4">
                <h1 className="text-lg font-bold">Address</h1>
                <h1 className="text-sm">City, State, Country</h1>
              </div>
            </div>
          </div>
        </div>

        {/* This is for the message taken from the user */}
        <div className="getMessage container w-1/2 flex flex-col mx-auto p-8 pb-10 mt-8 mb-8 space-y-3 shadow-2xl lgm:w-full  smm:shadow-none bg-white">
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
                className="placeholder:text-lg w-1/3 border border-gray-300 rounded-md p-3 focus:outline-none mdm:w-full"
                value={userData.name}
                onChange={onChangeHandler}
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="placeholder:text-lg w-1/3 border border-gray-300 rounded-md p-3 focus:outline-none mdm:w-full"
                value={userData.email}
                onChange={onChangeHandler}
              />
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="placeholder:text-lg w-1/3 border border-gray-300 rounded-md p-3 focus:outline-none mdm:w-full"
                value={userData.phone}
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
                className="bg-red-500 rounded-md h-12 text-xl text-white hover:bg-red-600 font-bold drop-shadow-lg hover:drop-shadow-2xl w-1/3 mdm:p-2 mdm:mx-auto lgm:mx-auto mdm:w-2/3"
                onClick={postData}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Contact;

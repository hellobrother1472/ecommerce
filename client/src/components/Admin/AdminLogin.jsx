import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../states/actions/adminLoginAction";
import { useDispatch } from "react-redux";

const AdminLogin = () => {
  const dispatchAdminLogin = useDispatch();
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    email: '',
    password: '',
    secret: ''
  })

  const verifyAcess = async () => {
    try {
      const res = await fetch("/api/admin/auth/acessAuth", {
        method: "GET",
        credentials: "include",
      });
      if (res.status !== 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyAcess();
  }, []);

  const handleChange = (e) => {
    setAdmin({...admin, [e.target.name]: e.target.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/admin/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email: admin.email,password: admin.password, secret: admin.secret})
    })
    const data = await response.json();
    if(response.status === 200){
      dispatchAdminLogin(adminLogin());
      navigate("/admin");
    }
  }

  return (
    <div
      className="mt-0 0 h-[100vh] pt-14 bg-cover"
      style={{
        backgroundImage: `url(${'https://res.cloudinary.com/dysuxhyd3/image/upload/v1666791864/combpro/images/adminBackground_nod6nv.webp'})`,
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
            <form className="flex flex-col p-4 space-y-7 items-center smm:p-0" autoComplete="off" onSubmit={handleSubmit}>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 bg-white">
                <MdEmail className="text-red-500" />
                <input
                  type="email"
                  className="w-full focus:outline-none"
                  placeholder="Email" name="email" value={admin.email} onChange={handleChange}
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2  bg-white">
                <RiLockPasswordFill className="text-red-500" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Password" name="password" value={admin.password} onChange={handleChange}
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2  bg-white">
                <FaUserSecret className="text-red-500" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Admin's Secret Code" name='secret' value={admin.secret} onChange={handleChange}
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

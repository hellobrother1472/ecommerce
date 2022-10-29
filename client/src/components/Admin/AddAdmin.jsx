import React,{useState} from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const AddAdmin = () => {
  const [input,setInput] = useState({name:'', email:'', password:'', secret:''});

  const options = {
    position: "top-right",
    autoClose: 10000,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
  };

  const onChangeHandler = (e)=>{
    const n = e.target.id;
    const val = e.target.value;
    setInput({...input,[n]:val});
  }

  const postData = async()=>{
    const res = await fetch("http://localhost:5000/api/admin/auth/addAdmin",{
      method:'POST',
      credentials:'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name: input.name, email: input.email ,password: input.password, secret: input.secret })
    })

    if(res.status === 200){
      toast.success("Admin has been added succesfully.",options)
    }
    else{
      toast.error("Try again", options);
    }
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    postData();
  }
  
  return (
      <div
        className="mt-0 0 h-[91.3vh] pt-14 bg-cover"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dysuxhyd3/image/upload/v1666791864/combpro/images/adminBackground_nod6nv.webp')`,
        }}
      >
        <div className="mx-auto mdm:w-3/4 mdtlg:w-1/2 lg:w-[30%] ">
          {/* Box */}
          <div className="box mt-8 mx-5 rounded-2xl">
            {/* Top Sentence */}
            <div className="text-center px-5 py-2 pt-8 space-y-3">
              <h1 className="font-extrabold text-3xl text-white">
                Add Admin 🛅
              </h1>
            </div>
            <div className="mx-auto rounded-lg h-1 bg-red-500 w-1/2"></div>
            {/* Form */}
            <div className="p-5 vsmm:px-2">
              <form
                className="flex flex-col p-4 space-y-7 items-center smm:p-0"
                autoComplete="off"
              >
                <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 bg-white">
                  <RiAdminFill className="text-red-500" />
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    placeholder="Name"
                    id="name"
                    value={input.name}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 bg-white">
                  <MdEmail className="text-red-500" />
                  <input
                    type="email"
                    className="w-full focus:outline-none"
                    placeholder="Email"
                    id="email"
                    value={input.email}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2  bg-white">
                  <RiLockPasswordFill className="text-red-500" />
                  <input
                    type="password"
                    className="w-full focus:outline-none"
                    placeholder="Password"
                    id="password"
                    value={input.password}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2  bg-white">
                  <FaUserSecret className="text-red-500" />
                  <input
                    type="password"
                    className="w-full focus:outline-none"
                    placeholder="Admin's Secret Code"
                    id="secret"
                    value={input.secret}
                    onChange={onChangeHandler}
                  />
                </div>
                <button
                  className="bg-red-500 rounded-md h-12 w-2/3 text-xl text-white hover:bg-red-600 font-bold drop-shadow-lg hover:drop-shadow-2xl"
                  type="submit"
                  onClick={onSubmit}
                >
                  Add Admin
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
  );
};

export default AddAdmin;

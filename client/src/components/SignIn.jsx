import React,{useState} from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const SignIn = () => {

  const [login,setLogin] = useState({email:"",password:""});
  const handleChange = (e)=>{
    const event = e.target.id;
    const value = e.target.value;
    setLogin({...login,[event]:value});
  }
  const handleClick = async(e)=>{
    e.preventDefault();
    const response = await fetch('/api/auth/login',{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({email:login.email,password:login.password})
    })

    const data = await response.json();
    console.log(data);
    console.log(myState);
    if(response.status === 200){
      console.log("succesfully loggedin");
    
    }
    else{
      console.log(data.result);
    }

  }
  return (
    <div
      className="mt-0 0 h-[91vh] pt-14 bg-cover"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/fashion-industry-clothing-design-new-apparel-collection-selection-bright-clothes-hanging-rack_279525-6727.jpg?w=1060")`,
      }}
    >
      <div className="mx-auto mdm:w-3/4 mdtlg:w-1/2 lg:w-[30%]">
        {/* Logo */}
        <div className="logo">
          <h1 className="font-extrabold text-5xl text-center">Logo</h1>
        </div>

        {/* Box */}
        <div className="box mt-8 shadow-2xl mx-5 rounded-2xl bg-white">
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
          <div className="mx-auto rounded-lg h-1 bg-red-500 w-1/2"></div>
          {/* Form */}
          <div className="p-5 vsmm:px-2">
            <form className="flex flex-col p-4 space-y-7 items-center smm:p-0">
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <MdEmail className="text-red-500" />
                <input
                  type="email"
                  className="w-full focus:outline-none"
                  placeholder="Email"
                  id="email"
                  value={login.email}
                  onChange = {handleChange}
                />
              </div>
              <div className="flex items-center w-full p-2 space-x-5 border shadow-md border-black border-opacity-30 rounded-3xl smm:space-x-2 ">
                <RiLockPasswordFill className="text-red-500" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Password"
                  id="password"
                  value={login.password}
                  onChange = {handleChange}
                />
              </div>
              <button
                className="bg-red-500 rounded-md h-12 w-2/3 text-xl text-white hover:bg-red-600 font-bold drop-shadow-lg hover:drop-shadow-2xl"
                type="submit"
                onClick={handleClick}
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
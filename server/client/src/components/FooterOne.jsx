import React,{useState} from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FooterOne = () => {
  
  let [subscribe, setSubscribe] = useState({
    email: "",
    from: "Subscribe"
  });

  const onChangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.id;
    setSubscribe({ ...subscribe, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
      const sendData = {...subscribe,from:"Subscribe",name:"User",message:"Subscribe Request"}
      const response = await fetch("/admin/contact", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(sendData),
      });
      if(response.status === 200){
        toast.success("Subscribe request sent.")
        setSubscribe({ ...subscribe, email: "" });
      }
      // const data = await response.json();
  };
  return (
    <div className="md:px-12">
      {/* Second box */}
      <div className="flex p-3 py-5 space-x-3 mdm:block mdm:space-y-4 mdm:space-x-0">
        {/* First */}
        <div className="space-y-6 p-2 px-3 w-4/12 mdm:w-full mdm:flex mdm:flex-col mdm:justify-center mdm:items-center">
          <div>
            <Link to="/"><img src={'https://res.cloudinary.com/dysuxhyd3/image/upload/v1666791864/combpro/images/logo_kwd8c3.webp'} alt="logo" className="h-7 " /></Link>
            {/* <h1 className="text-4xl font-extrabold  mdm:text-center">Logo</h1> */}
          </div>
          <div>
            <ul className="space-y-3  smm:ml-0 smtmd:ml-10">
              <li>
                <span className="font-semibold">ADDRESS:</span> Delhi,
                India
              </li>
              <li>
                <span className="font-semibold">TELEPHONE:</span> +91 123 456 7890
              </li>
              <li>
                <span className="font-semibold">EMAIL:</span> combpro1@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Second */}
        <div className="space-y-7 p-2 px-3 w-2/12 mdm:w-full">
          <div>
            <h1 className="text-xl font-bold  text-center">MENU</h1>
          </div>
          <div>
            <ul className="space-y-2">
              <Link to = '/'><li className="cursor-pointer text-center">Home</li></Link>
              <Link to = '/contact'><li className="cursor-pointer text-center mt-2">About</li></Link>
              <AnchorLink href='#carousel'><li className="cursor-pointer text-center mt-2">Service</li></AnchorLink>
              <AnchorLink href='#testimonial'><li className="cursor-pointer text-center mt-2">Testimonial</li></AnchorLink>
              <Link to = '/contact'><li className="cursor-pointer text-center mt-2">Contact</li></Link>
            </ul>
          </div>
        </div>

        {/* Third */}
        <div className="space-y-7 p-2 px-3 w-2/12 mdm:w-full">
          <div>
            <h1 className="text-xl font-bold  text-center">HELP</h1>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="cursor-pointer text-center">Payments</li>
              <li className="cursor-pointer text-center">Shipping</li>
              <Link to = '/myprofile'><li className="cursor-pointer text-center mt-2">My Profile</li></Link>
              <Link to = '/faq'><li className="cursor-pointer text-center mt-2">FAQ</li></Link>
              
            </ul>
          </div>
        </div>

        <div className="space-y-7 p-2 px-3 w-2/12 mdm:w-full">
          <div>
            <h1 className="text-xl font-bold  text-center">ACCOUNT</h1>
          </div>
          <div>
            <ul className="space-y-2">
              <a href="https://github.com/Combpro/ecommerce"><li className="cursor-pointer text-center">Github</li></a>
            </ul>
          </div>
        </div>

        {/* Fourth */}
        <div className="space-y-7 p-2 px-5 w-4/12 mdm:w-full">
          <div>
            <h1 className="text-xl font-bold  text-center">NEWSLETTER</h1>
          </div>
          <div className="space-y-10">
            <h1 className=" mdm:text-center">Subscribe by our newsletter and get update protidin.</h1>
            <div className="flex w-full">
                <input className="border border-black text-sm h-10 w-2/3 p-2 lgm:w-1/2" placeholder="Enter the Mail" type="email" id="email" onChange={onChangeHandler} />
                <button onClick={postData} className="bg-red-500 h-10 w-1/3 p-2 text-xs text-white lgm:w-1/2 ">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default FooterOne;

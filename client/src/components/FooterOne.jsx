import React from "react";

const FooterOne = () => {
  return (
    <div className="md:px-12">
      {/* Second box */}
      <div className="flex p-3 space-x-3 mdm:block mdm:space-y-4 mdm:space-x-0">
        {/* First */}
        <div className="space-y-6 p-2 px-3 w-4/12 mdm:w-full">
          <div>
            <h1 className="text-4xl font-extrabold  mdm:text-center">Logo</h1>
          </div>
          <div>
            <ul className="space-y-3  smm:ml-0 smtmd:ml-10">
              <li>
                <span className="font-semibold">ADDRESS:</span> 28 White tower,
                Street Name New York City, USA
              </li>
              <li>
                <span className="font-semibold">TELEPHONE:</span> +91 987 654
                3210
              </li>
              <li>
                <span className="font-semibold">EMAIL:</span> yourmain@gmail.com
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
              <li className="cursor-pointer text-center">Home</li>
              <li className="cursor-pointer text-center">About</li>
              <li className="cursor-pointer text-center">Service</li>
              <li className="cursor-pointer text-center">Testimonial</li>
              <li className="cursor-pointer text-center">Contact</li>
            </ul>
          </div>
        </div>

        {/* Third */}
        <div className="space-y-7 p-2 px-3 w-2/12 mdm:w-full">
          <div>
            <h1 className="text-xl font-bold  text-center">ACCOUNT</h1>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="cursor-pointer text-center">Home</li>
              <li className="cursor-pointer text-center">About</li>
              <li className="cursor-pointer text-center">Service</li>
              <li className="cursor-pointer text-center">Testimonial</li>
              <li className="cursor-pointer text-center">Contact</li>
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
                <input className="border border-black text-sm h-10 w-2/3 p-2 lgm:w-1/2" placeholder="Enter the Mail" type="text" />
                <button className="bg-red-500 h-10 w-1/3 p-2 text-xs text-white lgm:w-1/2 ">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;

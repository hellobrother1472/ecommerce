import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="w-full" id="allProducts">
      <div className="product-heading flex flex-col justify-center items-center">
        <div className="bg-gray-500 mdm:text-2xl md:text-4xl font-semibold w-20 h-8 text-royal-blue animate-pulse">
        </div>
        <hr className="border-black" />
      </div>

      <div className="item flex h-full items-center justify-center mt-6">
        <div className="info w-[98%] mb-8 animate-pulse">
          <div className="product p-2 flex flex-col md:px-20">
            <div className="product-image relative">
              <div className="w-full h-72 rounded-md bg-gray-500" ></div>
            </div>
            <div className="product-desc pt-6 flex items-center gap-20 smm:gap-10">
              <div className="bg-gray-500 text-xl smm:text-sm font-semibold w-16 h-6"></div>
              <div className="bg-gray-500 w-20 h-6 flex smm:text-sm">
              </div>
            </div>

            <div className="product-price text-gray-500 bg-gray-500 mt-1">
              ₹price/-
            </div>
          </div>
        </div>
        <div className="info w-[98%] mb-8 animate-pulse smm:hidden">
          <div className="product p-2 flex flex-col md:px-20">
            <div className="product-image relative">
              <div className="w-full h-72 rounded-md bg-gray-500" ></div>
            </div>
            <div className="product-desc pt-6 flex items-center gap-20 smm:gap-10">
              <div className="bg-gray-500 text-xl smm:text-sm font-semibold w-16 h-6"></div>
              <div className="bg-gray-500 w-20 h-6 flex smm:text-sm">
              </div>
            </div>

            <div className="product-price text-gray-500 bg-gray-500 mt-1">
              ₹price/-
            </div>
          </div>
        </div>
        <div className="info w-[98%] mb-8 animate-pulse mdm:hidden">
          <div className="product p-2 flex flex-col md:px-20">
            <div className="product-image relative">
              <div className="w-full h-72 rounded-md bg-gray-500" ></div>
            </div>
            <div className="product-desc pt-6 flex items-center gap-20 smm:gap-10">
              <div className="bg-gray-500 text-xl smm:text-sm font-semibold w-16 h-6"></div>
              <div className="bg-gray-500 w-20 h-6 flex smm:text-sm">
              </div>
            </div>

            <div className="product-price text-gray-500 bg-gray-500 mt-1">
              ₹price/-
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;

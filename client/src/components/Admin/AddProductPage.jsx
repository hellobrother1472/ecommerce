import React from "react";

const AddProductPage = () => {
  return (
    <div className="h-[90vh] p-2">
      <div className="flex flex-col w-1/2 mx-auto space-x-5 items-center space-y-5 p-4">
        <h1 className="text-center text-4xl font-bold">Add Product</h1>

        <form className="w-5/6 space-y-4 items-center justify-center">
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Name:</h1>
            <input type="text" className="p-2 w-full border border-gray-400 rounded-lg outline-none" id="name" />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Description:</h1>
            <textarea type="text" className="p-2 h-40 w-full border border-gray-400 rounded-lg outline-none" id="description" />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Specification:</h1>
            <input type="text" className="p-2 w-full border border-gray-400 rounded-lg outline-none" id="specification" />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Price:</h1>
            <input type="number" min={1} className="p-2 w-full border border-gray-400 rounded-lg outline-none" id="price" />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Category Name:</h1>
            <input type="text" className="p-2 w-full border border-gray-400 rounded-lg outline-none" id="categoryName" />
          </div>
          <div className="flex">
            <h1 className="inline font-semibold w-40 p-2">Product Image:</h1>
            <input type="file" className="p-2" id="productImage" />
            <button className="bg-green-400 p-2 rounded-md hover:bg-green-500">Submit Image</button> 
          </div>
          <div className="text-center">
            <button className="bg-green-400 p-4 w-1/2 rounded-full hover:bg-green-500">Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;

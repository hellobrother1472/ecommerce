import React from "react";

const AddProductPage = () => {
  return (
    <div className="h-[100vh] ">
      <div className="flex flex-col w-1/2 mx-auto space-x-5 items-center">
        <h1 className="text-center text-4xl font-bold">Add Product</h1>

        <form className="w-3/4">
          <div className="flex">
            <h1 className="inline w-40 p-2">Name:</h1>
            <input type="text" className="p-2 border" id="name" />
          </div>
          <div className="flex">
            <h1 className="inline w-40 p-2">Description:</h1>
            <input type="text" className="p-2 border" id="description" />
          </div>
          <div className="flex">
            <h1 className="inline w-40 p-2">Specification:</h1>
            <input type="text" className="p-2 border" id="specification" />
          </div>
          <div className="flex">
            <h1 className="inline w-40 p-2">Price:</h1>
            <input type="text" className="p-2 border" id="price" />
          </div>
          <div className="flex">
            <h1 className="inline w-40 p-2">Category Name:</h1>
            <input type="text" className="p-2 border" id="categoryName" />
          </div>
          <div className="flex">
            <h1 className="inline w-40 p-2">Product Image:</h1>
            <input type="file" className="p-2 border" id="productImage" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
